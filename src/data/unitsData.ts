import { GrammarUnit } from "../types";

export const UNITS_DATA: GrammarUnit[] = [
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
          { text: "I don't deny / I'm not denying taking the books.", note: "Negative sentences can take simple or continuous" },
          { text: "We would advise you to arrive two hours before the flight leaves.", note: "Modals are often used with performatives to make what we say more tentative or polite." }
        ]
      }
    ],
    exercises: [
      {
        id: "1.1",
        title: "Exercise 1.1: State vs Action Verbs",
        instruction: "Complete each pair of sentences using the same verb from the box. Use the present continuous; if this is not possible, use the present simple.",
        instructionBurmese: "Box ထဲရှိ ကြိယာတစ်ခုတည်းကို သုံး၍ ဝါကျတွဲများကို ဖြည့်ပါ။ Continuous သုံး၍ရပါက သုံးပြီး မရပါက Present Simple သုံးပါ။",
        wordBank: ["attract", "consist of", "doubt", "feel", "fit", "have", "like", "look", "measure", "sound"],
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "1. a) I hear you're having your house repainted. How ______ ?\n   b) I bought this new dress today. How ______ ?",
            prefix: "1 a) How ",
            suffix: "? (look)",
            correctAnswer: ["'s it looking", "is it looking", "does it look"],
            alternatives: ["is it looking", "does it look"],
            explanation: "For 1a: ''s it looking' (or 'does it look') because the house painting is an ongoing temporary process. For 1b: 'does it look' (state).",
            explanationBurmese: "1a တွင် အိမ်ဆေးသုတ်နေဆဲ ယာယီအခြေအနေမေးခြင်းဖြစ်၍ ''s it looking' (သို့မဟုတ် 'does it look') သုံးနိုင်သည်။ 1b တွင် အဝတ်အစားပုံစံ (state) ဖြစ်၍ 'does it look' သုံးသည်။"
          },
          {
            id: 2,
            prompt: "2. a) A: What are you doing with that ruler?  B: I ______ the area of the kitchen.\n   b) The garden ______ 12 by 20 metres.",
            prefix: "2 a) B: I ",
            suffix: " the area. (measure)",
            correctAnswer: ["'m measuring", "am measuring"],
            alternatives: ["am measuring"],
            explanation: "2a: ''m measuring' describes the physical action of taking measurements. 2b: 'measures' describes the state/dimension.",
            explanationBurmese: "2a တွင် ပေကြိုးဖြင့် တိုင်းတာနေသော လုပ်ဆောင်ချက် (Action) ဖြစ်၍ ''m measuring'။ 2b တွင် အတိုင်းအတာပမာဏ (State) ဖြစ်၍ 'measures'။"
          },
          {
            id: 3,
            prompt: "3. a) I ______ whether I'll get another chance to retake the exam.\n   b) I suppose she might be at home tonight, but I ______ it.",
            prefix: "3 a) I ",
            suffix: " whether I'll get another chance. (doubt)",
            correctAnswer: ["doubt"],
            alternatives: ["doubt"],
            explanation: "The verb 'doubt' is a state verb expressing disbelief/mental state and is rarely used in the continuous.",
            explanationBurmese: "'Doubt' သည် သံသယဖြစ်ခြင်း (State verb) ဖြစ်၍ Continuous ပုံစံ မသုံးရဘဲ Simple 'doubt' သာ သုံးရသည်။"
          },
          {
            id: 4,
            prompt: "4. a) The new science museum currently ______ 10,000 visitors a month.\n   b) Flowers ______ bees with their brightly-coloured petals.",
            prefix: "4 a) The museum currently ",
            suffix: " 10,000 visitors a month. (attract)",
            correctAnswer: ["is currently attracting", "is attracting", "'s attracting", "attracts"],
            alternatives: ["is attracting", "attracts"],
            explanation: "4a: 'is currently attracting' (or 'attracts') with 'currently' emphasising a temporary trend. 4b: 'attract' (general fact).",
            explanationBurmese: "4a တွင် 'currently' ပါ၍ ယာယီဆွဲဆောင်နိုင်မှု 'is currently attracting' သုံးနိုင်သည်။ 4b တွင် သဘာဝအမှန်တရားဖြစ်၍ 'attract' သုံးသည်။"
          },
          {
            id: 5,
            prompt: "5. a) Carlos won't work at the top of the 20-storey building because he ______ heights.\n   b) A: How's the new job?  B: Well, at the moment, I ______ it at all.",
            prefix: "5 b) B: Well, at the moment, I ",
            suffix: " it at all. (like)",
            correctAnswer: ["'m not liking", "am not liking", "don't like"],
            alternatives: ["am not liking", "don't like"],
            explanation: "5a: 'doesn't like' (general permanent preference). 5b: ''m not liking' (or 'don't like') with 'at the moment' emphasising a temporary feeling.",
            explanationBurmese: "5b တွင် 'at the moment' ပါရှိသဖြင့် ယာယီခံစားချက်ကို အလေးပေးသော ''m not liking' (သို့မဟုတ် 'don't like') သုံးနိုင်သည်။"
          },
          {
            id: 6,
            prompt: "6. a) My car's in the garage today. They ______ new brakes.\n   b) I bought this jumper for Anna, but it ______ her so I'll have to take it back.",
            prefix: "6 a) They ",
            suffix: " new brakes. (fit)",
            correctAnswer: ["'re fitting", "are fitting"],
            alternatives: ["are fitting"],
            explanation: "6a: 'are fitting' is the physical action of installing brakes. 6b: 'doesn't fit' is the state of size/dimension.",
            explanationBurmese: "6a တွင် ဘရိတ်တပ်ဆင်နေသည့် လုပ်ဆောင်ချက် (Action) ဖြစ်၍ 'are fitting'။ 6b တွင် အရွယ်အစားမတော်ခြင်း (State) ဖြစ်၍ 'doesn't fit'။"
          }
        ]
      },
      {
        id: "1.2",
        title: "Exercise 1.2: Performatives & Mental State Verbs",
        instruction: "Cross out any improbable answers in the text. Choose the correct form for each numbered item.",
        instructionBurmese: "မဖြစ်နိုင်သော အဖြေကို ပယ်ဖျက်ပြီး အသုံးအမှန်ဆုံး ကြိယာပုံစံကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Dear Aunt Mara, Thanks for your message. I (1) [apologise / 'm apologising] for not getting back to you sooner...",
            options: ["apologise", "'m apologising", "Both are possible"],
            correctAnswer: "Both are possible",
            explanation: "'I apologise' (performative) is standard. In informal writing, 'I'm apologising' is also used when referring to the current email.",
            explanationBurmese: "Performative ကြိယာ 'apologise' ဖြစ်သော်လည်း အလွတ်သဘောစာများတွင် 'I'm apologising' ကိုလည်း အသုံးပြုနိုင်သည်။"
          },
          {
            id: 2,
            prompt: "When I went into nursing, you warned me that it would be really hard work, but I (2) [admit / 'm admitting] that I didn't really believe you.",
            options: ["admit", "'m admitting"],
            correctAnswer: "admit",
            explanation: "'I admit' is a performative verb used in affirmative sentences to acknowledge a fact.",
            explanationBurmese: "မိမိဝန်ခံပြောဆိုသော Performative ဖြစ်သဖြင့် Present Simple 'admit' သာ သုံးရသည်။"
          },
          {
            id: 3,
            prompt: "Don't get me wrong – I (3) [don't suggest / 'm not suggesting] that I'm not enjoying it.",
            options: ["don't suggest", "'m not suggesting", "Both are possible"],
            correctAnswer: "Both are possible",
            explanation: "In negative sentences, performative verbs (deny, suggest, apologise, guarantee) can take either simple or continuous form.",
            explanationBurmese: "အငြင်းဝါကျ (negative) တွင် performative ကြိယာများသည် Simple နှင့် Continuous နှစ်မျိုးလုံး သုံးနိုင်သည်။"
          },
          {
            id: 4,
            prompt: "It's incredibly rewarding, but I (4) [now realise / 'm now realising] how hard the job is.",
            options: ["now realise", "'m now realising", "Both are possible"],
            correctAnswer: "Both are possible",
            explanation: "'Realise' as a mental state verb can be continuous ('m now realising) when we want to emphasise that we have recently started to understand something.",
            explanationBurmese: "တဖြည်းဖြည်း သဘောပေါက်နားလည်စပြုလာခြင်း (recently starting to think/realise) ဖြစ်၍ နှစ်မျိုးလုံး သုံးနိုင်သည်။"
          },
          {
            id: 5,
            prompt: "I (5) [confess / 'm confessing] and go straight to bed.",
            options: ["confess", "'m confessing", "Both are possible"],
            correctAnswer: "Both are possible",
            explanation: "'confess' operates as a performative and in informal email narrative can also be continuous.",
            explanationBurmese: "Performative အနေဖြင့် 'confess' သို့မဟုတ် စာရေးသားမှုတွင် 'm confessing' သုံးနိုင်သည်။"
          },
          {
            id: 6,
            prompt: "I (6) [consider / 'm considering] buying a car, which will make things easier, I hope.",
            options: ["consider", "'m considering"],
            correctAnswer: "'m considering",
            explanation: "When 'consider' means 'think carefully about taking action', it is usually used in the continuous form ('m considering).",
            explanationBurmese: "'Consider' သည် ကားဝယ်ရန် သေချာစဉ်းစားနေခြင်း (thinking carefully about) ဖြစ်သောကြောင့် Continuous ('m considering) သုံးရသည်။"
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
    summary: "Master storytelling/jokes in the present simple, live sports commentaries, introducing heard news, headlines, and habits with 'always/constantly'.",
    summaryBurmese: "ပုံပြင်/ဟာသပြောပြခြင်း၊ အားကစားတိုက်ရိုက်ကြေညာချက်၊ ကြားသိရသောသတင်းမိတ်ဆက်ခြင်းနှင့် 'always/constantly' ဖြင့် အလေ့အထအလေးပေးဖော်ပြပုံ။",
    keyPoints: [
      "Present simple in stories and jokes makes events feel direct, exciting, and happening right now.",
      "Live commentaries (sports): Present simple for fast main actions, present continuous for background.",
      "Introducing news: 'I hear', 'I gather', 'I see', 'I understand', 'They say', 'Sophia tells me'.",
      "Newspaper headlines and summaries of books/films use present simple.",
      "Present continuous with 'always', 'constantly', 'continually', 'forever' expresses characteristic frequency or annoyance/disapproval."
    ],
    keyPointsBurmese: [
      "ဟာသ သို့မဟုတ် ဇာတ်လမ်းပြောရာတွင် ပိုမိုစိတ်လှုပ်ရှားဖွယ်ဖြစ်စေရန် Present Simple ကို သုံးသည်။",
      "အားကစားပွဲ တိုက်ရိုက်ဝေဖန်ကြေညာရာတွင် အဓိကလုပ်ဆောင်ချက်ကို Present Simple နှင့် နောက်ခံလုပ်ဆောင်ချက်ကို Continuous သုံးသည်။",
      "သတင်းမိတ်ဆက်ရာတွင် 'I gather', 'I understand', 'Sophia tells me...' ဟု Present Simple သုံးသည်။",
      "Always / constantly / forever တို့နှင့်တွဲ၍ မကြာခဏဖြစ်ပျက်မှု သို့မဟုတ် မကျေနပ်မှုကို ဖော်ပြရန် Continuous သုံးသည်။"
    ],
    reminderRefs: ["A1", "A5"],
    sections: [
      {
        id: "A",
        title: "Stories, jokes, and narratives",
        content: "We often use the present simple and present continuous when telling stories and jokes in informal spoken English to create the impression that events are happening now. The main events are described in sequence using present simple, and longer background events using present continuous.",
        contentBurmese: "ဇာတ်လမ်း သို့မဟုတ် ဟာသများပြောပြရာတွင် အဓိကအဖြစ်အပျက်များကို Present Simple ဖြင့် အစဉ်လိုက်ဖော်ပြပြီး၊ နောက်ခံအခြေအနေများကို Present Continuous ဖြင့် ဖော်ပြသည်။",
        examples: [
          { text: "She goes up to this man and looks straight into his eyes. He's not wearing his glasses, and he doesn't recognise her...", note: "Main sequential events in present simple" },
          { text: "So last night, I'm waiting for the bus when this man walks up to me and says...", note: "Highlighting an event after 'suddenly' or 'all of a sudden'" }
        ]
      },
      {
        id: "B",
        title: "Live commentaries",
        content: "We also use the present simple and present continuous in live commentaries (e.g. sports events) when the report takes place at the same time as the action.",
        contentBurmese: "အားကစားပြိုင်ပွဲများ တိုက်ရိုက်သတင်းပေးပို့ရာတွင် လျင်မြန်သောလုပ်ဆောင်ချက်များကို Present Simple ဖြင့် ဖော်ပြသည်။",
        examples: [
          { text: "King serves to the left-hand court and Adams makes a wonderful return. She's playing magnificent tennis in this match...", note: "serves, makes = quick completed action; 's playing = overall match progress" }
        ]
      },
      {
        id: "C",
        title: "Introducing heard news and headlines",
        content: "We can use the present simple in phrases such as 'It says here', 'I hear', 'I gather', 'I see', 'I understand' and 'They say', '(Someone) says', '(Someone) tells me' to introduce news that we have heard, read, seen, or been told.",
        contentBurmese: "သတင်းအချက်အလက်များကို မိတ်ဆက်ဖော်ပြရာတွင် 'I gather', 'I hear', 'Professor Hendriks tells me...' စသည်ဖြင့် Present Simple ကို သုံးသည်။",
        examples: [
          { text: "I gather you're worried about Pedro.", note: "news heard recently" },
          { text: "Sophia tells me you're thinking of emigrating.", note: "news received from Sophia" },
          { text: "SECOND QUAKE HITS JAPAN", note: "newspaper headline using present simple" }
        ]
      },
      {
        id: "D",
        title: "Frequency adverbs: always, constantly, forever",
        content: "We can use the present continuous with adverbs such as always, constantly, continually or forever to emphasise that something is done so often that it is characteristic of a person, group or thing. We often use this pattern to indicate disapproval.",
        contentBurmese: "Always, constantly, continually, forever တို့နှင့်တွဲပြီး Present Continuous ကို သုံးကာ တစ်စုံတစ်ဦး၏ အလေ့အထ သို့မဟုတ် စိတ်အနှောင့်အယှက်ဖြစ်ရသောအပြုအမူကို အလေးပေးဖော်ပြသည်။",
        examples: [
          { text: "You're constantly changing your mind.", note: "indicates disapproval / irritation", burmeseNote: "စိတ်အနှောင့်အယှက်ဖြစ်မှုကို ဖော်ပြခြင်း" },
          { text: "Jacob is a really kind person. He's always offering to help me with my work.", note: "positive characteristic" }
        ]
      }
    ],
    exercises: [
      {
        id: "2.1",
        title: "Exercise 2.1: Commentary and Story Narrative",
        instruction: "Complete these sentences using the verbs in brackets. Use the present simple or present continuous.",
        instructionBurmese: "ကွင်းစကွင်းပိတ်ထဲရှိ ကြိယာများကို သုံး၍ Present Simple သို့မဟုတ် Present Continuous ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "Rodriguez (pass) ______ to De Mello, who (shoot) ______ just over the bar. The home team (attack) ______ much more in this half.",
            prefix: "Rodriguez ",
            suffix: " to De Mello, who shoots... (pass)",
            correctAnswer: ["passes"],
            explanation: "In sports commentary, instant actions use the present simple ('passes', 'shoots').",
            explanationBurmese: "အားကစား တိုက်ရိုက်ကြေညာချက်တွင် ချက်ချင်းလုပ်ဆောင်ချက်ဖြစ်၍ Present Simple ('passes') ကို သုံးသည်။"
          },
          {
            id: 2,
            prompt: "A man (arrive) ______ home late one night after the office Christmas party. His wife (wait) ______ for him, and she (say) ______ to him...",
            prefix: "A man ",
            suffix: " home late one night... (arrive)",
            correctAnswer: ["arrives"],
            explanation: "Telling jokes/stories: sequential main actions are in present simple ('arrives', 'is waiting', 'says').",
            explanationBurmese: "ဟာသ/ဇာတ်လမ်းပြောရာတွင် အစဉ်လိုက်အဖြစ်အပျက်ကို Present Simple ('arrives') သုံးသည်။"
          }
        ]
      },
      {
        id: "2.2",
        title: "Exercise 2.2: Reporting News with Present Tense Phrases",
        instruction: "Complete what each person says about the news they have read or heard using the present tense phrases in Section C.",
        instructionBurmese: "Section C ပါ 'I see', 'I understand', 'It says here' စသည့် စကားစုများကို သုံး၍ သတင်းကို ပြန်လည်ဖော်ပြပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "Headline: 'Vegecorp to sack 1,000 workers.'\nSpeaker says: '______ Vegecorp are going to sack 1,000 workers.'",
            prefix: "I ",
            suffix: " Vegecorp are going to sack 1,000 workers.",
            correctAnswer: ["gather", "see", "understand", "hear"],
            explanation: "'I gather', 'I see', 'I understand', or 'I hear' can all introduce news heard or read.",
            explanationBurmese: "ကြားသိရသောသတင်းကို မိတ်ဆက်ရာတွင် 'I gather', 'I see', 'I understand' သို့မဟုတ် 'I hear' ကို သုံးနိုင်သည်။"
          },
          {
            id: 2,
            prompt: "Headline: 'President Bergman announced a new public holiday on his birthday, August 6th.'\nSpeaker says: '______ we're going to have a new public holiday.'",
            prefix: "I ",
            suffix: " we're going to have a new public holiday.",
            correctAnswer: ["understand", "hear", "see", "gather"],
            explanation: "'I understand' / 'I hear' introduces reported announcements.",
            explanationBurmese: "သတင်းကြေညာချက်ကို တဆင့်ပြန်ပြောရာတွင် 'I understand / I hear' သုံးသည်။"
          }
        ]
      },
      {
        id: "2.3",
        title: "Exercise 2.3: Expressing Annoyance with 'always / constantly'",
        instruction: "Expand the notes below to complete each dialogue using the present continuous with always, constantly, continually, or forever.",
        instructionBurmese: "မှတ်စုများကို သုံး၍ always, constantly, continually သို့မဟုတ် forever ဖြင့် Present Continuous ဝါကျ ဖွဲ့ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "A: I can't read this.  B: You're ______ (always / complain / handwriting)",
            prefix: "B: You're ",
            suffix: " (always / complain / handwriting)",
            correctAnswer: ["always complaining about my handwriting", "constantly complaining about my handwriting"],
            explanation: "Expressing irritation: 'You're always complaining about my handwriting.'",
            explanationBurmese: "စိတ်ပျက်မှုကို ဖော်ပြရန် 'You're always complaining about my handwriting' ဟု Continuous ဖွဲ့ရသည်။"
          },
          {
            id: 2,
            prompt: "A: Can I borrow €10?  B: You're ______ (forever / ask me / money)",
            prefix: "B: You're ",
            suffix: " (forever / ask me / money)",
            correctAnswer: ["forever asking me for money", "always asking me for money"],
            explanation: "Expressing annoyance: 'You're forever asking me for money.'",
            explanationBurmese: "ခဏခဏ ပိုက်ဆံလာတောင်းနေခြင်းကို မကျေမနပ်ပြောရာတွင် 'You're forever asking me for money' သုံးသည်။"
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
    summary: "Distinguish between past simple for finished time periods and present perfect for time periods including the present, news reporting transitions, and 'It is the first time...'",
    summaryBurmese: "ပြီးဆုံးသွားသော အတိတ်ကာလနှင့် လက်ရှိအချိန်ပါဝင်နေဆဲ ကာလများတွင် Past Simple vs Present Perfect ခွဲခြားသုံးပုံ၊ သတင်းအစီရင်ခံခြင်းနှင့် 'It is the first time...' ပုံစံများ။",
    keyPoints: [
      "Time expressions referring to the present (this morning, today): past simple if the period is finished; present perfect if the period is still ongoing.",
      "Time clauses with 'since': past simple in the time clause (referring to a past point), present perfect in main clause.",
      "In time clauses after after, when, until, as soon as, once: present perfect refers to future completed events; past simple/past perfect refers to past events.",
      "News reports introduce recent events with present perfect, then give details with past simple.",
      "After the pattern 'It / This / That is the first time...' we use the present perfect; with 'was the first time...' we use the past perfect."
    ],
    keyPointsBurmese: [
      "'This morning' ကဲ့သို့သော အသုံးတွင် မနက်ပိုင်း ကုန်လွန်သွားပါက Past Simple၊ မနက်ပိုင်း မကုန်သေးပါက Present Perfect သုံးသည်။",
      "'Since' ပါသော ဝါကျစိတ်တွင် Past Simple သုံးပြီး ပင်မဝါကျတွင် Present Perfect သုံးသည်။",
      "သတင်းများတွင် အဓိကသတင်းခေါင်းစဉ်ကို Present Perfect ဖြင့် မိတ်ဆက်ပြီး အသေးစိတ်အချက်အလက်ကို Past Simple ဖြင့် ဆက်ပြောသည်။",
      "'It is the first time...' နောက်တွင် Present Perfect လိုက်ပြီး၊ 'It was the first time...' နောက်တွင် Past Perfect လိုက်သည်။"
    ],
    reminderRefs: ["A6", "A11", "A12"],
    sections: [
      {
        id: "A",
        title: "Time expressions: this morning / today / this week",
        content: "Time expressions that refer to the present can be used with either past simple or present perfect verbs. If we think of this morning as a past, completed time period, then we use the past simple; if we think of this morning as a time period which includes the present moment, then we use the present perfect.",
        contentBurmese: "'This morning' ကဲ့သို့သော အချိန်ပြစကားစုများတွင် ထိုအချိန်ကာလ ပြီးဆုံးသွားပြီဟု ယူဆပါက Past Simple သုံးပြီး၊ ထိုအချိန်ကာလ မကုန်သေးဘဲ လက်ရှိအချိန် ပါဝင်နေသေးပါက Present Perfect သုံးသည်။",
        examples: [
          { text: "I didn't shave this morning.", note: "(= the morning is over and I didn't shave)", burmeseNote: "မနက်ပိုင်း ကုန်သွားပြီဖြစ်၍ Past Simple သုံးခြင်း" },
          { text: "I haven't shaved this morning.", note: "(= it is still the morning and I might shave later)", burmeseNote: "မနက်ပိုင်း မကုန်သေးသဖြင့် Present Perfect သုံးခြင်း" }
        ]
      },
      {
        id: "B",
        title: "Time clauses with 'since'",
        content: "In a sentence which includes a time clause with since, we generally prefer a past simple verb in the time clause (referring to a particular point in the past) and a present perfect verb in the main clause.",
        contentBurmese: "'Since' ပါသော time clause တွင် အတိတ်အချိန်ကို ရည်ညွှန်းသော Past Simple သုံးပြီး ပင်မဝါကျ (main clause) တွင် Present Perfect သုံးသည်။",
        examples: [
          { text: "Since Mr Dodson became president, unemployment has increased.", note: "became = past simple point; has increased = present perfect result" },
          { text: "She hasn't been able to play tennis since she broke her arm.", note: "broke = point in past; hasn't been able = continuous up to now" },
          { text: "Have you met any of your neighbours since you've lived here?", note: "Note: present perfect in since-clause is used if the two situations both extend until the present." }
        ]
      },
      {
        id: "C",
        title: "News reports: Present perfect into past simple",
        content: "In news reports, you will often read about or hear recent events introduced with the present perfect, and then the past simple or other past tenses are used to give details.",
        contentBurmese: "သတင်းထုတ်ပြန်ချက်များတွင် လတ်တလောဖြစ်ရပ်ကို Present Perfect ဖြင့် စတင်မိတ်ဆက်ပြီး၊ ၎င်း၏ အသေးစိတ်အချက်များကို Past Simple ဖြင့် ဆက်လက်ဖော်ပြသည်။",
        examples: [
          { text: "A Russian spacecraft has returned safely to Earth with its two passengers. US astronaut Scott Keane and Russian cosmonaut Olga Kaleri landed in the early hours of Wednesday.", note: "has returned (announcement) -> landed (specific past detail)" },
          { text: "An American woman has become the first person to make 2 million contributions to Dictionary File. Esther Miller began editing the site eight years ago.", note: "has become (news) -> began (past detail)" }
        ]
      },
      {
        id: "D",
        title: "It is the first time... + Present Perfect",
        content: "After the pattern 'It / This / That is / will be the first time...' we generally use the present perfect in the next clause. After 'It / This / That was the first time...' we use the past perfect.",
        contentBurmese: "'It is the first time...' ဖွဲ့စည်းပုံနောက်တွင် Present Perfect လိုက်ရပြီး၊ 'It was the first time...' နောက်တွင် Past Perfect လိုက်ရသည်။",
        examples: [
          { text: "That's the first time I've seen Jan look embarrassed.", note: "reporting a present/recent event: present perfect" },
          { text: "It won't be the first time she has voted against the government.", note: "talking about a future event" },
          { text: "It was the first time I'd talked to Dimitra outside the office.", note: "past reference: past perfect ('d talked)" }
        ]
      }
    ],
    exercises: [
      {
        id: "3.1",
        title: "Exercise 3.1: Present Perfect vs Past Simple",
        instruction: "Complete each sentence with a verb from the box. Use the present perfect or past simple, with a negative form where necessary.",
        instructionBurmese: "Box ထဲရှိ ကြိယာများကို သုံး၍ Present Perfect သို့မဟုတ် Past Simple (လိုအပ်ပါက အငြင်းပုံစံ) ဖြင့် ဖြည့်ပါ။",
        wordBank: ["have", "go", "oversleep", "read", "spend", "wear"],
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "A: Shall I make us some dinner? It's already eight o'clock.\nB: No, thanks. I ______ to the dentist this afternoon and my mouth hurts too much to eat anything.",
            prefix: "B: No, thanks. I ",
            suffix: " to the dentist this afternoon... (go)",
            correctAnswer: ["went"],
            explanation: "Past simple 'went' because 'this afternoon' is finished at 8 o'clock in the evening.",
            explanationBurmese: "ည ၈ နာရီဖြစ်နေပြီဖြစ်၍ မွန်းလွဲပိုင်း 'this afternoon' ကာလ ကုန်ဆုံးသွားပြီဖြစ်သောကြောင့် Past Simple 'went' သုံးရသည်။"
          },
          {
            id: 2,
            prompt: "I ______ three lectures today and I still have two more later this afternoon.",
            prefix: "I ",
            suffix: " three lectures today... (have)",
            correctAnswer: ["'ve had", "have had"],
            explanation: "Present perfect 'have had' because 'today' is still ongoing (there are more lectures later this afternoon).",
            explanationBurmese: "ဒီကနေ့ 'today' မကုန်သေးဘဲ နေ့လယ်ပိုင်းတွင် သင်တန်းများ ကျန်ရှိနေသေးသောကြောင့် Present Perfect ('have had') ဖြစ်သည်။"
          },
          {
            id: 3,
            prompt: "It was so hot today that I ______ shorts and a T-shirt at work.",
            prefix: "I ",
            suffix: " shorts and a T-shirt at work. (wear)",
            correctAnswer: ["wore"],
            explanation: "Past simple 'wore' is triggered by 'It was so hot' describing a past state of the day.",
            explanationBurmese: "'It was so hot' ဟု အတိတ်ကာလဖြင့် ဖော်ပြထားသောကြောင့် Past Simple 'wore' သုံးရသည်။"
          }
        ]
      },
      {
        id: "3.2",
        title: "Exercise 3.2: News Report Tense Transitions",
        instruction: "Choose the more appropriate tense: present perfect or past simple for the verbs in brackets.",
        instructionBurmese: "သတင်းထုတ်ပြန်ချက်များအတွက် အသင့်တော်ဆုံး ကြိယာကာလ (Present Perfect သို့မဟုတ် Past Simple) ကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "When President Ismail arrives in Paris this evening, it will be the first time she (visit) ______ Europe since her election victory in May.",
            options: ["has visited", "visited", "had visited"],
            correctAnswer: "has visited",
            explanation: "After 'it will be the first time...', we use the present perfect ('has visited').",
            explanationBurmese: "'it will be the first time...' နောက်တွင် Present Perfect ('has visited') သုံးရသည်။"
          },
          {
            id: 2,
            prompt: "The Victoria Hospital in Milltown (has closed / closed) to new patients after more cases of food poisoning. Three patients (have died / died) last week in the outbreak.",
            options: ["has closed ... died", "closed ... have died", "has closed ... have died"],
            correctAnswer: "has closed ... died",
            explanation: "News announcement: 'has closed' (or 'has been closed') for recent headline event, followed by past simple 'died' with past time marker 'last week'.",
            explanationBurmese: "လတ်တလောသတင်းအတွက် Present Perfect 'has closed' ဖြင့်စပြီး 'last week' ပါသော အသေးစိတ်အတွက် Past Simple 'died' သုံးသည်။"
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
    summary: "Understand simultaneous background activities, repeated actions over limited periods, narrative interruptions, and polite intentions with 'was thinking/wondering'.",
    summaryBurmese: "အတိတ်တွင် တစ်ပြိုင်နက်ဖြစ်ပျက်နေသော လုပ်ဆောင်ချက်များ၊ ယာယီအလေ့အထများနှင့် ယဉ်ကျေးစွာရည်ရွယ်ချက်ဖော်ပြသော 'was thinking/wondering' ပုံစံများ။",
    keyPoints: [
      "Two ongoing events in the past can both use past continuous or past simple (Mia was reading while Ben was washing up / read ... washed up).",
      "Repeated past actions: usually past simple, but past continuous emphasizes a limited, temporary period (e.g. 'I was having to bring work home every night').",
      "Narrative: past continuous sets the background scene, past simple introduces the interrupting single event.",
      "Verbs of intention (consider, expect, hope, intend, plan, think, want) in the past continuous make requests/plans less definite and more polite."
    ],
    keyPointsBurmese: [
      "အတိတ်က တစ်ပြိုင်နက်ဖြစ်ပျက်နေသော လုပ်ဆောင်ချက် ၂ ခုတွင် Past Continuous သို့မဟုတ် Past Simple သုံးနိုင်သည်။",
      "ယာယီကာလအတွင်း ထပ်ခါတလဲလဲ ပြုလုပ်ခဲ့ရသော အလုပ်များကို အလေးပေးရန် Past Continuous သုံးနိုင်သည်။",
      "ဇာတ်လမ်းပြောရာတွင် နောက်ခံအခြေအနေအတွက် Past Continuous နှင့် ကြားဖြတ်ဖြစ်ပေါ်သော အဓိကအလုပ်အတွက် Past Simple သုံးသည်။",
      "ယဉ်ကျေးသောအစီအစဉ်/တောင်းဆိုမှုအတွက် 'was thinking / was wondering' ကို သုံးသည်။"
    ],
    reminderRefs: ["A6", "A13"],
    sections: [
      {
        id: "A",
        title: "Two simultaneous past events & sequence",
        content: "When we talk about two events or activities that went on over the same period of past time, we can often use the past continuous or the past simple for both. When we talk about two or more past completed events that followed one another in sequence, we use the past simple for both.",
        contentBurmese: "အတိတ်က တစ်ချိန်တည်းဖြစ်ပျက်ခဲ့သော အလုပ် ၂ ခုအတွက် Past Continuous သို့မဟုတ် Past Simple သုံးနိုင်သည်။ အစဉ်လိုက်တစ်ခုပြီးတစ်ခု ပြီးမြောက်သွားသောအလုပ်များအတွက် Past Simple သာ သုံးရသည်။",
        examples: [
          { text: "Mia was reading to the children while Ben was washing up.", note: "Both in progress simultaneously" },
          { text: "She got up when the alarm clock went off.", note: "Sequential completed actions: both past simple" }
        ]
      },
      {
        id: "B",
        title: "Polite intentions with continuous verbs",
        content: "We can use the past continuous with verbs of intention (consider, expect, hope, intend, plan, think, want, wonder) to report what we might do in the future in a less definite, more polite way.",
        contentBurmese: "Consider, hope, plan, think, wonder စသည့် ရည်ရွယ်ချက်ပြကြိယာများကို Past Continuous ဖြင့် သုံး၍ ပိုမိုယဉ်ကျေးသော သို့မဟုတ် သိပ်မသေချာသေးသော အနာဂတ်အစီအစဉ်ကို ဖော်ပြသည်။",
        examples: [
          { text: "I was thinking of going to China next year, but it depends how much money I've got.", note: "less definite than 'I'm thinking of going'" },
          { text: "We were wondering about inviting Eva over tomorrow.", note: "polite and tentative" }
        ]
      }
    ],
    exercises: [
      {
        id: "4.1",
        title: "Exercise 4.1: Past Continuous vs Past Simple in Narrative",
        instruction: "Complete the sentences using the pairs of verbs. Use the past simple in one gap and the past continuous in the other.",
        instructionBurmese: "ကွက်လပ်တစ်ခုတွင် Past Simple နှင့် အခြားတစ်ခုတွင် Past Continuous ဖြည့်စွက်ပါ။",
        wordBank: ["come - show", "get - go", "hope - give", "live - spend", "look - see", "play - break", "start - check in"],
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "1. Just as I (get) ______ into the bath, all the lights (go) ______ off.",
            prefix: "Just as I ",
            suffix: " into the bath, all the lights went off. (get / go)",
            correctAnswer: ["was getting"],
            explanation: "Background ongoing action: 'was getting into the bath'. Interruption: 'went off'.",
            explanationBurmese: "ရေချိုးခန်းထဲ ဝင်နေဆဲဖြစ်သဖြင့် 'was getting' ဖြစ်ပြီး မီးပျက်သွားသော ဖြတ်ခနဲဖြစ်ရပ်မှာ 'went off' ဖြစ်သည်။"
          },
          {
            id: 2,
            prompt: "2. I (hope) ______ to go away this weekend, but my boss (give) ______ me some work that I have to finish by Monday.",
            prefix: "I ",
            suffix: " to go away... (hope / give)",
            correctAnswer: ["was hoping", "had hoped"],
            explanation: "'was hoping' (or 'had hoped') describes an intention that didn't happen because the boss 'gave' work.",
            explanationBurmese: "မဖြစ်မြောက်ခဲ့သော ရည်ရွယ်ချက်အတွက် 'was hoping' နှင့် အလုပ်ပေးလိုက်သော ပြီးပြတ်လုပ်ဆောင်ချက်အတွက် 'gave' သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 15: Modals - Can, could, be able to
  {
    id: 15,
    title: "Can, could, be able to and be allowed to",
    category: "modals",
    level: "B2 Intermediate",
    summary: "Master the crucial difference between general past ability ('could') and specific single achievement ('was/were able to'), plus theoretical possibility vs actuality.",
    summaryBurmese: "အတိတ်က ယေဘုယျစွမ်းရည် (could) နှင့် အခက်အခဲကြားမှ သီးသန့်အောင်မြင်မှု (was/were able to) အသုံးကွာခြားချက်၊ သီအိုရီအရ ဖြစ်နိုင်ခြေနှင့် ခွင့်ပြုချက်များ။",
    keyPoints: [
      "Ability in the past: Use 'could' for general ability (e.g. 'Sophie could play the flute quite well').",
      "Single past achievement: MUST use 'was/were able to' (e.g. 'She swam strongly and was able to cross the river easily', NOT 'could cross').",
      "However, in negative sentences, 'couldn't' is natural for both general and single situations ('I couldn't move').",
      "With verbs of senses/thinking (feel, hear, see, smell, taste, remember, understand), 'could' is preferred even for single events.",
      "Theoretical possibility vs actual possibility: 'It could be expensive' (if we had one) vs 'It can be expensive' (sometimes is)."
    ],
    keyPointsBurmese: [
      "အတိတ်က ယေဘုယျတတ်မြောက်ထားသော စွမ်းရည်အတွက် 'could' ကို သုံးသည်။",
      "အတိတ်က သီးခြားအခြေအနေတစ်ခုတွင် အောင်မြင်စွာ လုပ်ဆောင်နိုင်ခဲ့သည့် စွမ်းဆောင်ရည် (single achievement) အတွက် 'was/were able to' ကိုသာ သုံးရပြီး 'could' မသုံးရပါ။",
      "အငြင်းဝါကျများတွင်မူ 'couldn't' ကို ၂ မျိုးလုံးအတွက် သုံးနိုင်သည်။",
      "အာရုံခံကြိယာများ (see, hear, smell, remember) တွင် 'could' ကို ပိုမိုသုံးသည်။"
    ],
    reminderRefs: ["C1", "C2", "C3", "C4", "C5", "C6", "C7"],
    sections: [
      {
        id: "A",
        title: "Ability: can, could and be able to",
        content: "We avoid 'be able to' when we talk about something that is happening as we speak, before passives, and when the meaning is 'know how to'.",
        contentBurmese: "စကားပြောနေစဉ် ဖြစ်ပျက်နေသောအရာ၊ Passive ရှေ့နှင့် 'know how to' (တတ်ကျွမ်းမှု) အဓိပ္ပာယ်များတွင် 'be able to' ကို ရှောင်ကြဉ်ပြီး 'can/could' ကို သုံးသည်။",
        examples: [
          { text: "Watch me, Mum; I can stand on one leg.", note: "NOT I'm able to stand on one leg" },
          { text: "Films can now easily be streamed online.", note: "before passive: 'can easily be streamed'" },
          { text: "Can you cook?", note: "meaning 'know how to': NOT Are you able to cook?" }
        ]
      },
      {
        id: "B",
        title: "Single achievement vs general ability in the past",
        content: "If we talk about a single achievement, rather than a general ability in the past, we usually use 'be able to' rather than 'could'.",
        contentBurmese: "အတိတ်က ယေဘုယျစွမ်းရည်မဟုတ်ဘဲ သီးသန့်ပြီးမြောက်အောင်မြင်မှု (single achievement) အတွက် 'was/were able to' သုံးရသည်။",
        examples: [
          { text: "She swam strongly and was able to cross the river easily.", note: "single achievement -> was able to cross (NOT could cross)", burmeseNote: "မြစ်ကို အောင်မြင်စွာ ဖြတ်ကူးနိုင်ခဲ့ခြင်း (Single achievement) ဖြစ်၍ 'was able to' သာ သုံးရမည်။" },
          { text: "Sophie could play the flute quite well (or was able to...).", note: "general ability -> both possible" },
          { text: "I tried to get up but I couldn't move.", note: "negative sentences: couldn't is natural" },
          { text: "I could smell the paint when I came in.", note: "verbs of senses: could is natural" }
        ]
      }
    ],
    exercises: [
      {
        id: "15.1",
        title: "Exercise 15.1: Could vs Was/Were Able To",
        instruction: "Underline the correct or more natural option (or both if possible).",
        instructionBurmese: "ပိုမိုမှန်ကန် သဘာဝကျသော စကားလုံးကို ရွေးပါ (နှစ်မျိုးလုံးဖြစ်နိုင်ပါက နှစ်မျိုးလုံး ရွေးပါ)။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Valuables [can / are able to] be left in the hotel safe. Please ask at the reception desk.",
            options: ["can", "are able to", "both"],
            correctAnswer: "can",
            explanation: "Before passives ('be left'), 'can' is preferred over 'are able to'.",
            explanationBurmese: "Passive ပုံစံ ('be left') ရှေ့တွင် 'can' ကို ပိုမိုသုံးသည်။"
          },
          {
            id: 2,
            prompt: "We [could / were able to] finish the hockey match before it started snowing too heavily.",
            options: ["were able to", "could", "both"],
            correctAnswer: "were able to",
            explanation: "'were able to' is required for a single past achievement under difficult circumstances.",
            explanationBurmese: "နှင်းမကျမီ ဟော်ကီပွဲ ပြီးအောင် ကစားနိုင်ခဲ့သည့် သီးသန့်အောင်မြင်မှု (single achievement) ဖြစ်၍ 'were able to' သာ မှန်သည်။"
          },
          {
            id: 3,
            prompt: "When the firefighters arrived they [could / were able to] put out the flames in a couple of minutes.",
            options: ["were able to", "could", "both"],
            correctAnswer: "were able to",
            explanation: "Extinguishing a specific fire is a single completed past achievement -> 'were able to'.",
            explanationBurmese: "မီးသတ်သမားများ မီးငြှိမ်းသတ်နိုင်ခဲ့သော သီးသန့်အောင်မြင်မှုဖြစ်၍ 'were able to' ဖြစ်သည်။"
          },
          {
            id: 4,
            prompt: "I knew Petra had been decorating. I [could / was able to] smell the paint when I came in.",
            options: ["could", "was able to", "both"],
            correctAnswer: "could",
            explanation: "With verbs of senses (smell, hear, see, taste, feel), 'could' is more natural than 'was able to'.",
            explanationBurmese: "အာရုံခံကြိယာ 'smell' နှင့်တွဲသုံးရာတွင် 'could' သည် သဘာဝအကျဆုံးဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 85: Conditionals - If I were you; imagine he were to win
  {
    id: 85,
    title: "If I were you...; imagine he were to win (Subjunctive & Unreal Conditionals)",
    category: "adverbial-clauses",
    level: "C1 Advanced",
    summary: "Master the past subjunctive 'were' across all subjects (I/he/she/it), inversion with 'Were + subject + to-infinitive', and unreal expressions after wish, if only, and imagine.",
    summaryBurmese: "ကတ္တားအားလုံးအတွက် 'were' (Subjunctive) သုံးစွဲပုံ၊ 'Were he to win...' Inversion ဖွဲ့စည်းပုံနှင့် Wish, If only, Imagine နောက်လိုက် Unreal ပုံစံများ။",
    keyPoints: [
      "In unreal conditional sentences, 'were' can be used after any subject (I, he, she, it) in formal contexts (past subjunctive).",
      "We prefer 'were' rather than 'was' when giving advice with 'If I were you...'.",
      "Inversion pattern: 'Were + subject + to-infinitive' (e.g. 'Were the election to be held today, the Liberals would win easily').",
      "Used after 'wish', 'if only', 'would rather', and clauses beginning with 'suppose', 'supposing', 'imagine'.",
      "In comparisons with 'as if' and 'as though': 'He talks as if he were an expert'."
    ],
    keyPointsBurmese: [
      "စိတ်ကူးယဉ် အခြေအနေများတွင် I, he, she, it အားလုံးအတွက် 'were' (Subjunctive) ကို formal အနေဖြင့် သုံးနိုင်သည်။",
      "အကြံပေးရာတွင် 'If I were you...' ကို အမြဲသုံးသည်။",
      "Inversion ပုံစံဖြင့် 'If the election was held...' အစား 'Were the election to be held...' ဟု အဆင့်မြင့် ရေးဖွဲ့နိုင်သည်။",
      "Wish, If only, Imagine, Would rather တို့နောက်တွင် 'were' ကို တွဲသုံးသည်။"
    ],
    reminderRefs: ["M13", "M14"],
    sections: [
      {
        id: "A",
        title: "Subjunctive 'were' after singular subjects",
        content: "In unreal conditional sentences we can use 'were' after any subject in the if-clause, including I / she / he / it. This use of were is sometimes called the past subjunctive, and is preferred in formal contexts.",
        contentBurmese: "Unreal conditionals များတွင် I/he/she/it နောက်၌ 'were' (Past subjunctive) ကို သုံးပြီး Formal အရေးအသားများတွင် ပိုမိုအသုံးပြုသည်။",
        examples: [
          { text: "If your mother were here, I'm sure she wouldn't let you eat all those chocolates.", note: "formal subjunctive 'were'" },
          { text: "If I were you, I'd take it back to the shop.", note: "Advice: 'If I were you' is standard", burmeseNote: "အကြံပေးစကားတွင် 'If I were you' ကို အမြဲသုံးသည်။" }
        ]
      },
      {
        id: "B",
        title: "Inversion: Were + subject + to-infinitive",
        content: "We can use 'Were + subject + to-infinitive' as a more formal alternative to 'if + subject + was / were'.",
        contentBurmese: "Formal အရေးအသားတွင် 'If + subject + were' အစား 'Were + subject + to-infinitive' ဟု Inversion ပြုလုပ်နိုင်သည်။",
        examples: [
          { text: "Were the election to be held today, the Liberals would win easily.", note: "(= If the election was/were held today)", burmeseNote: "အကယ်၍ ရွေးကောက်ပွဲကို ယနေ့ကျင်းပမည်ဆိုပါက..." },
          { text: "Were I not rather unfit, I might consider taking up squash.", note: "(= If I wasn't / weren't rather unfit)" },
          { text: "I wish it were closer to home.", note: "After 'wish' and 'if only'" },
          { text: "Imagine the house were (to be) repainted.", note: "After 'imagine / suppose'" }
        ]
      }
    ],
    exercises: [
      {
        id: "85.1",
        title: "Exercise 85.1: Inversion with 'Were...'",
        instruction: "Match the sentence halves and write a new sentence beginning 'Were... (not)', and add any words necessary.",
        instructionBurmese: "'Were... (not)' ဖြင့်စတင်ကာ Inversion ဝါကျအသစ်များ ဖွဲ့ပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "If it were to be found guilty of libel, the newspaper would face huge legal costs.",
            prefix: "Were ",
            suffix: " the newspaper would face huge legal costs.",
            correctAnswer: ["it to be found guilty of libel,", "it to be found guilty of libel"],
            explanation: "Inversion: 'Were it to be found guilty of libel, the newspaper would face huge legal costs.'",
            explanationBurmese: "'If it were to be found' အစား Inversion ဖြင့် 'Were it to be found guilty of libel' ဟု ပြောင်းရသည်။"
          },
          {
            id: 2,
            prompt: "If the government were to increase university fees, there would be an outcry from students.",
            prefix: "Were ",
            suffix: " there would be an outcry from students.",
            correctAnswer: ["the government to increase university fees,", "the government to increase university fees"],
            explanation: "Inversion: 'Were the government to increase university fees, there would be an outcry from students.'",
            explanationBurmese: "'If the government were to increase' ကို 'Were the government to increase university fees' ဟု ပြောင်းသည်။"
          }
        ]
      }
    ]
  },

  // Unit 99: Inversion for emphasis
  {
    id: 99,
    title: "Inversion for emphasis",
    category: "organising-info",
    level: "C1 Advanced",
    summary: "Master fronting and subject-auxiliary inversion (Rarely had I seen, In came the doctor, Were/Should/Had conditionals, As did my colleagues).",
    summaryBurmese: "ဝါကျအလေးပေးရန် ရှေ့ပို့ခြင်း (Fronting) နှင့် အထောက်အကူကြိယာ-ကတ္တား ပြောင်းပြန်စဉ်ခြင်း (Inversion) စည်းမျဉ်းများ။",
    keyPoints: [
      "Negative/restrictive adverbs at front: 'Rarely had I seen such a view' (NOT 'Rarely I had seen').",
      "Movement adverbs + verb of movement + subject: 'The door opened and in came the doctor' (NOT 'in the doctor came').",
      "Conditional clauses without 'if': 'Had Andy asked...', 'Should you need...', 'Were the talks to fail...'.",
      "In formal comparisons after 'as' and 'than': 'I believed, as did my colleagues, that the plan would work'."
    ],
    keyPointsBurmese: [
      "Negative စကားလုံးများ ရှေ့ရောက်ပါက အမေးဝါကျကဲ့သို့ Auxiliary verb + Subject ဖြစ်သွားသည် (Rarely had I seen...)။",
      "လှုပ်ရှားမှုပြ စကားလုံးများ ရှေ့ပို့ပါက 'In came the doctor' ဟု ကြိယာ အရင်လာသည်။",
      "If မပါဘဲ Conditionals ဖွဲ့စည်းခြင်း: 'Had I known...', 'Should you need...', 'Were it to happen...'။",
      "နှိုင်းယှဉ်ချက်များတွင် 'as did my colleagues' ဟု Inversion သုံးသည်။"
    ],
    reminderRefs: ["M9", "M14"],
    sections: [
      {
        id: "A",
        title: "Negative adverbials and fronting",
        content: "In statements it is usual for the verb to follow the subject, but sometimes this word order is reversed (inversion) to give emphasis or dramatic effect.",
        contentBurmese: "အလေးပေးဖော်ပြရန် အငြင်းသဘောဆောင်သော စကားလုံးများကို ရှေ့သို့ပို့သည့်အခါ အထောက်အကူကြိယာနှင့် ကတ္တားကို ပြောင်းပြန်လှန် (Inversion) ပေးရသည်။",
        examples: [
          { text: "Rarely had I seen such a view.", note: "Inversion: auxiliary 'had' before subject 'I'", burmeseNote: "Rarely (အလွန်ရှားပါးစွာ) ကို ရှေ့ပို့သဖြင့် 'had I seen' ဟု ဖြစ်သွားသည်။" },
          { text: "In the doorway stood Alex.", note: "Inversion of main verb of place" }
        ]
      },
      {
        id: "B",
        title: "Conditionals with inversion (without 'if')",
        content: "We can use clauses with inversion instead of certain kinds of if-clause: 'Had he known...', 'Should you need...', 'Were the talks to fail...'. Note that contracted negatives are NOT used (e.g. 'Had the plane not been diverted', NOT 'Hadn't the plane...').",
        contentBurmese: "If ကို ဖြုတ်ပြီး Inversion ဖြင့် 'Had + Subject + V3' သို့မဟုတ် 'Should + Subject + V1' သုံးနိုင်သည်။ အငြင်းဝါကျတွင် Contracted form (Hadn't...) မသုံးရဘဲ 'Had the plane not...' ဟု သုံးရသည်။",
        examples: [
          { text: "Had Andy asked, I would have been able to help.", note: "(= If Andy had asked)" },
          { text: "Should you need more information, please telephone our main office.", note: "(= If you should need)" },
          { text: "Had the plane not been diverted, they would have arrived early.", note: "NOT Hadn't the plane..." }
        ]
      }
    ],
    exercises: [
      {
        id: "99.1",
        title: "Exercise 99.1: Inversion with Movement Verbs",
        instruction: "Complete the sentences with an appropriate adverb and a form of either come or go.",
        instructionBurmese: "သင့်လျော်သော adverb နှင့် come/go ပုံစံဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "We'd just got to the top of the hill when ______ the rain and we got soaked.",
            prefix: "when ",
            suffix: " the rain and we got soaked. (down / come)",
            correctAnswer: ["down came"],
            explanation: "Inversion after direction adverb: 'down came the rain'.",
            explanationBurmese: "Direction adverb ရှေ့ရောက်သဖြင့် 'down came the rain' ဟု Inversion ဖြစ်သည်။"
          }
        ]
      },
      {
        id: "99.2",
        title: "Exercise 99.2: Conditional Inversion Matching",
        instruction: "Rewrite the conditional sentences beginning with Were..., Should..., or Had...",
        instructionBurmese: "Were..., Should..., သို့မဟုတ် Had... ဖြင့်စတင်ကာ Inversion ဝါကျများ ပြန်လည်ရေးပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "If Kahn had not resigned as party leader, he would have been sacked.",
            prefix: "Had ",
            suffix: " as party leader, he would have been sacked.",
            correctAnswer: ["Kahn not resigned", "Kahn not resigned,"],
            explanation: "Inversion: 'Had Kahn not resigned as party leader, he would have been sacked.'",
            explanationBurmese: "'If Kahn had not resigned' ကို Inversion ဖွဲ့ပါက 'Had Kahn not resigned' ဖြစ်သည်။"
          },
          {
            id: 2,
            prompt: "If you do not wish to receive further information about our products, click on the box below.",
            prefix: "Should ",
            suffix: " to receive further information about our products, click on the box below.",
            correctAnswer: ["you not wish", "you not wish,"],
            explanation: "Inversion: 'Should you not wish to receive further information...'",
            explanationBurmese: "'If you do not wish' ကို Inversion ဖွဲ့ပါက 'Should you not wish' ဖြစ်သည်။"
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
    summary: "Narrating events out of chronological sequence with past perfect, simplifying after time conjunctions (after/before), and reported speech with past perfect.",
    summaryBurmese: "အဖြစ်အပျက်များကို အချိန်အစဉ်အတိုင်း မဟုတ်ဘဲ ပြောင်းပြန်ပြောရာတွင် Past Perfect သုံးပုံ၊ Time conjunctions များနောက်တွင် ရိုးရှင်းအောင်သုံးပုံနှင့် Reported speech အသုံးများ။",
    keyPoints: [
      "Use past perfect (had + V3) to talk about an event that occurred before another past event.",
      "Once the past time framework is established, we can switch back to past simple for succeeding events.",
      "If the order of past events is clear from conjunctions (after, before), either past perfect or past simple can be used.",
      "Reporting past events: 'I met him before' -> 'I was sure that I had met him before'."
    ],
    keyPointsBurmese: [
      "အတိတ်က အဖြစ်အပျက်တစ်ခုထက် စော၍ပြီးနှင့်ခဲ့သောအရာအတွက် Past Perfect (had + V3) ကို သုံးသည်။",
      "After, before စသည့် စကားလုံးများကြောင့် အချိန်အစဉ်ရှင်းလင်းနေပါက Past Simple သို့မဟုတ် Past Perfect နှစ်မျိုးလုံး သုံးနိုင်သည်။",
      "တဆင့်ပြန်ပြောရာတွင် (Reported speech) 'I met him before' ကို 'I was sure that I had met him before' ဟု ပြောင်းလဲသုံးသည်။"
    ],
    reminderRefs: ["A14", "A15"],
    sections: [
      {
        id: "A",
        title: "Chronological vs Non-chronological order",
        content: "When we give an account of a sequence of past events, we usually put these events in chronological order using the past simple. If we want to refer to an event out of order — an event which happened before the last event in the sequence — we use the past perfect.",
        contentBurmese: "အတိတ်အဖြစ်အပျက်များကို ဖြစ်ပျက်ခဲ့သည့် အစဉ်အတိုင်းပြောပါက Past Simple ကို သုံးသည်။ အစီအစဉ်ကျော်လွန်၍ အရင်ဖြစ်ခဲ့သောအရာကို ပြန်ပြောလိုပါက Past Perfect (had + V3) ကို သုံးသည်။",
        examples: [
          { text: "I wrote Clara an email to thank her for the present she had given me for my birthday.", note: "had given (happened first) -> wrote email (happened later)" }
        ]
      },
      {
        id: "B",
        title: "Clear order with 'after / before'",
        content: "If the order of past events is clear from the context (e.g. if time expressions make the order clear) we can often use either the past perfect or the past simple.",
        contentBurmese: "After, before ကဲ့သို့သော အချိန်ပြစကားစုများ ပါရှိ၍ မည်သည့်အရာ အရင်ဖြစ်သည်မှာ ထင်ရှားပါက Past Perfect သို့မဟုတ် Past Simple နှစ်မျိုးလုံး သုံးနိုင်သည်။",
        examples: [
          { text: "After Ivan had finished reading, he put out the light. (or ... Ivan finished ...)", note: "both forms correct" }
        ]
      }
    ],
    exercises: [
      {
        id: "5.1",
        title: "Exercise 5.1: Past Perfect vs Past Simple",
        instruction: "Underline the correct option. In some cases only one is correct, and in others both are correct.",
        instructionBurmese: "မှန်ကန်သော အဖြေကို ရွေးချယ်ပါ (အချို့တွင် နှစ်မျိုးလုံး မှန်နိုင်ပါသည်)။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "As Jonas was introduced to Mrs Lopez, he realised that he [had met / met] her before.",
            options: ["had met", "met", "Both are possible"],
            correctAnswer: "had met",
            explanation: "Past perfect 'had met' is required because meeting her took place prior to the realization in the past.",
            explanationBurmese: "မိတ်ဆက်ပေးသည့်အချိန်မတိုင်မီ ကြိုတင်တွေ့ဖူးခြင်းဖြစ်၍ 'had met' သာ မှန်သည်။"
          },
          {
            id: 2,
            prompt: "The waiter took my plate away before I [had finished / finished] eating.",
            options: ["Both are possible", "had finished", "finished"],
            correctAnswer: "Both are possible",
            explanation: "With 'before', both past simple 'finished' and past perfect 'had finished' can be used with little difference in meaning.",
            explanationBurmese: "'Before' ပါရှိသောကြောင့် 'finished' သို့မဟုတ် 'had finished' နှစ်မျိုးလုံး သုံးနိုင်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 9: The future - Will and be going to
  {
    id: 9,
    title: "Will and be going to",
    category: "the-future",
    level: "B2 Intermediate",
    summary: "Future plans, predictions based on present evidence vs opinion/experience, spontaneous decisions vs prior arrangements.",
    summaryBurmese: "အနာဂတ်အစီအစဉ်များ၊ မျက်မှောက်သက်သေပေါ်အခြေခံသော ခန့်မှန်းချက် (be going to) နှင့် အတွေ့အကြုံ/ထင်မြင်ချက်ပေါ်အခြေခံသော ခန့်မှန်းချက် (will)၊ ချက်ချင်းဆုံးဖြတ်ချက်နှင့် ကြိုတင်စီစဉ်မှုများ။",
    keyPoints: [
      "Prediction based on opinion/experience: Use 'will' (e.g. 'Why not come over? The children will enjoy seeing you').",
      "Prediction based on present evidence: Use 'be going to' (e.g. 'The sky's gone really dark. There's going to be a storm').",
      "Spontaneous decision at speaking moment: Use 'will' ('ll pick you up).",
      "Decision made prior to speaking: Use 'be going to' ('m going to collect the children)."
    ],
    keyPointsBurmese: [
      "မိမိ၏ အတွေ့အကြုံ သို့မဟုတ် ထင်မြင်ချက်အရ ခန့်မှန်းလျှင် 'will' ကို သုံးသည်။",
      "မျက်စိရှေ့တွင် မြင်တွေ့နေရသော သက်သေအထောက်အထားအရ ခန့်မှန်းလျှင် 'be going to' ကို သုံးသည် (ဥပမာ- မိုးတိမ်တွေ မည်းနေပြီ မိုးရွာတော့မယ်)။",
      "စကားပြောနေစဉ် ချက်ချင်းဆုံးဖြတ်လျှင် 'will'၊ ကြိုတင်စီစဉ်ထားပြီးဖြစ်လျှင် 'be going to' သုံးသည်။"
    ],
    reminderRefs: ["B1", "B2", "B3", "B5"],
    sections: [
      {
        id: "A",
        title: "Predictions: Opinion vs Present Evidence",
        content: "We use 'will' rather than 'be going to' to make a prediction based on our opinion or experience. We use 'be going to' rather than 'will' when we make a prediction based on some present evidence.",
        contentBurmese: "ထင်မြင်ချက်အရ ခန့်မှန်းပါက 'will'၊ မျက်မှောက်သက်သေအရ ခန့်မှန်းပါက 'be going to' ကို သုံးသည်။",
        examples: [
          { text: "I think you'll enjoy the film.", note: "Opinion prediction -> will" },
          { text: "Look out! That tree is going to fall.", note: "Present evidence (it's cracking) -> is going to" }
        ]
      }
    ],
    exercises: [
      {
        id: "9.1",
        title: "Exercise 9.1: Will vs Be Going To",
        instruction: "Choose will or be going to based on whether it is an instant decision, prior plan, or evidence-based prediction.",
        instructionBurmese: "ချက်ချင်းဆုံးဖြတ်ချက်၊ ကြိုတင်အစီအစဉ် သို့မဟုတ် သက်သေအထောက်အထားအရ ခန့်မှန်းချက်ပေါ်မူတည်၍ will သို့မဟုတ် be going to ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Have you seen Nadia recently? She's ______ another baby. (have)",
            options: ["going to have", "will have"],
            correctAnswer: "going to have",
            explanation: "'She's going to have another baby' because this is a fact/prediction based on present visible evidence.",
            explanationBurmese: "မျက်မှောက်အခြေအနေအရ ကိုယ်ဝန်ရှိနေသည်ကို သိရှိထားခြင်းဖြစ်၍ 'is going to have' သုံးသည်။"
          },
          {
            id: 2,
            prompt: "A: Did you get the theatre tickets?  B: No, I forgot all about them. I ______ them tomorrow.",
            options: ["'ll book", "'m going to book"],
            correctAnswer: "'ll book",
            explanation: "Decision made at the moment of speaking -> 'will book' ('ll book).",
            explanationBurmese: "မေ့သွား၍ မနက်ဖြန်ဝယ်မည်ဟု စကားပြောနေစဉ် ချက်ချင်းဆုံးဖြတ်လိုက်ခြင်းဖြစ်၍ ''ll book' (will) သုံးရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 22: Using passives
  {
    id: 22,
    title: "Using passives",
    category: "passives-questions",
    level: "B2 Intermediate",
    summary: "When to use passives (agent unknown, obvious, or unimportant), process descriptions, and putting given information at the start and new focus at the end.",
    summaryBurmese: "Passive ကို အသုံးပြုရသည့် အခြေအနေများ (ပြုလုပ်သူကို မသိသောအခါ၊ ထင်ရှားနေသောအခါ)၊ လုပ်ငန်းစဉ်ဖော်ပြချက်များနှင့် သတင်းအချက်အလက် ဦးစားပေးနေရာချထားပုံ။",
    keyPoints: [
      "Use passive to omit the agent when it is not known, unimportant, or obvious (e.g. 'My office was broken into', 'She is being treated in hospital').",
      "Factual and scientific writing: processes are described in passive without personal pronouns.",
      "Information flow: Topic (given info) goes at the beginning of the sentence, new comment goes at the end.",
      "Instead of making a that-clause the subject, use introductory 'It' (e.g. 'It was believed that the plan would fail', not 'That the plan would fail was believed')."
    ],
    keyPointsBurmese: [
      "လုပ်ဆောင်သူ (agent) ကို မသိရှိသောအခါ၊ အရေးမကြီးသောအခါ သို့မဟုတ် အားလုံးသိပြီးဖြစ်သောအခါ Passive ကို သုံးသည်။",
      "သိပ္ပံနည်းကျ အရေးအသားများတွင် လုပ်ငန်းစဉ်များကို Passive ဖြင့် ရေးဖွဲ့သည်။",
      "ဝါကျအစတွင် လူသိပြီးသား အကြောင်းအရာ (Topic) ကိုထားပြီး၊ အသစ်ဖော်ပြလိုသောအချက်ကို ဝါကျအဆုံးတွင် ထားရန် Passive ကို အသုံးပြုသည်။"
    ],
    reminderRefs: ["D1", "D2", "D3"],
    sections: [
      {
        id: "A",
        title: "Reasons for choosing passive over active",
        content: "Using a passive allows us to omit the agent when the agent is not known, is obvious, is people in general, or is unimportant.",
        contentBurmese: "ပြုလုပ်သူ မသိခြင်း၊ ထင်ရှားနေခြင်း သို့မဟုတ် အရေးမပါခြင်းတို့အတွက် Passive ကို သုံးသည်။",
        examples: [
          { text: "My office was broken into when I was on holiday.", note: "agent not known" },
          { text: "The new computer system is being installed next month.", note: "more formal and concise than 'They are installing...'" }
        ]
      }
    ],
    exercises: [
      {
        id: "22.1",
        title: "Exercise 22.1: Passive Transformations",
        instruction: "Rewrite the sentence in the passive form.",
        instructionBurmese: "ဝါကျများကို Passive ပုံစံဖြင့် ပြန်လည်ရေးသားပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "They built the main stadium in under three years.",
            prefix: "The main stadium ",
            suffix: " in under three years.",
            correctAnswer: ["was built"],
            explanation: "Past simple passive: 'The main stadium was built in under three years.'",
            explanationBurmese: "Past simple passive ပုံစံ 'was built' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 39: Should in that-clauses; the present subjunctive
  {
    id: 39,
    title: "Should in that-clauses; the present subjunctive",
    category: "reporting",
    level: "C1 Advanced",
    summary: "Reporting advice, orders, proposals, and requests using 'should + bare infinitive' or the present subjunctive (bare infinitive for all persons).",
    summaryBurmese: "အကြံပေးချက်၊ အမိန့်၊ အဆိုပြုချက်များကို 'should + bare infinitive' သို့မဟုတ် Present Subjunctive (ကတ္တားအားလုံးအတွက် မူလကြိယာ bare infinitive) ဖြင့် တင်ပြပုံ။",
    keyPoints: [
      "After verbs of recommendation/order (advise, ask, demand, insist, propose, recommend, request, require, suggest, urge), we can use 'should + bare infinitive'.",
      "In formal contexts, we can omit 'should' and use only the bare infinitive (the present subjunctive): 'They proposed that Felix move to their Munich office' (NOT 'moves').",
      "Negative subjunctive: 'use not (without do) before the verb' -> 'We advised that the company not raise its prices'.",
      "Passive subjunctive: 'They directed that the building be pulled down' (NOT 'is pulled down').",
      "After 'It is + adjective' (vital, crucial, essential, imperative, important, urgent): 'It is essential that he be informed'."
    ],
    keyPointsBurmese: [
      "Suggest, insist, recommend, demand စသည့် ကြိယာများနောက်တွင် 'should + V1' သို့မဟုတ် Subjunctive (V1 မူလပုံစံ) သုံးသည်။",
      "Subjunctive တွင် He/She ဖြစ်သော်လည်း 's/es' မထည့်ရပါ (ဥပမာ- She insisted that he leave, NOT leaves)။",
      "အငြင်းဝါကျတွင် 'not + V1' သုံးသည် (do not မထည့်ရပါ)။ ဥပမာ- 'advised that he not go'။",
      "Passive တွင် 'be + V3' ဖြစ်သည် (ဥပမာ- that the building be pulled down)။"
    ],
    reminderRefs: ["C29", "C30"],
    sections: [
      {
        id: "A",
        title: "Present subjunctive vs 'should + infinitive'",
        content: "In formal contexts, particularly in written English, we can omit should and use only the bare infinitive. This form is the present subjunctive. To make a negative form, we use not before the verb (without 'do').",
        contentBurmese: "Formal အရေးအသားတွင် should ကို ဖြုတ်ပြီး မူရင်းကြိယာ (bare infinitive) ကိုသာ သုံးသော Present Subjunctive ပုံစံကို သုံးသည်။",
        examples: [
          { text: "They proposed that Felix move to their Munich office.", note: "Subjunctive 'move' (not 'moves')", burmeseNote: "ကတ္တား Felix (singular) ဖြစ်သော်လည်း Subjunctive ဖြစ်၍ 'move' ဟုသာ သုံးရသည်။" },
          { text: "We advised that the company not raise its prices.", note: "Negative subjunctive: 'not raise' (not 'does not raise')" },
          { text: "It is essential that everyone be on time.", note: "Subjunctive 'be'" }
        ]
      }
    ],
    exercises: [
      {
        id: "39.1",
        title: "Exercise 39.1: Subjunctive & That-clauses",
        instruction: "Report these statements using a that-clause with should (or subjunctive).",
        instructionBurmese: "ဖော်ပြပါ စကားများကို should သို့မဟုတ် subjunctive ပါသော that-clause ဖြင့် ပြန်လည်ရေးပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "Lee said: 'I think it's important to expand business in South America.'",
            prefix: "Lee felt that ",
            suffix: " in South America.",
            correctAnswer: [
              "business should be expanded",
              "business be expanded",
              "they should expand business",
              "they expand business"
            ],
            explanation: "'Lee felt that business should be expanded in South America' (or subjunctive 'business be expanded').",
            explanationBurmese: "'business should be expanded' သို့မဟုတ် Subjunctive 'business be expanded' သုံးနိုင်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 67: Gradable and non-gradable adjectives
  {
    id: 67,
    title: "Gradable and non-gradable adjectives: using adjectives with adverbs",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Understand the strict rules pairing grading adverbs (very, extremely) with gradable adjectives, and non-grading adverbs (absolutely, completely) with extreme/non-gradable adjectives.",
    summaryBurmese: "Gradable နာမဝိသေသနများနှင့်တွဲသော adverbs (very, extremely) နှင့် Extreme/Non-gradable နာမဝိသေသနများနှင့်တွဲသော adverbs (absolutely, completely) စည်းမျဉ်းများ။",
    keyPoints: [
      "Gradable adjectives (angry, big, busy, clever, cold, hot, tired) can be measured in degrees -> use: very, extremely, slightly, rather, intensely.",
      "Non-gradable adjectives (awful, excellent, huge, impossible, superb, terrible, unique, dead) represent absolute/extreme qualities -> use: absolutely, completely, entirely, perfectly, totally.",
      "Never use 'very' with extreme non-gradable adjectives: say 'absolutely fantastic', NOT 'very fantastic'; 'completely boiling', NOT 'very boiling'.",
      "The adverbs 'really' and 'pretty' can be used with BOTH gradable and non-gradable adjectives in informal English."
    ],
    keyPointsBurmese: [
      "Gradable (အဆင့်အတန်းခွဲခြားနိုင်သော) နာမဝိသေသနများတွင် 'very', 'extremely', 'rather' တို့ကို တွဲသုံးသည်။",
      "Non-gradable (အဆုံးစွန်/လုံးဝဥဿုံ) နာမဝိသေသနများ (superb, impossible, huge) တွင် 'absolutely', 'completely', 'totally' တို့ကို တွဲသုံးရပြီး 'very' မသုံးရပါ။",
      "'Really' နှင့် 'pretty' တို့ကိုမူ နှစ်မျိုးလုံးနှင့် တွဲသုံးနိုင်သည်။"
    ],
    reminderRefs: ["L1", "L2"],
    sections: [
      {
        id: "A",
        title: "Grading vs Non-grading Adverbs",
        content: "Gradable adjectives can be used with grading adverbs such as very or extremely. Non-gradable adjectives are not used with adverbs such as very because they refer to qualities which have extreme or absolute nature.",
        contentBurmese: "Extreme နာမဝိသေသနများတွင် 'very' မသုံးရဘဲ 'absolutely / completely' ကို သုံးရသည်။",
        examples: [
          { text: "She was extremely angry.", note: "gradable: angry -> extremely angry" },
          { text: "The food was absolutely superb.", note: "non-gradable: superb -> absolutely superb (NOT very superb)", burmeseNote: "Superb သည် Non-gradable ဖြစ်၍ 'absolutely superb' ဟု သုံးရပြီး 'very superb' ဟု မသုံးရပါ။" }
        ]
      }
    ],
    exercises: [
      {
        id: "67.1",
        title: "Exercise 67.1: Collocation with Adverbs",
        instruction: "Select the correct adverb that naturally pairs with the adjective.",
        instructionBurmese: "နာမဝိသေသနနှင့် သဘာဝကျကျတွဲဖက်နိုင်သော adverb ကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The food was [absolutely / very] excellent.",
            options: ["absolutely", "very"],
            correctAnswer: "absolutely",
            explanation: "'Excellent' is an extreme non-gradable adjective, so it pairs with 'absolutely', not 'very'.",
            explanationBurmese: "'Excellent' သည် အဆုံးစွန်ကောင်းမွန်သော non-gradable ဖြစ်၍ 'absolutely' သာ တွဲရသည်။"
          },
          {
            id: 2,
            prompt: "Her advice was [fairly / really] invaluable.",
            options: ["really", "fairly"],
            correctAnswer: "really",
            explanation: "'Invaluable' is non-gradable. We cannot use 'fairly' with non-gradables, but 'really' is permitted.",
            explanationBurmese: "'Invaluable' သည် non-gradable ဖြစ်သောကြောင့် 'fairly' တွဲ၍မရဘဲ 'really' သာ တွဲနိုင်သည်။"
          }
        ]
      }
    ]
  }
];

