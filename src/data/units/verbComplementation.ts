import { GrammarUnit } from "../../types";

export const VERB_COMPLEMENTATION_UNITS: GrammarUnit[] = [
  // Unit 28
  {
    id: 28,
    title: "Verbs, objects and complements: transitive, intransitive, and linking",
    category: "verb-complementation",
    level: "B2 Intermediate",
    summary: "Identify verb valency: intransitive verbs (no object), transitive verbs (direct object), and complex transitive verbs with object complements.",
    summaryBurmese: "ကံပုဒ်မလိုသောကြိယာ (Intransitive)၊ ကံပုဒ်တစ်ခုလိုသောကြိယာ (Transitive) နှင့် ကံဖြည့်ပုဒ်ပါသောကြိယာ (Complex Transitive) များ။",
    keyPoints: [
      "Intransitive verbs cannot take an object ('The sun rose').",
      "Transitive verbs must take an object ('She answered the question').",
      "Complex transitive verbs take an object + object complement (noun/adjective) describing the object ('They elected him president', 'The news made her furious').",
      "Some verbs change meaning between transitive and intransitive ('He runs every day' vs 'He runs a company')."
    ],
    keyPointsBurmese: [
      "Intransitive ကြိယာများသည် ကံပုဒ်မယူပါ။",
      "Transitive ကြိယာများသည် ကံပုဒ်ယူရသည်။",
      "Complex Transitive သည် ကံပုဒ်နှင့် ကံဖြည့်ပုဒ် (Object + Object complement) နှစ်ခုစလုံး ယူသည် (ဥပမာ- painted the door green)။"
    ],
    reminderRefs: ["E1"],
    sections: [
      {
        id: "A",
        title: "Object Complements",
        content: "An object complement provides essential descriptive information about the direct object.",
        contentBurmese: "Object Complement သည် ကံပုဒ်၏ အခြေအနေ သို့မဟုတ် ရာထူးကို အသေးစိတ်ဖြည့်စွက်ဖော်ပြသည်။",
        examples: [
          { text: "The committee appointed Marcus chairperson.", note: "Marcus (object) + chairperson (object complement)" }
        ]
      }
    ],
    exercises: [
      {
        id: "28.1",
        title: "Exercise 28.1: Verb Structure Identification",
        instruction: "Select the sentence with a valid object complement.",
        instructionBurmese: "မှန်ကန်သော object complement ပါသော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Which sentence contains an object complement?",
            options: ["The judge declared the defendant innocent.", "The judge spoke very clearly to the jury."],
            correctAnswer: "The judge declared the defendant innocent.",
            explanation: "'The defendant' is the object, and 'innocent' is the adjective object complement describing him.",
            explanationBurmese: "'The defendant' သည် ကံပုဒ်ဖြစ်ပြီး 'innocent' သည် ၎င်းကို အထူးပြုသော object complement ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 29
  {
    id: 29,
    title: "Verb + two objects: to vs for with indirect objects",
    category: "verb-complementation",
    level: "B2 Intermediate",
    summary: "Differentiate verbs that take preposition 'to' (transfer: give, send, lend) vs 'for' (benefit: buy, cook, make) with indirect objects.",
    summaryBurmese: "ကံပုဒ် ၂ ခုပါသော ကြိယာများတွင် လွှဲပြောင်းပေးအပ်ခြင်း (to) နှင့် အကျိုးအတွက် လုပ်ဆောင်ပေးခြင်း (for) ကွာခြားချက်။",
    keyPoints: [
      "Pattern 1: 'Verb + Indirect Object + Direct Object' -> 'She gave him a book'.",
      "Pattern 2: 'Verb + Direct Object + Preposition + Indirect Object' -> 'She gave a book TO him'.",
      "Verbs taking 'TO': give, lend, offer, pass, promise, read, sell, send, show, teach, tell, write.",
      "Verbs taking 'FOR': buy, cook, fetch, find, get, make, order, prepare, save.",
      "When the direct object is a pronoun (it, them), Pattern 2 is strongly preferred: 'Give it to me' (NOT 'Give me it')."
    ],
    keyPointsBurmese: [
      "လွှဲပြောင်းပေးအပ်သော ကြိယာများ (give, send, show) တွင် 'to' သုံးသည်။",
      "တစ်စုံတစ်ဦးအတွက် အကျိုးပြုလုပ်ဆောင်ပေးသော ကြိယာများ (buy, cook, make, find) တွင် 'for' သုံးသည်။",
      "Pronoun (it, them) ဖြစ်ပါက 'Give it to me' ပုံစံသာ သုံးရသည်။"
    ],
    reminderRefs: ["E2"],
    sections: [
      {
        id: "A",
        title: "To vs For Ditransitive Verbs",
        content: "Use 'to' when an item is transferred towards someone. Use 'for' when an action is performed for someone's benefit.",
        contentBurmese: "ပစ္စည်းလွှဲပြောင်းပေးရာတွင် 'to' သုံးပြီး၊ အကျိုးအတွက် လုပ်ပေးရာတွင် 'for' သုံးသည်။",
        examples: [
          { text: "Could you send that report to the director?", note: "Transfer -> to" },
          { text: "My grandmother baked a wonderful cake for us.", note: "Benefit -> for" }
        ]
      }
    ],
    exercises: [
      {
        id: "29.1",
        title: "Exercise 29.1: To vs For with Double Objects",
        instruction: "Fill in to or for.",
        instructionBurmese: "To သို့မဟုတ် for ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "The chef prepared a special gourmet dish ______ the visiting dignitary.",
            prefix: "The chef prepared a dish ",
            suffix: " the visiting dignitary.",
            correctAnswer: ["for"],
            explanation: "Prepare describes creating something for someone's benefit, requiring 'for'.",
            explanationBurmese: "တစ်စုံတစ်ဦးအတွက် ပြင်ဆင်ပေးခြင်း (benefit) ဖြစ်၍ 'for' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 30
  {
    id: 30,
    title: "Verb + -ing forms and infinitives 1: verbs taking either form with no change in meaning",
    category: "verb-complementation",
    level: "B2 Intermediate",
    summary: "Identify verbs of starting, continuing, and preference (begin, start, continue, like, love, hate, prefer) taking -ing or to-infinitive.",
    summaryBurmese: "Begin, start, continue, like, love စသော ကြိယာများနောက်တွင် -ing သို့မဟုတ် to-infinitive သုံးစွဲပုံ။",
    keyPoints: [
      "Verbs like 'begin', 'start', 'continue' can take either -ing or to-infinitive with little difference: 'It started raining' = 'It started to rain'.",
      "Avoid two -ing forms together: say 'It was starting to rain' (NOT 'It was starting raining').",
      "With 'would like / would prefer / would love', ONLY the to-infinitive is used: 'I would like to come' (NOT 'I would like coming').",
      "In British English, 'like + -ing' means enjoy; 'like + to-infinitive' means it is considered a good habit/choice."
    ],
    keyPointsBurmese: [
      "Begin, start, continue နောက်တွင် -ing ရော to-infinitive ရော သုံးနိုင်သည်။",
      "-ing နှစ်ခါဆက် မဖြစ်စေရန် 'It was starting to rain' ဟုသာ သုံးရသည်။",
      "Would like / Would love နောက်တွင် 'to + V1' သာ သုံးရသည်။"
    ],
    reminderRefs: ["E3"],
    sections: [
      {
        id: "A",
        title: "Start / Begin / Continue Rules",
        content: "When the main verb is itself in continuous aspect, always choose the to-infinitive to prevent awkward consecutive -ing forms.",
        contentBurmese: "ပင်မကြိယာသည် Continuous ဖြစ်နေပါက နောက်ဆက်တွဲတွင် to-infinitive ကိုသာ သုံးရသည်။",
        examples: [
          { text: "The audience was beginning to applaud.", note: "Correct: was beginning + to applaud (NOT applauding)" }
        ]
      }
    ],
    exercises: [
      {
        id: "30.1",
        title: "Exercise 30.1: Infinitive vs -Ing Choices",
        instruction: "Select the most stylistically natural form.",
        instructionBurmese: "သဒ္ဒါအရ အမှန်ဆုံးပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Look, the snow is finally beginning [to melt / melting] in the garden.",
            options: ["to melt", "melting"],
            correctAnswer: "to melt",
            explanation: "Because 'beginning' is already in the continuous aspect, use 'to melt' to avoid 'beginning melting'.",
            explanationBurmese: "Beginning သည် -ing ဖြစ်နေပြီးဖြစ်၍ -ing နှစ်ထပ်မဖြစ်စေရန် 'to melt' ကို သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 31
  {
    id: 31,
    title: "Verb + -ing forms and infinitives 2: verbs with major changes in meaning",
    category: "verb-complementation",
    level: "C1 Advanced",
    summary: "Master critical meaning shifts with remember, forget, regret, stop, try, go on, and mean when followed by -ing vs to-infinitive.",
    summaryBurmese: "Remember, regret, stop, try, go on စသည့် ကြိယာများနောက်တွင် -ing နှင့် to-infinitive လိုက်ပါက အဓိပ္ပာယ် လုံးဝပြောင်းလဲသွားပုံ။",
    keyPoints: [
      "'Remember / Forget + -ing': look back on a past memory ('I remember locking the door').",
      "'Remember / Forget + to-infinitive': remember a duty before doing it ('Remember to lock the door!').",
      "'Regret + -ing': feel sorry about a past action ('I regret telling him').",
      "'Regret + to-infinitive': formal announcement of bad news ('We regret to inform you that your application was unsuccessful').",
      "'Stop + -ing': quit an activity ('He stopped smoking').",
      "'Stop + to-infinitive': pause in order to do something ('He stopped to smoke a cigarette').",
      "'Try + -ing': experiment with a method ('Try pressing this button').",
      "'Try + to-infinitive': make an effort to do something difficult ('Try to lift this heavy box')."
    ],
    keyPointsBurmese: [
      "Remember + -ing = အတိတ်က အမှတ်တရကို ပြန်သတိရခြင်း။ Remember + to-inf = မလုပ်မီ တာဝန်ကို မမေ့ဘဲ လုပ်ဆောင်ခြင်း။",
      "Regret + -ing = လုပ်ခဲ့မိသည်ကို နောင်တရခြင်း။ Regret + to-inf = မကောင်းသောသတင်းကို ဝမ်းနည်းစွာ အသိပေးခြင်း။",
      "Stop + -ing = လုပ်ရပ်တစ်ခုကို လုံးဝရပ်တန့်လိုက်ခြင်း။ Stop + to-inf = တစ်ခုခုလုပ်ရန် ခေတ္တရပ်လိုက်ခြင်း။",
      "Try + -ing = စမ်းသပ်ကြည့်ခြင်း။ Try + to-inf = ကြိုးစားအားထုတ်ခြင်း။"
    ],
    reminderRefs: ["E4", "E5"],
    sections: [
      {
        id: "A",
        title: "Critical Meaning Contrasts",
        content: "Choosing between -ing and to-infinitive fundamentally changes temporal reference and intention.",
        contentBurmese: "-ing နှင့် to-infinitive ရွေးချယ်မှုသည် အချိန်ကာလနှင့် ရည်ရွယ်ချက်ကို လုံးဝပြောင်းလဲစေသည်။",
        examples: [
          { text: "We regret to announce the cancellation of flight 304.", note: "Regret + to announce = formal bad news" },
          { text: "I deeply regret shouting at my colleague yesterday.", note: "Regret + shouting = remorse for past deed" }
        ]
      }
    ],
    exercises: [
      {
        id: "31.1",
        title: "Exercise 31.1: Meaning Shift Identification",
        instruction: "Select the correct form according to the context.",
        instructionBurmese: "ဝါကျအဓိပ္ပာယ်အလိုက် မှန်ကန်သောပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "On the long drive to Scotland, we stopped [to stretch / stretching] our legs every two hours.",
            options: ["to stretch", "stretching"],
            correctAnswer: "to stretch",
            explanation: "'Stopped to stretch' means they paused their driving in order to stretch.",
            explanationBurmese: "ခြေဆင်းနားနေရန် ခေတ္တရပ်ခြင်း (ရည်ရွယ်ချက်) ဖြစ်၍ 'stopped to stretch' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
