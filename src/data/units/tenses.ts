import { GrammarUnit } from "../../types";

export const TENSES_UNITS: GrammarUnit[] = [
  // Unit 1
  {
    id: 1,
    title: "Present continuous and present simple: state verbs and performatives",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Understand when state verbs can take continuous forms for temporary situations, and how performative verbs operate in the present simple.",
    summaryBurmese: "State verbs များကို ယာယီအခြေအနေများတွင် Continuous သုံးစွဲပုံနှင့် Performative verbs များကို Present Simple ဖြင့် သုံးစွဲပုံ အတိအကျ။",
    keyPoints: [
      "State verbs (attract, like, love, sound) can be continuous to emphasise a temporary situation around the present.",
      "Some state verbs rarely take continuous: believe, consist of, doubt, own.",
      "Dual-meaning verbs (appear, expect, feel, fit, have, imagine, look, measure, see, think, weigh) have different simple vs continuous meanings.",
      "Mental state verbs (find, realise, regret, think, understand) can take continuous when we have recently started thinking something.",
      "Performatives (acknowledge, admit, advise, apologise, beg, confess, congratulate, declare, deny, forbid, guarantee, name, order, permit, predict, promise, refuse, remind, request, thank, warn) use present simple."
    ],
    keyPointsBurmese: [
      "State verbs (like, love, sound စသည်) ကို ယာယီအခြေအနေဖော်ပြရန် Continuous သုံးနိုင်သည် (ဥပမာ- The children are loving having her here)။",
      "Believe, consist of, doubt, own ကဲ့သို့သော ကြိယာများကို Continuous ဖြင့် သုံးလေ့မရှိပါ။",
      "ကြိယာတချို့ (appear, have, look, measure, think, weigh) သည် State အဓိပ္ပာယ်တွင် Simple နှင့် Action အဓိပ္ပာယ်တွင် Continuous အသုံးကွဲပြားသည်။",
      "Performatives (ကတိပေးခြင်း၊ တောင်းပန်ခြင်း၊ အကြံပြုခြင်း) တွင် Present Simple ကို အသုံးပြုရသည်။"
    ],
    reminderRefs: ["A1", "A2", "A3", "A4", "A5"],
    sections: [
      {
        id: "A",
        title: "State verbs and temporary emphasis",
        content: "We can use the present continuous with some state verbs (e.g. attract, like, love, sound) to emphasise that a situation is temporary or for a period of time around the present.",
        contentBurmese: "ပုံမှန်အားဖြင့် continuous မဖြစ်နိုင်သော state verbs အချို့ (attract, like, love, sound) ကို လက်ရှိကာလအတွင်း ယာယီဖြစ်ပေါ်နေသော အခြေအနေကို အလေးပေးလိုသည့်အခါ Present Continuous သုံးနိုင်သည်။",
        examples: [
          { text: "Ella stays with us quite often. The children love having her here.", note: "love = general permanent state (present simple)" },
          { text: "Ella's with us at the moment. The children are loving having her here.", note: "are loving = temporary enjoyment around now (present continuous)", burmeseNote: "ယခုအချိန်တွင် ယာယီပျော်ရွှင်နေမှုကို အလေးပေးခြင်း" },
          { text: "I doubt it will rain.", note: "State verbs we rarely use with continuous include: believe, consist of, doubt, own." }
        ]
      },
      {
        id: "B",
        title: "Verbs with both state and action meanings",
        content: "Some verbs have different meanings when they are used to talk about states and when they describe actions. With their 'state' meanings, they usually take simple rather than continuous forms.",
        contentBurmese: "ကြိယာအချို့သည် 'အခြေအနေ (state)' နှင့် 'လုပ်ဆောင်ချက် (action)' အဓိပ္ပာယ် ၂ မျိုးကွဲပြားပြီး၊ state အဓိပ္ပာယ်တွင် simple form၊ action အဓိပ္ပာယ်တွင် continuous form သုံးသည်။",
        examples: [
          { text: "The app doesn't appear to work on my phone.", note: "appear: state = seem", burmeseNote: "ထင်ရသည်/ပုံပေါ်သည် (State)" },
          { text: "Carley Robb is currently appearing in a musical on Broadway.", note: "appear: action = take part / perform", burmeseNote: "ပါဝင်သရုပ်ဆောင်နေသည် (Action)" },
          { text: "This soup tastes wonderful.", note: "taste: state = has a specific flavor" },
          { text: "The chef is tasting the soup.", note: "taste: action = tasting with a spoon" }
        ],
        specialNote: "Verbs with dual meanings: appear, expect, feel, fit, have, imagine, look, measure, see, think, weigh."
      },
      {
        id: "C",
        title: "Mental state verbs",
        content: "With some verbs describing mental states (e.g. find, realise, regret, think, understand) we can use the present continuous to emphasise that we have recently started to think about something or that we are not sure about something.",
        contentBurmese: "Find, realise, regret, think, understand ကဲ့သို့သော စိတ်ပိုင်းဆိုင်ရာကြိယာများတွင် မကြာသေးမီကမှ စတင်တွေးတောမိခြင်း သို့မဟုတ် သေချာမှုမရှိသေးခြင်းကို ဖော်ပြရန် Continuous သုံးနိုင်သည်။",
        examples: [
          { text: "I regret that the company will have to be sold.", note: "(= I've made the decision and I'm sorry about it)" },
          { text: "I'm regretting my decision to give her the job.", note: "(= I'm increasingly aware that it was the wrong decision)", burmeseNote: "မှားသွားပြီလားဟု တဖြည်းဖြည်း နောင်တရစပြုလာခြင်း" },
          { text: "He's considering taking early retirement.", note: "consider = think carefully about (often continuous)" }
        ]
      },
      {
        id: "D",
        title: "Performatives (Verbs performing the action)",
        content: "Verbs which perform the action they describe (= performatives) usually take the present simple: acknowledge, admit, advise, apologise, beg, confess, congratulate, declare, deny, forbid, guarantee, name, order, permit, predict, promise, refuse, remind, request, thank, warn.",
        contentBurmese: "မိမိပြောလိုက်သော စကားလုံးကိုယ်တိုင်သည် လုပ်ဆောင်ချက်ဖြစ်သွားသော Performatives ကြိယာများ (အကြံပေးသည်၊ ကတိပေးသည်၊ တောင်းပန်သည် စသည်) သည် ပုံမှန်အားဖြင့် Present Simple သုံးရသည်။",
        examples: [
          { text: "I suggest you park outside the city and get the bus to the centre.", note: "performative in present simple" },
          { text: "We request that you read the terms and conditions carefully before signing.", note: "formal performative" },
          { text: "I don't deny taking the books.", note: "Negative sentences can take simple or continuous" },
          { text: "We would advise you to arrive two hours before the flight leaves.", note: "Modals are often used with performatives to make what we say more tentative or polite." }
        ]
      }
    ],
    exercises: [
      {
        id: "1.1",
        title: "Exercise 1.1: State vs Action Verbs",
        instruction: "Complete each pair of sentences using the same verb from the box. Use the present continuous; if this is not possible, use the present simple. Use contracted forms where appropriate.",
        instructionBurmese: "Box ထဲရှိ ကြိယာတစ်ခုတည်းကို သုံး၍ ဝါကျတွဲများကို ဖြည့်ပါ။ Continuous သုံး၍ရပါက သုံးပြီး မရပါက Present Simple သုံးပါ။",
        wordBank: ["attract", "consist of", "doubt", "feel", "fit", "have", "like", "look", "measure", "sound"],
        type: "fill-in",
        questions: [
          {
            id: "1a",
            prompt: "1 a) I hear you're having your house repainted. How ______ ?",
            prefix: "How ",
            suffix: "? (look)",
            correctAnswer: ["'s it looking", "is it looking", "does it look"],
            alternatives: ["is it looking", "does it look"],
            explanation: "''s it looking' (or 'does it look') because the house painting is an ongoing temporary process.",
            explanationBurmese: "အိမ်ဆေးသုတ်နေဆဲ ယာယီအခြေအနေမေးခြင်းဖြစ်၍ ''s it looking' သို့မဟုတ် 'does it look' သုံးနိုင်သည်။"
          },
          {
            id: "1b",
            prompt: "1 b) I bought this new dress today. How ______ ?",
            prefix: "How ",
            suffix: "? (look)",
            correctAnswer: ["does it look"],
            explanation: "'does it look' because we are asking about a state / appearance.",
            explanationBurmese: "အဝတ်အစား၏ အသွင်အပြင် (state) ဖြစ်၍ 'does it look' သာ သုံးသည်။"
          },
          {
            id: "2a",
            prompt: "2 a) A: What are you doing with that ruler? B: I ______ the area of the kitchen.",
            prefix: "B: I ",
            suffix: " the area of the kitchen. (measure)",
            correctAnswer: ["'m measuring", "am measuring"],
            alternatives: ["am measuring"],
            explanation: "'am / 'm measuring' describes the physical action of measuring.",
            explanationBurmese: "တိုင်းတာနေသော လုပ်ဆောင်ချက် (Action) ဖြစ်၍ 'am measuring' / ''m measuring'။"
          },
          {
            id: "2b",
            prompt: "2 b) The garden ______ 12 by 20 metres.",
            prefix: "The garden ",
            suffix: " 12 by 20 metres. (measure)",
            correctAnswer: ["measures"],
            explanation: "'measures' describes the permanent dimension/state.",
            explanationBurmese: "အတိုင်းအတာပမာဏ (State) ဖြစ်၍ 'measures'။"
          },
          {
            id: "3a",
            prompt: "3 a) I ______ whether I'll get another chance to retake the exam.",
            prefix: "I ",
            suffix: " whether I'll get another chance to retake the exam. (doubt)",
            correctAnswer: ["doubt"],
            explanation: "'doubt' is a mental state verb and rarely takes continuous forms.",
            explanationBurmese: "'Doubt' သည် သံသယဖြစ်ခြင်း (State verb) ဖြစ်၍ Simple 'doubt' သာ သုံးသည်။"
          },
          {
            id: "3b",
            prompt: "3 b) I suppose she might be at home tonight, but I ______ it.",
            prefix: "but I ",
            suffix: " it. (doubt)",
            correctAnswer: ["doubt"],
            explanation: "'doubt' expresses disbelief/state and is used in the simple form.",
            explanationBurmese: "'doubt' သည် State verb ဖြစ်၍ 'doubt' သာ သုံးသည်။"
          },
          {
            id: "4a",
            prompt: "4 a) The new science museum currently ______ 10,000 visitors a month.",
            prefix: "The new science museum currently ",
            suffix: " 10,000 visitors a month. (attract)",
            correctAnswer: ["is currently attracting", "is attracting", "'s attracting", "attracts"],
            alternatives: ["is attracting", "attracts"],
            explanation: "'is currently attracting' (temporary situation) or 'attracts' (general state).",
            explanationBurmese: "လက်ရှိယာယီအခြေအနေအတွက် 'is attracting' သို့မဟုတ် ပုံမှန်အခြေအနေအတွက် 'attracts' နှစ်မျိုးလုံး သုံးနိုင်သည်။"
          },
          {
            id: "4b",
            prompt: "4 b) Flowers ______ bees with their brightly-coloured petals.",
            prefix: "Flowers ",
            suffix: " bees with their brightly-coloured petals. (attract)",
            correctAnswer: ["attract"],
            explanation: "General scientific fact/nature uses present simple.",
            explanationBurmese: "သဘာဝအမှန်တရား (General fact) ဖြစ်၍ Present Simple 'attract' သုံးသည်။"
          },
          {
            id: "5a",
            prompt: "5 a) Carlos won't work at the top of the 20-storey building because he ______ heights.",
            prefix: "because he ",
            suffix: " heights. (like - negative)",
            correctAnswer: ["doesn't like", "does not like"],
            alternatives: ["does not like"],
            explanation: "'doesn't like' refers to a permanent preference/feeling.",
            explanationBurmese: "အမြဲတမ်းခံစားချက် (state) ဖြစ်၍ 'doesn't like' သုံးသည်။"
          },
          {
            id: "5b",
            prompt: "5 b) A: How's the new job? B: Well, at the moment, I ______ it at all.",
            prefix: "B: Well, at the moment, I ",
            suffix: " it at all. (like - negative)",
            correctAnswer: ["'m not liking", "am not liking", "don't like", "do not like"],
            alternatives: ["am not liking", "don't like"],
            explanation: "''m not liking' (emphasising temporary reaction at the moment) or 'don't like'.",
            explanationBurmese: "လတ်တလော ယာယီခံစားချက်ကို အလေးပေးလိုသဖြင့် ''m not liking' သို့မဟုတ် 'don't like' သုံးနိုင်သည်။"
          },
          {
            id: "6a",
            prompt: "6 a) My car's in the garage today. They ______ new brakes.",
            prefix: "They ",
            suffix: " new brakes. (fit)",
            correctAnswer: ["'re fitting", "are fitting"],
            alternatives: ["are fitting"],
            explanation: "'are fitting' describes the physical action taking place today.",
            explanationBurmese: "ယနေ့ ကားဝပ်ရှော့တွင် တပ်ဆင်ပေးနေသော လုပ်ဆောင်ချက် (Action) ဖြစ်၍ 'are fitting'။"
          },
          {
            id: "6b",
            prompt: "6 b) I bought this jumper for Anna, but it ______ her so I'll have to take it back.",
            prefix: "but it ",
            suffix: " her so I'll have to take it back. (fit - negative)",
            correctAnswer: ["doesn't fit", "does not fit"],
            alternatives: ["does not fit"],
            explanation: "'doesn't fit' describes size/state.",
            explanationBurmese: "ဆိုဒ်တော်မတော် (State) ဖြစ်၍ 'doesn't fit' သုံးသည်။"
          },
          {
            id: "7a",
            prompt: "7 a) What's your shirt made from? It ______ like silk.",
            prefix: "It ",
            suffix: " like silk. (feel)",
            correctAnswer: ["feels"],
            explanation: "'feels like silk' describes perception/state.",
            explanationBurmese: "ထိတွေ့မှုအာရုံခံစားမှု (State) ဖြစ်၍ 'feels' သုံးသည်။"
          },
          {
            id: "7b",
            prompt: "7 b) I won't be coming to work today. I ______ very well.",
            prefix: "I ",
            suffix: " very well. (feel - negative)",
            correctAnswer: ["'m not feeling", "am not feeling", "don't feel", "do not feel"],
            alternatives: ["am not feeling", "don't feel"],
            explanation: "''m not feeling' (temporary state of health today) or 'don't feel'.",
            explanationBurmese: "ယနေ့ နေမကောင်းသည့် ယာယီအခြေအနေအတွက် ''m not feeling' သို့မဟုတ် 'don't feel' သုံးနိုင်သည်။"
          },
          {
            id: "8a",
            prompt: "8 a) The roof of the house ______ only plastic sheets nailed down in a few places.",
            prefix: "The roof of the house ",
            suffix: " only plastic sheets nailed down in a few places. (consist of)",
            correctAnswer: ["consists of"],
            explanation: "'consist of' is a state verb that never takes continuous forms.",
            explanationBurmese: "'consist of' သည် State verb ဖြစ်၍ continuous မသုံးရဘဲ 'consists of' သာ သုံးသည်။"
          },
          {
            id: "8b",
            prompt: "8 b) Their school uniform ______ black trousers and a dark green jumper.",
            prefix: "Their school uniform ",
            suffix: " black trousers and a dark green jumper. (consist of)",
            correctAnswer: ["consists of"],
            explanation: "'consist of' is a state verb: 'consists of'.",
            explanationBurmese: "'consist of' သည် State verb ဖြစ်၍ 'consists of' သာ သုံးသည်။"
          },
          {
            id: "9a",
            prompt: "9 a) Simon's new song ______ quite good, but he doesn't think he's ready yet to perform it in public.",
            prefix: "Simon's new song ",
            suffix: " quite good, but he doesn't think... (sound)",
            correctAnswer: ["'s sounding", "is sounding", "sounds"],
            alternatives: ["is sounding", "sounds"],
            explanation: "'is sounding' (temporary progress/impression) or 'sounds' (general state).",
            explanationBurmese: "'is sounding' သို့မဟုတ် 'sounds' နှစ်မျိုးလုံး သုံးနိုင်သည်။"
          },
          {
            id: "9b",
            prompt: "9 b) A: What's that noise? B: It ______ like a bird stuck in the chimney.",
            prefix: "B: It ",
            suffix: " like a bird stuck in the chimney. (sound)",
            correctAnswer: ["sounds"],
            explanation: "'sounds like' = auditory perception / state.",
            explanationBurmese: "အသံကြားရသည့် သဘော (State) ဖြစ်၍ 'sounds' သုံးသည်။"
          },
          {
            id: "10a",
            prompt: "10 a) Poulson ______ treatment for a knee injury, but should be fit to play on Saturday.",
            prefix: "Poulson ",
            suffix: " treatment for a knee injury... (have)",
            correctAnswer: ["'s having", "is having"],
            alternatives: ["is having"],
            explanation: "'is having treatment' describes an active ongoing medical process.",
            explanationBurmese: "ကုသမှုခံယူနေဆဲ လုပ်ဆောင်ချက် (Action) ဖြစ်၍ 'is having' / ''s having'။"
          },
          {
            id: "10b",
            prompt: "10 b) My sister ______ long blonde hair. You're bound to recognise her.",
            prefix: "My sister ",
            suffix: " long blonde hair. (have)",
            correctAnswer: ["has"],
            explanation: "'has' describes permanent physical possession/characteristic.",
            explanationBurmese: "ဆံပင်ပိုင်ဆိုင်မှု (State) ဖြစ်၍ 'has' သာ သုံးသည်။"
          }
        ]
      },
      {
        id: "1.2",
        title: "Exercise 1.2: Performative & Mental State Verbs in Context",
        instruction: "Select the correct or more natural verb form in this letter to Aunt Mara. Choose the natural option(s).",
        instructionBurmese: "Aunt Mara ထံသို့ ပေးစာပါ ကွက်လပ်များအတွက် သဘာဝကျသော ကြိယာပုံစံကို ရွေးချယ်ပါ။",
        type: "underline-choice",
        questions: [
          {
            id: "1",
            prompt: "Dear Aunt Mara, Thanks for your message. I (1) [apologise / 'm apologising] for not getting back to you sooner...",
            options: ["apologise", "'m apologising"],
            correctAnswer: "apologise",
            explanation: "As an affirmative performative verb giving an apology, the present simple 'apologise' is standard.",
            explanationBurmese: "ကတိ/တောင်းပန်စကား (Performative) ဖြစ်သဖြင့် Present Simple 'apologise' သုံးသည်။"
          },
          {
            id: "2",
            prompt: "...you warned me that it would be really hard work, but I (2) [admit / 'm admitting] that I didn't really believe you.",
            options: ["admit", "'m admitting"],
            correctAnswer: "admit",
            explanation: "'admit' is an affirmative performative verb here: 'I admit'.",
            explanationBurmese: "ဝန်ခံခြင်း (Performative) ဖြစ်၍ 'admit' (present simple) သုံးသည်။"
          },
          {
            id: "3",
            prompt: "Don't get me wrong - I (3) [don't suggest / 'm not suggesting] that I'm not enjoying it.",
            options: ["don't suggest", "'m not suggesting", "Both are possible"],
            correctAnswer: "Both are possible",
            explanation: "In negative sentences, performatives like 'suggest' can take either present simple ('don't suggest') or continuous (''m not suggesting').",
            explanationBurmese: "အငြင်းဝါကျတွင် performatives များသည် simple သို့မဟုတ် continuous ၂ မျိုးလုံး ဖြစ်နိုင်သည်။"
          },
          {
            id: "4",
            prompt: "...It's incredibly rewarding, but I (4) [now realise / 'm now realising] how hard the job is.",
            options: ["now realise", "'m now realising", "Both are possible"],
            correctAnswer: "Both are possible",
            explanation: "With mental state verbs, we can use present simple ('now realise') or continuous (''m now realising' to show increasing awareness).",
            explanationBurmese: "သဘောပေါက်စပြုလာခြင်းကို ဖော်ပြရန် 'now realise' သို့မဟုတ် ''m now realising' နှစ်မျိုးလုံး ဖြစ်နိုင်သည်။"
          },
          {
            id: "5",
            prompt: "When I get home I just eat (not very well, I (5) [confess / 'm confessing]) and go straight to bed.",
            options: ["confess", "'m confessing"],
            correctAnswer: "confess",
            explanation: "'confess' is an affirmative performative verb: 'I confess'.",
            explanationBurmese: "ဝန်ခံခြင်း performative ဖြစ်၍ 'confess' သုံးသည်။"
          },
          {
            id: "6",
            prompt: "It doesn't help that the bus journey to the hospital is so slow. I (6) [consider / 'm considering] buying a car...",
            options: ["'m considering", "consider"],
            correctAnswer: "'m considering",
            explanation: "'consider' meaning 'think carefully about' takes the continuous: 'I'm considering'.",
            explanationBurmese: "'စဉ်းစားနေသည် (think carefully about)' အဓိပ္ပာယ်တွင် 'I'm considering' ကို သုံးသည်။"
          },
          {
            id: "7",
            prompt: "And what about you? How (7) [do you find / are you finding] living in a village after so many years in the city?",
            options: ["do you find", "are you finding", "Both are possible"],
            correctAnswer: "Both are possible",
            explanation: "Both 'do you find' (general state) and 'are you finding' (temporary adjustment) are acceptable.",
            explanationBurmese: "'do you find' သို့မဟုတ် 'are you finding' နှစ်မျိုးလုံး သုံးနိုင်သည်။"
          },
          {
            id: "8",
            prompt: "I (8) [know / 'm knowing] how difficult it is for you to travel such a long way...",
            options: ["know", "'m knowing"],
            correctAnswer: "know",
            explanation: "'know' is a mental state verb that is not used in the continuous: 'I know'.",
            explanationBurmese: "'know' သည် State verb ဖြစ်၍ continuous မဖြစ်နိုင်ဘဲ 'know' သာ သုံးသည်။"
          },
          {
            id: "9",
            prompt: "...I (9) [don't guarantee / 'm not guaranteeing] to cook as well as you do...",
            options: ["don't guarantee", "'m not guaranteeing", "Both are possible"],
            correctAnswer: "Both are possible",
            explanation: "In negative sentences, performatives like 'guarantee' can use either present simple or continuous.",
            explanationBurmese: "အငြင်းဝါကျတွင် 'don't guarantee' သို့မဟုတ် ''m not guaranteeing' နှစ်မျိုးလုံး ဖြစ်နိုင်သည်။"
          },
          {
            id: "10",
            prompt: "...but I (10) [promise / 'm promising] to find time to show you around this lovely old town.",
            options: ["promise", "'m promising"],
            correctAnswer: "promise",
            explanation: "Affirmative performative verb making a promise: 'I promise'.",
            explanationBurmese: "ကတိပေးခြင်း (affirmative performative) ဖြစ်၍ 'promise' သာ သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 2
  {
    id: 2,
    title: "Using present continuous and present simple",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Master the present simple and continuous in storytelling, jokes, sports commentaries, news reports, headlines, and with adverbs of frequency like always and forever.",
    summaryBurmese: "ပုံပြင်ပြောခြင်း၊ ဟာသပြောခြင်း၊ အားကစားတိုက်ရိုက်သုံးသပ်ချက်၊ သတင်းခေါင်းစဉ်များနှင့် always/forever တို့နှင့် Continuous သုံးစွဲပုံ အတိအကျ။",
    keyPoints: [
      "Stories and jokes use present simple for main events in sequence and present continuous for background events.",
      "Live commentaries (sports) use present simple for rapid actions ('passes', 'shoots') and present continuous for longer background action.",
      "Present simple phrases ('It says here', 'I gather', 'I see', 'They say') introduce news heard or read.",
      "Newspaper headlines use present simple for recent events ('SECOND QUAKE HITS JAPAN').",
      "Present continuous with 'always', 'constantly', 'continually', 'forever' emphasizes actions done so often they are characteristic or show disapproval."
    ],
    keyPointsBurmese: [
      "ဟာသနှင့် ပုံပြင်ပြောရာတွင် အဓိကဖြစ်ရပ်များအတွက် Present Simple သုံးပြီး ဇာတ်လမ်းနောက်ခံအတွက် Continuous သုံးသည်။",
      "အားကစားတိုက်ရိုက်သုံးသပ်ချက်တွင် ချက်ချင်းပြီးဆုံးသော လုပ်ဆောင်ချက်များအတွက် Present Simple ('passes', 'shoots') သုံးသည်။",
      "'I see', 'I gather', 'They say' စသော Present Simple အသုံးအနှုန်းများဖြင့် ကြားသိရသော သတင်းများကို မိတ်ဆက်သည်။",
      "သတင်းစာခေါင်းစဉ်များတွင် Present Simple ဖြင့် ရေးသားဖော်ပြသည်။",
      "အမြဲမပြတ်ပြုလုပ်လေ့ရှိသော သို့မဟုတ် စိတ်အနှောင့်အယှက်ဖြစ်စေသော အမူအကျင့်များအတွက် always, forever, constantly တို့နှင့် Present Continuous တွဲသုံးသည်။"
    ],
    reminderRefs: ["A1", "A2", "A3", "A4", "A5"],
    sections: [
      {
        id: "A",
        title: "Stories and jokes in spoken English",
        content: "We often use the present simple and present continuous when telling stories and jokes in informal spoken English to create the impression that events are happening now. The main events are usually described in sequence using the present simple and longer background events are described using the present continuous.",
        contentBurmese: "ဟာသ (jokes) သို့မဟုတ် ဇာတ်လမ်းပြောရာတွင် ပိုမိုသက်ဝင်ထင်ရှားစေရန် အဓိကဖြစ်ရပ်များကို Present Simple ဖြင့် အစဉ်လိုက်ပြောပြီး နောက်ခံအခြေအနေကို Continuous ဖြင့် ပြောသည်။",
        examples: [
          { text: "She goes up to this man and looks straight into his eyes. He's not wearing his glasses, and he doesn't recognise her...", note: "goes/looks = main events (simple); 's not wearing = background (continuous)" },
          { text: "This man's playing golf when a kangaroo bounds up to him, grabs his club and hits his ball about half a mile...", note: "playing = background; bounds/grabs/hits = main actions" },
          { text: "I was in the park reading a newspaper, when all of a sudden this dog jumps at me.", note: "used after past tenses with 'all of a sudden' to highlight an event" }
        ]
      },
      {
        id: "B",
        title: "Live commentaries",
        content: "We also use the present simple and present continuous in live commentaries (for example, on sports events) when the report takes place at the same time as the action.",
        contentBurmese: "အားကစားပြိုင်ပွဲများ တိုက်ရိုက်ထုတ်လွှင့်သုံးသပ်ရာတွင် အချိန်တိုအတွင်း ဖြစ်ပေါ်သော လှုပ်ရှားမှုများအတွက် Present Simple နှင့် တစ်ပြိုင်နက်ဖြစ်ပျက်နေသော နောက်ခံလှုပ်ရှားမှုအတွက် Continuous ကို သုံးသည်။",
        examples: [
          { text: "King serves to the left-hand court and Adams makes a wonderful return. She's playing magnificent tennis in this match...", note: "serves/makes = rapid actions (simple); 's playing = overall match performance (continuous)" }
        ]
      },
      {
        id: "C",
        title: "Phrases introducing news we have heard or read",
        content: "We can use the present simple in phrases such as 'It says here', 'I hear', 'I gather', 'I see', 'I understand' and 'They say', '(Someone) says', '(Someone) tells me' to introduce news that we have heard, read, seen, or been told.",
        contentBurmese: "ကြားသိဖတ်ရှုရသော သတင်းများကို မိတ်ဆက်ရန် 'It says here', 'I gather', 'I see', 'I understand', 'They say' စသော Present Simple စကားစုများကို သုံးသည်။",
        examples: [
          { text: "I gather you're worried about Pedro.", note: "I gather = I have heard / understood" },
          { text: "Sophia tells me you're thinking of emigrating.", note: "Sophia tells me = Sophia said to me" },
          { text: "Professor Hendriks is at the conference and I hear she's an excellent speaker.", note: "I hear = I have been told" }
        ]
      },
      {
        id: "D",
        title: "News headlines and referring to contents of books/films",
        content: "The present simple is often used in news headlines to talk about events that have recently happened. We also use the present simple to refer to the contents of books, films, newspapers, etc.",
        contentBurmese: "မကြာမီက ဖြစ်ပျက်ခဲ့သော အဖြစ်အပျက်များအတွက် သတင်းစာခေါင်းစဉ်များတွင် Present Simple ကို သုံးသည်။ ဝတ္ထု၊ ရုပ်ရှင် အကြောင်းအရာများကို ညွှန်းဆိုရာတွင်လည်း Present Simple သုံးသည်။",
        examples: [
          { text: "SECOND QUAKE HITS JAPAN", note: "News headline in present simple" },
          { text: "FIRE BREAKS OUT IN HOTEL ROOM", note: "News headline in present simple" },
          { text: "SCIENTISTS FIND ICE ON THE MOON", note: "News headline in present simple" },
          { text: "Thompson gives a list of the largest European companies in Chapter 6.", note: "Referring to contents of a book" },
          { text: "In the film, Loni Baranski takes the role of a private detective.", note: "Referring to a film" }
        ]
      },
      {
        id: "E",
        title: "Present continuous with always, constantly, continually, forever",
        content: "We can use the present continuous with adverbs such as always, constantly, continually or forever to emphasise that something is done so often that it is characteristic of a person, group or thing. We often use this pattern to indicate disapproval. We can also use the present continuous to describe something we regularly do at a certain time.",
        contentBurmese: "Always, constantly, continually, forever တို့နှင့် Present Continuous ကို တွဲသုံးခြင်းဖြင့် အလေ့အထဖြစ်နေခြင်း သို့မဟုတ် မနှစ်သက်သော အပြုအမူကို အလေးပေးဖော်ပြနိုင်သည်။ သတ်မှတ်အချိန်တစ်ခုတွင် ပုံမှန်ပြုလုပ်နေကျ အခြေအနေအတွက်လည်း သုံးနိုင်သည်။",
        examples: [
          { text: "A: I think I'll stay here after all. B: You're constantly changing your mind.", note: "Indicating disapproval of frequent changing" },
          { text: "Jacob is a really kind person. He's always offering to help me with my work.", note: "Characteristic generous habit" },
          { text: "At eight o'clock I'm usually driving to work, so phone me on my mobile.", note: "Regular activity in progress at a specific time" }
        ]
      }
    ],
    exercises: [
      {
        id: "2.1",
        title: "Exercise 2.1: Commentary & Storytelling Verbs",
        instruction: "Complete these sentences using the verbs in brackets. Use the present simple or present continuous.",
        instructionBurmese: "ကွင်းစကွင်းပိတ်အတွင်းရှိ ကြိယာများကို သုံး၍ Present Simple သို့မဟုတ် Continuous ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. Rodríguez passes to De Mello, who (1) ______ just over the bar. The home team (2) ______ much more in this half... (shoot - attack)",
            prefix: "who ",
            suffix: " just over the bar. The home team are attacking...",
            correctAnswer: ["shoots"],
            explanation: "'shoots' for the sudden commentary action; 'are attacking' for the continuous pressure in this half.",
            explanationBurmese: "ချက်ချင်းပြီးသော လုပ်ဆောင်ချက်ဖြစ်၍ 'shoots'။"
          },
          {
            id: "2",
            prompt: "2. A man (1) ______ home late one night after the office Christmas party. His wife (2) ______ for him, and she (3) ______ to him ... (arrive - wait - say)",
            prefix: "A man ",
            suffix: " home... His wife is waiting... and she says...",
            correctAnswer: ["arrives"],
            explanation: "In a joke/story, main narrative events use the present simple ('arrives', 'says') and background situations use present continuous ('is waiting').",
            explanationBurmese: "ဟာသ/ပုံပြင်တွင် အဓိကဖြစ်ရပ်အတွက် 'arrives' / 'says' (simple) နှင့် နောက်ခံအတွက် 'is waiting' (continuous) သုံးသည်။"
          },
          {
            id: "3",
            prompt: "3. I went to a concert yesterday in the Town Hall. In the middle of it, while the orchestra (1) ______ , this man suddenly (2) ______ on his seat and (3) ______ to conduct them. (play - stand - start)",
            prefix: "while the orchestra was playing, this man suddenly ",
            suffix: " on his seat and starts to conduct them.",
            correctAnswer: ["stands", "is playing, stands, starts"],
            alternatives: ["stands"],
            explanation: "After past tense narrative, 'all of a sudden / suddenly' introduces dramatic present simple: 'stands', 'starts'.",
            explanationBurmese: "'suddenly' ဖြင့် အဓိကဇာတ်လမ်းကို ထင်ရှားစေရန် 'stands' နှင့် 'starts' (present simple) သုံးသည်။"
          }
        ]
      },
      {
        id: "2.2",
        title: "Exercise 2.2: Reporting News with Present Tense Phrases",
        instruction: "Complete what each person says about the news they have read or heard using the present tense phrases in C.",
        instructionBurmese: "Section C ပါ အသုံးအနှုန်းများကို သုံး၍ ကြားသိရသော သတင်းများကို ပြန်လည်ဖော်ပြပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. Headline: 'Government gives health service billions' -> I see ______",
            prefix: "I see ",
            suffix: " a lot more money.",
            correctAnswer: ["the government's giving the health service", "the government is giving the health service"],
            alternatives: ["the government is giving the health service"],
            explanation: "'I see the government's giving / is giving the health service a lot more money.'",
            explanationBurmese: "'I see' ဖြင့် စတင်၍ သတင်းကို မိတ်ဆက်သည်။"
          },
          {
            id: "2",
            prompt: "2. Headline: 'Vegecorp to sack 1,000 workers.' -> I gather ______",
            prefix: "I gather ",
            suffix: " 1,000 workers.",
            correctAnswer: ["Vegecorp are going to sack", "Vegecorp is going to sack"],
            alternatives: ["Vegecorp is going to sack"],
            explanation: "'I gather Vegecorp are / is going to sack 1,000 workers.'",
            explanationBurmese: "'I gather' ဖြင့် ကြားသိရသော အကြောင်းအရာကို ဖော်ပြသည်။"
          },
          {
            id: "3",
            prompt: "3. 'President Bergman announced a new public holiday on his birthday, August 6th.' -> I understand ______",
            prefix: "I understand ",
            suffix: " a new public holiday for the President's birthday.",
            correctAnswer: ["we're going to have", "we are going to have"],
            alternatives: ["we are going to have"],
            explanation: "'I understand we're going to have a new public holiday...'",
            explanationBurmese: "'I understand' ဖြင့် တရားဝင် ကြားသိရသော သတင်းကို ဖော်ပြသည်။"
          },
          {
            id: "4",
            prompt: "4. Ed: 'Did you hear that Bruno's crashed his car again?' -> Ed tells me ______",
            prefix: "Ed tells me ",
            suffix: " car again.",
            correctAnswer: ["Bruno's crashed his", "Bruno has crashed his"],
            alternatives: ["Bruno has crashed his"],
            explanation: "'Ed tells me Bruno's / has crashed his car again.'",
            explanationBurmese: "'Ed tells me' ဖြင့် ကြားသိရသော စကားကို သွယ်ဝိုက်ဖော်ပြသည်။"
          },
          {
            id: "5",
            prompt: "5. Julia: 'I've got a new job.' -> Julia says ______",
            prefix: "Julia says ",
            suffix: " a new job.",
            correctAnswer: ["she's got", "she has got"],
            alternatives: ["she has got"],
            explanation: "'Julia says she's got a new job.'",
            explanationBurmese: "'Julia says' ဖြင့် ပြောကြားချက်ကို သတင်းပေးသည်။"
          },
          {
            id: "6",
            prompt: "6. 'A team of researchers claims to have identified a gene...' -> They say ______",
            prefix: "They say ",
            suffix: " a gene which causes some people to sleep more than others.",
            correctAnswer: ["they've identified", "they have identified"],
            alternatives: ["they have identified"],
            explanation: "'They say they've identified a gene...'",
            explanationBurmese: "'They say' ဖြင့် အများပြောဆိုနေကြသော သုတေသနသတင်းကို ဖော်ပြသည်။"
          }
        ]
      },
      {
        id: "2.3",
        title: "Exercise 2.3: Expressing Disapproval with Always / Forever / Continually",
        instruction: "Expand one of the sets of notes below to complete each dialogue using present continuous with always, forever, constantly, or continually.",
        instructionBurmese: "Always / forever / constantly / continually တို့နှင့် Present Continuous ကို တွဲသုံး၍ စကားပြောဆိုမှုများကို ဖြည့်စွက်ပါ။",
        wordBank: ["continually / change / mind", "forever / moan / work", "forever / ask me / money", "constantly / criticise / driving", "always / complain / handwriting"],
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. A: I can't read this. B: You're ______",
            prefix: "B: You're ",
            suffix: ".",
            correctAnswer: ["always complaining about my handwriting"],
            explanation: "'You're always complaining about my handwriting.'",
            explanationBurmese: "အမြဲတမ်း ညည်းညူနေတတ်သည့် အလေ့အထကို ဖော်ပြသည်။"
          },
          {
            id: "2",
            prompt: "2. A: Can I borrow €10? B: You're ______",
            prefix: "B: You're ",
            suffix: ".",
            correctAnswer: ["forever asking me for money"],
            explanation: "'You're forever asking me for money.'",
            explanationBurmese: "ပိုက်ဆံ အမြဲတောင်းနေတတ်သည့် အကျင့်ကို အပြစ်တင်ဖော်ပြသည်။"
          },
          {
            id: "3",
            prompt: "3. A: That was a dangerous thing to do. B: You're ______",
            prefix: "B: You're ",
            suffix: ".",
            correctAnswer: ["constantly criticising my driving"],
            explanation: "'You're constantly criticising my driving.'",
            explanationBurmese: "ကားမောင်းခြင်းကို အမြဲတစေ ဝေဖန်နေတတ်သည်ဟု ပြန်ပြောခြင်းဖြစ်သည်။"
          },
          {
            id: "4",
            prompt: "4. A: I think I'll stay here after all. B: You're ______",
            prefix: "B: You're ",
            suffix: ".",
            correctAnswer: ["continually changing your mind"],
            explanation: "'You're continually changing your mind.'",
            explanationBurmese: "စိတ်ကူးခဏခဏ ပြောင်းနေခြင်းကို မနှစ်သက်ကြောင်း ပြသသည်။"
          },
          {
            id: "5",
            prompt: "5. A: I had a bad day at the office again. B: You're ______",
            prefix: "B: You're ",
            suffix: ".",
            correctAnswer: ["forever moaning about your work", "forever moaning about work"],
            alternatives: ["forever moaning about work"],
            explanation: "'You're forever moaning about (your) work.'",
            explanationBurmese: "အလုပ်အကြောင်း အမြဲညည်းတွားနေသည်ဟု ပြောဆိုခြင်းဖြစ်သည်။"
          }
        ]
      },
      {
        id: "2.4",
        title: "Exercise 2.4: Dual Habitual vs Ongoing Contexts",
        instruction: "Complete each pair of sentences using the same verb (in negative form if necessary). Use present continuous or present simple.",
        instructionBurmese: "ကြိယာတစ်ခုတည်းကို သုံး၍ ဝါကျတွဲများကို Present Continuous သို့မဟုတ် Present Simple ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1a",
            prompt: "1 a) A: Shall I phone at six? B: No, we usually ______ dinner at that time. (eat)",
            prefix: "B: No, we usually ",
            suffix: " dinner at that time. (eat)",
            correctAnswer: ["'re eating", "are eating", "eat"],
            alternatives: ["are eating", "eat"],
            explanation: "''re (are) usually eating' emphasizes an activity in progress at six o'clock ('eat' is also possible).",
            explanationBurmese: "၆ နာရီတွင် ထမင်းစားနေဆဲဖြစ်မည်ကို အလေးပေးသဖြင့် ''re eating' သို့မဟုတ် 'eat' သုံးနိုင်သည်။"
          },
          {
            id: "1b",
            prompt: "1 b) I ______ lamb, thanks. I'm a vegetarian. (eat - negative)",
            prefix: "I ",
            suffix: " lamb, thanks. I'm a vegetarian. (eat)",
            correctAnswer: ["don't eat", "do not eat"],
            alternatives: ["do not eat"],
            explanation: "Permanent dietary habit/principle uses present simple: 'don't eat'.",
            explanationBurmese: "အမြဲတမ်းအလေ့အထ (vegetarian) ဖြစ်၍ 'don't eat' သုံးသည်။"
          },
          {
            id: "2a",
            prompt: "2 a) Gielman ______ Henry V in the latest production at the Royal Theatre. (play)",
            prefix: "Gielman ",
            suffix: " Henry V in the latest production... (play)",
            correctAnswer: ["plays", "is playing"],
            alternatives: ["is playing"],
            explanation: "'plays' or 'is playing' (both possible for theatrical role / current run).",
            explanationBurmese: "ပြဇာတ်တွင် ပါဝင်သရုပ်ဆောင်နေခြင်းအတွက် 'plays' သို့မဟုတ် 'is playing' သုံးနိုင်သည်။"
          },
          {
            id: "2b",
            prompt: "2 b) They constantly ______ loud music until the early hours of the morning. (play)",
            prefix: "They constantly ",
            suffix: " loud music until the early hours... (play)",
            correctAnswer: ["'re playing", "are playing"],
            alternatives: ["are playing"],
            explanation: "With 'constantly' expressing annoying habit: 'are constantly playing'.",
            explanationBurmese: "'constantly' ဖြင့် စိတ်အနှောင့်အယှက်ဖြစ်ရသော အလေ့အထကို ဖော်ပြသဖြင့် 'are playing' သုံးသည်။"
          },
          {
            id: "3a",
            prompt: "3 a) I normally ______ the children to school at 8:30. Perhaps we could meet at 9:00. (take)",
            prefix: "I normally ",
            suffix: " the children to school at 8:30. (take)",
            correctAnswer: ["'m taking", "am taking", "take"],
            alternatives: ["am taking", "take"],
            explanation: "''m normally taking' (activity in progress around that scheduled time) or 'take'.",
            explanationBurmese: "ထိုအချိန်၌ ကလေးပို့နေဆဲဖြစ်မည်ကို အလေးပေးသဖြင့် ''m taking' သို့မဟုတ် 'take' သုံးနိုင်သည်။"
          },
          {
            id: "3b",
            prompt: "3 b) In his recent book, Wall ______ a controversial view of Britain's role in the war. (take)",
            prefix: "Wall ",
            suffix: " a controversial view of Britain's role... (take)",
            correctAnswer: ["takes"],
            explanation: "Referring to the permanent content of a book uses present simple: 'takes'.",
            explanationBurmese: "စာအုပ်ပါ အကြောင်းအရာကို ညွှန်းဆိုသဖြင့် 'takes' (present simple) သာ သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 3
  {
    id: 3,
    title: "Past simple and present perfect",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Distinguish between past simple and present perfect with time expressions (this morning/today), clauses with 'since', time conjunctions, news reports, and ordinal phrases.",
    summaryBurmese: "လက်ရှိကာလနှင့် ဆက်စပ်နေသော အချိန်ပြစကားလုံးများ၊ since ပါသော ဝါကျများ၊ သတင်းတင်ပြချက်များနှင့် the first time စသော အသုံးများတွင် Past Simple နှင့် Present Perfect ခွဲခြားသုံးစွဲပုံ။",
    keyPoints: [
      "Time expressions like 'this morning/today' take past simple if the period is finished, or present perfect if the period is still continuing.",
      "In sentences with 'since', the time clause usually takes past simple (referring to a past starting point) and the main clause takes present perfect.",
      "In time clauses (after, when, until, as soon as, once, by the time), past events use past simple/past perfect; future events use present perfect/present simple.",
      "News reports introduce an event with present perfect, then provide details with past simple.",
      "After 'It/This/That is / will be the first time...', use present perfect; after 'It was the first time...', use past perfect."
    ],
    keyPointsBurmese: [
      "This morning, today စသည်တို့တွင် အချိန်ကာလကုန်ဆုံးသွားပါက Past Simple သုံးပြီး၊ မကုန်ဆုံးသေးပါက Present Perfect သုံးသည်။",
      "Since ပါသော အချိန်ပြဝါကျခွဲတွင် Past Simple သုံးပြီး အဓိကဝါကျတွင် Present Perfect သုံးသည်။",
      "သတင်းများတွင် အဖြစ်အပျက်ကို Present Perfect ဖြင့် စတင်ဖော်ပြပြီး အသေးစိတ်အချက်အလက်ကို Past Simple ဖြင့် ဆက်လက်ဖော်ပြသည်။",
      "It is / will be the first time နောက်တွင် Present Perfect လိုက်ပြီး၊ It was the first time နောက်တွင် Past Perfect လိုက်သည်။"
    ],
    reminderRefs: ["A6", "A7", "A8", "A9", "A10", "A11", "A12"],
    sections: [
      {
        id: "A",
        title: "Time expressions referring to the present (this morning / week / month and today)",
        content: "Time expressions that refer to the present, such as this morning / week / month and today, can be used with either past simple or present perfect verbs. If we think of this morning (etc.) as a past, completed time period, then we use the past simple; if we think of this morning (etc.) as a time period which includes the present moment, then we use the present perfect.",
        contentBurmese: "This morning / week / today စသော စကားစုများတွင် ကာလအပိုင်းအခြား ပြီးဆုံးသွားပြီဟု ယူဆပါက Past Simple၊ ယခုအချိန်အထိ မကုန်ဆုံးသေးဟု ယူဆပါက Present Perfect သုံးသည်။",
        examples: [
          { text: "I didn't shave this morning.", note: "(= the morning is over and I didn't shave)" },
          { text: "I haven't shaved this morning.", note: "(= it is still the morning and I might shave later)" }
        ]
      },
      {
        id: "B",
        title: "Time clauses with since",
        content: "In a sentence which includes a time clause with since, we generally prefer a past simple verb in the time clause (referring to a particular point in the past) and a present perfect verb in the main clause. Note, however, that we use the present perfect in the time clause with since if the two situations described in the main clause and time clause extend until the present.",
        contentBurmese: "Since ပါသော ဝါကျတွင် အချိန်ပြဝါကျခွဲ၌ Past Simple နှင့် အဓိကဝါကျ၌ Present Perfect သုံးသည်။ အခြေအနေနှစ်ခုစလုံး လက်ရှိအထိ ဆက်လက်တည်ရှိနေပါက since နောက်တွင်လည်း Present Perfect သုံးနိုင်သည်။",
        examples: [
          { text: "Since Mr Dodson became president unemployment has increased.", note: "became = past point; has increased = up to now" },
          { text: "She hasn't been able to play tennis since she broke her arm.", note: "broke = specific past injury" },
          { text: "Have you met any of your neighbours since you've lived here?", note: "you've lived = still living here now" }
        ]
      },
      {
        id: "C",
        title: "Time clauses with after, when, until, as soon as, once, by the time",
        content: "With time clauses introduced by after, when, until, as soon as, once, by the time and the time expressions the minute / second / moment the past simple refers to past, completed events and the present perfect refers to future events.",
        contentBurmese: "After, when, until, as soon as, by the time စသည်တို့တွင် ပြီးခဲ့သော အတိတ်အတွက် Past Simple၊ နောင်အနာဂတ်အတွက် Present Perfect သုံးသည်။",
        examples: [
          { text: "After she left hospital (past), she had a long holiday.", note: "Past completed event" },
          { text: "After Lucas has left school (future), he will be spending six months in India.", note: "Future event in time clause using present perfect" },
          { text: "The minute I got the news about Anna (past) I telephoned my parents.", note: "Past event" },
          { text: "I'll contact you the minute I've got my exam results. (future)", note: "Future event using present perfect" }
        ]
      },
      {
        id: "D",
        title: "News reports: Present perfect introduction and past simple details",
        content: "In news reports, you will often read about or hear recent events introduced with the present perfect, and then the past simple or other past tenses are used to give details.",
        contentBurmese: "သတင်းများတွင် လတ်တလောအဖြစ်အပျက်ကို Present Perfect ဖြင့် ဦးစွာဖော်ပြပြီး၊ အသေးစိတ်အချက်များကို Past Simple ဖြင့် ဆက်လက်ဖော်ပြသည်။",
        examples: [
          { text: "A Russian spacecraft has returned safely to Earth with its two passengers. US astronaut Scott Keane and Russian cosmonaut Olga Kaleri landed in the early hours of Wednesday.", note: "has returned (present perfect intro) -> landed (past simple detail)" }
        ]
      },
      {
        id: "E",
        title: "It / This / That is the first time...",
        content: "After the pattern It / This / That is / will be the first time ... we generally use the present perfect in the next clause. Note that after It / This / That was the first time ... we generally use the past perfect.",
        contentBurmese: "It/This is the first time နောက်တွင် Present Perfect သုံးပြီး၊ It/This was the first time နောက်တွင် Past Perfect သုံးသည်။",
        examples: [
          { text: "That's the first time I've seen Jan look embarrassed.", note: "is the first time + present perfect" },
          { text: "It was the first time I'd talked to Dimitra outside the office.", note: "was the first time + past perfect" }
        ]
      }
    ],
    exercises: [
      {
        id: "3.1",
        title: "Exercise 3.1: Present Perfect vs Past Simple with Time Phrases",
        instruction: "Complete each sentence with a verb from the box. Use the present perfect or past simple, with a negative form where necessary.",
        instructionBurmese: "Box ထဲရှိ ကြိယာများကို သုံး၍ Present Perfect သို့မဟုတ် Past Simple ဖြင့် ဖြည့်ပါ။",
        wordBank: ["have", "go", "oversleep", "read", "spend", "wear"],
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. A: Shall I make us some dinner? It's already eight o'clock. B: No, thanks. I ______ to the dentist this afternoon and my mouth hurts too much to eat anything.",
            prefix: "B: No, thanks. I ",
            suffix: " to the dentist this afternoon... (go)",
            correctAnswer: ["went"],
            explanation: "'went' because at 8 o'clock 'this afternoon' is a completed past period.",
            explanationBurmese: "ည ၈ နာရီဖြစ်၍ နေ့လယ်ခင်း (this afternoon) သည် ပြီးဆုံးသွားသော အတိတ်ဖြစ်သဖြင့် 'went' သုံးသည်။"
          },
          {
            id: "2",
            prompt: "2. I ______ three lectures today and I still have two more later this afternoon.",
            prefix: "I ",
            suffix: " three lectures today and I still have two more... (have)",
            correctAnswer: ["'ve had", "have had"],
            alternatives: ["have had"],
            explanation: "'today' is still continuing ('still have two more later'), so use present perfect: ''ve had / have had'.",
            explanationBurmese: "ယနေ့ကာလ မပြီးဆုံးသေးသဖြင့် Present Perfect ''ve had' သုံးသည်။"
          },
          {
            id: "3",
            prompt: "3. It was so hot today that I ______ shorts and a T-shirt at work.",
            prefix: "It was so hot today that I ",
            suffix: " shorts and a T-shirt at work. (wear)",
            correctAnswer: ["wore"],
            explanation: "'It was so hot today' shows the speaker is looking back on the finished day: 'wore'.",
            explanationBurmese: "ပြီးဆုံးသွားသော အတိတ်အဖြစ် ယူဆသဖြင့် 'wore' (past simple) သုံးသည်။"
          },
          {
            id: "4",
            prompt: "4. We ______ £400 on food this month and there's another week to go before I get paid.",
            prefix: "We ",
            suffix: " £400 on food this month... (spend)",
            correctAnswer: ["'ve spent", "have spent"],
            alternatives: ["have spent"],
            explanation: "'this month' is not finished ('another week to go'): ''ve spent / have spent'.",
            explanationBurmese: "ဒီလ မကုန်သေးသဖြင့် Present Perfect ''ve spent' သုံးသည်။"
          },
          {
            id: "5",
            prompt: "5. A: Do you want a lift home? B: No, I ______ this morning because my alarm clock didn't go off, so I need to work late.",
            prefix: "B: No, I ",
            suffix: " this morning because my alarm clock didn't go off... (oversleep)",
            correctAnswer: ["overslept"],
            explanation: "'this morning' is a completed past time period: 'overslept'.",
            explanationBurmese: "မနက်ခင်းပြီးဆုံးသွားပြီဖြစ်၍ Past Simple 'overslept' သုံးသည်။"
          },
          {
            id: "6",
            prompt: "6. I ______ much of the report yet, but I have to finish it by the weekend.",
            prefix: "I ",
            suffix: " much of the report yet... (read - negative)",
            correctAnswer: ["haven't read", "have not read"],
            alternatives: ["have not read"],
            explanation: "With 'yet' referring to unfinished time up to now: 'haven't read'.",
            explanationBurmese: "'yet' ပါဝင်ပြီး လက်ရှိအထိ မဖတ်ရသေးသဖြင့် 'haven't read' သုံးသည်။"
          }
        ]
      },
      {
        id: "3.2",
        title: "Exercise 3.2: Sentences with 'Since'",
        instruction: "Complete the sentences with the pairs of verbs from the box. Choose the most appropriate tense - present perfect or past simple.",
        instructionBurmese: "Box ထဲရှိ ကြိယာတွဲများကို သုံး၍ Present Perfect သို့မဟုတ် Past Simple ဖြင့် ဖြည့်ပါ။",
        wordBank: ["be able - feel", "happen - speak", "improve - be", "not want - fall", "rescue - be", "work - not have"],
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. Maria ______ to go swimming since she ______ in the river. (not want - fall)",
            prefix: "Maria ",
            suffix: " to go swimming since she fell in the river.",
            correctAnswer: ["hasn't wanted", "has not wanted"],
            alternatives: ["has not wanted"],
            explanation: "'hasn't wanted' (present perfect in main clause) and 'fell' (past simple in since-clause).",
            explanationBurmese: "အဓိကဝါကျတွင် 'hasn't wanted' နှင့် since နောက်တွင် 'fell' သုံးသည်။"
          },
          {
            id: "2",
            prompt: "2. Since she ______ at the company she ______ a day off through illness. (work - not have)",
            prefix: "Since she has worked at the company she ",
            suffix: " a day off through illness.",
            correctAnswer: ["hasn't had", "has not had"],
            alternatives: ["has not had"],
            explanation: "'Since she has worked... she hasn't had...'",
            explanationBurmese: "ကုမ္ပဏီတွင် အလုပ်လုပ်နေဆဲဖြစ်၍ 'has worked' နှင့် 'hasn't had' သုံးသည်။"
          },
          {
            id: "3",
            prompt: "3. Since he ______ the girl from a house fire, he ______ on TV almost every day. (rescue - be)",
            prefix: "Since he rescued the girl from a house fire, he ",
            suffix: " on TV almost every day.",
            correctAnswer: ["has been"],
            explanation: "'rescued' (past event) and 'has been' (present perfect).",
            explanationBurmese: "ကယ်တင်ခဲ့သည့် အတိတ်အဖြစ်အတွက် 'rescued' နှင့် ယခုအထိ တီဗွီပါနေမှုအတွက် 'has been'။"
          },
          {
            id: "4",
            prompt: "4. A lot ______ since I last ______ to you. (happen - speak)",
            prefix: "A lot has happened since I last ",
            suffix: " to you.",
            correctAnswer: ["spoke"],
            explanation: "'has happened' (main clause) and 'spoke' (since I last spoke to you).",
            explanationBurmese: "Since နောက်တွင် 'spoke' နှင့် အဓိကဝါကျတွင် 'has happened' သုံးသည်။"
          },
          {
            id: "5",
            prompt: "5. Since I ______ to drive I ______ much more independent. (be able - feel)",
            prefix: "Since I have been able to drive I ",
            suffix: " much more independent.",
            correctAnswer: ["have felt", "'ve felt"],
            alternatives: ["'ve felt"],
            explanation: "Both states extend to the present: 'have been able' and 'have felt'.",
            explanationBurmese: "လက်ရှိအထိ ဆက်လက်တည်ရှိနေသဖြင့် 'have been able' နှင့် 'have felt' သုံးသည်။"
          },
          {
            id: "6",
            prompt: "6. Stefan's reading ______ enormously since he ______ at school. (improve - be)",
            prefix: "Stefan's reading has improved enormously since he ",
            suffix: " at school.",
            correctAnswer: ["has been"],
            explanation: "'has improved' and 'has been' (still at school).",
            explanationBurmese: "ကျောင်းတက်နေဆဲဖြစ်၍ 'has been' နှင့် 'has improved' သုံးသည်။"
          }
        ]
      },
      {
        id: "3.3",
        title: "Exercise 3.3: Correcting Clauses with Conjunctions",
        instruction: "One sentence in each pair is wrong. Correct it by replacing the past simple with the present perfect of the italicised verb.",
        instructionBurmese: "ဝါကျတွဲတစ်ခုစီတွင် မှားယွင်းနေသော ဝါကျကို Present Perfect သို့ ပြင်ဆင်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. a) Remember that after you signed the contract you won't be able to change your mind. -> after you ______",
            prefix: "after you ",
            suffix: " the contract (sign)",
            correctAnswer: ["have signed", "'ve signed"],
            alternatives: ["'ve signed"],
            explanation: "Sentence 1a refers to a future event after 'after', so it requires present perfect: 'have signed / 've signed'. (1b is correct).",
            explanationBurmese: "အနာဂတ်အတွက် 'after' နောက်တွင် Present Perfect 'have signed' သုံးရမည်။"
          },
          {
            id: "2",
            prompt: "2. a) As soon as I finished college I want to travel around Australia. -> As soon as I ______",
            prefix: "As soon as I ",
            suffix: " college (finish)",
            correctAnswer: ["have finished", "'ve finished"],
            alternatives: ["'ve finished"],
            explanation: "2a refers to future graduation: 'have finished / 've finished'. (2b is correct).",
            explanationBurmese: "နောင်အနာဂတ်အတွက် 'as soon as' နောက်တွင် 'have finished' သုံးသည်။"
          },
          {
            id: "3",
            prompt: "3. b) I'll probably have finished breakfast by the time the children got up. -> by the time the children ______",
            prefix: "by the time the children ",
            suffix: " up. (get)",
            correctAnswer: ["have got", "get"],
            alternatives: ["get"],
            explanation: "3b refers to future morning time: 'have got / get'. (3a is correct).",
            explanationBurmese: "အနာဂတ်အတွက် 'by the time' နောက်တွင် 'have got' သို့မဟုတ် 'get' သုံးသည်။"
          },
          {
            id: "4",
            prompt: "4. b) I'll tell you what time we're coming the moment I heard from Emil. -> the moment I ______",
            prefix: "the moment I ",
            suffix: " from Emil. (hear)",
            correctAnswer: ["have heard", "'ve heard"],
            alternatives: ["'ve heard"],
            explanation: "4b refers to future notice: 'have heard / 've heard'. (4a is correct).",
            explanationBurmese: "အနာဂတ်အတွက် 'the moment' နောက်တွင် 'have heard' သုံးသည်။"
          }
        ]
      },
      {
        id: "3.4",
        title: "Exercise 3.4: News Report Tenses",
        instruction: "Here are some extracts from a television news report. Choose the more appropriate tense - present perfect or past simple.",
        instructionBurmese: "ရုပ်မြင်သံကြားသတင်းစာပိုဒ်များအတွက် သင့်လျော်သော ကြိယာကာလကို ရွေးချယ်ပါ။",
        type: "underline-choice",
        questions: [
          {
            id: "1",
            prompt: "1. When President Ismail arrives in Paris this evening, it will be the first time she (visit) Europe since her election victory in May.",
            options: ["has visited", "visited"],
            correctAnswer: "has visited",
            explanation: "After 'it will be the first time she...', we use the present perfect: 'has visited'.",
            explanationBurmese: "'it will be the first time' နောက်တွင် Present Perfect 'has visited' သုံးသည်။"
          },
          {
            id: "2",
            prompt: "2. The Victoria Hospital in Milltown [has closed / closed] to new patients after more cases of food poisoning. Three patients [have died / died] last week in the outbreak.",
            options: ["has closed, died", "closed, have died"],
            correctAnswer: "has closed, died",
            explanation: "News intro uses present perfect ('has closed'); specific past detail ('last week') uses past simple ('died').",
            explanationBurmese: "သတင်းဦးမိတ်ဆက်တွင် 'has closed' သုံးပြီး 'last week' ပါဝင်သဖြင့် 'died' သုံးသည်။"
          },
          {
            id: "3",
            prompt: "3. The rate of inflation [has dropped / dropped] to 4.8%. It's the first time in nearly two years that the rate [has fallen / fell] below 5%.",
            options: ["has dropped, has fallen", "dropped, fell"],
            correctAnswer: "has dropped, has fallen",
            explanation: "Recent economic news ('has dropped') and 'It's the first time... that the rate has fallen'.",
            explanationBurmese: "လတ်တလောသတင်း 'has dropped' နှင့် 'It's the first time' နောက်တွင် 'has fallen' သုံးသည်။"
          },
          {
            id: "4",
            prompt: "4. Nearly 600 laptops [have been stolen / were stolen] from Ministry of Defence staff over the past five years. However, a spokesperson [insisted / has insisted] that there had been no security problems as none of the computers [held / has held] secret information.",
            options: ["have been stolen, insisted, held", "were stolen, has insisted, has held"],
            correctAnswer: "have been stolen, insisted, held",
            explanation: "'over the past five years' connects to present ('have been stolen'); spokesperson statement gives past reporting ('insisted - held').",
            explanationBurmese: "လွန်ခဲ့သော ၅ နှစ်အတွင်းဖြစ်၍ 'have been stolen'၊ ထို့နောက် အသေးစိတ်ရှင်းလင်းချက်တွင် 'insisted' နှင့် 'held' သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 4
  {
    id: 4,
    title: "Past continuous and past simple",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Contrast past continuous and past simple: actions in progress, temporary situations, state verbs with dynamic meanings, storytelling, and polite requests.",
    summaryBurmese: "အတိတ်တွင် ဆက်လက်ဖြစ်ပေါ်နေဆဲ အခြေအနေ (Past Continuous) နှင့် ပြီးဆုံးခဲ့သော လုပ်ဆောင်ချက် (Past Simple)၊ ယာယီအခြေအနေများ၊ ဇာတ်လမ်းပြောပြချက်များနှင့် ယဉ်ကျေးစွာ မေးမြန်းတောင်းဆိုမှုများ။",
    keyPoints: [
      "Past continuous describes an event in progress at a particular past time; past simple describes completed past events.",
      "Past continuous is often used for temporary situations in the past ('When I was in London I was staying with my sister').",
      "When one event interrupts another: ongoing background event in past continuous, interrupting event in past simple.",
      "State verbs (belong, contain, own, know) are not normally used in past continuous, but some verbs have both state and dynamic uses (consider, expect, think, have).",
      "Past continuous with verbs like wonder, hope, plan, think makes polite requests and inquiries more tentative."
    ],
    keyPointsBurmese: [
      "အတိတ်ကာလ သတ်မှတ်ချိန်တစ်ခု၌ ဖြစ်ပျက်နေဆဲ အခြေအနေအတွက် Past Continuous သုံးပြီး ပြီးဆုံးသွားသော အဖြစ်အပျက်အတွက် Past Simple သုံးသည်။",
      "အတိတ်က ယာယီအခြေအနေများအတွက် Past Continuous ကို သုံးသည် ('was staying with my sister')။",
      "အဖြစ်အပျက်တစ်ခု ဖြစ်ပျက်နေစဉ် အခြားတစ်ခု ကြားဖြတ်ဖြစ်ပေါ်လာပါက နောက်ခံအတွက် Continuous နှင့် ကြားဖြတ်ဖြစ်ရပ်အတွက် Simple သုံးသည်။",
      "State verbs များကို Continuous ဖြင့် မသုံးသော်လည်း အချို့ကြိယာများ (think, have, consider) တွင် အဓိပ္ပာယ် ၂ မျိုးရှိသည်။",
      "Hope, wonder, plan, think တို့ကို Past Continuous ဖြင့် သုံးခြင်းဖြင့် ပိုမိုယဉ်ကျေးသော မေးမြန်းတောင်းဆိုမှု (polite request) ပြုလုပ်နိုင်သည်။"
    ],
    reminderRefs: ["A10", "A11", "A12"],
    sections: [
      {
        id: "A",
        title: "Actions in progress vs completed events; Temporary past situations",
        content: "We use the past continuous to refer to something that was in progress at a particular time in the past, and the past simple to talk about completed past events. We often use the past continuous with verbs describing a situation that existed for a period of time, but was temporary.",
        contentBurmese: "အတိတ်သတ်မှတ်ချိန်တွင် ဖြစ်ပျက်နေဆဲဖြစ်ရပ်အတွက် Past Continuous နှင့် ပြီးဆုံးသွားသော အဖြစ်အပျက်အတွက် Past Simple သုံးသည်။ အတိတ်တွင် ကာလအပိုင်းအခြားတစ်ခု၌ ယာယီတည်ရှိခဲ့သော အခြေအနေများအတွက်လည်း Past Continuous သုံးသည်။",
        examples: [
          { text: "At eight o'clock yesterday evening I was watching television.", note: "In progress at 8:00" },
          { text: "I watched the whole film and then went to bed.", note: "Completed past event" },
          { text: "When I was in London I was staying with my sister.", note: "Temporary past living situation" },
          { text: "A heavy snowstorm was covering the mountain pass that morning.", note: "Temporary weather situation" }
        ]
      },
      {
        id: "B",
        title: "Interrupting events and sequence of events",
        content: "Compare: 'When we were having dinner, the power failed' (having dinner was already in progress before the power cut) vs 'When the power failed, we had dinner by candlelight' (we started dinner after the power cut).",
        contentBurmese: "ညစာစားနေစဉ် မီးပျက်သွားခြင်း (စားနေဆဲဖြစ်၍ continuous) နှင့် မီးပျက်သွားသောအခါ ဖယောင်းတိုင်ဖြင့် ညစာစားခဲ့ခြင်း (မီးပျက်ပြီးမှ စားသဖြင့် simple) ကွာခြားချက်။",
        examples: [
          { text: "While we were having dinner, the power failed.", note: "Dinner in progress -> power failed" },
          { text: "When the power failed, we had dinner by candlelight.", note: "Power failed first -> then we had dinner" }
        ]
      },
      {
        id: "C",
        title: "State verbs and verbs with two meanings",
        content: "Verbs that describe states (know, belong, contain, own) are not normally used in the continuous. However, some verbs have both state meanings (simple) and dynamic/mental activity meanings (continuous), such as consider, expect, imagine, feel, think, have.",
        contentBurmese: "State verbs (know, own, belong) များကို continuous မသုံးပါ။ သို့သော် consider, think, have စသော ကြိယာများသည် အခြေအနေပြအဓိပ္ပာယ်တွင် Simple နှင့် စဉ်းစားတွေးခေါ်မှု/လှုပ်ရှားမှုပြအဓိပ္ပာယ်တွင် Continuous သုံးနိုင်သည်။",
        examples: [
          { text: "I thought you were in Italy. (= believed, state)", note: "State meaning in past simple" },
          { text: "I was considering buying a new car. (= active mental deliberation)", note: "Dynamic thought process in past continuous" },
          { text: "The museum consisted of three main halls. (NOT was consisting of)", note: "State verb always simple" }
        ]
      },
      {
        id: "D",
        title: "Polite requests and inquiries with past continuous",
        content: "We can use the past continuous with verbs like wonder, hope, plan, and think to make polite requests, offers, or inquiries sound less direct and more tentative.",
        contentBurmese: "Wonder, hope, plan, think စသော ကြိယာများကို Past Continuous ဖြင့် သုံးခြင်းဖြင့် ပိုမိုယဉ်ကျေးသိမ်မွေ့သော မေးမြန်းတောင်းဆိုမှုများ ပြုလုပ်နိုင်သည်။",
        examples: [
          { text: "I was wondering if you had any free time this afternoon to look at my proposal.", note: "Polite, tentative inquiry" },
          { text: "I was hoping to borrow your camera for the weekend.", note: "Polite request" },
          { text: "Were you planning to come with us to the cinema?", note: "Polite invitation / inquiry" }
        ]
      }
    ],
    exercises: [
      {
        id: "4.1",
        title: "Exercise 4.1: Past Continuous vs Past Simple in Context",
        instruction: "Complete the sentences using the past continuous or past simple form of the verbs in the box. If both are possible, indicate both.",
        instructionBurmese: "Box ထဲရှိ ကြိယာများကို Past Continuous သို့မဟုတ် Past Simple ဖြင့် ဖြည့်ပါ။ နှစ်မျိုးလုံးဖြစ်နိုင်ပါက နှစ်မျိုးလုံး ရေးပါ။",
        wordBank: ["accept", "adapt", "come", "cover", "look", "look at", "shine", "twist"],
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. Stefan ______ extraordinarily happy when I ran into him this afternoon. (look)",
            prefix: "Stefan ",
            suffix: " extraordinarily happy when I ran into him this afternoon.",
            correctAnswer: ["looked", "was looking"],
            alternatives: ["was looking"],
            explanation: "'looked' or 'was looking' (temporary appearance in progress).",
            explanationBurmese: "ထိုအချိန်က ပုံပန်းသွင်ပြင်အတွက် 'looked' သို့မဟုတ် 'was looking' နှစ်မျိုးလုံး သုံးနိုင်သည်။"
          },
          {
            id: "2",
            prompt: "2. The sun ______ brightly as we walked across the field. (shine)",
            prefix: "The sun ",
            suffix: " brightly as we walked across the field.",
            correctAnswer: ["shone", "was shining"],
            alternatives: ["was shining"],
            explanation: "'shone' or 'was shining' (shining during the walk).",
            explanationBurmese: "'shone' သို့မဟုတ် 'was shining' ဖြစ်သည်။"
          },
          {
            id: "3",
            prompt: "3. She gladly ______ the invitation to speak at the symposium. (accept)",
            prefix: "She gladly ",
            suffix: " the invitation to speak at the symposium.",
            correctAnswer: ["accepted"],
            explanation: "Accepting an invitation is a single, complete past decision: 'accepted'.",
            explanationBurmese: "ဖိတ်ကြားချက်ကို လက်ခံခြင်းသည် ပြီးဆုံးသွားသော ဆုံးဖြတ်ချက်ဖြစ်၍ 'accepted' (past simple) သာ ဖြစ်သည်။"
          },
          {
            id: "4",
            prompt: "4. When I first visited the village, the locals ______ quickly to the new tourism influx. (adapt)",
            prefix: "the locals ",
            suffix: " quickly to the new tourism influx.",
            correctAnswer: ["were adapting", "adapted"],
            alternatives: ["adapted"],
            explanation: "'were adapting' (ongoing process of adjustment) or 'adapted'.",
            explanationBurmese: "လိုက်လျောညီထွေဖြစ်အောင် ညှိယူနေဆဲ လုပ်ငန်းစဉ်ဖြစ်၍ 'were adapting' သို့မဟုတ် 'adapted'။"
          },
          {
            id: "5",
            prompt: "5. As the train ______ into the station, passengers got ready to disembark. (come)",
            prefix: "As the train ",
            suffix: " into the station, passengers got ready...",
            correctAnswer: ["was coming", "came"],
            alternatives: ["came"],
            explanation: "'was coming' (action in progress as they got ready) or 'came'.",
            explanationBurmese: "ဘူတာရုံထဲ ဝင်ရောက်လာနေစဉ်ဖြစ်၍ 'was coming' သို့မဟုတ် 'came'။"
          },
          {
            id: "6",
            prompt: "6. He ______ his ankle while playing squash on Tuesday. (twist)",
            prefix: "He ",
            suffix: " his ankle while playing squash on Tuesday.",
            correctAnswer: ["twisted"],
            explanation: "A sudden injury during an activity takes past simple: 'twisted'.",
            explanationBurmese: "ကစားနေစဉ် မျက်စိတစ်မှိတ်အတွင်း ခြေခေါက်သွားခြင်းဖြစ်၍ 'twisted' (past simple) ဖြစ်သည်။"
          },
          {
            id: "7",
            prompt: "7. When the teacher walked in, the students ______ the answers on the blackboard. (look at)",
            prefix: "the students ",
            suffix: " the answers on the blackboard.",
            correctAnswer: ["were looking at"],
            explanation: "Activity in progress when the teacher entered: 'were looking at'.",
            explanationBurmese: "ဆရာဝင်လာချိန်၌ ဖြစ်ပျက်နေဆဲ အခြေအနေဖြစ်၍ 'were looking at' ဖြစ်သည်။"
          },
          {
            id: "8",
            prompt: "8. A thick blanket of mist ______ the entire valley at dawn. (cover)",
            prefix: "A thick blanket of mist ",
            suffix: " the entire valley at dawn.",
            correctAnswer: ["was covering", "covered"],
            alternatives: ["covered"],
            explanation: "'was covering' (temporary state) or 'covered'.",
            explanationBurmese: "ယာယီအခြေအနေဖြစ်၍ 'was covering' သို့မဟုတ် 'covered' သုံးနိုင်သည်။"
          }
        ]
      },
      {
        id: "4.2",
        title: "Exercise 4.2: Interrupted Actions & Simultaneous Events",
        instruction: "Choose the correct combination of past continuous and past simple for each sentence.",
        instructionBurmese: "အတိတ်တွင် တစ်ပြိုင်နက် သို့မဟုတ် ကြားဖြတ်ဖြစ်ပေါ်သော အဖြစ်အပျက်များအတွက် မှန်ကန်သော ကြိယာအတွဲကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: "1",
            prompt: "1. While we [were having / had] a picnic, a sudden storm [broke / was breaking] out.",
            options: ["were having, broke", "had, was breaking"],
            correctAnswer: "were having, broke",
            explanation: "The picnic was in progress ('were having') when the sudden storm interrupted ('broke').",
            explanationBurmese: "ပျော်ပွဲစားထွက်နေစဉ် (were having) မုန်တိုင်းရုတ်တရက်ကျရောက်လာသည် (broke)။"
          },
          {
            id: "2",
            prompt: "2. As I [was walking / walked] down the stairs, I accidentally [stepped / was stepping] on the cat's tail.",
            options: ["was walking, stepped", "walked, was stepping"],
            correctAnswer: "was walking, stepped",
            explanation: "'was walking' was the background action; 'stepped' was the sudden accident.",
            explanationBurmese: "လှေကားဆင်းနေဆဲ (was walking) တွင် အမြီးကို မတော်တဆနင်းမိသည် (stepped)။"
          },
          {
            id: "3",
            prompt: "3. While the children [were playing / played] in the garden, a stray baseball [flew / was flying] through the window.",
            options: ["were playing, flew", "played, was flying"],
            correctAnswer: "were playing, flew",
            explanation: "'were playing' is the ongoing background; 'flew' is the sudden event.",
            explanationBurmese: "ကလေးများကစားနေဆဲ (were playing) တွင် ဘောလုံးပြတင်းပေါက်မှ ဝင်လာသည် (flew)။"
          },
          {
            id: "4",
            prompt: "4. When the fire alarm [went off / was going off], we [were attending / attended] an important lecture.",
            options: ["went off, were attending", "was going off, attended"],
            correctAnswer: "went off, were attending",
            explanation: "'were attending' was the lecture in progress; 'went off' was the sudden alarm.",
            explanationBurmese: "တရားဟောပွဲတက်နေစဉ် (were attending) မီးသတိပေးခေါင်းလောင်း မြည်လာသည် (went off)။"
          }
        ]
      },
      {
        id: "4.3",
        title: "Exercise 4.3: State vs Dynamic Verbs in Past",
        instruction: "Decide whether the italicised verb is correct or needs correction.",
        instructionBurmese: "စာလုံးစောင်းပြထားသော ကြိယာ မှန်/မမှန် စစ်ဆေးပြီး လိုအပ်ပါက ပြင်ဆင်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. I was thinking you didn't have a driver's licence. -> correction:",
            prefix: "Correction: I ",
            suffix: " you didn't have a driver's licence.",
            correctAnswer: ["thought"],
            explanation: "State verb meaning 'believed': use past simple 'thought' (not 'was thinking').",
            explanationBurmese: "ယုံကြည်ယူဆမှု (state) ဖြစ်၍ 'thought' (past simple) ပြင်ရမည်။"
          },
          {
            id: "2",
            prompt: "2. The committee was consisting of ten elected members. -> correction:",
            prefix: "Correction: The committee ",
            suffix: " of ten elected members.",
            correctAnswer: ["consisted"],
            explanation: "'consist of' is a state verb and cannot be used in the continuous: 'consisted'.",
            explanationBurmese: "'consist of' သည် state verb ဖြစ်၍ continuous မသုံးရ၊ 'consisted' ဖြစ်ရမည်။"
          },
          {
            id: "3",
            prompt: "3. At the time, they were doubting whether the investment would yield profits. -> correction:",
            prefix: "Correction: At the time, they ",
            suffix: " whether the investment would yield profits.",
            correctAnswer: ["doubted"],
            explanation: "'doubt' as a state of mind uses past simple: 'doubted'.",
            explanationBurmese: "'doubt' သည် စိတ်ပိုင်းဆိုင်ရာ အခြေအနေပြကြိယာဖြစ်၍ 'doubted' ဖြစ်ရမည်။"
          }
        ]
      },
      {
        id: "4.4",
        title: "Exercise 4.4: Polite Inquiries & Requests",
        instruction: "Complete these polite inquiries using the past continuous of the verb given.",
        instructionBurmese: "ပေးထားသော ကြိယာများကို Past Continuous ဖြင့် သုံး၍ ယဉ်ကျေးသော မေးမြန်းတောင်းဆိုမှုများ ပြုလုပ်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. I ______ if you had any free time this afternoon to check my report. (wonder)",
            prefix: "I ",
            suffix: " if you had any free time this afternoon... (wonder)",
            correctAnswer: ["was wondering"],
            explanation: "'I was wondering if...' makes a polite, tentative request.",
            explanationBurmese: "'was wondering' ဖြင့် ယဉ်ကျေးစွာ မေးမြန်းခြင်းဖြစ်သည်။"
          },
          {
            id: "2",
            prompt: "2. I ______ to borrow your lawnmower for a couple of hours if possible. (hope)",
            prefix: "I ",
            suffix: " to borrow your lawnmower... (hope)",
            correctAnswer: ["was hoping"],
            explanation: "'I was hoping to...' expresses a polite desire/request.",
            explanationBurmese: "'was hoping' ဖြင့် ယဉ်ကျေးစွာ အကူအညီတောင်းခံခြင်းဖြစ်သည်။"
          },
          {
            id: "3",
            prompt: "3. ______ you ______ to attend the reception tomorrow evening? (plan)",
            prefix: "",
            suffix: " you planning to attend the reception tomorrow evening? (plan)",
            correctAnswer: ["Were", "were"],
            explanation: "'Were you planning to...' forms a polite inquiry about future intentions.",
            explanationBurmese: "'Were you planning to' ဖြင့် ယဉ်ကျေးစွာ မေးမြန်းခြင်းဖြစ်သည်။"
          },
          {
            id: "4",
            prompt: "4. I ______ of inviting the whole department to dinner on Friday. (think)",
            prefix: "I ",
            suffix: " of inviting the whole department to dinner... (think)",
            correctAnswer: ["was thinking"],
            explanation: "'I was thinking of...' describes a tentative plan/idea.",
            explanationBurmese: "'was thinking' ဖြင့် အစီအစဉ်တစ်ခုကို သိမ်မွေ့စွာ တင်ပြခြင်းဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 5
  {
    id: 5,
    title: "Past perfect and past simple",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Master the past perfect (had + past participle) for events happening earlier than other past events, in time clauses, with reporting verbs, and with negative adverbial structures.",
    summaryBurmese: "အတိတ်ဖြစ်ရပ်များအနက် ပိုမိုစောစီးစွာ ဖြစ်ပျက်ခဲ့သော အကြောင်းအရာများအတွက် Past Perfect (had + V3)၊ အချိန်ပြစကားဆက်များ၊ သတင်းပို့/ပြောဆိုမှုများနှင့် hardly... when / no sooner... than အသုံးများ။",
    keyPoints: [
      "Past perfect (had + past participle) shows that a past event occurred before another past time or event.",
      "When the time order is clear with conjunctions (after, before, as soon as), past simple can often be used, but past perfect emphasizes complete finished action.",
      "With 'by the time', the earlier action takes past perfect: 'By the time we arrived, the train had left'.",
      "Reporting verbs (realise, remember, discover, know, tell) take a that-clause with past perfect for prior events.",
      "With 'hardly / scarcely / barely ... when' and 'no sooner ... than', past perfect is used (often inverted: 'No sooner had I arrived than...')."
    ],
    keyPointsBurmese: [
      "အတိတ်ကာလ ဖြစ်ရပ်နှစ်ခုအနက် ပိုမိုစောစီးစွာ ဖြစ်ပျက်ခဲ့သောအရာအတွက် Past Perfect (had + V3) ကို သုံးသည်။",
      "After, before စသော စကားဆက်များဖြင့် အစဉ်လိုက်ရှင်းလင်းနေပါက Past Simple သုံးနိုင်သော်လည်း၊ အပြီးသတ်ပြီးစီးမှုကို အလေးပေးလိုပါက Past Perfect သုံးသည်။",
      "By the time ပါသော ဝါကျများတွင် အရင်ဖြစ်သော လုပ်ဆောင်ချက်အတွက် Past Perfect သုံးသည် ('By the time we arrived, the train had left')။",
      "Realise, remember, know စသော သိရှိနားလည်မှုပြ ကြိယာများနောက်တွင် Past Perfect လိုက်လေ့ရှိသည်။",
      "Hardly / scarcely ... when နှင့် No sooner ... than တို့တွင် Past Perfect သုံးပြီး အစတွင် ထားပါက နေရာပြောင်းပြန် (inversion) ဖြစ်သည်။"
    ],
    reminderRefs: ["A12", "A13", "A14"],
    sections: [
      {
        id: "A",
        title: "Earlier Past Events & Sequence",
        content: "When we are talking about the past, we use the past perfect (had + past participle) to refer to something that happened even earlier than that time. It makes the sequence of events crystal clear.",
        contentBurmese: "အတိတ်အကြောင်း ပြောဆိုရာတွင် ထိုအတိတ်ထက် ပိုမိုစောသော အချိန်က ဖြစ်ပျက်ခဲ့သည့် ကိစ္စကို Past Perfect ဖြင့် ဖော်ပြသည်။",
        examples: [
          { text: "When Karen arrived at the party, Mark had already gone home.", note: "1st: Mark went home (past perfect). 2nd: Karen arrived (past simple)." },
          { text: "He was very nervous because he hadn't flown on an aeroplane before.", note: "No prior flying experience before that flight" }
        ]
      },
      {
        id: "B",
        title: "Time conjunctions: after, before, as soon as, when, by the time",
        content: "When two actions are mentioned and the time order is already clear from conjunctions (such as after, before, as soon as), we can often use either the past simple or past perfect with little difference. However, past perfect emphasizes that the first action was completely finished before the second began.",
        contentBurmese: "After, before, as soon as စသော စကားဆက်များ ပါဝင်ပြီး အစဉ်လိုက် ရှင်းလင်းနေပါက Past Simple သို့မဟုတ် Past Perfect နှစ်မျိုးလုံး ဖြစ်နိုင်သည်။ သို့သော် Past Perfect က ပထမအလုပ် အပြီးအပြတ်ပြီးဆုံးသွားကြောင်းကို ပိုမိုအလေးပေးသည်။",
        examples: [
          { text: "After she (had) finished her homework, she watched a movie.", note: "finished / had finished both acceptable" },
          { text: "By the time the ambulance arrived, the patient had regained consciousness.", note: "By the time requires past perfect in the main clause" }
        ]
      },
      {
        id: "C",
        title: "Reporting verbs of thinking, realizing, discovering, telling",
        content: "We use the past perfect with verbs of thinking and saying (e.g. think, realize, remember, understand, discover, say, tell) to refer to things that had happened prior to the thought or utterance.",
        contentBurmese: "Think, realize, remember, discover, say, tell စသော ကြိယာများနောက်တွင် ထိုအချိန်မတိုင်မီက ဖြစ်ပျက်ခဲ့သောအရာကို Past Perfect ဖြင့် ဖော်ပြသည်။",
        examples: [
          { text: "I suddenly remembered that I had left my keys in the office.", note: "Left keys (1st) -> remembered (2nd)" },
          { text: "She realised she had forgotten to lock the front door.", note: "Forgotten (1st) -> realised (2nd)" }
        ]
      },
      {
        id: "D",
        title: "Hardly / Scarcely / Barely ... when & No sooner ... than",
        content: "We use the past perfect with these expressions to talk about an event that occurred immediately after another event. When placed at the start of a sentence for dramatic effect, we invert the subject and auxiliary 'had'.",
        contentBurmese: "တစ်ခုပြီးသည်နှင့် ချက်ချင်း နောက်တစ်ခု ဖြစ်ပေါ်လာခြင်းကို ဖော်ပြရန် hardly/scarcely... when နှင့် no sooner... than တို့ကို Past Perfect ဖြင့် သုံးသည်။ ဝါကျအစတွင် ထားပါက 'Had + Subject + V3' ပုံစံဖြင့် နေရာပြောင်းပြန် (inversion) ဖြစ်သည်။",
        examples: [
          { text: "We had hardly sat down when the phone rang.", note: "Standard word order" },
          { text: "Hardly had we sat down when the phone rang.", note: "Inverted dramatic word order" },
          { text: "No sooner had he entered the room than the lights went out.", note: "No sooner takes 'than'" }
        ]
      }
    ],
    exercises: [
      {
        id: "5.1",
        title: "Exercise 5.1: Past Perfect vs Past Simple with Time Conjunctions",
        instruction: "Complete each sentence using the past simple or past perfect of the verb in brackets. If both are possible, write both.",
        instructionBurmese: "ကွင်းစကွင်းပိတ်ပါ ကြိယာကို Past Simple သို့မဟုတ် Past Perfect ဖြင့် ဖြည့်ပါ။ နှစ်မျိုးလုံးဖြစ်နိုင်ပါက နှစ်မျိုးလုံး ရေးပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. As soon as I ______ all my money, I had to look for a job. (spend)",
            prefix: "As soon as I ",
            suffix: " all my money, I had to look for a job. (spend)",
            correctAnswer: ["had spent", "spent"],
            alternatives: ["spent"],
            explanation: "'had spent' or 'spent' (both possible after 'as soon as').",
            explanationBurmese: "'as soon as' နောက်တွင် 'had spent' သို့မဟုတ် 'spent' နှစ်မျိုးလုံး သုံးနိုင်သည်။"
          },
          {
            id: "2",
            prompt: "2. By the time we reached the summit, the thick fog ______ completely. (disappear)",
            prefix: "the thick fog ",
            suffix: " completely. (disappear)",
            correctAnswer: ["had disappeared"],
            explanation: "With 'by the time', the earlier completed event requires past perfect: 'had disappeared'.",
            explanationBurmese: "'by the time' ပါဝင်သဖြင့် ပိုစောသော အဖြစ်အပျက်အတွက် 'had disappeared' သာ သုံးရမည်။"
          },
          {
            id: "3",
            prompt: "3. After they ______ dinner, they went for a relaxing stroll around the lake. (eat)",
            prefix: "After they ",
            suffix: " dinner, they went for a relaxing stroll... (eat)",
            correctAnswer: ["had eaten", "ate"],
            alternatives: ["ate"],
            explanation: "'had eaten' (emphasizing completion) or 'ate'.",
            explanationBurmese: "'had eaten' သို့မဟုတ် 'ate' နှစ်မျိုးလုံး ဖြစ်နိုင်သည်။"
          },
          {
            id: "4",
            prompt: "4. Before she applied for the scholarship, she ______ all her university entrance exams. (pass)",
            prefix: "she ",
            suffix: " all her university entrance exams. (pass)",
            correctAnswer: ["had passed", "passed"],
            alternatives: ["passed"],
            explanation: "'had passed' (prior qualification) or 'passed'.",
            explanationBurmese: "'had passed' သို့မဟုတ် 'passed' ဖြစ်သည်။"
          },
          {
            id: "5",
            prompt: "5. When the doctor arrived, the patient ______ already ______ consciousness. (recover)",
            prefix: "the patient had already ",
            suffix: " consciousness. (recover)",
            correctAnswer: ["recovered"],
            explanation: "'had already recovered' shows the recovery preceded the doctor's arrival.",
            explanationBurmese: "ဆရာဝန်မရောက်မီ သတိပြန်လည်လာပြီးဖြစ်၍ 'had already recovered' ဖြစ်သည်။"
          }
        ]
      },
      {
        id: "5.2",
        title: "Exercise 5.2: Thoughts & Discovery with Past Perfect",
        instruction: "Complete the sentences with the appropriate past simple or past perfect forms of the verbs in brackets.",
        instructionBurmese: "ကွင်းစကွင်းပိတ်ပါ ကြိယာများကို သင့်လျော်သော Past Simple သို့မဟုတ် Past Perfect ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. I ______ (not realize) that someone ______ (steal) my bicycle until I got to the bike rack.",
            prefix: "I didn't realize that someone had ",
            suffix: " my bicycle until I got to the bike rack. (steal)",
            correctAnswer: ["stolen"],
            explanation: "'didn't realize' (past simple) and 'had stolen' (past perfect for prior theft).",
            explanationBurmese: "ခိုးယူခံရခြင်းက အရင်ဖြစ်၍ 'had stolen' ဖြစ်သည်။"
          },
          {
            id: "2",
            prompt: "2. Clara ______ (discover) that her brother ______ (hide) the birthday present in the attic.",
            prefix: "Clara discovered that her brother had ",
            suffix: " the birthday present in the attic. (hide)",
            correctAnswer: ["hidden"],
            explanation: "'had hidden' happened before Clara discovered it.",
            explanationBurmese: "လက်ဆောင်ကို အရင်ဝှက်ထားခဲ့ခြင်းဖြစ်၍ 'had hidden' ဖြစ်သည်။"
          },
          {
            id: "3",
            prompt: "3. He ______ (forget) where he ______ (park) his car after the concert.",
            prefix: "He forgot where he had ",
            suffix: " his car after the concert. (park)",
            correctAnswer: ["parked"],
            explanation: "'forgot' (past simple) where he 'had parked' (past perfect).",
            explanationBurmese: "ကားရပ်ထားခဲ့သည်က အရင်ဖြစ်၍ 'had parked' ဖြစ်သည်။"
          }
        ]
      },
      {
        id: "5.3",
        title: "Exercise 5.3: Hardly... When & No Sooner... Than",
        instruction: "Combine or complete each sentence using 'hardly... when' or 'no sooner... than'.",
        instructionBurmese: "'hardly... when' သို့မဟုတ် 'no sooner... than' ဖြင့် ဝါကျများကို ပေါင်းစပ်ဖြည့်စွက်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. No sooner ______ we ______ the front door than the phone started ringing. (unlock)",
            prefix: "No sooner had we ",
            suffix: " the front door than the phone started ringing. (unlock)",
            correctAnswer: ["unlocked"],
            explanation: "'No sooner had we unlocked... than...'",
            explanationBurmese: "'No sooner had we unlocked... than...' ပုံစံဖြစ်သည်။"
          },
          {
            id: "2",
            prompt: "2. Hardly ______ the plane ______ when the passengers stood up to retrieve their baggage. (land)",
            prefix: "Hardly had the plane ",
            suffix: " when the passengers stood up... (land)",
            correctAnswer: ["landed"],
            explanation: "'Hardly had the plane landed when...'",
            explanationBurmese: "'Hardly had the plane landed when...' ပုံစံဖြစ်သည်။"
          },
          {
            id: "3",
            prompt: "3. We had scarcely ______ the tent ______ the thunderstorm broke out. (pitch - when/than)",
            prefix: "We had scarcely pitched the tent ",
            suffix: " the thunderstorm broke out.",
            correctAnswer: ["when"],
            explanation: "'Scarcely' pairs with 'when' (not 'than').",
            explanationBurmese: "'Scarcely' သည် 'when' ဖြင့် တွဲဖက်သုံးရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 6
  {
    id: 6,
    title: "Present perfect continuous and present perfect",
    category: "tenses",
    level: "C1 Advanced",
    summary: "Contrast present perfect continuous (duration, process, recent ongoing activity) with present perfect simple (completed result, quantity, permanent states).",
    summaryBurmese: "ကြာမြင့်ချိန်နှင့် လုပ်ငန်းစဉ်ကို အလေးပေးသော Present Perfect Continuous နှင့် ပြီးမြောက်မှုရလဒ်/အရေအတွက်ကို အလေးပေးသော Present Perfect Simple။",
    keyPoints: [
      "Present perfect continuous emphasizes the process and duration of an activity ('I've been painting the room all day').",
      "Present perfect simple emphasizes completion, final results, or quantity ('I've painted three walls').",
      "With verbs like live, work, teach, either form is possible with little difference when used with 'for' or 'since'.",
      "Never use present perfect continuous with state verbs: 'I've known him for years' (NOT 'I've been knowing').",
      "Present perfect continuous explains visible present physical results ('You are covered in mud! What have you been doing?')."
    ],
    keyPointsBurmese: [
      "လုပ်ဆောင်နေဆဲ လုပ်ငန်းစဉ်နှင့် အချိန်ကြာမြင့်မှုကို အလေးပေးလိုပါက Continuous (have been -ing) သုံးသည်။",
      "ပြီးမြောက်သွားသော ရလဒ် သို့မဟုတ် ပမာဏ/အရေအတွက် (three books, twice) ကို ဖော်ပြလိုပါက Simple (have + V3) သုံးသည်။",
      "Live, work, study တို့တွင် for/since ပါပါက simple နှင့် continuous နှစ်မျိုးလုံး သုံးနိုင်သည်။",
      "State verbs (know, believe) များကို continuous မသုံးရ ('have known' သာ သုံးရသည်)။",
      "ယခုမျက်မြင်တွေ့ရှိရသော ရုပ်ပိုင်းဆိုင်ရာ အကျိုးရလဒ်၏ အကြောင်းရင်းကို မေးမြန်း/ဖော်ပြရာတွင် Continuous သုံးသည်။"
    ],
    reminderRefs: ["A14", "A15"],
    sections: [
      {
        id: "A",
        title: "Process vs Achievement / Quantity",
        content: "Use the present perfect continuous when focus is on the activity itself and how long it has been going on. Use the present perfect simple when focus is on how much has been completed or how many times it occurred.",
        contentBurmese: "လုပ်ဆောင်ချက်ကြာမြင့်ချိန်ကို အဓိကထားလျှင် Continuous၊ ပြီးစီးမှုပမာဏ/အကြိမ်အရေအတွက်ကို အဓိကထားလျှင် Simple သုံးသည်။",
        examples: [
          { text: "She has been writing letters all morning.", note: "Focus on activity and duration" },
          { text: "She has written five letters.", note: "Focus on number of completed items (quantity)" }
        ]
      },
      {
        id: "B",
        title: "Temporary situations vs Permanent states",
        content: "We use the continuous for temporary situations and the simple for more permanent ones. With verbs like live, work, study, both forms can be used with 'for' or 'since' with very little difference in meaning.",
        contentBurmese: "ယာယီအခြေအနေများအတွက် Continuous နှင့် အမြဲတမ်းအခြေအနေများအတွက် Simple သုံးသည်။ live, work, study တို့တွင် အဓိပ္ပာယ် ကွာခြားမှု မရှိသလောက်ဖြစ်သည်။",
        examples: [
          { text: "He has been living with his parents until he finds a flat.", note: "Temporary arrangement" },
          { text: "He has lived in Glasgow all his life.", note: "Permanent lifelong state" }
        ]
      },
      {
        id: "C",
        title: "Recently stopped activities with visible present evidence",
        content: "We often use the present perfect continuous to explain a present condition or visible result resulting from an activity that recently stopped.",
        contentBurmese: "မကြာသေးမီက ပြီးဆုံးသွားသော လှုပ်ရှားမှုတစ်ခုကြောင့် ယခုမျက်မှောက်တွင် မျက်မြင်တွေ့နေရသော အကျိုးဆက်ကို ရှင်းပြရာတွင် သုံးသည်။",
        examples: [
          { text: "You're out of breath. Have you been running?", note: "Visible physical evidence (out of breath)" },
          { text: "The streets are soaking wet. It has been raining.", note: "Visible evidence on the ground" }
        ]
      }
    ],
    exercises: [
      {
        id: "6.1",
        title: "Exercise 6.1: Duration vs Completed Quantity",
        instruction: "Choose between the present perfect continuous and present perfect simple for each pair.",
        instructionBurmese: "ဝါကျတွဲများအတွက် Present Perfect Continuous သို့မဟုတ် Simple ကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: "1",
            prompt: "1. I [have been reading / have read] this novel all afternoon, and I [have completed / have been completing] five chapters.",
            options: ["have been reading, have completed", "have read, have been completing"],
            correctAnswer: "have been reading, have completed",
            explanation: "'have been reading' for continuous activity all afternoon; 'have completed' for quantity (five chapters).",
            explanationBurmese: "တစ်မွန်းလွဲလုံး ဖတ်နေခြင်းအတွက် 'have been reading' နှင့် အခန်း ၅ ခန်း ပြီးစီးမှုအတွက် 'have completed' ဖြစ်သည်။"
          },
          {
            id: "2",
            prompt: "2. The builders [have been renovating / have renovated] the kitchen for two weeks, but they [haven't finished / haven't been finishing] the tiling yet.",
            options: ["have been renovating, haven't finished", "have renovated, haven't been finishing"],
            correctAnswer: "have been renovating, haven't finished",
            explanation: "'have been renovating' for 2 weeks ongoing duration; 'haven't finished' for completion status.",
            explanationBurmese: "၂ ပတ်လုံး လုပ်နေဆဲဖြစ်၍ 'have been renovating' နှင့် မပြီးသေးသော အခြေအနေအတွက် 'haven't finished'။"
          }
        ]
      },
      {
        id: "6.2",
        title: "Exercise 6.2: State Verbs & Visible Evidence",
        instruction: "Complete the sentences with the present perfect simple or continuous of the bracketed verbs.",
        instructionBurmese: "ကွင်းစကွင်းပိတ်ပါ ကြိယာများကို Present Perfect Simple သို့မဟုတ် Continuous ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. Why are your hands covered in grease? What ______ you ______ ? (do)",
            prefix: "What have you ",
            suffix: " ? (do)",
            correctAnswer: ["been doing"],
            explanation: "Visible evidence (greasy hands) requires present perfect continuous: 'have you been doing'.",
            explanationBurmese: "လက်တွင် ချေးများပေနေသော မျက်မြင်သက်သေကြောင့် 'been doing' (continuous) ဖြစ်သည်။"
          },
          {
            id: "2",
            prompt: "2. I ______ (know) Arthur since we were in primary school together.",
            prefix: "I have ",
            suffix: " Arthur since we were in primary school. (know)",
            correctAnswer: ["known"],
            explanation: "'know' is a stative verb: use present perfect simple 'known'.",
            explanationBurmese: "'know' သည် state verb ဖြစ်၍ 'known' (simple) သာ သုံးရမည်။"
          },
          {
            id: "3",
            prompt: "3. How many times ______ you ______ (visit) the British Museum?",
            prefix: "How many times have you ",
            suffix: " the British Museum? (visit)",
            correctAnswer: ["visited"],
            explanation: "Asking about number of completed occurrences uses present perfect simple: 'visited'.",
            explanationBurmese: "အကြိမ်အရေအတွက်ကို မေးမြန်းခြင်းဖြစ်၍ 'visited' (simple) ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 7
  {
    id: 7,
    title: "Past perfect continuous and past perfect",
    category: "tenses",
    level: "C1 Advanced",
    summary: "Master past perfect continuous (had been + -ing) for activities ongoing up to a specific past moment, and contrast with past perfect simple and past continuous.",
    summaryBurmese: "အတိတ်ကာလ သတ်မှတ်ချိန်မတိုင်မီ အချိန်အတိုင်းအတာတစ်ခုအထိ ဖြစ်ပျက်နေခဲ့သော ကိစ္စရပ်များအတွက် Past Perfect Continuous (had been + V-ing) နှင့် Past Perfect Simple ခွဲခြားသုံးစွဲပုံ။",
    keyPoints: [
      "Past perfect continuous describes an action that was happening up to or shortly before another past event: 'He was tired because he had been working all night'.",
      "Past perfect simple indicates a finished action with a past result: 'He had finished all his work before dinner'.",
      "Repeated actions over a period up to the past: 'She had been taking driving lessons for six months before she passed'.",
      "Contrast with past continuous: past continuous describes an event in progress at that past moment, whereas past perfect continuous describes an event leading up to that moment."
    ],
    keyPointsBurmese: [
      "အတိတ်ကာလတစ်ခု မတိုင်မီအထိ တောက်လျှောက်ဖြစ်ပျက်နေခဲ့သော လုပ်ဆောင်ချက်အတွက် Past Perfect Continuous (had been + V-ing) သုံးသည်။",
      "အတိတ်တွင် ပြီးဆုံးသွားသော ရလဒ်အတွက် Past Perfect Simple (had + V3) သုံးသည်။",
      "ထိုအချိန်၌ လုပ်နေဆဲ (Past Continuous) နှင့် ထိုအချိန်မတိုင်မီအထိ လုပ်နေခဲ့ပြီးဖြစ်သော (Past Perfect Continuous) ကွာခြားချက်ကို သတိပြုပါ။"
    ],
    reminderRefs: ["A16"],
    sections: [
      {
        id: "A",
        title: "Duration up to a Past Moment",
        content: "We use the past perfect continuous (had been + -ing) to talk about something that was happening for a period of time leading up to a specific past point, often explaining a past visible condition.",
        contentBurmese: "အတိတ်ကာလ သတ်မှတ်ချိန်မတိုင်မီအထိ ဆက်တိုက်ဖြစ်ပေါ်နေခဲ့သော ကိစ္စများအတွက် သုံးသည်။",
        examples: [
          { text: "The ground was wet because it had been raining for three hours.", note: "Continuous action before the past observation" },
          { text: "Her eyes were red because she had been crying.", note: "Explaining visible past condition" }
        ]
      },
      {
        id: "B",
        title: "Past Perfect Continuous vs Past Continuous",
        content: "Compare: 'When I saw him, he was sweating because he had been running' (he had stopped running just before) vs 'When I saw him, he was running across the park' (running was in progress at the exact moment I saw him).",
        contentBurmese: "တွေ့ချိန်၌ ပြေးနေဆဲဖြစ်ခြင်း (was running) နှင့် တွေ့ချိန်မတိုင်မီက ပြေးထားခဲ့သဖြင့် ချွေးထွက်နေခြင်း (had been running) ကွာခြားချက်။",
        examples: [
          { text: "When I met Mark, he was running along the canal.", note: "In progress at the time of meeting" },
          { text: "When I met Mark, he was out of breath because he had been running.", note: "Activity leading up to the meeting" }
        ]
      }
    ],
    exercises: [
      {
        id: "7.1",
        title: "Exercise 7.1: Past Perfect Continuous vs Simple",
        instruction: "Complete the sentences with past perfect continuous or past perfect simple.",
        instructionBurmese: "Past Perfect Continuous သို့မဟုတ် Past Perfect Simple ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: "1",
            prompt: "1. She ______ (study) French for five years before she moved to Paris.",
            prefix: "She had ",
            suffix: " French for five years before she moved to Paris. (study)",
            correctAnswer: ["been studying"],
            explanation: "Continuous duration leading up to moving: 'had been studying'.",
            explanationBurmese: "ပါရီသို့မပြောင်းမီ ၅ နှစ်ကြာ လေ့လာနေခဲ့ခြင်းဖြစ်၍ 'been studying' (continuous) ဖြစ်သည်။"
          },
          {
            id: "2",
            prompt: "2. By midnight, the novelist ______ (write) three complete chapters.",
            prefix: "the novelist had ",
            suffix: " three complete chapters. (write)",
            correctAnswer: ["written"],
            explanation: "Quantity of completed chapters before midnight: 'had written'.",
            explanationBurmese: "ပြီးမြောက်သွားသော အခန်း ၃ ခန်း (quantity) ဖြစ်၍ 'written' (simple) ဖြစ်သည်။"
          },
          {
            id: "3",
            prompt: "3. The passengers were furious because they ______ (wait) on the tarmac for over three hours.",
            prefix: "they had ",
            suffix: " on the tarmac for over three hours. (wait)",
            correctAnswer: ["been waiting"],
            explanation: "Duration of waiting causing past fury: 'had been waiting'.",
            explanationBurmese: "၃ နာရီကြာ စောင့်ဆိုင်းနေခဲ့ရသည့် duration ဖြစ်၍ 'been waiting' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 8
  {
    id: 8,
    title: "Present and past time: review",
    category: "tenses",
    level: "C1 Advanced",
    summary: "Consolidate all present and past tense distinctions across complex narrative passages, academic contexts, and professional writing.",
    summaryBurmese: "Present နှင့် Past ကာလပြ ကြိယာပုံစံအားလုံးကို ပြန်လည်သုံးသပ်ပြီး စာစီစာကုံးနှင့် အဆင့်မြင့်အရေးအသားများတွင် စနစ်တကျ အသုံးချခြင်း။",
    keyPoints: [
      "Master the subtle shifts between simple, continuous, perfect, and perfect continuous aspects.",
      "Recognize time conjunction triggers (since, by the time, while, scarcely... when, no sooner... than).",
      "Apply state verb rules accurately in high-level exam and academic contexts."
    ],
    keyPointsBurmese: [
      "Simple, Continuous, Perfect နှင့် Perfect Continuous ကာလများ၏ ကွဲပြားချက်များကို အဆင့်မြင့်အရေးအသားတွင် အတိအကျ ညှိနှိုင်းသုံးစွဲနည်း။",
      "Since, by the time, scarcely... when စသော အချိန်ပြစကားလုံးများနှင့် ကာလပြကြိယာများ တွဲဖက်ပုံ။"
    ],
    reminderRefs: ["A1", "A8", "A12"],
    sections: [
      {
        id: "A",
        title: "Aspect System Overview",
        content: "Mastering the aspect system (Simple, Continuous, Perfect, Perfect Continuous) allows precise nuance in storytelling, academic reporting, and formal communication.",
        contentBurmese: "Aspect စနစ်ကို ကျွမ်းကျင်စွာ အသုံးပြုခြင်းဖြင့် အဆင့်မြင့် ပညာရပ်ဆိုင်ရာ ရေးသားချက်များတွင် အဓိပ္ပာယ်ကို တိကျစွာ ဖော်ပြနိုင်သည်။",
        examples: [
          { text: "By 2020, Dr. Evans had been researching the virus for over a decade.", note: "Past perfect continuous showing duration before a past milestone" },
          { text: "Since the company launched the platform, user engagement has skyrocketed.", note: "Present perfect connected to present result" }
        ]
      }
    ],
    exercises: [
      {
        id: "8.1",
        title: "Exercise 8.1: Master Tense Review",
        instruction: "Select the most accurate tense combinations for each complex sentence.",
        instructionBurmese: "ရှုပ်ထွေးသော ဝါကျများအတွက် အမှန်ကန်ဆုံး ကာလအတွဲကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: "1",
            prompt: "1. Since the project began, the team [has achieved / achieved] remarkable progress, having solved problems that [had baffled / baffled] scientists for decades.",
            options: ["has achieved, had baffled", "achieved, has baffled"],
            correctAnswer: "has achieved, had baffled",
            explanation: "'Since the project began' connects to present ('has achieved'); earlier past baffling uses past perfect ('had baffled').",
            explanationBurmese: "'Since' ကြောင့် 'has achieved' ဖြစ်ပြီး၊ ထို့ထက်ပိုစောသော အတိတ်အတွက် 'had baffled' ဖြစ်သည်။"
          },
          {
            id: "2",
            prompt: "2. By the time the rescue helicopter [landed / had landed], the mountaineers [had been enduring / were enduring] sub-zero temperatures for thirty-six hours.",
            options: ["landed, had been enduring", "had landed, endured"],
            correctAnswer: "landed, had been enduring",
            explanation: "'By the time + past simple' pairs with past perfect continuous ('had been enduring') for the 36-hour duration prior to landing.",
            explanationBurmese: "ရဟတ်ယာဉ်ဆင်းသက်ချိန် (landed) မတိုင်မီ ၃၆ နာရီကြာ ခံစားခဲ့ရသော duration အတွက် 'had been enduring' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
