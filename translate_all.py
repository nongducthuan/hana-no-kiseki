# -*- coding: utf-8 -*-
import json
import urllib.request
import urllib.parse
import time
import os

with open('story_extracted.json', 'r', encoding='utf-8') as f:
    story = json.load(f)

cache = {}
if os.path.exists('translations_cache.json'):
    try:
        with open('translations_cache.json', 'r', encoding='utf-8') as f:
            cache = json.load(f)
    except:
        cache = {}

def translate_text(text, target_lang):
    if not text:
        return ""
    key = f"{target_lang}::{text}"
    if key in cache:
        return cache[key]
    
    url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl={target_lang}&dt=t&q=" + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=8) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                # concatenate all sentence chunks in data[0]
                translated = "".join(chunk[0] for chunk in data[0] if chunk and chunk[0])
                cache[key] = translated
                return translated
        except Exception as e:
            time.sleep(0.5)
            
    return text # fallback to original

print(f"Translating {len(story)} nodes...")
trans_db = {"en": {}, "ja": {}}

node_keys = list(story.keys())
for i, node_id in enumerate(node_keys):
    node = story[node_id]
    trans_db["en"][node_id] = {}
    trans_db["ja"][node_id] = {}
    
    # Chapter
    if "chapter" in node:
        t_en = translate_text(node["chapter"]["title"], "en")
        s_en = translate_text(node["chapter"]["subtitle"], "en")
        t_ja = translate_text(node["chapter"]["title"], "ja")
        s_ja = translate_text(node["chapter"]["subtitle"], "ja")
        trans_db["en"][node_id]["chapter"] = {"title": t_en, "subtitle": s_en}
        trans_db["ja"][node_id]["chapter"] = {"title": t_ja, "subtitle": s_ja}
        
    # Lines
    if "lines" in node:
        en_lines = []
        ja_lines = []
        for line in node["lines"]:
            en_l = translate_text(line["text"], "en")
            ja_l = translate_text(line["text"], "ja")
            en_lines.append(en_l)
            ja_lines.append(ja_l)
        trans_db["en"][node_id]["lines"] = en_lines
        trans_db["ja"][node_id]["lines"] = ja_lines
        
    # Choices
    if "choices" in node:
        en_choices = []
        ja_choices = []
        for choice_text in node["choices"]:
            en_c = translate_text(choice_text, "en")
            ja_c = translate_text(choice_text, "ja")
            en_choices.append(en_c)
            ja_choices.append(ja_c)
        trans_db["en"][node_id]["choices"] = en_choices
        trans_db["ja"][node_id]["choices"] = ja_choices
        
    # Ending
    if "ending" in node:
        en_title = translate_text(node["ending"]["title"], "en")
        en_desc = translate_text(node["ending"]["desc"], "en")
        ja_title = translate_text(node["ending"]["title"], "ja")
        ja_desc = translate_text(node["ending"]["desc"], "ja")
        trans_db["en"][node_id]["ending"] = {"title": en_title, "desc": en_desc}
        trans_db["ja"][node_id]["ending"] = {"title": ja_title, "desc": ja_desc}
        
    if i % 10 == 0:
        print(f"Progress: {i}/{len(node_keys)} nodes translated ({len(cache)} cached strings)")
        with open('translations_cache.json', 'w', encoding='utf-8') as f:
            json.dump(cache, f, ensure_ascii=False)

# Final save
with open('translations_cache.json', 'w', encoding='utf-8') as f:
    json.dump(cache, f, ensure_ascii=False)

CHAR_NAMES_I18N = {
    "vi": { "hana": "Sakura Hana", "yuki": "Aoki Yuki", "rin": "Tachibana Rin", "narrator": "Dẫn Chuyện", "player": "Bạn" },
    "en": { "hana": "Sakura Hana", "yuki": "Aoki Yuki", "rin": "Tachibana Rin", "narrator": "Narrator", "player": "You" },
    "ja": { "hana": "桜 華", "yuki": "青木 雪", "rin": "橘 凛", "narrator": "ナレーション", "player": "あなた" }
}

output_content = f"""// =============================================
//  HANA NO KISEKI — STORY & DIALOGUE TRANSLATIONS
//  Languages: English (EN) & Japanese (JA)
// =============================================

const CHAR_NAMES_I18N = {json.dumps(CHAR_NAMES_I18N, ensure_ascii=False, indent=2)};

const STORY_TRANSLATIONS = {json.dumps(trans_db, ensure_ascii=False, indent=2)};
"""

with open('data/story_translations.js', 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"SUCCESS! Finished translating all {len(node_keys)} nodes to data/story_translations.js")
