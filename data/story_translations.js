// =============================================
//  HANA NO KISEKI — STORY & DIALOGUE TRANSLATIONS
//  Languages: English (EN) & Japanese (JA)
// =============================================

const CHAR_NAMES_I18N = {
  "vi": {
    "hana": "Sakura Hana",
    "yuki": "Aoki Yuki",
    "rin": "Tachibana Rin",
    "narrator": "Dẫn Chuyện",
    "player": "Bạn"
  },
  "en": {
    "hana": "Sakura Hana",
    "yuki": "Aoki Yuki",
    "rin": "Tachibana Rin",
    "narrator": "Narrator",
    "player": "You"
  },
  "ja": {
    "hana": "桜 華",
    "yuki": "青木 雪",
    "rin": "橘 凛",
    "narrator": "ナレーション",
    "player": "あなた"
  }
};

const STORY_TRANSLATIONS = {
  "en": {
    "intro": {
      "chapter": {
        "title": "CHAPTER I",
        "subtitle": "Spring Start"
      },
      "lines": [
        "Gentle April morning. Class 2-B of Hanazono school is immersed in the golden sunshine like sweet honey.",
        "Outside the half-open glass window, a spring breeze blew by, carrying tens of thousands of delicate cherry blossom petals fluttering in the air.",
        "(Another new school year begins... Amidst the bustling laughter of my friends around me, I always feel there is an invisible distance.)",
        "(Will these years of youth pass quietly like blank notebook pages, or will some miracle arrive?)"
      ]
    },
    "hana_enter": {
      "lines": [
        "Wait a minute!! Please wait for me!!",
        "The classroom's sliding door opened with a hasty \"click\". A female student with pastel pink hair tied in twintails rushed in, her bag almost slipping off her shoulder.",
        "Phew... ha ha... So lucky! I almost had my name written down by the supervisor on the first day of class! Ehehe~",
        "She quickly wiped away the sweat on her forehead with the back of her hand, smiling so brightly that it made the entire classroom seem to light up.",
        "(That smile... was sparkling and unusually warm, just like the first rays of sunshine after a series of gloomy winter days.)",
        "Ah! You're... my new deskmate, right? I saw your name on the class chart taped to the door!",
        "Nice to meet you! I'm Sakura Hana! Let's help each other a lot this year~ ♪"
      ]
    },
    "choice_greet": {
      "choices": [
        "🌸 \"Hello Hana! Your bright smile lights up the whole classroom.\"",
        "😊 \"Hello, it's nice to meet you too.\"",
        "😐 \"Yes, hello. Sit down, it's almost homeroom.\""
      ]
    },
    "greet_flirt": {
      "lines": [
        "Ouch—! W-You... why did you compliment me so sweetly? It made my ears feel hot!",
        "Hana raised her two small hands to hug her rosy cheeks like ripe peaches, her round eyes sparkled with extremely adorable shyness.",
        "But... thank you so much! I was worried all night last night because I was afraid my table mate would be a difficult person to approach...",
        "Hearing you say that, I felt completely relieved! Surely this school year we will be very close ♪",
        "(Hana's clear eyes filled with joy seemed to dispel all the worries in my heart.)"
      ]
    },
    "greet_friendly": {
      "lines": [
        "So great! Having such a friendly and lovely tablemate like this will give me peace of mind for the whole year~",
        "By the way, to be honest, I'm terrible at math and logic... If there's a difficult lesson, remember to help me pass the exam!",
        "Okay, if I can help, I'll try my best.",
        "Promise! You are truly my first savior in this new school year~"
      ]
    },
    "greet_cold": {
      "lines": [
        "Ah... um, sorry... I was a bit too noisy...",
        "The bright smile on Hana's lips briefly froze for a split second, her eyes softened for a moment of indescribable loneliness before hastily covering her with another forced smile.",
        "I'll put things in order right away! I won't bother you, I promise!",
        "(The way she obediently bowed her head... it didn't seem like politeness, but a reflex of fear of being hated by others?)"
      ]
    },
    "morning_corridor": {
      "lines": [
        "The bell rang signaling the end of the first year's activities. The second floor hallway was filled with the sound of footsteps and bustling laughter.",
        "You step out onto the balcony to welcome the cool breeze with the scent of spring flowers and grass.",
        "Suddenly, the decisive sound of heels clicking on the tile floor rang out, accompanied by a strong and authoritative female voice behind..."
      ]
    },
    "rin_encounter": {
      "lines": [
        "That student over there! Stop for me right now!",
        "You turn around. Standing in front of you is a female student with bright orange hair tied in two high ponytails, eyes as sharp as a blade scanning you from head to toe.",
        "On her left sleeve, she wears a red ribbon with prominent gilded letters printed on it: \"STUDENT ASSOCIATION - HEAD OF THE DISCIPLINE COMMITTEE\".",
        "The buttons on the jacket are buttoned a notch wrong, and the name tag is askew! On the first day of the new school year, is your behavior this careless?",
        "I am Tachibana Rin, Vice President of the Student Council and manager of the entire 11th grade.",
        "Hanazono School has a long tradition of honor and absolutely does not accept any sloppy behavior that damages the school's image!"
      ]
    },
    "choice_rin_first": {
      "choices": [
        "⚡ \"Vice president Rin is always so dedicated, looks cool and adorable.\"",
        "🫡 \"Sorry Vice President! I will correct my behavior immediately.\"",
        "🙄 \"Do you have to be so serious about a button like that?\""
      ]
    },
    "rin_first_tease": {
      "lines": [
        "W-What?! A-Adorable his head! Do you have a warm head?!",
        "Rin's sharp and proud face immediately caught fire, a red streak quickly spread from her cheeks to her ears. She took a half step back confused.",
        "Stop talking and blabbering! Don't think that by using such unfounded sweet words you can bypass the disciplinary committee!",
        "L-This time I'm just taking note of the reminder... Adjust your shirt buttons right before my eyes! You undisciplined idiot!",
        "(Even though her words were somewhat harsh, the look of confusion that hid her embarrassment was surprisingly genuine.)"
      ]
    },
    "rin_first_obedient": {
      "lines": [
        "Sorry Vice President, I was so careless. I'll re-button my shirt right now.",
        "Rin was a bit stunned when she saw her friend obediently complying without a single word of argument. She cleared her throat slightly, trying to maintain a serious look.",
        "Hmmm... the attitude of admitting mistakes and making changes is good. Only those who know how to listen can progress.",
        "Remember carefully, Hanazono school is a place to build the future. Don't let the small details affect you.",
        "Rin nodded in satisfaction, carefully drawing a pencil line in the black leather notebook in her hand before turning on her heel and leaving."
      ]
    },
    "rin_first_cold": {
      "lines": [
        "Serious problem?! Do you disregard the most basic standards?",
        "Rin's eyes flashed with disappointment and bitterness, her hand holding the pen unconsciously tightened.",
        "The biggest mistakes people make always start from small things that are overlooked! If you don't maintain boundaries, everything will collapse...",
        "Rin quickly took notes in her notebook and then glared at you coldly: \"I'll keep an eye on you on the special watch list!\""
      ]
    },
    "lunch_decision": {
      "lines": [
        "Keng-koong! The bell signaling lunch break rang softly throughout the classrooms.",
        "Students from all classes began to spread out for lunch. It's time for you to choose who to spend your lunch break with.",
        "(An hour and a half lunch break... Who should I spend this time with?)"
      ]
    },
    "choice_lunch_target": {
      "choices": [
        "🌸 Stay in class: Have lunch with your deskmate Sakura Hana",
        "❄️ Go to the rooftop: Find windy quietness with Aoki Yuki",
        "⚡ Go to the Student Council room: Find Vice President Tachibana Rin"
      ]
    },
    "act_lunch_hana": {
      "lines": [
        "Ah! Don't you go to the canteen? You stayed in class for lunch?! It's so great!!",
        "As soon as she saw her friend take the lunch box out of her bag, Hana's eyes lit up. She quickly pulled her chair closer to your table.",
        "The cherry blossom colored bento towel was opened, inside were golden tamagoyaki egg rolls, rice balls decorated with bear faces and fresh vegetables.",
        "Tadaaa~! This morning I woke up at 5 am to prepare! Doesn't it look delicious?",
        "Try this egg roll! It's my family's special family recipe~"
      ]
    },
    "choice_hana_lunch_food": {
      "choices": [
        "🍱 Taste the egg rolls: \"The eggs are both soft and sweet. You're a really skillful cook, Hana!\"",
        "🥪 Share the sandwich again: \"Thank you, in return you can try the chicken sandwich I made.\""
      ]
    },
    "hana_food_praise": {
      "lines": [
        "Really... really?! Do you think it's delicious?! Wow, I'm so happy!!",
        "Hana happily clapped her hands, her smile as bright as a flower petal just bathed in a summer shower.",
        "This dish was taught to me by my grandmother when I was in elementary school! She said cooking is a way to give warmth to others...",
        "Lately, her health has gotten a lot weaker... so I want to cook delicious food myself to reassure her..."
      ]
    },
    "hana_food_share": {
      "lines": [
        "Wow! Your sandwich looks so delicious! Please give me a piece~",
        "Hana took a small bite, her chubby cheeks bulging and chewing with great pleasure.",
        "Um... so delicious! The feeling of sharing food with friends like this... is really warm.",
        "Normally at home... I have to eat alone in the spacious kitchen..."
      ]
    },
    "hana_lunch_backstory_hint": {
      "lines": [
        "Eating alone? Are your parents very busy?",
        "Hana's hand holding the chopsticks slightly paused. She looked down, her long eyelashes obscuring her gaze.",
        "My parents... both work for a multinational corporation in the US. They travel all year round... Sometimes all year long I only see them for a few days through the phone screen.",
        "Since I was little, I grew up with my grandmother. But lately her blood pressure has been going up and down erratically...",
        "Hana raised her face and tried to force a bright smile again, but her voice was choked in her throat.",
        "But I'm okay! I'm used to taking care of myself! I have friends in class, and having you at the same table like this makes me so happy!",
        "(This girl's radiant smile... turned out to be an armor protecting a small soul always afraid of loneliness.)"
      ]
    },
    "act_lunch_yuki": {
      "lines": [
        "Pushing open the heavy metal door leading to the rooftop, a gust of wind swept through your hair.",
        "In the middle of a spacious space with only the sound of the wind whistling and the soaring sky, a slender figure was standing quietly next to the rusted iron fence.",
        "The female student had shoulder-length, flowing smoky blue hair, and the skirt of her uniform fluttered slightly with each gust of wind. Her jade eyes were deep, staring at the distant white clouds.",
        "...Footstep. Is there anyone else who wants to escape the world down there?",
        "Ah... sorry if I accidentally broke your quiet space.",
        "No problem. This sky doesn't belong to just anyone... The wind here is strong enough to blow away the noise in the school yard.",
        "I'm Aoki Yuki, class 2-A."
      ]
    },
    "choice_yuki_deep": {
      "choices": [
        "🕊️ Stepping up to the railing: \"The sky is really vast, but standing alone here you look so lonely.\"",
        "🥪 Giving lunch: \"It's very cold when the wind blows this strong. Please try some of this cake with me.\""
      ]
    },
    "yuki_deep_response": {
      "lines": [
        "...Can you see through my loneliness?",
        "Yuki tilted her head slightly. Her eyes shook, like an icy lake surface that had just been stirred up by a small pebble in ripples.",
        "Everyone says I'm a weird person who likes to isolate myself... They say I'm emotionless like a stone statue.",
        "But you used the word \"lonely\". You're the first person after a year to say that to me."
      ]
    },
    "yuki_snack_response": {
      "lines": [
        "...Cake? Thank you. I forgot I hadn't eaten anything since morning.",
        "Yuki took the cake from her friend's hand. Her fingertips lightly touched your hand — cold like the first snowflakes of winter.",
        "The taste of milk is sweet and warm... It's been a long time since I've tasted the warm taste of kindness from a stranger."
      ]
    },
    "yuki_lunch_backstory_hint": {
      "lines": [
        "Do you know why I always stand at this corner of the terrace?",
        "Because this place can see the entire city?",
        "...Not. Because this place... used to be where me and the most important person promised to watch the stars together after school.",
        "Yuki tightened her grip on the iron fence, her knuckles turning white from the force. A silent pain filled his blue eyes.",
        "But now, that person is no more. I'm the only one standing here, being punished by my memories...",
        "(Punishment? Her tormented eyes contained a very heavy past wound...)",
        "...Sorry, I said some weird things. But if you don't mind... come up here and talk to me next time, okay?"
      ]
    },
    "act_lunch_rin": {
      "lines": [
        "The sound of knocking on the Student Council room's door rang out softly. You push the door open and step into a spacious room filled with golden noon sunlight.",
        "Amid the massive bookshelves and stacks of files piled as high as mountains, Tachibana Rin was sitting alone at her desk, her delicate eyebrows furrowed in tension.",
        "Who is it? I told you I don't accept applications during lunch break... Eh! Is it you again?!",
        "What are you doing here at this hour? Don't tell me you came to tease me again!",
        "Seeing the Vice President working hard since morning until now without a break, I stopped by to see if there was anything I needed to help with.",
        "H-Huh?! Need your help? I'm the Vice President! How difficult is it for me to do these little Festival organizing tasks?"
      ]
    },
    "choice_rin_help_lunch": {
      "choices": [
        "☕ Placed a can of warm peach milk tea on the table: \"No matter how great you are, you still have to eat and drink to maintain your strength, Vice President.\"",
        "📑 Roll up your sleeves and get to work: \"Let me help sort out the list of clubs to sign up for booths for you.\""
      ]
    },
    "rin_tea_accept": {
      "lines": [
        "T-Peach milk tea... the kind I drink after school?! H-How would you know?!",
        "Rin's eyes widened in surprise, her hands unconsciously embracing the warm can of tea. The warmth from the can seemed to soften even the girl's thorny appearance.",
        "D-Don't think that buying me a can of tea means I'll favor you! But... my stomach is also really hungry...",
        "Thank you... You strangely thoughtful idiot..."
      ]
    },
    "rin_work_together": {
      "lines": [
        "Hey, do you know how to classify by code? Let me see... Eh?",
        "Rin glanced in surprise at the files you had just neatly arranged into blocks and clubs, exacting every detail.",
        "You... did it carefully and much faster than I thought. Saved me almost an hour.",
        "Not bad at all. Looks like I have to reconsider your abilities."
      ]
    },
    "rin_lunch_backstory_hint": {
      "lines": [
        "While cleaning the table, your eyes accidentally touched an ebony photo frame facing down in the corner of the bookshelf.",
        "That photo frame is...",
        "Do not touch!!",
        "Rin panicked and grabbed the photo frame and hugged it tightly, her expression pale for a moment before turning fiercely defensive.",
        "That's... a thing of the past. You don't need to know and you're not allowed to ask!",
        "I must be perfect... I must carry this Student Council to the end. I will absolutely never allow the name \"Tachibana\" to be laughed at again!",
        "(Tachibana... that name seemed to carry too much weight for Rin's small shoulders.)"
      ]
    },
    "ch2_milestone": {
      "chapter": {
        "title": "CHAPTER II",
        "subtitle": "School Pulse"
      },
      "lines": [
        "A week passed as quickly as the blink of an eye in the midst of April days filled with the scent of flowers.",
        "All over the bulletin boards and hallways of Hanazono school, there are brilliant hand-drawn posters: \"Hanazono Annual Cultural Festival will officially open this weekend!\"",
        "The sound of hammers, sawing wood, and laughter rehearsing music echoed throughout every corner of the school.",
        "(School festival... This is the best opportunity for me to truly understand and bond with the person I care about.)"
      ]
    },
    "choice_festival_prep": {
      "choices": [
        "🌸 Join the cherry blossom cafe booth decoration team with Sakura Hana",
        "❄️ Go to the rooftop to help prepare the astronomy exhibition corner with Aoki Yuki",
        "⚡ Stay in the Student Council room to directly support event management with Tachibana Rin"
      ]
    },
    "ch2_prep_hana": {
      "lines": [
        "Aah! Did you really sign up for the cafe decoration group with me?! It's so much fun!!",
        "Class 2-B is bustlingly transformed into a retro-style tea and cake shop filled with cherry blossoms.",
        "Throughout the afternoon, you and Hana worked together to cut and paste pink ribbons, hang paper lanterns and paint menu signs to welcome guests.",
        "While engrossed in mixing watercolor paint, a streak of light pink paint accidentally stuck to the tip of Hana's smooth white cheek without her even realizing it.",
        "Hey Hana, stand still for a moment. Your cheek is covered in paint.",
        "You slightly leaned over, pulled out a handkerchief and gently wiped away the stains on her cheeks. The distance is so close that you can hear the other person's rapid breathing.",
        "O-Ouch... m-my heart... my heart is beating so fast... You did it so suddenly, who can help it!",
        "Hana, confused, covered her face with both hands and ran out to get more brushes, leaving you with a warm smile in her heart."
      ]
    },
    "hana_cry_discovery": {
      "lines": [
        "Late afternoon. The sunset was as red as blood pouring through rows of empty tables and chairs. All students in the class have packed up and left.",
        "You suddenly remember that you forgot your lesson notepad under your desk, so you quickly go back to class to get it.",
        "As you walked to the door of classroom 2-B, you suddenly stopped.",
        "From the back corner of the dim classroom, choked, broken sobs rang out in the quiet space.",
        "That's Hana. The girl who was always chirping like a nightingale was resting her head on the table, her hands clutching the phone tightly to her chest, her thin shoulders trembling in heart-wrenching sobs."
      ]
    },
    "choice_hana_cry": {
      "choices": [
        "🌸 Step closer, gently put your hand on her shoulder: \"Hana... You don't have to force a smile in front of me.\"",
        "🫂 Give her a handkerchief and quietly sit down next to her: \"I'm here. Cry if you want, I won't leave.\""
      ]
    },
    "hana_cry_comfort": {
      "lines": [
        "Ugh... O-Ouch?!",
        "Hana was startled, panicked and quickly wiped away the tears streaming down her cheeks, trying to force out a shaky, distorted smile.",
        "W-You're not back yet...? I-I'm fine... It's just... it's just dust in my eyes... Really...",
        "Hana, look into my eyes. Don't force yourself to smile anymore. In front of me, you have the right to be weak.",
        "Your sincere words are like a hammer blow that smashes the little girl's last solid defense wall. Tears flowed out like a broken string of pearls."
      ]
    },
    "hana_cry_stay": {
      "lines": [
        "You didn't ask too many questions, just quietly pulled out a chair and sat down next to her, gently placing the handkerchief in Hana's shaking hand.",
        "Hana looked at the handkerchief, then looked up at you with red eyes filled with tears and extreme helplessness.",
        "Why... why are you so gentle with me...?",
        "She buried her face in a handkerchief and burst into tears like a child who had lost his mother at a crossroads."
      ]
    },
    "hana_cry_revelation": {
      "lines": [
        "The doctor at the city hospital just called me...",
        "My grandmother... my grandmother suddenly fainted while going to the market... She is now in the emergency room under special observation...",
        "When my parents in the US heard the news, they just sent money back... They said they were busy with a million-dollar signing project so they couldn't fly back...",
        "Why?! What does money mean when my only relative is alone in the hospital?!",
        "I'm so scared... I'm scared that one day when I open my eyes, the house will be completely empty... I'm scared of being left alone in this world...",
        "Hana, listen to me. You are not alone. No matter what happens, I will always be by your side.",
        "Now, I will go with you to the hospital with grandma immediately. I'll hold your hand tightly, okay?",
        "Hana looked at you chokingly, then nodded vigorously. In the bright sunset, your hand clasped Hana's cold hand, giving her the confidence to face the storm."
      ]
    },
    "ch2_prep_yuki": {
      "lines": [
        "You're here... I've been standing here waiting for you all afternoon.",
        "The sunset dyed the entire school rooftop into a magical purple color. The wind blew fiercely through each iron bar.",
        "On a small folding table, a refracting telescope is cleaned to a shiny shine, next to it are meticulously hand-drawn spring star charts.",
        "This school festival... I want to set up a small corner so everyone can see the most distant constellations.",
        "Yuki gently pulled out one wired headset and shared it with you. The gentle melody of the piano song \"Clair de Lune\" rang out, mixed with the sound of the wind whistling in the middle of the sky.",
        "This is my favorite song... Thank you for always being patient by my side to listen to a boring person like me."
      ]
    },
    "yuki_miyuki_flashback": {
      "lines": [
        "The music gradually enters deep bass notes. The evening sky gradually darkened, the first stars began to sparkle and appear on the black velvet background.",
        "Yuki looked up at the brightly shining constellation Cygnus, her eyes suddenly became so melancholic.",
        "Did you know... Exactly one year ago, on the same days preparing for the school festival...",
        "I single-handedly destroyed my best friend's life."
      ]
    },
    "choice_yuki_past": {
      "choices": [
        "❄️ \"If that hurts your heart, please share it with me. I want to carry that memory with you.\"",
        "🌌 \"Every star in the sky has experienced a painful explosion... I'm always ready to listen to every hidden corner of you.\""
      ]
    },
    "yuki_past_confide": {
      "lines": [
        "...Do you want to shoulder the burden of being a sinner?",
        "Yuki's voice trembled like a string about to break. She bowed her head, her hands clutching her chest tightly.",
        "That person's name is Miyuki... We grew up together since we were born, like a shadow.",
        "That afternoon, just because of a small dispute about a festival performance... I lost my temper.",
        "I shouted at Miyuki: \"I hate you! Don't ever appear in front of me again!\""
      ]
    },
    "yuki_past_listen": {
      "lines": [
        "My hidden corner... is only filled with darkness and late regrets...",
        "Tears silently slid down Yuki's delicate cheeks, sparkling under the night stars.",
        "Miyuki... my best friend. That day, because of the cruel words I said in anger...",
        "She cried and ran through the school gate in the pouring rain..."
      ]
    },
    "yuki_past_resolve": {
      "lines": [
        "At that moment... an out-of-control truck rushed towards...",
        "The screeching sound of car brakes tearing through the rain... The sound of metal colliding... and Miyuki's scream...",
        "Even now, every time I close my eyes, I still hear that horrifying sound ringing in my ears!",
        "If I hadn't said those cruel words, Miyuki wouldn't have run away! I should have been the one who died that day!!",
        "Yuki! Look at me! It was an unexpected accident, not your fault!",
        "Miyuki certainly never wants to see the friend she loves most imprison herself in a prison of sin for the rest of her life like that!",
        "Yuki looked up at you through pale tears, her lips moving wordlessly.",
        "Do you... really believe that... I still have the qualifications to live and smile?",
        "Yes. I believe. And I will be here to help you find that smile again."
      ]
    },
    "ch2_prep_rin": {
      "lines": [
        "Late afternoon at the Student Council office. The orange-yellow sunset shines through the large glass window, stretching silent shadows.",
        "At her desk, Tachibana Rin fell asleep from exhaustion after many days of staying awake to prepare budget approval documents for all 32 clubs.",
        "Her sleeping face no longer has the usual sharpness, but looks innocent and pitifully fragile.",
        "You gently took off your blazer, gingerly stepping forward to put it on your thin shoulders that were slightly shivering in the cold wind.",
        "Um... so cold... Sister... don't leave me...",
        "Rin slightly stirred and muttered in a daze, then suddenly opened her eyes wide: \"H-Huh?! Whose shirt is this...?!\"",
        "Y-YOU?! Do you dare to see my embarrassing sleeping form?!",
        "I saw you working so hard, so I put on a coat to protect you from the cold.",
        "Hmm... a-alright! I'll forgive you for now... But... the coat is very warm, thank you..."
      ]
    },
    "rin_sister_shadow": {
      "lines": [
        "Rin pulled her friend's coat tightly around her body, her eyes absentmindedly looking out at the gradually darkening sky outside the window.",
        "Did you... hear my dream mumbling just now?",
        "You call \"sister\"... Who is your sister?",
        "Rin sighed softly, a bitter self-deprecating smile appeared on the corner of the proud girl's lips.",
        "My older sister... Tachibana Saki. The person who was once the greatest legend of this Hanazono school."
      ]
    },
    "choice_rin_sister": {
      "choices": [
        "⚡ \"Saki was once the legendary former President... but I only care about the current Rin.\"",
        "🛡️ \"It doesn't matter what people say, I see that Rin is trying her best for the honor of the whole school.\""
      ]
    },
    "rin_sister_talk": {
      "lines": [
        "Current Rin... You're the first person to say that...",
        "Rin lowered her eyes, her fingers tightening around the metal fountain pen.",
        "Saki was perfect in every way. Smart, beautiful, worshiped by teachers and friends as a goddess.",
        "I always take her as an example, yearning to receive her head pats and compliments...",
        "But then last year... a large-scale exam leak happened in the school..."
      ]
    },
    "rin_sister_admire": {
      "lines": [
        "Trying my best... But in everyone's eyes, I'm just trying to clean up my family's ashes...",
        "Rin's voice was choked, a feeling of helplessness weighed heavily on every word.",
        "Last year, when the exam cheating scandal broke out... To protect a close friend on the executive committee, Ms. Saki stepped forward and took all the blame on herself.",
        "She was expelled from school in disgrace. My parents were angry and sent her to England, forbidding her to return..."
      ]
    },
    "rin_sister_resolve": {
      "lines": [
        "Since that day, wherever I go, I hear whispers behind my back: \"That girl is the cheater's sister\"...",
        "I ran for Student Council, forcing myself to work three times harder than everyone else, not allowing myself to make even the slightest mistake...",
        "I pushed everyone away, I was bitter... because I was afraid that if I became close to someone, they would stab me in the back like they did to my sister!",
        "Rin... you are not your sister's shadow, and you are not the one to bear anyone's sins.",
        "You are Tachibana Rin, the most dedicated, brave and sincere person I have ever known. And I promise to never betray your trust.",
        "Rin turned her face away to hide the tears that had just flowed out, her shoulders shaking slightly.",
        "D-You idiot... Who gave you permission to say such weak words... I've memorized your promise, don't go back on it!"
      ]
    },
    "ch3_milestone": {
      "chapter": {
        "title": "CHAPTER III",
        "subtitle": "Hanazono Cultural Festival"
      },
      "lines": [
        "The biggest festival of the year has finally officially kicked off!",
        "Hanazono school gate was bustling with thousands of visitors passing by with bustling parade music.",
        "Under the ancient cherry trees in full bloom, dozens of food stalls were filled with smoke, and cheers echoed throughout the outdoor stages.",
        "(Today is the climax of the festival... I have to find the most important person to share these precious moments with.)"
      ]
    },
    "choice_festival_date": {
      "choices": [
        "🌸 Accompany Sakura Hana: Experience bustling cafes & festivals",
        "❄️ Accompany Aoki Yuki: Visit the observatory & romantic sky viewing corner",
        "⚡ Accompany Tachibana Rin: Patrol the stage & enjoy fireworks together"
      ]
    },
    "ch3_date_hana": {
      "lines": [
        "Wow! Did you really come to find me?! It's so much fun!!",
        "Hana in a traditional cherry blossom maid outfit ran out to greet you, her smile as bright as the noon sun.",
        "You and she walked together through the bustling culinary streets, biting into a skewer of sweet red apple candy.",
        "Amidst the crowded crowd, Hana's small hand suddenly reached out and held your hand tightly.",
        "Don't let go of my hand... Please... Hold me tight...",
        "(Hana's hand... why is it so cold and shaking?)"
      ]
    },
    "hana_transfer_crisis": {
      "lines": [
        "As dusk falls, the noise of the festival gradually recedes towards the main stage. The two of you stopped at the corner of the quiet hallway.",
        "Hana let go of her friend's hand, stood with her back turned, her head bowed to the ground. The afternoon wind blew pink ribbons in her hair.",
        "This guy... Today... I wished that time could stop forever...",
        "Why do you say such sad words, Hana?",
        "This morning... my parents just called from California...",
        "They said my grandmother's condition needs to be taken to the US for intensive treatment next week...",
        "And... they have already submitted all the transfer sponsorship documents for me. Next Monday... I'll have to get on a plane to leave Japan..."
      ]
    },
    "choice_hana_transfer": {
      "choices": [
        "🌸 Stepped forward and hugged Hana tightly: \"Don't go, Hana! I can't lose you! You're a part of my soul!\"",
        "💔 Bowed his head hesitantly: \"If that's your family's decision... maybe I should respect...\""
      ]
    },
    "hana_transfer_plea": {
      "lines": [
        "Without hesitating for another second, you walked forward and hugged Hana tightly. Your arms tightened as if afraid she would disappear into the sunset.",
        "Hana! Don't go! I beg you!",
        "Over there you will be alone in a strange house again! I will talk to your parents with you, and I will help you take care of your grandmother every day after school!",
        "Please stay here! I need you in this life!",
        "Hana paused, then her hands clutched the back of your shirt, hot tears seeping through the shoulders of your shirt.",
        "I... I don't want to go either! I want to stay here next to you! Every second and minute away from you is torture for me!",
        "You gave me courage... I will call my parents, I will fight to stay at this school... for you!"
      ]
    },
    "hana_transfer_hesitate": {
      "lines": [
        "Hana smiled slightly, a mournful smile that shattered like crystal falling onto a rock.",
        "Um... I understand. Everyone must continue on their own path...",
        "Thank you for giving me the most beautiful memories of this short youth...",
        "Hana turned on her heel and walked into the dark hallway, leaving a cold, icy void in your heart."
      ]
    },
    "ch3_date_yuki": {
      "lines": [
        "You chose to come to me... Among thousands of bustling joys down there, you chose this quiet corner of the sky.",
        "On the windy rooftop, Yuki reached out to catch stray cherry blossom petals flying to the upper floors.",
        "She carefully pulled out a delicate blue wool amulet in the shape of a hexagonal snowflake from her pocket.",
        "I've been knitting it myself for the past week... I want to give it to the most important person in this world to me.",
        "But today... exactly at this hour... was that fateful moment one year ago.",
        "The sky suddenly turned gray quickly. Dark clouds poured in from the horizon, thunder rumbled."
      ]
    },
    "yuki_rooftop_crisis": {
      "lines": [
        "A sudden spring shower poured down violently! Torrential rainwater obscured the entire terrace space.",
        "In the middle of the cold rain, you are horrified to discover Yuki climbing over the safety railing, her feet landing on the narrow concrete edge outside!",
        "Her blue hair was wet and stuck to her cheeks. Yuki's eyes opened wide, staring into the deep space below the floor.",
        "Miyuki... you're standing down there, right? You're wet and cold, aren't you?",
        "For the past year, I've been living in fake forgiveness... I don't deserve anyone's love!",
        "I'm here to apologize... Wait for me..."
      ]
    },
    "choice_yuki_rooftop": {
      "choices": [
        "❄️ Rushed forward in the rain, hugged Yuki's waist and pulled her back inside: \"Yuki!! Don't do anything stupid!! I absolutely won't lose you!!\"",
        "🛑 Stand still and shout loudly: \"Yuki calm down! Get down from there, it's very dangerous!\""
      ]
    },
    "yuki_rooftop_saved": {
      "lines": [
        "Ignoring all dangers, you rush forward like an arrow tearing through the rain! Your arms reached out, hugged Yuki's waist tightly and yanked her back!",
        "Both fell to the wet concrete floor. You hugged Yuki's slender, trembling body tightly in your chest.",
        "YOU ARE JUST CRAZY, YUKI!! DO YOU THINK MIYUKI WANT TO SEE YOU END UP LIKE THIS?!",
        "The living must live for the dreams of the deceased! If you die... do you know my heart will break into a million pieces?!",
        "Yuki looked up at you in shock. For the first time, the emotions that had been suppressed for the past year burst out, she hugged your neck and cried out in the middle of a rainstorm.",
        "I... I'm so scared... I don't want to die... I want to be by your side... Please don't let me go...",
        "I will never let go. The storm has passed, I'm here to protect you."
      ]
    },
    "yuki_rooftop_scared": {
      "lines": [
        "Yuki slowly climbed down from the railing. But her eyes had completely lost their ray of hope, becoming lifeless like a frozen mirror.",
        "You also look at me like I'm crazy...",
        "Thank you for the amulet... But maybe I can never redeem myself."
      ]
    },
    "ch3_date_rin": {
      "lines": [
        "H-Hey, I asked you to go on a security patrol because it's just work, not a festival date!",
        "Rin blushed and walked next to you, still holding the walkie-talkie to check each duty station.",
        "When an electrical short circuit occurred on the main stage control panel, you and Rin coordinated well to reconnect the fuse in time before the performance.",
        "You... are so cool... If I don't have you by my side, I don't know how to cope...",
        "At that moment, the door of the Student Council room was slammed open by a teacher in charge, throwing a thick envelope on the table!"
      ]
    },
    "rin_panic_attack": {
      "lines": [
        "\"Anonymous complaint sent to the School Board: The Student Council Executive Committee embezzled more than two million yen of Festival funds, the mastermind is Tachibana Rin!\"",
        "\"Accompanied by a threat to immediately disband the Student Council and transfer the file to the investigation agency.\"",
        "The sound of thunder and lightning echoed outside the window. The teacher left after leaving an ultimatum demanding an explanation before 8 p.m.",
        "N-No... It's not... I didn't take any money...",
        "Rin clutched her chest, her breathing coming in short gasps. Her eyes widened in extreme panic, her fingers scratching at her collar as if she were about to suffocate.",
        "It's the Tachibana family again... It's the disgrace again... Everyone looks at me like a fraud... Sister... I can't breathe...",
        "Rin collapsed to the floor, a fierce panic attack engulfing the proud girl!"
      ]
    },
    "choice_rin_panic": {
      "choices": [
        "⚡ Kneel down and hug Rin tightly, pressing a warm hand to her cheek: \"Rin, look into my eyes! Breathe deeply... breathe out... I'm here, I trust you absolutely!\"",
        "📋 Hastily flipped through the accounting books: \"Let me go confront and clarify with the School Board right now!\""
      ]
    },
    "rin_panic_comfort": {
      "lines": [
        "You immediately knelt down on the floor, holding Rin's cold and sweaty face with both hands.",
        "Rin! Focus on my voice! Look straight into my eyes!",
        "Take a deep breath... 1... 2... 3... then slowly exhale... That's right, very good.",
        "Rin's chaotic breathing gradually slowed down under the warmth of your hand. The girl's wild eyes gradually regained focus.",
        "You and I have reviewed all the income and expenses of this festival together, one by one. You are completely clean!",
        "I will stand up and testify in front of the whole school. Anyone who dares to insult your honor must pass through me first!",
        "Rin burst into tears, wrapping her arms around your neck, burying her face in your shoulder like a child finding a safe haven in the middle of a nightmare.",
        "You idiot... Why do you always save me like this... If it weren't for you, I would have completely collapsed..."
      ]
    },
    "rin_panic_rush": {
      "lines": [
        "You frantically searched for the documents without realizing that Rin was struggling with suffocation.",
        "When you turned around, Rin had pushed herself up to hold on to the edge of the table, but her eyes had built up an iron wall of absolute coldness.",
        "You... go out. This is the Tachibana family's matter, I will handle it myself."
      ]
    },
    "ch4_milestone": {
      "chapter": {
        "title": "CHAPTER IV",
        "subtitle": "A Promise Under the Cherry Rain"
      },
      "lines": [
        "The last days of spring have knocked on the door of Hanazono High School.",
        "The warm wind blew up tens of thousands of cherry blossom petals at the end of the season, creating a pink rain that filled the entire space.",
        "The challenges and deep wounds in the soul were revealed and healed through the fire of sharing.",
        "(The fateful moment has come... Who will the sincere call from the depths of my heart lead me to?)"
      ]
    },
    "choice_final_confession": {
      "choices": [
        "🌸 Go to the old cherry tree in front of the school gate — Meet Sakura Hana",
        "❄️ Up on the windy rooftop at sunset — Meet Aoki Yuki",
        "⚡ Entering the warm, afternoon-lit Student Council room — Meet Tachibana Rin",
        "✨ Appreciate the beautiful friendship of the entire group of four",
        "🚶 Leave school alone, don't want to get emotionally entangled"
      ]
    },
    "final_branch_hana": {
      "lines": [
        "You're here... Thank you for accepting my appointment.",
        "Standing under an ancient cherry tree shaded by flying flowers, Hana clutched the hem of her uniform with both hands, her eyes sparkling with tears but full of happiness.",
        "I talked seriously all night with my parents... I said that in this place I found my second family.",
        "My parents agreed to let me stay with my grandmother... And most importantly... let me be by your side!",
        "From the first moment you smiled at me at that desk... in my eyes there was only your image...",
        "Do you want to... hold hands and walk with me through these youthful years?"
      ]
    },
    "choice_confession_hana": {
      "choices": [
        "💖 \"I've loved you for a long time, Hana! Please become my girlfriend.\"",
        "🌸 \"Thank you for your sincere feelings, let's always be the best couple at the table.\""
      ]
    },
    "final_branch_yuki": {
      "lines": [
        "Today's sunset is so beautiful... The sky is no longer the color of mourning.",
        "The splendid afternoon wind blew Yuki's flowing, smoky blue hair. The snowflake-shaped amulet was solemnly pinned on her chest.",
        "Over the past year, I thought my heart had forever turned into cold ice...",
        "But it was your steadfast gentleness that warmed my soul, drawing me back to the light of life.",
        "Now, I want to live brilliantly... not just for Miyuki, but for myself, and for you.",
        "Are you willing to be the only warming fire in my life?"
      ]
    },
    "choice_confession_yuki": {
      "choices": [
        "💙 Holding Yuki's little hand: \"I want to stay by your side to protect and share every happy and sad moment with you.\"",
        "❄️ \"You are the most wonderful and noble soulmate I have ever had in my life.\""
      ]
    },
    "final_branch_rin": {
      "lines": [
        "Y-You're exactly 1 minute and 30 seconds late! Making the Vice President wait is an unforgivable crime!",
        "Rin turned her face away to hide her cheeks that were as red as begonia petals, her two fingers confusedly fiddling with the notebook.",
        "The fund slander case has been cleared up, and the honor of Rin and her family has been completely vindicated before the whole school.",
        "But... I don't care about stupid rules anymore!",
        "Since the day you appeared, you've been in my mind every day, making my heart beat like crazy...",
        "You planted your love in my head, so you have to be responsible for me for the rest of your life! Do you hear me, you idiot?!"
      ]
    },
    "choice_confession_rin": {
      "choices": [
        "🧡 Stepped forward and hugged Rin tightly: \"I will be responsible for you for the rest of my life, my lovely Vice President.\"",
        "⚡ \"I will always be your right hand man and most loyal friend.\""
      ]
    },
    "final_branch_harem": {
      "lines": [
        "Under the fragrant ancient cherry blossom trees, all four people gathered together under the clear spring sunlight.",
        "Hana's chirping laughter like a baby bird, Yuki's gentle, serene smile, and Rin's cute, caring grumbles...",
        "All are intertwined, weaving the most brilliant and pure picture of youth you have ever seen.",
        "(There is no need to possess it for yourself, this friendship, these magical bonds... are the priceless miracle of youth.)"
      ]
    },
    "ending_hana_good": {
      "ending": {
        "title": "True Ending: Cherry Blossom Imprint",
        "desc": "Under the rain of cherry blossoms overwhelming the spring sky, Sakura Hana choked and hugged her friend in extreme happiness. Her radiant smile will forever accompany you through the sweetest and most brilliant years of youth, forever dispelling the loneliness of the old days."
      }
    },
    "ending_hana_normal": {
      "ending": {
        "title": "Normal Ending: Best Tablemate",
        "desc": "Hana smiled slightly and nodded, although her eyes were filled with a bit of gentle regret. The two of you are still close friends at the same table, always sharing each bento and each assignment throughout your beautiful school years."
      }
    },
    "ending_yuki_good": {
      "ending": {
        "title": "True Ending: Snow White Sunset Love Song",
        "desc": "On the windy rooftop in the purple sunset, Yuki squeezed her friend's hand tightly. A smile as pure as the first snow of the season bloomed on that girl's lips. From today, she will never have to look at the sky alone again, because you have become the most peaceful place in her life."
      }
    },
    "ending_yuki_normal": {
      "ending": {
        "title": "Normal Ending: Friendship Terrace",
        "desc": "Yuki looked towards the distant galaxy, smiling serenely. The two became rare, close friends in life. The windy terrace was always a peaceful place to share all their secret feelings."
      }
    },
    "ending_rin_good": {
      "ending": {
        "title": "True Ending: President's Embarrassed Heart",
        "desc": "In the warm afternoon light of the Student Council office, Rin put her head on her friend's chest to hide her hot cheeks. The arrogant, sharp shell completely disappeared, giving way to the most sincere and sweet feelings of the lovely Tsundere girl."
      }
    },
    "ending_rin_normal": {
      "ending": {
        "title": "Normal Ending: Strong Arm",
        "desc": "Rin patted your shoulder with pride and trust. You officially become the most trusted assistant of the Student Council, working side by side with Rin to solve all school challenges filled with laughter and youthful enthusiasm."
      }
    },
    "ending_harem": {
      "ending": {
        "title": "Special Ending: Garden of Youth",
        "desc": "There is no need to choose just one person, you have chosen to keep the friendship and wonderful bond of all four people. With Hana, Yuki and Rin, the high school days at Hanazono High School have become a paradise of sparkling memories that will never fade."
      }
    },
    "ending_alone": {
      "ending": {
        "title": "Sad Ending: Falling Petals",
        "desc": "The cherry blossom season ended, leaving behind a road strewn with withered flower petals and no one in sight. You quietly walk alone, filled with endless regret when remembering the opportunities and bright smiles you have missed."
      }
    }
  },
  "ja": {
    "intro": {
      "chapter": {
        "title": "第 1 章",
        "subtitle": "春のスタート"
      },
      "lines": [
        "穏やかな4月の朝。甘い蜜のような金色の陽光に照らされる花園校2年B組。",
        "半開きのガラス窓の外では、春風が吹き抜け、何万枚もの繊細な桜の花びらが宙に舞っていました。",
        "（また新学期が始まる…周りの友達の賑やかな笑い声の中で、いつも見えない距離を感じている）",
        "（青春は白紙のノートのように静かに過ぎていくのか、それとも奇跡が訪れるのか？）"
      ]
    },
    "hana_enter": {
      "lines": [
        "ちょっと待って！！待っていてください!!",
        "「カチッ」という音とともに教室の引き戸が開いた。パステルピンクの髪をツインテールに結った女子学生が、肩からカバンを滑り落ちそうになりながら駆け込んできた。",
        "ふぅ…ははは…とても幸運ですね！授業初日に監督に自分の名前を書かれるところでした！えへへ～",
        "額の汗をすぐに手の甲でぬぐい、教室全体が明るくなるような笑顔を見せた。",
        "（その笑顔は……まるで、暗い冬の日が続いた後に初めて太陽が射したときのように、キラキラしていて異常に暖かかった。）",
        "ああ！あなたは...私の新しいデスクメイトですよね?ドアに貼ってあるクラス表にあなたの名前を見ました！",
        "はじめまして！桜花です！今年もたくさん助け合いましょう〜♪"
      ]
    },
    "choice_greet": {
      "choices": [
        "🌸「こんにちは、ハナさん！あなたの明るい笑顔で教室全体が明るくなります。」",
        "😊「こんにちは、またお会いできて嬉しいです。」",
        "😐 「はい、こんにちは。もうすぐホームルームだから座ってください。」"
      ]
    },
    "greet_flirt": {
      "lines": [
        "痛い――！な、あなたは...なぜそんなに優しく褒めてくれたのですか？耳が熱くなりました！",
        "ハナは、熟れた桃のようにバラ色の頬を両手で抱きしめ、つぶらな瞳をとても愛らしい恥じらいで輝かせた。",
        "でも...本当にありがとう！テーブルメイトが近寄りがたい人になるのではないかと思い、昨夜一晩中心配していました...",
        "そう言っていただいて、すごく安心しました！きっと今年も仲良くなれるはず♪",
        "（ハナさんの喜びに満ちた澄んだ瞳は、私の心の不安をすべて吹き飛ばしてくれたようでした。）"
      ]
    },
    "greet_friendly": {
      "lines": [
        "とても素晴らしいです！こんな気さくで素敵なテーブルメイトがいれば一年安心ですよ～",
        "ちなみに、正直に言うと、私は数学と論理が大の苦手です...難しい授業があった場合は、忘れずに私を助けて試験に合格させてください!",
        "わかりました、私にできることがあれば、全力を尽くします。",
        "約束！あなたは本当に私にとって新学期最初の救世主ですよ～"
      ]
    },
    "greet_cold": {
      "lines": [
        "あ…あの、ごめんなさい…ちょっとうるさすぎました…。",
        "ハナの口元にあった明るい笑顔は一瞬固まり、言葉では言い表せない寂しさの瞬間に目は和らぎ、その後急いで別の強制的な笑顔で彼女を覆いました。",
        "すぐに整理整頓してみます！迷惑はかけません、約束します！",
        "（素直に頭を下げたのは礼儀ではなく、他人に嫌われることへの恐怖の反射？）"
      ]
    },
    "morning_corridor": {
      "lines": [
        "1年生の活動終了を告げる鐘が鳴りました。 ２階の廊下は足音と賑やかな笑い声で満ちていた。",
        "バルコニーに出ると、春の花や草の香りが漂う涼しい風を迎えます。",
        "突然、タイルの床をカチカチとヒールが叩く決定的な音が鳴り響き、背後から力強く威厳のある女性の声が聞こえてきた…。"
      ]
    },
    "rin_encounter": {
      "lines": [
        "そこの生徒さん！今すぐ私のために止めてください！",
        "あなたは振り向く。あなたの目の前に立っているのは、明るいオレンジ色の髪を高い位置で 2 つのポニーテールに結び、頭からつま先までをスキャンする刃のように鋭い目をした女子学生です。",
        "彼女の左袖には、「学生協会 - 規律委員会の責任者」という金色の文字が目立つように印刷された赤いリボンをつけています。",
        "ジャケットのボタンの掛け方が悪く、名札も斜め！新学期の初日に、あなたの行動はこんなに軽率ですか？",
        "私は生徒会副会長であり、11年生全体のマネージャーをしている橘凜です。",
        "伝統ある花園学園は学校のイメージを損なうような下品な行為は絶対に認めません！"
      ]
    },
    "choice_rin_first": {
      "choices": [
        "⚡「副会長の凛ちゃんはいつもひたむきでカッコよくて可愛いですね。」",
        "🫡「副大統領、ごめんなさい！すぐに態度を正します。」",
        "🙄 「そんなボタンについて、そこまで真剣に考える必要があるの？」"
      ]
    },
    "rin_first_tease": {
      "lines": [
        "な、何?!ああ、彼の頭は可愛いですね！頭は暖かいですか？",
        "凛の凛々しい誇らしげな顔がたちまち燃え上がり、頬から耳まで赤い筋が瞬く間に広がった。彼女は混乱して半歩後ずさりした。",
        "おしゃべりやおしゃべりはやめてください！そんな根拠のない甘い言葉を使って風紀委員会をすり抜けられると思うなよ！",
        "L、今回はリマインダーをメモするだけです...私の目の前でシャツのボタンを調整してください!規律のないバカめ！",
        "（言葉は少々きついが、戸惑いを隠したその表情は驚くほど本物だった。）"
      ]
    },
    "rin_first_obedient": {
      "lines": [
        "副社長、ごめんなさい、不注意でした。今からシャツのボタンを付け直します。",
        "何も反論せずに従順に従う友人を見て、凛は少し唖然とした。彼女は真剣な表情を維持しようと、わずかに咳払いをした。",
        "うーん、間違いを認めて変える姿勢は良いですね。聞く方法を知っている人だけが進歩できます。",
        "花園学校は未来を築く場所だということをよく覚えておいてください。細かいことに影響されないようにしてください。",
        "リンは満足そうにうなずき、手に持った黒革のノートに鉛筆で丁寧に線を引いてから踵を返して立ち去った。"
      ]
    },
    "rin_first_cold": {
      "lines": [
        "深刻な問題?!最も基本的な基準を無視していませんか?",
        "凛の目は失望と悔しさで光り、思わずペンを持つ手に力が入った。",
        "人が犯す最大の間違いは、常に見落とされている小さなことから始まります。境界線を守らなければ全てが崩壊してしまう…",
        "凜は急いでノートにメモを取り、「特別監視リストで監視してやるよ！」と冷たく睨みつけた。"
      ]
    },
    "lunch_decision": {
      "lines": [
        "ケンクン！昼休みを告げる鐘が教室に静かに鳴り響いた。",
        "すべてのクラスの生徒が昼食のために分散し始めました。昼休みを誰と過ごすかを選ぶ時が来ました。",
        "（昼休み1時間半…今度は誰と過ごそうかな？）"
      ]
    },
    "choice_lunch_target": {
      "choices": [
        "🌸 授業を続ける: デスクメイトの桜花とランチをする",
        "❄️ 屋上へ: 青木ゆきと一緒に風の強い静けさを見つけてください",
        "⚡生徒会室へ行く：副会長・橘凛を探す"
      ]
    },
    "act_lunch_hana": {
      "lines": [
        "ああ！食堂に行かないんですか？昼休みまで授業に残ったの？とても素晴らしいです!!",
        "友達がカバンから弁当を取り出すのを見た瞬間、ハナさんは目を輝かせた。彼女は急いで椅子をあなたのテーブルに近づけました。",
        "桜色の弁当タオルを開けると、中には金色の卵焼き、クマの顔が描かれたおにぎり、新鮮な野菜が入っていた。",
        "ただぁ～！今朝は5時に起きて準備してきました！美味しそうじゃないですか？",
        "この卵焼きを試してみてください！我が家の特製レシピですよ～"
      ]
    },
    "choice_hana_lunch_food": {
      "choices": [
        "🍱 卵焼きを試食します: 「卵は柔らかくて甘いです。ハナさんは本当に料理上手ですね!」",
        "🥪 サンドイッチをもう一度共有します。「ありがとう、お返しに、私が作ったチキンサンドイッチを試してみましょう。」"
      ]
    },
    "hana_food_praise": {
      "lines": [
        "本当に…本当に?!美味しいと思いますか？うわー、とても嬉しいです!!",
        "ハナは嬉しそうに手をたたき、夏の夕立を浴びたばかりの花びらのように明るい笑顔を見せた。",
        "この料理は私が小学生の頃に祖母から教えてもらったものです！彼女は料理は他人に温もりを与える方法だと言いました...",
        "最近、彼女の体調がかなり悪くなってきたので、自分で美味しい料理を作って彼女を安心させたいのですが…。"
      ]
    },
    "hana_food_share": {
      "lines": [
        "おお！あなたのサンドイッチはとても美味しそうですね！一枚ください～",
        "ハナは少しかじると、ぽっちゃりしたほっぺを膨らませて大喜びで噛みつきました。",
        "うーん…とても美味しいです！こうやって友達と食べ物を分け合う気持ちは…本当に温かいですね。",
        "普段家にいると…広いキッチンで一人でご飯食べないといけないのに…。"
      ]
    },
    "hana_lunch_backstory_hint": {
      "lines": [
        "一人で食べる？あなたの両親はとても忙しいですか？",
        "ハナの箸を持つ手が少し止まった。彼女は下を向き、長いまつ毛が視線を隠した。",
        "私の両親は…二人とも米国の多国籍企業で働いています。彼らは一年中旅行します...時々、一年中、私は電話の画面を通して数日間しか彼らに会いません。",
        "私は小さい頃から祖母と一緒に育ちました。しかし、最近血圧が上がったり下がったりが異常で…。",
        "花は顔を上げ、再び明るい笑顔を取り戻そうとしたが、声は喉で詰まった。",
        "でも、私は大丈夫です！自分の世話をすることに慣れています！クラスにも友達がいるのですが、こうやって同じテーブルにいられるのはとても嬉しいです！",
        "(この少女の輝く笑顔は…孤独に怯える小さな心を守る鎧だった。)"
      ]
    },
    "act_lunch_yuki": {
      "lines": [
        "屋上に通じる重い金属製のドアを押し開くと、一陣の風が髪をなびかせた。",
        "風の音とそびえ立つ空だけが響く広々とした空間の真ん中、錆びた鉄柵の傍らにひっそりと佇むスレンダーな人影。",
        "女子生徒は肩までの長さのスモーキーブルーの髪をなびかせ、風が吹くたびに制服のスカートがわずかになびいた。彼女の翡翠の瞳は深く、遠くの白い雲を見つめていた。",
        "…足音。そこの世界から逃げたい人は他にいますか？",
        "ああ...あなたの静かな空間を誤って壊してしまったらごめんなさい。",
        "問題ない。この空は誰のものでもない…校庭の喧騒を吹き飛ばすほどの風が強い。",
        "私は2年A組の青木優希です。"
      ]
    },
    "choice_yuki_deep": {
      "choices": [
        "🕊️ 手すりに歩み寄る: 「空は本当に広いのに、ここに一人で立っていると、とても寂しそうに見えます。」",
        "🥪 昼食を渡す: 「これだけ風が強いととても寒いです。このケーキを一緒に食べてください。」"
      ]
    },
    "yuki_deep_response": {
      "lines": [
        "……私の寂しさ、見抜けますか？",
        "ユキは軽く首を傾げた。彼女の目は、小さな小石によって波紋を起こしたばかりの氷の湖面のように震えた。",
        "みんなは私を孤立したがる変な人だと言います...私は石像のように無感情だと言われます。",
        "でも、あなたは「寂しい」という言葉を使いました。 1年経って私にそんなことを言ってくれたのはあなたが初めてです。"
      ]
    },
    "yuki_snack_response": {
      "lines": [
        "...ケーキ？ありがとう。朝から何も食べていないことを忘れていました。",
        "ユキは友達の手からケーキを受け取りました。彼女の指先があなたの手に軽く触れた――冬の最初の雪のように冷たかった。",
        "ミルクの味は甘くて温かい…見知らぬ人からの優しさの温かい味を久しぶりに味わいました。"
      ]
    },
    "yuki_lunch_backstory_hint": {
      "lines": [
        "なぜ私がいつもテラスのこの隅に立っているのか知っていますか？",
        "ここは街全体が見渡せるから？",
        "...ない。だってここは…かつて私と一番大切な人が放課後に一緒に星を見る約束をした場所だったから。",
        "ユキは鉄柵を強く握り締め、その衝撃で指の関節が真っ白になった。静かな痛みが彼の青い瞳を満たした。",
        "しかし今、その人はもういません。記憶に責められながら、ここに立っているのは私だけ…",
        "（罰？その苦悶の瞳には、とても深い過去の傷があった……）",
        "…ごめんなさい、変なこと言いました。でも、もしよければ…今度ここに来て話してくれませんか？"
      ]
    },
    "act_lunch_rin": {
      "lines": [
        "生徒会室のドアをノックする音が小さく響いた。ドアを押し開けると、黄金色の正午の日差しが満ちる広々とした部屋に足を踏み入れることができます。",
        "山のように積み上げられた巨大な本棚とファイルの山の中で、橘凜は緊張で繊細な眉間にしわを寄せながら、一人机に座っていた。",
        "誰だ？昼休みは受け付けないって言ったのに…えっ！またあなたですか?!",
        "こんな時間にここで何をしているのですか？またからかわれに来たなんて言わないでね！",
        "朝から今日まで休むことなく頑張っている副社長の姿を見て、何かお手伝いできることがないかと立ち寄りました。",
        "え、え？あなたの助けが必要ですか？私は副社長です！フェスティバルを企画するこれらの小さなタスクを行うのは、私にとってどれくらい難しいでしょうか?"
      ]
    },
    "choice_rin_help_lunch": {
      "choices": [
        "☕ 温かいピーチミルクティーの缶をテーブルの上に置きました。「どんなに偉大であっても、体力を維持するには食べたり飲んだりしなければなりません、副大統領。」",
        "📑 腕まくりをして仕事に取り掛かりましょう: 「ブースに登録してくれるクラブのリストを整理するのを手伝ってあげましょう。」"
      ]
    },
    "rin_tea_accept": {
      "lines": [
        "そ、ピーチミルクティー…学校帰りに飲むやつ?!ひ、どうやってわかるの?!",
        "リンは驚きに目を見開き、無意識に温かい缶入りのお茶を両手で抱きしめた。缶の温かさは、少女の険しい姿さえも和らげてくれたようだった。",
        "D、缶入りのお茶を買ってくれたからといって、私があなたに好意を寄せるという意味だとは思わないでください！でも…お腹もすごく空いてきました…。",
        "ありがとう…妙に思慮深いバカね…"
      ]
    },
    "rin_work_together": {
      "lines": [
        "ねえ、コードで分類する方法を知っていますか?見てみましょう...え？",
        "リンは、あなたがブロックやクラブに整然と配置し、細部まで正確に作成したファイルを見て驚きました。",
        "あなたは...慎重に、そして私が思っていたよりもずっと早くそれをしてくれました。ほぼ 1 時間節約できました。",
        "全然悪くないよ。あなたの能力を再考する必要があるようです。"
      ]
    },
    "rin_lunch_backstory_hint": {
      "lines": [
        "テーブルを掃除しているときに、本棚の隅にある下向きの黒檀のフォトフレームに誤って目が触れました。",
        "そのフォトフレームは…",
        "触れないでください！！",
        "リンは慌ててフォトフレームを掴み、ぎゅっと抱きしめた。一瞬表情が青ざめたが、その後激しく防御態勢になった。",
        "それは...過去のことです。知る必要はありませんし、質問することもできません。",
        "私は完璧でなければなりません...この生徒会を最後までやり遂げなければなりません。二度と「橘」という名前を笑われることは絶対に許さない！",
        "（橘……その名前は凛の小さな肩には重すぎるようだった）"
      ]
    },
    "ch2_milestone": {
      "chapter": {
        "title": "第 2 章",
        "subtitle": "スクールパルス"
      },
      "lines": [
        "花の香りに満ちた4月中旬、あっという間に一週間が過ぎました。",
        "花園学校の掲示板や廊下には、「今週末、花園文化祭が正式に開幕します！」という鮮やかな手書きのポスターが貼られています。",
        "ハンマーの音、木を切る音、そして音楽のリハーサルの笑い声が学校の隅々に響き渡りました。",
        "（文化祭…大切な人を本当に理解し、絆を深められる最高の機会です。）"
      ]
    },
    "choice_festival_prep": {
      "choices": [
        "🌸 桜花と一緒に桜カフェのブース装飾チームに参加しましょう",
        "❄️ 青木裕樹と一緒に屋上で天文展示コーナーの準備を手伝う",
        "⚡生徒会室に滞在して橘凜と一緒にイベント運営を直接サポート"
      ]
    },
    "ch2_prep_hana": {
      "lines": [
        "ああ！本当に私と一緒にカフェデコレーショングループに登録しましたか？とても楽しいです!!",
        "2年B組は桜の花で賑わう、レトロな雰囲気の紅茶とケーキのお店に変わりました。",
        "午後中、あなたとハナさんはピンクのリボンを切ったり貼ったり、提灯を吊るしたり、メニューの看板を描いたりしてゲストを歓迎するために協力しました。",
        "水彩絵の具を混ぜるのに夢中になっていると、知らず知らずのうちに、花の滑らかな白い頬の先端に、淡いピンクの絵の具の筋が付着してしまいました。",
        "ねえ、ハナ、ちょっと立ち止まって。あなたの頬はペンキで覆われています。",
        "あなたは軽く身をかがめてハンカチを取り出し、彼女の頬の汚れをそっと拭いました。相手の速い呼吸音が聞こえるほどの距離です。",
        "ああ、痛い... 心臓が... 心臓がとても早く鼓動している... 突然やったのに、誰が助けることができるでしょう！",
        "戸惑いながら両手で顔を覆い、ブラシを取りに走り出すハナさんの心に温かい笑顔が残ります。"
      ]
    },
    "hana_cry_discovery": {
      "lines": [
        "午後遅く。夕日は空のテーブルと椅子の列に流れ出る血のように赤かった。クラスの生徒は全員荷物をまとめて出発しました。",
        "授業用のメモ帳を机の下に忘れたことを突然思い出し、急いで教室に戻って取りに行きます。",
        "2-B 教室のドアに向かって歩いていたとき、あなたは突然立ち止まりました。",
        "薄暗い教室の後ろの隅から、静かな空間に、むせ返るようなすすり泣きが響き渡った。",
        "それがハナさんです。いつもナイチンゲールのように鳴いている少女はテーブルに頭を置き、両手で携帯電話を胸にしっかりと握り締め、細い肩を胸が張り裂けるようなすすり泣きで震えていた。"
      ]
    },
    "choice_hana_cry": {
      "choices": [
        "🌸一歩近づいて、そっと彼女の肩に手を置きます。「ハナ…私の前で無理に笑顔を作らなくてもいいよ。」",
        "🫂 彼女にハンカチを渡し、静かに隣に座ってください。「私はここにいます。泣きたければ泣いてください、私は離れません。」"
      ]
    },
    "hana_cry_comfort": {
      "lines": [
        "うーん...お、痛い?!",
        "ハナは驚いてパニックになり、頬を伝う涙を急いでぬぐい、震えて歪んだ笑みをこぼそうとした。",
        "わ、まだ帰ってないの…？わ、大丈夫です...ただ...目にゴミが入っただけです...本当に...",
        "ハナ、私の目を見てください。もう無理に笑わないでください。私の前では、あなたには弱くなる権利があります。",
        "あなたの誠実な言葉は、少女の最後の強固な防御壁を打ち砕くハンマーの一撃のようなものです。涙が真珠の糸が切れたかのように流れ出ました。"
      ]
    },
    "hana_cry_stay": {
      "lines": [
        "あなたはあまり多くの質問をせず、ただ静かに椅子を引いて彼女の隣に座り、震えるハナの手にそっとハンカチを置きました。",
        "ハナはハンカチを見つめ、そして涙で満たされた赤い目と極度の無力感であなたを見上げました。",
        "どうして…どうしてそんなに優しくしてくれるの…？",
        "彼女はハンカチに顔を埋め、交差点で母親を亡くした子供のように泣き始めた。"
      ]
    },
    "hana_cry_revelation": {
      "lines": [
        "先ほど市立病院の医師から電話がありました。",
        "私の祖母…私の祖母は市場に行っているときに突然気を失いました…彼女は現在特別監視下で緊急治療室にいます…",
        "アメリカにいる私の両親はこのニュースを聞いて、ただお金を送り返しました…百万ドルのサインプロジェクトで忙しいので飛行機で帰ることができないと言っていました…。",
        "なぜ？！たった一人の親戚が一人で入院しているのに、お金とは何の意味があるのでしょうか？",
        "とても怖い…いつか目を開けると家が真っ白になってしまうのが怖い…この世に一人取り残されるのが怖い…",
        "ハナ、聞いてください。あなた一人じゃありません。何が起こっても、私はいつもあなたのそばにいます。",
        "では、すぐにおばあちゃんと一緒に病院へ行きます。手をしっかり握ってあげるよ、ね？",
        "ハナは窒息しそうにあなたを見つめ、そして力強くうなずきました。明るい夕日の中、あなたの手はハナの冷たい手を握り、嵐に立ち向かう自信をハナに与えました。"
      ]
    },
    "ch2_prep_yuki": {
      "lines": [
        "あなたはここにいます...私は午後中ずっとここに立ってあなたを待っていました。",
        "夕日が学校の屋上全体を幻想的な紫色に染め上げた。風がそれぞれの鉄棒を激しく吹き抜けた。",
        "小さな折りたたみテーブルの上には、ピカピカに磨かれた屈折望遠鏡が置かれ、その隣には、丁寧に手描きされた春の星図が置かれています。",
        "今回の学園祭…一番遠い星座をみんなに見てもらえるように小さなコーナーを作りたいと思っています。",
        "ユキはそっと有線ヘッドセットを 1 つ取り出して、あなたと共有しました。空の真ん中で吹き抜ける風の音に混じって、ピアノ曲「Clair de Lune」の優しい旋律が響き渡った。",
        "これは私の一番好きな曲です...いつも私のようなつまらない人間の話を隣で辛抱強く聞いてくれてありがとう。"
      ]
    },
    "yuki_miyuki_flashback": {
      "lines": [
        "音楽は徐々に重低音に入っていきます。夕方の空が徐々に暗くなり、最初の星が輝き始め、黒いベルベットの背景に現れました。",
        "明るく輝く白鳥座を見上げた有紀の目は急に憂鬱​​になった。",
        "ご存知ですか...ちょうど1年前、文化祭の準備をしていた同じ日に...",
        "私はたった一人で親友の人生を破壊しました。"
      ]
    },
    "choice_yuki_past": {
      "choices": [
        "❄️ 「心が痛むなら、私にシェアしてください。その思い出を持ち歩きたいです。」",
        "🌌 「空のすべての星は、痛みを伴う爆発を経験しています...私はいつでもあなたの隠れた隅々まで耳を傾ける準備ができています。」"
      ]
    },
    "yuki_past_confide": {
      "lines": [
        "...罪人であるという重荷を背負いたいですか？",
        "由紀の声は糸が切れそうなように震えた。彼女は頭を下げ、両手で胸をしっかりとつかみました。",
        "その人の名前はみゆき…生まれた時から影のように一緒に育ってきた。",
        "その日の午後、お祭りの出し物のことでちょっとした口論があっただけで…体調を崩してしまいました。",
        "私はみゆきさんに「大嫌い！二度と私の前に現れるな！」と叫びました。"
      ]
    },
    "yuki_past_listen": {
      "lines": [
        "私の隠れた隅には、暗闇と遅れた後悔だけが満ちています...",
        "涙が静かに由紀の繊細な頬を滑り落ち、夜の星空の下で輝いた。",
        "ミユキ…私の親友。あの日、怒りのままに言った酷い言葉のせいで…。",
        "土砂降りの雨の中、彼女は泣きながら校門を駆け抜けた…。"
      ]
    },
    "yuki_past_resolve": {
      "lines": [
        "その瞬間……制御不能になったトラックが突っ込んできた……。",
        "雨の中を切り裂く車のブレーキ音…金属がぶつかる音…そして美幸の悲鳴…。",
        "今でも目を閉じると、あの恐ろしい音が耳の中に響きます。",
        "私がそんなひどい言葉を言わなかったら、美雪は逃げなかったのに！あの日死んだのは私だったはずだ！！",
        "ゆき！私を見て！それは予期せぬ事故であり、あなたのせいではありません。",
        "みゆきは、最も愛する友人がそのようにして残りの人生を罪の牢獄に閉じ込められるのを決して見たくありません。",
        "ユキは淡い涙を流しながらあなたを見上げ、無言で唇を動かしました。",
        "あなたは...本当に信じますか...私にはまだ生きて笑顔で生きる資格があるのですか？",
        "はい。私は信じている。そして、私はあなたが再びその笑顔を見つけるお手伝いをします。"
      ]
    },
    "ch2_prep_rin": {
      "lines": [
        "午後遅く、生徒会事務室へ。大きなガラス窓からオレンジがかった黄色の夕日が差し込み、静かな影が広がっています。",
        "橘凜はデスクで、全32クラブの予算承認書類を作成するために何日も起きていたため、疲れから眠ってしまいました。",
        "その寝顔には、もういつもの鋭さはなく、あどけなく、哀れなほど儚げに見えます。",
        "あなたはブレザーをそっと脱ぎ、冷たい風に少し震える細い肩にそっと前に踏み出して置きました。",
        "うーん…寒い…お姉さん…私から離れないで…",
        "凛は軽く体を動かし、呆然と呟いた後、突然目を見開いた。",
        "え、あなた?!私の恥ずかしい寝姿を見る勇気はありますか？",
        "一生懸命働いているのを見たので、寒さから守るためにコートを着ました。",
        "うーん...あ、わかりました！今は許します...でも...コートはとても暖かいです、ありがとう..."
      ]
    },
    "rin_sister_shadow": {
      "lines": [
        "凛は友人のコートを体にしっかりと巻きつけ、窓の外の徐々に暗くなる空をぼんやりと眺めていた。",
        "あなたは...今、私の夢がつぶやいているのを聞きましたか？",
        "あなたは「妹」と呼んでいます...あなたの妹は誰ですか？",
        "リンがそっとため息をつき、誇り高き少女の口元に自虐的な笑みが浮かんだ。",
        "姉…立花咲。かつてこの花園校最大のレジェンドだった人物。"
      ]
    },
    "choice_rin_sister": {
      "choices": [
        "⚡ 「サキはかつて伝説的な元社長でした…でも私は今のリンのことしか考えていません。」",
        "🛡️ 「人が何と言おうと、凛は学校全体の名誉のために全力を尽くしているのがわかります。」"
      ]
    },
    "rin_sister_talk": {
      "lines": [
        "今の凛…そんなこと言うのは君が初めてだよ…",
        "凛は目を伏せ、金属製の万年筆を指で締めた。",
        "サキはあらゆる点で完璧でした。聡明で美しく、教師や友人たちから女神として崇められている。",
        "私はいつも彼女をお手本にして、頭を撫でたり褒めてもらいたいと思っています...",
        "ところが昨年…学校内で大規模な試験漏洩事件が起きて…。"
      ]
    },
    "rin_sister_admire": {
      "lines": [
        "最善を尽くしています...でもみんなの目には、私は家族の遺骨を片付けようとしているだけです...",
        "凛の声は詰まり、言葉の一つ一つに無力感が重くのしかかった。",
        "昨年、受験不正事件が勃発したとき…実行委員の親友を守るため、咲さんは自ら名乗りを上げ、すべての責任を自分に負わせた。",
        "彼女は恥をかいて学校から退学になった。両親は激怒し、彼女に帰国を禁じてイギリスに送りました。"
      ]
    },
    "rin_sister_resolve": {
      "lines": [
        "その日から、どこに行っても「あの子は詐欺師の妹だ」と陰で囁かれるようになって…。",
        "わずかなミスも許されず、人の三倍努力して生徒会に立候補したのですが…。",
        "私はみんなを押しのけました、苦しかったです...誰かと親しくなったら、妹にしたように私の背中を刺すのではないかと怖かったからです！",
        "リン…あなたは妹の影ではないし、誰かの罪を背負う者でもない。",
        "あなたは橘凛、私がこれまで知った中で最も献身的で勇敢で誠実な人です。そして、私はあなたの信頼を決して裏切らないことを約束します。",
        "凛は溢れ出た涙を隠すように顔をそむけ、肩を小さく震わせた。",
        "馬鹿野郎…誰がそんな弱気な言葉を言う許可を与えたんだ…約束は覚えたよ、後戻りするなよ！"
      ]
    },
    "ch3_milestone": {
      "chapter": {
        "title": "第 3 章",
        "subtitle": "花園文化祭"
      },
      "lines": [
        "今年最大のお祭りがついに開幕！",
        "花園校門は賑やかなパレード音楽とともに数千人の来場者で賑わった。",
        "満開の桜の古木の下、数十の屋台が煙を上げ、野外ステージに歓声が響いた。",
        "（今日は祭りのクライマックス…この貴重な時間を共有する最も大切な人を見つけなければなりません。）"
      ]
    },
    "choice_festival_date": {
      "choices": [
        "🌸 桜花と一緒に: 賑やかなカフェやお祭りを体験",
        "❄️ 青木ゆき同行：展望台＆ロマンチックな空の眺めコーナーを訪問",
        "⚡ 橘花凛に同行してステージを巡回して一緒に花火を楽しみましょう"
      ]
    },
    "ch3_date_hana": {
      "lines": [
        "おお！本当に私を探しに来たの？！とても楽しいです!!",
        "伝統的な桜のメイド服を着たハナが、正午の太陽のように明るい笑顔であなたを出迎えました。",
        "あなたと彼女は、甘い赤いリンゴのキャンディーの串をかじりながら、にぎやかなグルメ街を一緒に歩きました。",
        "人混みの中で、ハナちゃんの小さな手が突然伸びてきて、あなたの手をぎゅっと握りしめました。",
        "この手を離さないで…お願い…抱きしめて…",
        "（ハナの手…どうしてこんなに冷たくて震えているの？）"
      ]
    },
    "hana_transfer_crisis": {
      "lines": [
        "夕暮れが近づくと、祭りの喧騒は徐々にメインステージに向かって遠ざかっていきます。静かな廊下の隅で二人は立ち止まった。",
        "花は友人の手を放し、背を向けて地面に頭を下げて立った。午後の風が彼女の髪にピンクのリボンをなびかせました。",
        "コイツ…今日…永遠に時間が止まればいいのにと思った…",
        "ハナさん、なぜそんな悲しいことを言うのですか？",
        "今朝...両親がカリフォルニアから電話してきました...",
        "私の祖母の状態は来週、集中治療のために米国に運ばれる必要があると彼らは言いました...",
        "そして...彼らはすでにすべての移籍スポンサーの書類を私に提出してくれました。来週の月曜日…日本を離れる飛行機に乗らなければなりません…"
      ]
    },
    "choice_hana_transfer": {
      "choices": [
        "🌸 前に出てハナをしっかりと抱きしめました。「行かないで、ハナ！あなたを失うことはできません！あなたは私の魂の一部です！」",
        "💔 ためらいがちに頭を下げた：「それがご家族の決断なら…尊重すべきかも知れません…」"
      ]
    },
    "hana_transfer_plea": {
      "lines": [
        "あなたは一瞬もためらわずに前に進み、ハナをぎゅっと抱きしめた。彼女が夕日の中に消えてしまうのではないかと心配しているかのように、あなたの腕はきつくなりました。",
        "ハナ！行かないでください！お願いです！",
        "あちらではまた見知らぬ家に一人ぼっちになるよ！一緒にご両親と話し合って、学校が終わったら毎日おばあちゃんの世話を手伝います！",
        "ここにいてください！この人生にはあなたが必要なのです！",
        "ハナは立ち止まり、あなたのシャツの後ろを両手で握り、シャツの肩から熱い涙が滲み出しました。",
        "私も…行きたくない！あなたの隣にここにいたい！あなたから離れる一秒一分が私にとって拷問です！",
        "あなたは私に勇気をくれました...両親に電話します、私はこの学校に残るために戦います...あなたのために！"
      ]
    },
    "hana_transfer_hesitate": {
      "lines": [
        "ハナは微かに微笑んだ。その悲しげな笑みは、岩に落ちた水晶のように砕け散った。",
        "うーん…分かりました。誰もがそれぞれの道を進んでいかなければなりません...",
        "この短い青春の最も美しい思い出を私に与えてくれてありがとう...",
        "ハナは踵を返して暗い廊下へと歩き出し、心に冷たく氷のような空洞を残した。"
      ]
    },
    "ch3_date_yuki": {
      "lines": [
        "あなたは私のところに来ることを選択しました... そこにある何千もの賑やかな喜びの中で、あなたはこの空の静かな一角を選びました。",
        "風が吹く屋上で、ゆきは上層階に舞い散る桜の花びらを捕まえようと手を伸ばした。",
        "彼女はポケットから六角形の雪の結晶の形をした繊細な青い毛糸のお守りを慎重に取り出しました。",
        "ここ一週間、ずっと自分で編んでいます…この世で一番大切な人に贈りたいです。",
        "しかし今日…まさにこの時間…1年前のあの運命の瞬間でした。",
        "空が突然急速に灰色になりました。地平線から暗雲が流れ込み、雷鳴が轟きました。"
      ]
    },
    "yuki_rooftop_crisis": {
      "lines": [
        "突然、激しく降り注ぐ春の夕立！集中豪雨でテラススペース全体が見えなくなりました。",
        "冷たい雨が降る中、ユキが安全手すりを乗り越え、外の狭いコンクリートの端に足を着いているのを発見して愕然としました。",
        "彼女の青い髪は濡れて頬に張り付いた。ユキは目を見開いて床下の深い空間を見つめた。",
        "ミユキ…そこに立ってるよね？濡れて寒いですよね？",
        "この1年間、私は偽りの許しの中で生きてきました…私には誰からも愛される資格はありません！",
        "謝りに来ました…待っててください…"
      ]
    },
    "choice_yuki_rooftop": {
      "choices": [
        "❄️ 雨の中を突進してゆきの腰を抱きしめて中に引き戻す 「ゆき！！バカなことしないで！！絶対負けない！！」",
        "🛑 立ち止まって大声で「ユウキ、落ち着いて！ そこから降りてください、とても危険です！」と叫びます。"
      ]
    },
    "yuki_rooftop_saved": {
      "lines": [
        "あらゆる危険を顧みず、雨を切り裂く矢のように突き進む！あなたの腕が伸びて、ゆきの腰をしっかりと抱きしめて、彼女を後ろに引っ張りました！",
        "二人とも濡れたコンクリートの床に落ちた。震える由紀の体をきゅっと胸に抱きしめた。",
        "君はただのクレイジーだよ、ユキ!!ミユキはあなたがこうなるのを見たいと思ってるの?!",
        "生者は死者の夢のために生きなければなりません！あなたが死んだら...私の心は百万の破片になることを知っていますか?!",
        "ユキは驚いてあなたを見上げた。この1年間抑圧していた感情が初めて爆発し、彼女はあなたの首を抱きしめて、暴風雨の中で叫びました。",
        "私…とても怖い…死にたくない…そばにいたい…どうか離さないで…",
        "私は決して手放しません。嵐は去った、私はあなたを守るためにここにいます。"
      ]
    },
    "yuki_rooftop_scared": {
      "lines": [
        "ユキはゆっくりと手すりから降りた。しかし、彼女の目は希望の光を完全に失い、凍った鏡のように生気がなくなっていました。",
        "あなたも私を狂ったように見ています...",
        "お守りをありがとう…でも、もしかしたら私には償還できないかもしれない。"
      ]
    },
    "ch3_date_rin": {
      "lines": [
        "やあ、警備パトロールに行ってもらったのは、ただの仕事だから、お祭りデートじゃないよ！",
        "リンは顔を赤らめ、トランシーバーを持ったままあなたの隣を歩き、各当番所を確認しました。",
        "メインステージのコントロールパネルで電気的ショートが発生したとき、あなたとリンはうまく調整して、演奏前にヒューズを再接続しました。",
        "あなたは...とてもカッコいい...あなたがそばにいないなら、私はどうやって対処してよいかわかりません...",
        "その瞬間、生徒会室のドアがバタンと開けられ、担任の教師が分厚い封筒をテーブルに投げつけた！"
      ]
    },
    "rin_panic_attack": {
      "lines": [
        "「教育委員会に匿名告訴状 生徒会実行委員会による学園祭資金200万円以上横領 その首謀者は橘凜！」",
        "「生徒会を即時解散し、捜査機関にファイルを移送するという脅迫を伴う。」",
        "窓の外では雷鳴と稲妻の音が響き渡っていました。教師は午後８時前に説明を求める最後通告を残して立ち去った。",
        "いや…違う…お金は取らなかった…",
        "リンは胸を押さえ、息が短くあがった。彼女は極度のパニックに見開かれ、窒息しそうなほど指が首輪を引っ掻いていた。",
        "また立花家だ…また恥辱だ…みんなが私を詐欺師のように見ている…お姉さん…息ができない…",
        "凛は床に崩れ落ち、誇り高い彼女を巻き込んだ激しいパニック発作！"
      ]
    },
    "choice_rin_panic": {
      "choices": [
        "⚡ ひざまずいてリンをしっかりと抱きしめ、温かい手を頬に押し当てます。「リン、私の目を見てください！ 深呼吸して…息を吐いて…私はここにいます、私はあなたを絶対に信じています！」",
        "📋 急いで会計帳簿をめくって、「今すぐ教育委員会と対決して明確にしてもらいましょう！」"
      ]
    },
    "rin_panic_comfort": {
      "lines": [
        "あなたはすぐに床にひざまずき、凛の冷たくて汗ばんだ顔を両手で押さえました。",
        "リン！私の声に集中してください！私の目をまっすぐ見てください！",
        "深呼吸して… 1… 2… 3… それからゆっくりと息を吐きます… そうです、とても良いです。",
        "凛の乱れた呼吸は、あなたの手の温もりで徐々に遅くなっていきました。少女の野性的な瞳は徐々に焦点を取り戻した。",
        "あなたと私は、このフェスティバルのすべての収入と支出を一緒に一つ一つ見直しました。あなたは完全にクリーンです！",
        "私は立ち上がって全校生徒の前で証言します。あなたの名誉を侮辱しようとする者は、まず私を通らなければなりません！",
        "リンは泣き出し、悪夢の真っ只中に安全な避難所を見つけた子供のように、あなたの首に腕を回し、あなたの肩に顔を埋めました。",
        "馬鹿野郎…どうしていつもこんな風に私を助けてくれるの…あなたがいなかったら私は完全に倒れていたでしょう…"
      ]
    },
    "rin_panic_rush": {
      "lines": [
        "リンが窒息に苦しんでいることに気づかずに、あなたは必死で書類を探しました。",
        "あなたが振り返ると、凛はテーブルの端につかまろうと体を起こしていましたが、その目は絶対的な冷たさの鉄壁を築いていました。",
        "あなたは...出て行きます。これは立花家の問題です、私が解決します。"
      ]
    },
    "ch4_milestone": {
      "chapter": {
        "title": "第 4 章",
        "subtitle": "桜の雨の下の約束"
      },
      "lines": [
        "最後の春が花園高校の門を叩いた。",
        "季節の終わりに、暖かい風が数万枚の桜の花びらを舞い上げ、空間全体をピンクの雨で満たしました。",
        "魂の課題と深い傷は、分かち合いの火を通して明らかになり、癒されました。",
        "(運命の時が来た…心の奥底からの切実な呼びかけは誰へと導くのか?)"
      ]
    },
    "choice_final_confession": {
      "choices": [
        "🌸 校門前の桜の古木へ行く — 桜花に会う",
        "❄️ 夕暮れ時、風の強い屋上で — 青木ゆきに会いましょう",
        "⚡午後の暖かな光が差し込む生徒会室へ――橘凜と出会う",
        "✨ 4人グループ全体の美しい友情に感謝します",
        "🚶学校を放っておく、感情的に巻き込まれたくない"
      ]
    },
    "final_branch_hana": {
      "lines": [
        "ここにいらっしゃいます...私の約束を受け入れていただきありがとうございます。",
        "花が舞う桜の古木の下で、ハナは制服の裾を両手で握りしめ、涙を浮かべながらも幸せに満ちた瞳を輝かせた。",
        "両親と一晩中真剣に話し合いました…この場所で第二の家族を見つけたと言いました。",
        "両親は私を祖母と一緒に住まわせることに同意しました...そして最も重要なことは...私をあなたのそばにいさせてください!",
        "あなたがあのデスクで私に微笑んだ最初の瞬間から…私の目にはあなたの姿しかありませんでした…",
        "手を繋いで、私と一緒に青春を歩んでいきませんか？"
      ]
    },
    "choice_confession_hana": {
      "choices": [
        "💖 「ハナちゃん、ずっと好きでした！彼女になってください。」",
        "🌸「心からの気持ちをありがとう、いつも最高のカップルでいようね。」"
      ]
    },
    "final_branch_yuki": {
      "lines": [
        "今日の夕日はとても美しいです...空はもはや悲しみの色ではありません。",
        "素晴らしい午後の風が、ユキの流れるスモーキーブルーの髪をなびかせた。雪の結晶の形をしたお守りが彼女の胸に厳かに留められていました。",
        "この一年、私の心は永遠に冷たい氷になってしまったのだと思っていました...",
        "しかし、あなたの揺るぎない優しさが私の魂を温め、私を命の光へと引き戻してくれました。",
        "今は、みゆきのためだけでなく、私のため、そしてあなたのためにも、輝いて生きたいと思っています。",
        "あなたは私の人生で唯一の暖炉になる気はありますか？"
      ]
    },
    "choice_confession_yuki": {
      "choices": [
        "💙 ユキの小さな手を握って：「あなたのそばにいて、幸せな時も悲しい時も、守り、分かち合いたい。」",
        "❄️「あなたは私が人生で出会った中で最も素晴らしく気高いソウルメイトです。」"
      ]
    },
    "final_branch_rin": {
      "lines": [
        "や、ちょうど1分30秒遅れてますよ！副大統領を待たせるなんて許されない犯罪だ！",
        "凜はベゴニアの花びらのように赤い頬を隠すように顔をそむけ、二本の指でノートを混乱させた。",
        "基金への誹謗中傷事件は解決し、リンとその家族の名誉は全校の前で完全に証明された。",
        "でも…もうくだらないルールなんて気にしない！",
        "あなたが現れた日から、毎日あなたのことが頭の中にいて、ドキドキしてしまいます...",
        "あなたは私の頭にあなたの愛を植え付けたのですから、あなたは残りの人生で私に対して責任を負わなければなりません！聞こえるか、バカ！"
      ]
    },
    "choice_confession_rin": {
      "choices": [
        "🧡 前に出てリンをしっかりと抱きしめ、「私は残りの人生を担当します、私の素敵な副社長。」",
        "⚡ 「私はいつもあなたの右腕であり、最も忠実な友人です。」"
      ]
    },
    "final_branch_harem": {
      "lines": [
        "香り豊かな古桜の木の下、春の澄んだ日差しの下、4人が一堂に会した。",
        "ひな鳥のようなハナちゃんの笑い声、ユキちゃんの優しく穏やかな笑顔、そして凛ちゃんの優しく思いやりのあるつぶやき…。",
        "すべてが絡み合い、これまでに見たことのないほど輝かしく純粋な青春像を紡ぎ出す。",
        "（自分で持つ必要はない、この友情、魔法のような絆……それはかけがえのない青春の奇跡だ。）"
      ]
    },
    "ending_hana_good": {
      "ending": {
        "title": "トゥルーエンディング：桜の刻印",
        "desc": "春の空を圧倒する桜の雨の下、桜花は喉を詰まらせ、友人を抱きしめ、極度の幸せを感じました。彼女の輝く笑顔は、最も甘く輝かしい青春時代に永遠に寄り添い、昔の孤独を永遠に吹き飛ばします。"
      }
    },
    "ending_hana_normal": {
      "ending": {
        "title": "ノーマルエンディング：最高のテーブルメイト",
        "desc": "ハナは少し微笑んでうなずいたが、その目には少しの優しい後悔が浮かんでいた。あなた方二人は今でも同じテーブルに座る親しい友人であり、素晴らしい学生時代を通して、いつもお弁当や課題を共有しています。"
      }
    },
    "ending_yuki_good": {
      "ending": {
        "title": "トゥルーエンディング：白雪姫夕焼けラブソング",
        "desc": "紫色の夕日が照らす風の強い屋上で、由紀は友人の手をぎゅっと握りしめた。その少女の口元には、初雪のような純真な笑顔が咲いた。今日から、彼女はもう一人で空を眺める必要はなくなります。なぜなら、あなたは彼女の人生で最も平和な場所だからです。"
      }
    },
    "ending_yuki_normal": {
      "ending": {
        "title": "ノーマルエンディング：フレンドシップテラス",
        "desc": "ユキは遠くの銀河を見つめ、穏やかな笑みを浮かべた。二人は人生において稀な親友となった。風が吹くテラスは、いつも二人の秘密の感情を分かち合う平和な場所でした。"
      }
    },
    "ending_rin_good": {
      "ending": {
        "title": "トゥルーエンディング 社長の照れる心",
        "desc": "生徒会事務室の暖かい午後の光の中で、凛は熱い頬を隠すために友人の胸に頭を乗せた。傲慢で鋭い殻は完全に消え、愛らしいツンデレ少女の最も誠実で甘い感情に取って代わりました。"
      }
    },
    "ending_rin_normal": {
      "ending": {
        "title": "ノーマルエンディング：ストロングアーム",
        "desc": "凛は誇りと信頼を込めてあなたの肩をたたきました。あなたは正式に生徒会で最も信頼されるアシスタントとなり、リンと協力して笑いと若々しい熱意に満ちた学校のあらゆる課題を解決します。"
      }
    },
    "ending_harem": {
      "ending": {
        "title": "スペシャルエンディング: 青春の園",
        "desc": "1 人だけを選ぶ必要はありません。4 人全員の友情と素晴らしい絆を維持することを選択しました。ハナ、ユキ、リンたちにとって花園高校での高校生活は、決して色あせることのない、キラキラした思い出の楽園となった。"
      }
    },
    "ending_alone": {
      "ending": {
        "title": "悲しい結末: 舞い散る花びら",
        "desc": "桜の季節は終わり、道には枯れた花びらが散りばめられ、人の姿は見えなかった。あなたは静かに一人で歩き、逃した機会と明るい笑顔を思い出すと限りない後悔でいっぱいになります。"
      }
    }
  }
};
