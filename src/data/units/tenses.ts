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
            explanationBurmese: "1a တွင် အိမ်ဆေးသုတ်နေဆဲ ယာယီအခြေအနေမေးခြင်းဖြစ်၍ ''s it looking' သုံးနိုင်သည်။ 1b တွင် အဝတ်အစားပုံစံ (state) ဖြစ်၍ 'does it look' သုံးသည်။"
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
          }
        ]
      }
    ]
  },

  // Unit 2
  {
    id: 2,
    title: "Present continuous and present simple 2: narratives, commentaries, instructions",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Explore using present simple for fast-moving commentaries, storytelling, jokes, headlines, and instructions, and present continuous for background scenarios.",
    summaryBurmese: "ပုံပြင်ပြောခြင်း၊ ဟာသပြောခြင်း၊ အားကစားတိုက်ရိုက်သုံးသပ်ချက်၊ သတင်းခေါင်းစဉ်များနှင့် ညွှန်ကြားချက်များတွင် Present Simple နှင့် Continuous သုံးပုံ။",
    keyPoints: [
      "Live sports commentaries use present simple for quick, successive actions (e.g. 'King passes to Dawson...').",
      "Live commentaries use present continuous for longer, ongoing background activities (e.g. 'United are attacking strongly...').",
      "Stories and jokes in informal speech often use present simple for main events and present continuous for background settings.",
      "Newspaper headlines use present simple for past events to create immediacy (e.g. 'MINISTER RESIGNS').",
      "Recipes and directions use present simple imperative forms."
    ],
    keyPointsBurmese: [
      "အားကစားတိုက်ရိုက်သုံးသပ်ချက်တွင် ချက်ချင်းပြီးဆုံးသွားသော လှုပ်ရှားမှုများအတွက် Present Simple သုံးပြီး နောက်ခံကြာရှည်လှုပ်ရှားမှုအတွက် Continuous သုံးသည်။",
      "ဟာသနှင့် ပုံပြင်ပြောရာတွင် အဓိကဇာတ်လမ်းအတွက် Present Simple၊ ဇာတ်လမ်းနောက်ခံအတွက် Continuous သုံးသည်။",
      "သတင်းစာခေါင်းစဉ်များတွင် မျက်မှောက်ရေးရာသဖွယ် ထင်ရှားစေရန် ပြီးခဲ့သောကိစ္စများကို Present Simple ဖြင့် ရေးလေ့ရှိသည်။"
    ],
    reminderRefs: ["A6", "A7"],
    sections: [
      {
        id: "A",
        title: "Commentaries and Broadcasts",
        content: "In commentaries on sports events and public ceremonies, we use the present simple to describe rapid, instantaneous events, and the present continuous for longer, background events.",
        contentBurmese: "အားကစားပြိုင်ပွဲများနှင့် အခမ်းအနားများ တိုက်ရိုက်ထုတ်လွှင့်ရာတွင် မြန်ဆန်သော လှုပ်ရှားမှုများအတွက် Present Simple နှင့် အချိန်ယူရသော လှုပ်ရှားမှုအတွက် Continuous ကို သုံးသည်။",
        examples: [
          { text: "King passes to Dawson, and Dawson shoots just wide of the goal!", note: "Quick successive actions in present simple" },
          { text: "Federer is serving into the wind in this set.", note: "Longer background situation in present continuous" }
        ]
      },
      {
        id: "B",
        title: "Stories, Jokes, and Dramatic Narratives",
        content: "In everyday conversation, when we tell stories or jokes, we often use the present simple for main events to make them feel immediate and dramatic, and the present continuous for background situations.",
        contentBurmese: "ဟာသ (jokes) သို့မဟုတ် ဇာတ်လမ်းပြောရာတွင် ပိုမိုသက်ဝင်ထင်ရှားစေရန် အဓိကဖြစ်ရပ်များကို Present Simple ဖြင့် ပြောပြီး နောက်ခံအခြေအနေကို Continuous ဖြင့် ပြောသည်။",
        examples: [
          { text: "So I'm walking down the street yesterday, and this guy comes up to me and asks for the time...", note: "walking = background; comes up / asks = main story events" }
        ]
      }
    ],
    exercises: [
      {
        id: "2.1",
        title: "Exercise 2.1: Commentary & Storytelling Tense Choice",
        instruction: "Select the correct form (present simple or present continuous) for each narrative snippet.",
        instructionBurmese: "ဇာတ်လမ်းပြောပြချက်နှင့် သုံးသပ်ချက်များအတွက် မှန်ကန်သော ကြိယာပုံစံကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Fernandes [dribbles / is dribbling] past two defenders and [passes / is passing] to Rashford who [scores / is scoring]!",
            options: ["dribbles, passes, scores", "is dribbling, is passing, is scoring"],
            correctAnswer: "dribbles, passes, scores",
            explanation: "In sports commentaries, rapid successive events are expressed using the present simple.",
            explanationBurmese: "အားကစားတိုက်ရိုက်အစီအစဉ်တွင် မြန်ဆန်သော ဆင့်ကဲလှုပ်ရှားမှုများကို Present Simple ဖြင့် ဖော်ပြသည်။"
          }
        ]
      }
    ]
  },

  // Unit 3
  {
    id: 3,
    title: "Past simple and present perfect: finished vs unfinished time",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Contrast past simple (finished time periods, specific past points) with present perfect (connection to the present, news, indefinite past experience).",
    summaryBurmese: "ပြီးဆုံးသွားသော အတိတ်ကာလ (Past Simple) နှင့် လက်ရှိနှင့် ဆက်စပ်နေသော ကာလ (Present Perfect) ကွာခြားချက်များ။",
    keyPoints: [
      "Past simple is used with finished time words (yesterday, last week, in 1999, three hours ago).",
      "Present perfect is used with unfinished time periods (today, this week, so far, recently, in the last decade).",
      "News headlines introduce an event in present perfect, then give specific details in past simple.",
      "American English often accepts past simple with 'just', 'already', and 'yet', while British English prefers present perfect."
    ],
    keyPointsBurmese: [
      "ပြီးဆုံးသွားသော အချိန်ကာလ (yesterday, in 2010, ago) ပါဝင်ပါက Past Simple သာ သုံးရသည်။",
      "လက်ရှိကာလမကုန်ဆုံးသေးသော အချိန် (today, this morning, this year) သို့မဟုတ် အတွေ့အကြုံ (ever, never, so far) အတွက် Present Perfect သုံးသည်။",
      "သတင်းဖော်ပြရာတွင် ပထမဆုံးစတင်မိတ်ဆက်စဉ် Present Perfect သုံးပြီး အသေးစိတ် (ဘယ်အချိန်၊ ဘယ်လို) ပြောရာတွင် Past Simple သို့ ကူးပြောင်းသုံးသည်။"
    ],
    reminderRefs: ["A8", "A9"],
    sections: [
      {
        id: "A",
        title: "Connection to Now vs Definite Past",
        content: "We use the past simple for situations that happened at a definite time in the past and are completely finished. We use the present perfect when the event has a current result or connects to now.",
        contentBurmese: "အတိတ်တွင် အတိအကျပြီးဆုံးခဲ့သောကိစ္စများအတွက် Past Simple နှင့် ယခုအချိန်နှင့် ဆက်စပ်နေသော အကျိုးဆက်များအတွက် Present Perfect သုံးသည်။",
        examples: [
          { text: "I've lost my keys. (= I still don't have them now)", note: "Present perfect - present result" },
          { text: "I lost my keys yesterday, but fortunately I found them in my car.", note: "Past simple - finished event at definite time" }
        ]
      }
    ],
    exercises: [
      {
        id: "3.1",
        title: "Exercise 3.1: Past Simple vs Present Perfect",
        instruction: "Choose the correct tense for each sentence.",
        instructionBurmese: "ဝါကျတစ်ခုစီအတွက် မှန်ကန်သော ကာလပြကြိယာကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The government [announced / has announced] new tax cuts this morning, and the finance minister [explained / has explained] the plan in Parliament an hour ago.",
            options: ["has announced, explained", "announced, has explained"],
            correctAnswer: "has announced, explained",
            explanation: "News is introduced with the present perfect ('has announced this morning'), and definite past details ('an hour ago') use the past simple ('explained').",
            explanationBurmese: "သတင်းဦးမိတ်ဆက်တွင် 'has announced' သုံးပြီး 'an hour ago' ကဲ့သို့ အတိအကျအချိန်တွင် 'explained' (past simple) သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 4
  {
    id: 4,
    title: "Past continuous and past simple: interrupted actions and background",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Differentiate between an ongoing background activity in the past (past continuous) and a shorter completed event that interrupts it (past simple).",
    summaryBurmese: "အတိတ်တွင် တစ်ပြိုင်နက်ဖြစ်ပျက်နေသော နောက်ခံလုပ်ဆောင်ချက် (Past Continuous) နှင့် ၎င်းကို ဖြတ်တောက်ဖြစ်ပေါ်လာသော အဖြစ်အပျက် (Past Simple)။",
    keyPoints: [
      "Past continuous sets the background scene ('It was raining heavily...').",
      "Past simple represents the main action that happened or interrupted ('...when a tree fell').",
      "With 'while' or 'as', we frequently use past continuous for the longer action.",
      "Two ongoing actions at the same time: 'While I was cooking, my brother was setting the table'."
    ],
    keyPointsBurmese: [
      "အတိတ်တွင် ဖြစ်ပျက်နေဆဲ နောက်ခံအခြေအနေအတွက် Past Continuous သုံးပြီး ကြားဖြတ်ဖြစ်ပေါ်သော အဖြစ်အပျက်အတွက် Past Simple သုံးသည်။",
      "While / As နောက်တွင် ရှည်လျားသော လုပ်ဆောင်ချက်ဖြစ်သည့် Past Continuous ကို တွဲသုံးလေ့ရှိသည်။"
    ],
    reminderRefs: ["A10", "A11"],
    sections: [
      {
        id: "A",
        title: "Background Scenes & Interruptions",
        content: "We use the past continuous to describe an action that was in progress when another event happened or interrupted it.",
        contentBurmese: "အတိတ်တွင် တစ်စုံတစ်ခု ဖြစ်ပွားနေစဉ် အခြားအဖြစ်အပျက်တစ်ခု ဖြတ်တောက်ဖြစ်ပေါ်လာခြင်းကို ဖော်ပြရာတွင် သုံးသည်။",
        examples: [
          { text: "I was cycling home when I saw a deer run across the road.", note: "cycling = background ongoing; saw = sudden past event" }
        ]
      }
    ],
    exercises: [
      {
        id: "4.1",
        title: "Exercise 4.1: Interrupted Past Actions",
        instruction: "Complete the sentence with the correct form.",
        instructionBurmese: "ကွက်လပ်ကို သင့်တော်သော ကြိယာပုံစံဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "While we ______ (walk) along the beach, we found a message in a bottle.",
            prefix: "While we ",
            suffix: " along the beach, we found a message.",
            correctAnswer: ["were walking"],
            explanation: "The ongoing background activity takes the past continuous ('were walking').",
            explanationBurmese: "ဖြစ်ပျက်နေဆဲ အခြေအနေဖြစ်သဖြင့် 'were walking' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 5
  {
    id: 5,
    title: "Past perfect and past simple: order of past events",
    category: "tenses",
    level: "B2 Intermediate",
    summary: "Use the past perfect (had + past participle) to make clear that an event happened earlier than another point in the past.",
    summaryBurmese: "အတိတ်တွင် ဖြစ်ပျက်ခဲ့သော အဖြစ်အပျက် ၂ ခုအနက် ရှေးဦးစွာ အရင်ဖြစ်ပျက်ခဲ့သည့် ကိစ္စကို Past Perfect (had + V3) ဖြင့် ဖော်ပြခြင်း။",
    keyPoints: [
      "Past perfect (had + past participle) shows which event occurred first when talking about the past.",
      "If the order of events is already clear from time conjunctions (before, after), past simple can often be used instead.",
      "With 'by the time', we use past perfect in the main clause: 'By the time we arrived, the train had left'.",
      "Common with thinking/speech verbs: 'She realized that she had left her keys at the office'."
    ],
    keyPointsBurmese: [
      "အတိတ်ကာလ ဖြစ်ရပ်နှစ်ခုတွင် ပိုမိုစောစီးစွာ ဖြစ်ခဲ့သောအရာအတွက် Past Perfect (had + V3) ကို သုံးသည်။",
      "By the time ပါသောဝါကျများတွင် အဓိကဝါကျ၌ Past Perfect ကို တွဲသုံးရသည် (By the time we arrived, the train had left)။"
    ],
    reminderRefs: ["A12", "A13"],
    sections: [
      {
        id: "A",
        title: "Earlier Past Events",
        content: "When we are talking about the past, we use the past perfect to refer to something that happened even earlier than that time.",
        contentBurmese: "အတိတ်အကြောင်း ပြောဆိုနေစဉ် ထိုအတိတ်ထက် ပိုမိုစောသော အချိန်တွင် ဖြစ်ခဲ့သောအရာကို Past Perfect ဖြင့် ဖော်ပြသည်။",
        examples: [
          { text: "When Karen arrived at the party, Mark had already gone home.", note: "1st: Mark went home. 2nd: Karen arrived." }
        ]
      }
    ],
    exercises: [
      {
        id: "5.1",
        title: "Exercise 5.1: Sequence of Past Events",
        instruction: "Select the correct past tense form.",
        instructionBurmese: "မှန်ကန်သော အတိတ်ကာလ ကြိယာကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "By the time the police [arrived / had arrived], the thief [escaped / had escaped].",
            options: ["arrived, had escaped", "had arrived, escaped"],
            correctAnswer: "arrived, had escaped",
            explanation: "The thief escaping happened first ('had escaped'), before the police arrived ('arrived').",
            explanationBurmese: "သူခိုးအရင်ထွက်ပြေးသွားပြီးမှ ရဲရောက်လာခြင်းဖြစ်၍ 'had escaped' နှင့် 'arrived' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 6
  {
    id: 6,
    title: "Present perfect continuous and present perfect: duration vs result",
    category: "tenses",
    level: "C1 Advanced",
    summary: "Compare present perfect continuous (ongoing duration, process) with present perfect simple (completed result, quantity).",
    summaryBurmese: "ကြာမြင့်ချိန်နှင့် လုပ်ငန်းစဉ်ကို အလေးပေးသော Present Perfect Continuous နှင့် ပြီးမြောက်မှုရလဒ်/အရေအတွက်ကို အလေးပေးသော Present Perfect Simple။",
    keyPoints: [
      "Present perfect continuous emphasizes the process and duration of an activity ('I've been painting the room all day').",
      "Present perfect simple emphasizes completion, final results, or quantity ('I've painted three walls').",
      "With verbs like live, work, teach, either form is possible with little difference when used with 'for' or 'since'.",
      "Never use present perfect continuous with state verbs: 'I've known him for years' (NOT 'I've been knowing')."
    ],
    keyPointsBurmese: [
      "လုပ်ဆောင်နေဆဲ လုပ်ငန်းစဉ်နှင့် အချိန်ကြာမြင့်မှုကို အလေးပေးလိုပါက Continuous (have been -ing) သုံးသည်။",
      "ပြီးမြောက်သွားသော ရလဒ် သို့မဟုတ် ပမာဏ/အရေအတွက် (three books, twice) ကို ဖော်ပြလိုပါက Simple (have + V3) သုံးသည်။"
    ],
    reminderRefs: ["A14", "A15"],
    sections: [
      {
        id: "A",
        title: "Process vs Achievement / Quantity",
        content: "Use the present perfect continuous when focus is on the activity itself and how long it has been going on. Use the present perfect simple when focus is on how much has been completed.",
        contentBurmese: "လုပ်ဆောင်ချက်ကြာမြင့်ချိန်ကို အဓိကထားလျှင် Continuous၊ ပြီးစီးမှုပမာဏကို အဓိကထားလျှင် Simple သုံးသည်။",
        examples: [
          { text: "She has been writing letters all morning.", note: "Focus on activity and duration" },
          { text: "She has written five letters.", note: "Focus on number of completed items (quantity)" }
        ]
      }
    ],
    exercises: [
      {
        id: "6.1",
        title: "Exercise 6.1: Duration vs Quantity",
        instruction: "Choose between present perfect continuous and simple.",
        instructionBurmese: "Present Perfect Continuous နှင့် Simple အနက် မှန်ကန်ရာကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "I [have been reading / have read] this novel for hours, but I [have only finished / have only been finishing] fifty pages so far.",
            options: ["have been reading, have only finished", "have read, have only been finishing"],
            correctAnswer: "have been reading, have only finished",
            explanation: "Reading for hours is ongoing duration (continuous); fifty pages is completed quantity (simple).",
            explanationBurmese: "နာရီပေါင်းများစွာ ဖတ်နေခြင်းသည် duration ဖြစ်၍ 'have been reading'၊ ပြီးစီးသော စာမျက်နှာ ၅၀ သည် quantity ဖြစ်၍ 'have only finished' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 7
  {
    id: 7,
    title: "Past perfect continuous and past perfect: earlier duration vs earlier result",
    category: "tenses",
    level: "C1 Advanced",
    summary: "Express an activity that was ongoing before a specific point in the past using the past perfect continuous (had been + -ing).",
    summaryBurmese: "အတိတ်ကာလ သတ်မှတ်ချိန်မတိုင်မီ အချိန်အတိုင်းအတာတစ်ခုအထိ ဖြစ်ပျက်နေခဲ့သော ကိစ္စရပ်များအတွက် Past Perfect Continuous (had been + V-ing)။",
    keyPoints: [
      "Past perfect continuous describes an action that was happening up to or shortly before another past event: 'He was tired because he had been working all night'.",
      "Past perfect simple indicates a finished action with a past result: 'He had finished all his work before dinner'.",
      "Repeated actions over a period up to the past: 'She had been taking driving lessons for six months before she passed'."
    ],
    keyPointsBurmese: [
      "အတိတ်ကာလတစ်ခု မတိုင်မီအထိ တောက်လျှောက်ဖြစ်ပျက်နေခဲ့သော လုပ်ဆောင်ချက်အတွက် Past Perfect Continuous (had been + V-ing) သုံးသည်။",
      "အတိတ်တွင် ပြီးဆုံးသွားသော ရလဒ်အတွက် Past Perfect Simple (had + V3) သုံးသည်။"
    ],
    reminderRefs: ["A16"],
    sections: [
      {
        id: "A",
        title: "Duration up to a Past Moment",
        content: "We use the past perfect continuous to talk about something that was happening for a period of time leading up to a specific past point.",
        contentBurmese: "အတိတ်ကာလ သတ်မှတ်ချိန်မတိုင်မီအထိ ဆက်တိုက်ဖြစ်ပေါ်နေခဲ့သော ကိစ္စများအတွက် သုံးသည်။",
        examples: [
          { text: "The ground was wet because it had been raining for three hours.", note: "Continuous action before the past observation" }
        ]
      }
    ],
    exercises: [
      {
        id: "7.1",
        title: "Exercise 7.1: Past Continuous vs Past Perfect Continuous",
        instruction: "Select the correct form.",
        instructionBurmese: "မှန်ကန်သော ကြိယာပုံစံကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "When I met Sarah, her eyes were red because she [had been crying / was crying].",
            options: ["had been crying", "cried"],
            correctAnswer: "had been crying",
            explanation: "Past perfect continuous explains the reason/effect visible at that past moment.",
            explanationBurmese: "အတိတ်အချိန်တွင် မျက်လုံးနီနေရခြင်း၏ အကြောင်းရင်းဖြစ်သော စောစောက ငိုနေခဲ့ခြင်းကို 'had been crying' ဖြင့် ဖော်ပြသည်။"
          }
        ]
      }
    ]
  },

  // Unit 8
  {
    id: 8,
    title: "Present and past time: comprehensive review",
    category: "tenses",
    level: "C1 Advanced",
    summary: "Consolidate all present and past tense distinctions across complex academic texts, formal reports, and literary styles.",
    summaryBurmese: "Present နှင့် Past ကာလပြ ကြိယာပုံစံအားလုံးကို ပြန်လည်သုံးသပ်ပြီး စာစီစာကုံးနှင့် အဆင့်မြင့်အရေးအသားများတွင် စနစ်တကျ အသုံးချခြင်း။",
    keyPoints: [
      "Master the subtle shifts between simple, continuous, and perfect aspects in advanced texts.",
      "Recognize time conjunction triggers (since, by the time, while, scarcely... when, no sooner... than).",
      "Apply state verb rules accurately in high-level exam contexts (C1 Advanced / C2 Proficiency)."
    ],
    keyPointsBurmese: [
      "Simple, Continuous နှင့် Perfect ကာလများ၏ ကွဲပြားချက်များကို အဆင့်မြင့်အရေးအသားတွင် အတိအကျ ညှိနှိုင်းသုံးစွဲနည်း။",
      "Since, by the time, scarcely... when စသော အချိန်ပြစကားလုံးများနှင့် ကာလပြကြိယာများ တွဲဖက်ပုံ။"
    ],
    reminderRefs: ["A1", "A8", "A12"],
    sections: [
      {
        id: "A",
        title: "Comprehensive Aspect System",
        content: "Mastering the aspect system (Simple, Continuous, Perfect, Perfect Continuous) allows precise nuance in academic and professional communication.",
        contentBurmese: "Aspect စနစ်ကို ကျွမ်းကျင်စွာ အသုံးပြုခြင်းဖြင့် အဆင့်မြင့် ပညာရပ်ဆိုင်ရာ ရေးသားချက်များတွင် အဓိပ္ပာယ်ကို တိကျစွာ ဖော်ပြနိုင်သည်။",
        examples: [
          { text: "By 2020, Dr. Evans had been researching the virus for over a decade.", note: "Past perfect continuous showing duration before a past milestone" }
        ]
      }
    ],
    exercises: [
      {
        id: "8.1",
        title: "Exercise 8.1: Master Tense Review",
        instruction: "Select the most accurate tense structure for the text.",
        instructionBurmese: "စာပိုဒ်အတွက် အမှန်ကန်ဆုံး ကာလပုံစံကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Since the project began, the team [has achieved / achieved] remarkable progress, having solved problems that [had baffled / baffled] scientists for decades.",
            options: ["has achieved, had baffled", "achieved, has baffled"],
            correctAnswer: "has achieved, had baffled",
            explanation: "'Since the project began' connects to present ('has achieved'); earlier past baffling uses past perfect ('had baffled').",
            explanationBurmese: "'Since' ကြောင့် 'has achieved' ဖြစ်ပြီး၊ ထို့ထက်ပိုစောသော အတိတ်အတွက် 'had baffled' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
