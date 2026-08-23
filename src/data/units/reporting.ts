import { GrammarUnit } from "../../types";

export const REPORTING_UNITS: GrammarUnit[] = [
  // Unit 32
  {
    id: 32,
    title: "Reporting people's words and thoughts: direct vs indirect speech",
    category: "reporting",
    level: "B2 Intermediate",
    summary: "Convert direct quotes to indirect reported speech, applying pronoun, demonstrative, and time reference shifts.",
    summaryBurmese: "တိုက်ရိုက်စကား (Direct speech) မှ တဆင့်ပြန်ပြောစကား (Indirect speech) သို့ ပြောင်းလဲရာတွင် နာမ်စားနှင့် အချိန်ပြစကားလုံးများ ညှိယူပုံ။",
    keyPoints: [
      "Pronouns shift to match the reporting perspective (I -> he/she, we -> they).",
      "Time/place words shift: now -> then, today -> that day, tomorrow -> the next day, yesterday -> the day before, here -> there.",
      "Summarizing verbs often replace exact words: 'complained', 'threatened', 'boasted', 'promised'."
    ],
    keyPointsBurmese: [
      "နာမ်စားများ (Pronouns) သည် ပြောသူ၏ ရှုထောင့်အတိုင်း ပြောင်းလဲသွားသည်။",
      "Now သည် then၊ Today သည် that day၊ Tomorrow သည် the next day သို့ ပြောင်းလဲသည်။"
    ],
    reminderRefs: ["F1"],
    sections: [
      {
        id: "A",
        title: "Perspective Shifts in Reporting",
        content: "Reporting speech accurately requires aligning deixis (time, place, person) with the current reporting context.",
        contentBurmese: "တဆင့်ပြန်ပြောရာတွင် နေရာ၊ အချိန်နှင့် လူပုဂ္ဂိုလ်တို့ကို လက်ရှိအခြေအနေနှင့် ညှိရသည်။",
        examples: [
          { text: "Direct: 'I'll see you here tomorrow.' -> Reported: 'He said he would see me there the next day.'", note: "Pronoun, modal, place, and time shifts" }
        ]
      }
    ],
    exercises: [
      {
        id: "32.1",
        title: "Exercise 32.1: Deixis & Pronoun Shifts",
        instruction: "Select the correct reported form.",
        instructionBurmese: "မှန်ကန်သော reported speech ပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Anna said: 'I am leaving for London tomorrow.' -> Anna explained that she was leaving for London [the next day / tomorrow].",
            options: ["the next day", "tomorrow"],
            correctAnswer: "the next day",
            explanation: "'Tomorrow' shifts to 'the next day' in reported speech.",
            explanationBurmese: "Reported speech တွင် 'tomorrow' သည် 'the next day' သို့ ပြောင်းသည်။"
          }
        ]
      }
    ]
  },

  // Unit 33
  {
    id: 33,
    title: "Reporting statements: that-clauses with say, tell, explain, etc.",
    category: "reporting",
    level: "B2 Intermediate",
    summary: "Choose appropriate reporting verbs and determine when 'that' can be omitted or is obligatory.",
    summaryBurmese: "Say, tell, explain စသော ကြိယာများနှင့် that-clause တွဲဖက်ပုံနှင့် 'that' ကို ချန်လှပ်နိုင်သော/မချန်လှပ်နိုင်သော အခြေအနေများ။",
    keyPoints: [
      "'Say + (that)': 'She said that she was tired' (NOT 'She said me').",
      "'Tell + Person + (that)': 'She told ME that she was tired' (NOT 'She told that').",
      "'Explain / Mention / Suggest + to + Person + that': 'He explained to us that the flight was delayed'.",
      "'That' can be omitted in informal speech after common verbs (say, think, know), but is retained after formal verbs (allege, conclude, confirm, demand)."
    ],
    keyPointsBurmese: [
      "Say နောက်တွင် လူကို တိုက်ရိုက်မထည့်ရပါ (said me မဟုတ်ဘဲ said that ဖြစ်သည်)။",
      "Tell နောက်တွင် နားထောင်သူ လူပုဂ္ဂိုလ် ထည့်ရသည် (told me that)။",
      "Explain, mention, suggest တို့တွင် 'to + person' ထည့်ရသည် (explained to us that)။"
    ],
    reminderRefs: ["F2"],
    sections: [
      {
        id: "A",
        title: "Say vs Tell vs Explain Patterns",
        content: "Check the direct complement requirements of the reporting verb.",
        contentBurmese: "Reporting verb များ၏ ကံပုဒ်လိုက်ပုံစနစ်ကို သတိပြုပါ။",
        examples: [
          { text: "He told the journalists that negotiations were ongoing.", note: "tell + person + that" },
          { text: "He said to the journalists that negotiations were ongoing.", note: "say + to + person + that" }
        ]
      }
    ],
    exercises: [
      {
        id: "33.1",
        title: "Exercise 33.1: Say vs Tell vs Explain",
        instruction: "Fill in said, told, or explained to.",
        instructionBurmese: "Said, told, သို့မဟုတ် explained to ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "The doctor ______ the patient that the test results were completely normal.",
            prefix: "The doctor ",
            suffix: " the patient that results were normal.",
            correctAnswer: ["told"],
            explanation: "Followed directly by the person ('the patient') without preposition 'to', requiring 'told'.",
            explanationBurmese: "လူပုဂ္ဂိုလ် 'the patient' တိုက်ရိုက်ပါရှိသောကြောင့် 'told' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 34
  {
    id: 34,
    title: "Verb + that-clause: tense choice and backshifting rules",
    category: "reporting",
    level: "C1 Advanced",
    summary: "Determine when backshifting (present -> past) is obligatory vs when present tenses can be retained for permanent truths and ongoing situations.",
    summaryBurmese: "ကာလနောက်ဆုတ်ခြင်း (Backshifting) ပြုလုပ်ရမည့် အခြေအနေနှင့် သဘာဝအမှန်တရားဖြစ်၍ မူလကာလအတိုင်း ထားရှိနိုင်သည့် အခြေအနေများ။",
    keyPoints: [
      "Standard backshifting: Present simple -> Past simple; Present continuous -> Past continuous; Past simple / Present perfect -> Past perfect; Will -> Would.",
      "No backshift needed if the situation is STILL TRUE at the moment of reporting: 'Galileo proved that the Earth moves around the sun'.",
      "No backshift if the speaker wants to emphasize current relevance: 'Sarah told me she is moving to Berlin next month' (if she hasn't moved yet)."
    ],
    keyPointsBurmese: [
      "ယေဘုယျအားဖြင့် Past Tense သို့ နောက်ဆုတ်ရသည် (am -> was, will -> would)။",
      "ယခုအချိန်အထိ အမှန်တရားဖြစ်နေဆဲ ကိစ္စများ (permanent facts) တွင်မူ Present Tense အတိုင်း ထားနိုင်သည်။"
    ],
    reminderRefs: ["F3"],
    sections: [
      {
        id: "A",
        title: "Retaining Present Tense for Permanent Facts",
        content: "When reporting universal scientific truths or ongoing situations, the present tense is naturally maintained.",
        contentBurmese: "သိပ္ပံနည်းကျ အမှန်တရားများနှင့် လက်ရှိဖြစ်ဆဲအရာများတွင် Present tense ကို ဆက်လက်ထားနိုင်သည်။",
        examples: [
          { text: "The researcher stated that human DNA contains 23 pairs of chromosomes.", note: "Permanent biological fact -> present tense 'contains'" }
        ]
      }
    ],
    exercises: [
      {
        id: "34.1",
        title: "Exercise 34.1: Tense Retention vs Backshift",
        instruction: "Select the most accurate tense for the fact.",
        instructionBurmese: "အမှန်ကန်ဆုံး ကာလပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The teacher reminded the children that water [boils / boiled] at 100 degrees Celsius.",
            options: ["boils", "had boiled"],
            correctAnswer: "boils",
            explanation: "Universal scientific facts retain the present simple ('boils').",
            explanationBurmese: "သဘာဝသိပ္ပံ အမှန်တရားဖြစ်သောကြောင့် 'boils' သာ ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 35
  {
    id: 35,
    title: "Verb + wh-clause: reported questions and wh-words",
    category: "reporting",
    level: "B2 Intermediate",
    summary: "Report wh-questions and yes/no questions (if/whether) using statement word order (Subject + Verb) without auxiliary 'do/did'.",
    summaryBurmese: "Reported questions များတွင် do/did ကို ဖြုတ်ပြီး စာကြောင်းအစဉ်အတိုင်း (ကတ္တား + ကြိယာ) ပြန်လည်ဖွဲ့စည်းပုံ။",
    keyPoints: [
      "In reported questions, standard STATEMENT word order is used: 'She asked where I lived' (NOT 'where did I live').",
      "No question marks are used in reported questions.",
      "Yes/No questions use 'if' or 'whether': 'He asked IF / WHETHER I had finished the report'.",
      "'Whether' is preferred before 'or not', after prepositions, and before to-infinitives: 'We discussed whether to go'."
    ],
    keyPointsBurmese: [
      "Reported question တွင် do/did ဖြုတ်ပြီး 'ကတ္တား + ကြိယာ' အစဉ်အတိုင်း ရေးရသည် (asked where I lived)။",
      "Yes/No မေးခွန်းများတွင် 'if' သို့မဟုတ် 'whether' ကို သုံးသည်။",
      "Whether or not, Preposition နောက်နှင့် to-infinitive ရှေ့တွင် 'whether' ကိုသာ သုံးရသည်။"
    ],
    reminderRefs: ["F4"],
    sections: [
      {
        id: "A",
        title: "Statement Word Order in Reported Questions",
        content: "Do not invert the subject and verb in reported questions, and remove the auxiliary 'do/did'.",
        contentBurmese: "Reported question တွင် ကတ္တားနှင့်ကြိယာကို ရှေ့နောက်မလှန်ရဘဲ ပုံမှန်ဝါကျအတိုင်း ရေးရသည်။",
        examples: [
          { text: "Direct: 'Where are you staying?' -> Indirect: 'She asked me where I was staying.'", note: "Subject 'I' before verb 'was staying'" }
        ]
      }
    ],
    exercises: [
      {
        id: "35.1",
        title: "Exercise 35.1: Reported Question Word Order",
        instruction: "Select the grammatically correct indirect question.",
        instructionBurmese: "သဒ္ဒါမှန်ကန်သော reported question ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The immigration officer inquired [how long I intended / how long did I intend] to stay in the country.",
            options: ["how long I intended", "how long did I intend"],
            correctAnswer: "how long I intended",
            explanation: "Reported questions must use statement order ('how long I intended'), never auxiliary inversion.",
            explanationBurmese: "Statement word order ဖြစ်သော 'how long I intended' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 36
  {
    id: 36,
    title: "Tense choice in reporting: complex time relationships",
    category: "reporting",
    level: "C1 Advanced",
    summary: "Navigate multi-layered time shifts when reporting events that relate to past pasts, future pasts, and present consequences.",
    summaryBurmese: "ရှုပ်ထွေးသော အချိန်ကာလများတွင် သတင်းနှင့် အချက်အလက်များကို တိကျမှန်ကန်စွာ တဆင့်ပြန်ပြောခြင်း။",
    keyPoints: [
      "When the reporting verb is in the present (says, explains), the original tenses are fully maintained.",
      "Past modals (might, could, would, should, ought to, had better) DO NOT change in reported speech.",
      "'Must' changes to 'had to' for past obligation, but remains 'must' for deduction or permanent rules."
    ],
    keyPointsBurmese: [
      "Reporting verb သည် Present (says, states) ဖြစ်နေပါက ကာလမပြောင်းရပါ။",
      "Could, would, should, might, had better တို့သည် reported speech တွင် မပြောင်းလဲပါ။"
    ],
    reminderRefs: ["F5"],
    sections: [
      {
        id: "A",
        title: "Unchanged Modal Forms",
        content: "Modals expressing hypothetical meaning or past forms do not undergo further backshifting.",
        contentBurmese: "Could, should, would, might စသော modals များသည် reported speech တွင် မပြောင်းလဲပါ။",
        examples: [
          { text: "Direct: 'You should see a doctor.' -> Indirect: 'She advised that I should see a doctor.'", note: "'should' remains unchanged" }
        ]
      }
    ],
    exercises: [
      {
        id: "36.1",
        title: "Exercise 36.1: Modal Transformations in Reporting",
        instruction: "Select the correct transformation.",
        instructionBurmese: "မှန်ကန်သော ပြောင်းလဲမှုကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Mark: 'I might join the team later.' -> Mark remarked that he [might join / may join] the team later.",
            options: ["might join", "would might join"],
            correctAnswer: "might join",
            explanation: "'Might' remains unchanged in indirect speech.",
            explanationBurmese: "'Might' သည် reported speech တွင် ပုံစံမပြောင်းဘဲ 'might join' အဖြစ် ဆက်ရှိသည်။"
          }
        ]
      }
    ]
  },

  // Unit 37
  {
    id: 37,
    title: "Reporting offers, suggestions, orders, intentions: verb + to-infinitive / -ing",
    category: "reporting",
    level: "C1 Advanced",
    summary: "Replace cumbersome that-clauses with concise verb structures: offer + to-inf, suggest + -ing, threaten + to-inf, encourage + object + to-inf.",
    summaryBurmese: "Offer, suggest, warn, advise, threaten စသော ကြိယာများကို to-infinitive သို့မဟုတ် -ing ဖြင့် တိုတိုရှင်းရှင်း တဆင့်ပြန်ပြောခြင်း။",
    keyPoints: [
      "'Offer / Threaten / Refuse / Promise + to-infinitive': 'He offered to drive me home'.",
      "'Suggest / Recommend / Admit / Deny + -ing': 'She suggested taking the subway'.",
      "'Advise / Urge / Warn / Remind / Encourage + Object + to-infinitive': 'He warned us not to go near the edge'."
    ],
    keyPointsBurmese: [
      "Offer, refuse, promise နောက်တွင် 'to + V1' သုံးသည်။",
      "Suggest, deny, admit နောက်တွင် '-ing' သုံးသည်။",
      "Warn, advise, encourage နောက်တွင် 'Object + to + V1' သုံးသည်။"
    ],
    reminderRefs: ["F6"],
    sections: [
      {
        id: "A",
        title: "Concise Reporting Verb Patterns",
        content: "Using specialized reporting verbs creates natural, executive-level summaries of conversation.",
        contentBurmese: "အဆင့်မြင့် reporting verbs များကို သုံးခြင်းဖြင့် စကားပြောများကို တိုတိုနှင့် ထိရောက်စွာ ပြန်ပြောနိုင်သည်။",
        examples: [
          { text: "Direct: 'Shall I carry your bag?' -> Indirect: 'He offered to carry my bag.'", note: "Concise offer structure" }
        ]
      }
    ],
    exercises: [
      {
        id: "37.1",
        title: "Exercise 37.1: Specialized Reporting Patterns",
        instruction: "Select the most accurate reporting verb structure.",
        instructionBurmese: "အသင့်တော်ဆုံး reporting verb ဖွဲ့စည်းပုံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The captain urged the crew [to remain / remaining] at their posts until the storm passed.",
            options: ["to remain", "remaining"],
            correctAnswer: "to remain",
            explanation: "'Urge' takes 'Object + to-infinitive' ('urged the crew to remain').",
            explanationBurmese: "'Urge' သည် 'Object + to-infinitive' ယူသဖြင့် 'to remain' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 38
  {
    id: 38,
    title: "Modal verbs in reporting: must, can, may, will",
    category: "reporting",
    level: "C1 Advanced",
    summary: "Systematically handle modal verbs in reported statements, questions, and reported requests.",
    summaryBurmese: "Reported speech တွင် Modals များ (must -> had to, can -> could, will -> would) ပြောင်းလဲပုံ အတိအကျ။",
    keyPoints: [
      "'Can' -> 'could'; 'Will' -> 'would'; 'May' -> 'might'.",
      "'Must' expressing obligation changes to 'had to': 'She said I had to sign the paper'.",
      "'Must' expressing logical deduction remains 'must': 'He concluded that the answer must be correct'."
    ],
    keyPointsBurmese: [
      "တာဝန်ဖြစ်သော 'must' သည် 'had to' သို့ ပြောင်းသည်။",
      "ကောက်ချက်ချမှုဖြစ်သော 'must be' သည် ပုံစံမပြောင်းပါ။"
    ],
    reminderRefs: ["F7"],
    sections: [
      {
        id: "A",
        title: "Must: Obligation vs Deduction",
        content: "Must shifts to had to only when representing past obligation, not when representing logical certainty.",
        contentBurmese: "Must သည် တာဝန်အရ လုပ်ရခြင်းတွင် had to သို့ ပြောင်းပြီး၊ သေချာမှုကောက်ချက်ချခြင်းတွင် must အတိုင်း ဆက်ရှိသည်။",
        examples: [
          { text: "He said we had to submit the report by Friday.", note: "Obligation -> had to" },
          { text: "The detective said the thief must have known the combination.", note: "Deduction -> must have known" }
        ]
      }
    ],
    exercises: [
      {
        id: "38.1",
        title: "Exercise 38.1: Modal Shifts in Reporting",
        instruction: "Select the correct form.",
        instructionBurmese: "မှန်ကန်သော ပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The manager told us that all staff [had to / musted] attend the safety briefing.",
            options: ["had to", "musted"],
            correctAnswer: "had to",
            explanation: "Past obligation in reported speech uses 'had to'.",
            explanationBurmese: "Reported speech တွင် အတိတ်တာဝန်အတွက် 'had to' သာ သုံးရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 39
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

  // Unit 40
  {
    id: 40,
    title: "Nouns and adjectives in reporting: decision, promise, aware, adamant",
    category: "reporting",
    level: "C1 Advanced",
    summary: "Report statements and ideas using nouns (decision to, belief that) and predicative adjectives (adamant that, aware that).",
    summaryBurmese: "ကြိယာအစား နာမ် (decision, announcement, claim) နှင့် နာမဝိသေသန (confident that, adamant that) တို့ဖြင့် အဆင့်မြင့် တဆင့်ပြန်ပြောခြင်း။",
    keyPoints: [
      "Reporting nouns + that-clause: 'his claim that the data was forged', 'their announcement that taxes would fall'.",
      "Reporting nouns + to-infinitive: 'her refusal to comment', 'their promise to assist'.",
      "Reporting adjectives + that-clause: 'She was adamant that she had done nothing wrong'."
    ],
    keyPointsBurmese: [
      "Claim that, announcement that ကဲ့သို့သော နာမ်များဖြင့် သတင်းကို အဆင့်မြင့်စွာ တင်ပြနိုင်သည်။",
      "Adamant that, confident that ကဲ့သို့သော နာမဝိသေသနများဖြင့် ပြောသူ၏ စိတ်ခံယူချက်ကို ဖော်ပြနိုင်သည်။"
    ],
    reminderRefs: ["F8"],
    sections: [
      {
        id: "A",
        title: "Reporting Noun Phrases",
        content: "Noun phrases condense complex dialogue into formal academic summaries.",
        contentBurmese: "နာမ်တွဲများကို အသုံးပြု၍ ရှည်လျားသော စကားဝိုင်းများကို စာစီစာကုံးသုံး အနှစ်ချုပ်အဖြစ် ပြောင်းလဲနိုင်သည်။",
        examples: [
          { text: "Her insistence on punctuality surprised the staff.", note: "insistence on + noun" }
        ]
      }
    ],
    exercises: [
      {
        id: "40.1",
        title: "Exercise 40.1: Noun Reporting Patterns",
        instruction: "Select the correct reporting noun.",
        instructionBurmese: "မှန်ကန်သော reporting noun ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The government issued a strong [denial / denying] that interest rates would rise.",
            options: ["denial", "denying"],
            correctAnswer: "denial",
            explanation: "'A strong denial that...' is the standard noun reporting collocate.",
            explanationBurmese: "Standard reporting noun မှာ 'denial' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
