# -*- coding: utf-8 -*-
import json

with open('story_extracted.json', 'r', encoding='utf-8') as f:
    story = json.load(f)

CHAR_NAMES_I18N = {
    "vi": { "hana": "Sakura Hana", "yuki": "Aoki Yuki", "rin": "Tachibana Rin", "narrator": "Dẫn Chuyện", "player": "Bạn" },
    "en": { "hana": "Sakura Hana", "yuki": "Aoki Yuki", "rin": "Tachibana Rin", "narrator": "Narrator", "player": "You" },
    "ja": { "hana": "桜 華", "yuki": "青木 雪", "rin": "橘 凛", "narrator": "ナレーション", "player": "あなた" }
}

CHAPTERS_TRANS = {
    "intro": {
        "en": {"title": "CHAPTER I", "subtitle": "Spring Awakening"},
        "ja": {"title": "第一章", "subtitle": "春の目覚め"}
    },
    "ch2_milestone": {
        "en": {"title": "CHAPTER II", "subtitle": "School Life Rhythm"},
        "ja": {"title": "第二章", "subtitle": "学園の鼓動"}
    },
    "ch3_milestone": {
        "en": {"title": "CHAPTER III", "subtitle": "Hanazono Culture Festival"},
        "ja": {"title": "第三章", "subtitle": "花園文化祭"}
    },
    "ch4_milestone": {
        "en": {"title": "CHAPTER IV", "subtitle": "Promise Under Cherry Blossoms"},
        "ja": {"title": "第四章", "subtitle": "桜吹雪の約束"}
    }
}

ENDINGS_TRANS = {
    "ending_hana_good": {
        "en": {
            "title": "True Ending: Cherry Blossom Miracle",
            "desc": "Under a brilliant blizzard of spring cherry blossoms, Sakura Hana sobs tears of sheer joy as she embraces you. Her radiant smile will accompany you through sparkling years of youth, banishing the loneliness of the past forever."
        },
        "ja": {
            "title": "True Ending: 桜の奇跡",
            "desc": "満開の桜吹雪が舞う春の空の下、桜華は涙を浮かべながらあなたに抱きついた。彼女の眩しい笑顔は、孤独だった日々を優しく溶かし、二人で歩む輝かしい青春の始まりを告げていた。"
        }
    },
    "ending_hana_normal": {
        "en": {
            "title": "Normal Ending: Best Seatmate Forever",
            "desc": "Hana smiles gently with a hint of bittersweet fondness. As lifelong best seatmates, you share every lunch, every lesson, and every youthful memory together through high school."
        },
        "ja": {
            "title": "Normal Ending: 最高の隣席",
            "desc": "華は少し寂しそうに、それでも優しく微笑んだ。二人はかけがえのない親友として、お弁当を分け合いながら穏やかな青春の思い出を紡ぎ続ける。"
        }
    },
    "ending_yuki_good": {
        "en": {
            "title": "True Ending: Twilight Snow Symphony",
            "desc": "Apost the breezy rooftop in purple twilight, Yuki tightly grasps your hand. A pure, serene smile blossoms on her lips like fresh snow. From this day forward, she will never watch the sky alone again."
        },
        "ja": {
            "title": "True Ending: 黄昏の白雪ソナタ",
            "desc": "紫紺に染まる黄昏の屋上で、雪はあなたの手を固く握りしめた。初雪のように純粋な微笑みがその唇に咲く。もう彼女が一人きりで空を見上げることはない。あなたが彼女の温かい居場所なのだから。"
        }
    },
    "ending_yuki_normal": {
        "en": {
            "title": "Normal Ending: Rooftop Soulmates",
            "desc": "Gazing at the distant galaxy, Yuki smiles in quiet peace. You remain eternal rooftop soulmates, sharing silence and unspoken thoughts above the bustling world below."
        },
        "ja": {
            "title": "Normal Ending: 屋上の知己",
            "desc": "遠い銀河を見つめながら、雪は静かに微笑んだ。騒がしい日常を離れ、風吹く屋上で言葉なくとも心を通わせる唯一無二の知己として絆を深めていく。"
        }
    },
    "ending_rin_good": {
        "en": {
            "title": "True Ending: The President's Shy Heart",
            "desc": "In the warm sunset glow of the student council room, Rin buries her burning cheeks into your chest. Her sharp tsundere armor dissolves entirely, replaced by honest, tender devotion."
        },
        "ja": {
            "title": "True Ending: 会長の素直な心",
            "desc": "夕日に包まれた生徒会室で、凛は赤くなった顔をあなたの胸にうずめた。ツンデレな仮面は完全に剥がれ落ち、素直で温かい愛が二人の心を結んでいた。"
        }
    },
    "ending_rin_normal": {
        "en": {
            "title": "Normal Ending: The Reliable Right Hand",
            "desc": "Rin pats your shoulder with proud trust. You become the most indispensable vice-partner of the student council, tackling every school event side-by-side with boundless energy."
        },
        "ja": {
            "title": "Normal Ending: 頼れる右腕",
            "desc": "凛は誇らしげに、そして信頼を込めてあなたの肩を叩いた。生徒会の頼れる右腕として、二人は共に学校を導く最高のパートナーとなった。"
        }
    },
    "ending_harem": {
        "en": {
            "title": "Special Ending: Garden of Youth",
            "desc": "Without choosing just one, you preserve the radiant bond of all four friends. Together with Hana, Yuki, and Rin, your high school days at Hanazono become an unforgettable paradise."
        },
        "ja": {
            "title": "Special Ending: 青春の花園",
            "desc": "誰か一人を選ぶことなく、四人の温かい友情を選んだ。華、雪、凛と共に過ごす花園学園の日々は、一生色褪せない輝かしい青春の宝物となった。"
        }
    },
    "ending_alone": {
        "en": {
            "title": "Sad Ending: Fallen Petals",
            "desc": "Spring draws to a quiet close, leaving a deserted path covered in fallen blossoms. You walk alone, carrying a silent sorrow for words left unsaid and hearts left unopened."
        },
        "ja": {
            "title": "Sad Ending: 散りゆく桜花",
            "desc": "桜の季節は静かに過ぎ去り、花びら散る並木道を一人歩く。心を開くことのなかったあの日の選択を胸に、かすかな後悔と共に歩み続ける。"
        }
    }
}

# Translation database
EN_DB = {}
JA_DB = {}

# We populate all nodes:
for k, v in story.items():
    EN_DB[k] = {}
    JA_DB[k] = {}
    
    if "chapter" in v:
        if k in CHAPTERS_TRANS:
            EN_DB[k]["chapter"] = CHAPTERS_TRANS[k]["en"]
            JA_DB[k]["chapter"] = CHAPTERS_TRANS[k]["ja"]
            
    if "choices" in v:
        # Choices translation template
        pass
        
    if "lines" in v:
        pass

# Let's write the complete JS file
output_js = f"""// =============================================
//  HANA NO KISEKI — STORYLINE TRANSLATIONS (EN & JA)
// =============================================

const CHAR_NAMES_I18N = {json.dumps(CHAR_NAMES_I18N, ensure_ascii=False, indent=2)};
const CHAPTERS_TRANS = {json.dumps(CHAPTERS_TRANS, ensure_ascii=False, indent=2)};
const ENDINGS_TRANS = {json.dumps(ENDINGS_TRANS, ensure_ascii=False, indent=2)};
"""

print("Initial generator script ready")
