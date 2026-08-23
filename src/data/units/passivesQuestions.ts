import { GrammarUnit } from "../../types";

export const PASSIVES_QUESTIONS_UNITS: GrammarUnit[] = [
  // Unit 21
  {
    id: 21,
    title: "Linking verbs: be, appear, seem; become, get, look, sound, etc.",
    category: "passives-questions",
    level: "B2 Intermediate",
    summary: "Structure clauses with linking (copular) verbs followed by adjectives, nouns, or prepositional phrases.",
    summaryBurmese: "Linking verbs (be, seem, become, feel, look, smell, sound) နောက်တွင် Adjective၊ Noun နှင့် Prepositional phrases များ တွဲဖက်ပုံ။",
    keyPoints: [
      "Linking verbs connect the subject to a subject complement (an adjective or noun that describes the subject).",
      "Always use an adjective (NOT an adverb) after linking verbs: 'The soup tastes delicious' (NOT 'deliciously').",
      "'Seem' and 'appear' are often followed by 'to-infinitive': 'He seems to understand the problem'.",
      "'Become' describes a gradual process; 'get' is informal and faster ('get angry', 'become famous')."
    ],
    keyPointsBurmese: [
      "Linking verbs နောက်တွင် Adverb မသုံးရဘဲ Adjective သာ သုံးရသည် (ဥပမာ- tastes good, smells sweet)။",
      "Seem နှင့် Appear နောက်တွင် 'to + V1' တွဲသုံးလေ့ရှိသည်။"
    ],
    reminderRefs: ["D1"],
    sections: [
      {
        id: "A",
        title: "Adjectives after Linking Verbs",
        content: "Linking verbs describe states or changes of state and take adjectives as complements rather than adverbs of manner.",
        contentBurmese: "Linking verbs နောက်တွင် အမူအရာပြ adverb မဟုတ်ဘဲ နာမဝိသေသန (adjective) သာ လိုက်ရသည်။",
        examples: [
          { text: "The orchestra sounded incredible during the finale.", note: "sounded + adjective 'incredible'" }
        ]
      }
    ],
    exercises: [
      {
        id: "21.1",
        title: "Exercise 21.1: Adjective Complements",
        instruction: "Select the correct adjective or adverb form.",
        instructionBurmese: "မှန်ကန်သော ပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Although he had been working all night, his voice sounded remarkably [calm / calmly].",
            options: ["calm", "calmly"],
            correctAnswer: "calm",
            explanation: "'Sound' is a linking verb and requires an adjective ('calm').",
            explanationBurmese: "'Sound' သည် linking verb ဖြစ်၍ adjective 'calm' သာ သုံးရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 22
  {
    id: 22,
    title: "Forming passive sentences 1: agent, instrument, and by/with",
    category: "passives-questions",
    level: "B2 Intermediate",
    summary: "Form standard passives across all tenses and distinguish between the agent (by + person/force) and instrument/material (with + tool).",
    summaryBurmese: "Passive ဝါကျများ ဖွဲ့စည်းခြင်းနှင့် ပြုလုပ်သူ (by) နှင့် အသုံးပြုသည့် ကိရိယာ/ပစ္စည်း (with) ကွာခြားချက်။",
    keyPoints: [
      "Passive formula: Subject + appropriate form of 'be' + past participle (+ by/with).",
      "Use 'by' for the person, animal, or natural force that performed the action: 'The novel was written by Orwell'.",
      "Use 'with' for the instrument, tool, or ingredient used: 'The lock was opened with a hairpin'.",
      "Verbs without objects (intransitive verbs like die, arrive, happen) CANNOT be made passive."
    ],
    keyPointsBurmese: [
      "Passive ပုံစံသည် 'be + V3' ဖြစ်သည်။",
      "ပြုလုပ်သူ/သဘာဝစွမ်းအားတွင် 'by' သုံးပြီး၊ အသုံးပြုသည့် လက်နက်/ကိရိယာတွင် 'with' သုံးသည်။",
      "ကံပုဒ် (Object) မရှိသော Intransitive verbs များကို Passive လုပ်၍မရပါ။"
    ],
    reminderRefs: ["D2", "D3"],
    sections: [
      {
        id: "A",
        title: "Agent (By) vs Instrument (With)",
        content: "Use 'by' to identify who did the action. Use 'with' to state what object, tool, or ingredient was used.",
        contentBurmese: "ပြုလုပ်သူအတွက် 'by'၊ အသုံးပြုသည့် ကိရိယာအတွက် 'with' သုံးသည်။",
        examples: [
          { text: "The sculpture was carved by an Italian master with a diamond-tipped chisel.", note: "by (agent) + with (instrument)" }
        ]
      }
    ],
    exercises: [
      {
        id: "22.1",
        title: "Exercise 22.1: By vs With in Passives",
        instruction: "Fill in by or with.",
        instructionBurmese: "By သို့မဟုတ် with ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "The ancient parchment was signed ______ an ornate feather quill.",
            prefix: "The parchment was signed ",
            suffix: " an ornate feather quill.",
            correctAnswer: ["with"],
            explanation: "An ornate quill is an instrument/tool, so we use 'with'.",
            explanationBurmese: "ကိရိယာ/ပစ္စည်းဖြစ်၍ 'with' သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 23
  {
    id: 23,
    title: "Forming passive sentences 2: verb + -ing or to-infinitive",
    category: "passives-questions",
    level: "C1 Advanced",
    summary: "Form passive gerunds (being done, having been done) and passive infinitives (to be done, to have been done).",
    summaryBurmese: "Passive Gerund (being done) နှင့် Passive Infinitive (to be done) အဆင့်မြင့် ဖွဲ့စည်းပုံများ။",
    keyPoints: [
      "Passive gerund: 'being + past participle' ('She hates being told what to do').",
      "Perfect passive gerund: 'having been + past participle' ('He remembered having been warned about the risks').",
      "Passive infinitive: 'to be + past participle' ('The work needs to be done immediately').",
      "Perfect passive infinitive: 'to have been + past participle' ('He was believed to have been kidnapped')."
    ],
    keyPointsBurmese: [
      "Passive Gerund ပုံစံသည် 'being + V3' ဖြစ်သည်။",
      "Passive Infinitive ပုံစံသည် 'to be + V3' သို့မဟုတ် 'to have been + V3' ဖြစ်သည်။"
    ],
    reminderRefs: ["D4"],
    sections: [
      {
        id: "A",
        title: "Passive Gerunds & Infinitives",
        content: "Verbs that require -ing or to-infinitive take passive equivalents when the subject is the receiver of the action.",
        contentBurmese: "ကံပုဒ်သည် ခံရသူနေရာသို့ ရောက်သောအခါ Gerund နှင့် Infinitive တို့သည် Passive ပုံစံသို့ ပြောင်းလဲသွားသည်။",
        examples: [
          { text: "Nobody enjoys being criticized in public.", note: "being + criticized (passive gerund)" },
          { text: "The documents are expected to be signed tomorrow.", note: "to be + signed (passive infinitive)" }
        ]
      }
    ],
    exercises: [
      {
        id: "23.1",
        title: "Exercise 23.1: Passive Complements",
        instruction: "Select the correct passive form.",
        instructionBurmese: "မှန်ကန်သော Passive ပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "He resented [being treated / treating] like a subordinate after years of loyal service.",
            options: ["being treated", "treating"],
            correctAnswer: "being treated",
            explanation: "Resent takes an -ing form, and he was the recipient of the treatment, requiring 'being treated'.",
            explanationBurmese: "ဆက်ဆံခံရသူဖြစ်သောကြောင့် Passive Gerund ဖြစ်သည့် 'being treated' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 24
  {
    id: 24,
    title: "Using passives: focus, style, and unknown agents",
    category: "passives-questions",
    level: "B2 Intermediate",
    summary: "Select passives deliberately in academic, journalistic, and scientific contexts to shift topical focus.",
    summaryBurmese: "သုတေသနစာတမ်း၊ သတင်းနှင့် တရားဝင်အရေးအသားများတွင် အကြောင်းအရာကို အလေးပေးရန် Passive ကို ထိရောက်စွာ အသုံးပြုခြင်း။",
    keyPoints: [
      "Use passive when the agent is unknown, irrelevant, or obvious: 'My bicycle was stolen last night'.",
      "Use passive in scientific and academic writing for objective, impersonal tone: 'The solution was heated to 100°C'.",
      "Use passive to put the most important information or topic at the beginning of the clause (Theme/Rheme structure)."
    ],
    keyPointsBurmese: [
      "ပြုလုပ်သူကို မသိသောအခါ သို့မဟုတ် ထည့်သွင်းပြောရန် မလိုသောအခါ Passive ကို သုံးသည်။",
      "သိပ္ပံနှင့် သုတေသနစာတမ်းများတွင် ဓမ္မဓိဋ္ဌာန်ကျသော အသံနေအထားရရှိစေရန် Passive သုံးသည်။"
    ],
    reminderRefs: ["D5"],
    sections: [
      {
        id: "A",
        title: "Academic & Objective Passives",
        content: "Passives place emphasis on the experiment, result, or historical event rather than the individual performing it.",
        contentBurmese: "လုပ်ဆောင်သူထက် စမ်းသပ်ချက်နှင့် ရလဒ်ကို အလေးပေးလိုသည့်အခါ Passive ကို သုံးသည်။",
        examples: [
          { text: "Water samples were collected at three distinct depths.", note: "Objective scientific style" }
        ]
      }
    ],
    exercises: [
      {
        id: "24.1",
        title: "Exercise 24.1: Passive Usage",
        instruction: "Select the most appropriate academic passive sentence.",
        instructionBurmese: "အသင့်တော်ဆုံး academic passive ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "In this research paper, the survey responses [were analyzed / we analyzed] using multivariate regression.",
            options: ["were analyzed", "analyzed"],
            correctAnswer: "were analyzed",
            explanation: "Academic papers favor the impersonal passive 'were analyzed'.",
            explanationBurmese: "ပညာရပ်ဆိုင်ရာ စာတမ်းများတွင် 'were analyzed' ကဲ့သို့သော passive ပုံစံကို ဦးစားပေးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 25
  {
    id: 25,
    title: "Reporting with passives: It is said that...; He is believed to...",
    category: "passives-questions",
    level: "C1 Advanced",
    summary: "Report hearsay, general beliefs, and unconfirmed reports using 'It is said that...' and 'Subject + passive verb + to-infinitive'.",
    summaryBurmese: "သတင်းထုတ်ပြန်ချက်နှင့် ယေဘုယျယူဆချက်များကို 'It is said that...' နှင့် 'He is said to be...' ပုံစံ ၂ မျိုးဖြင့် တင်ပြခြင်း။",
    keyPoints: [
      "Pattern 1: 'It + passive verb + that-clause' -> 'It is believed that the company is facing bankruptcy'.",
      "Pattern 2: 'Subject + passive verb + to-infinitive' -> 'The company is believed to be facing bankruptcy'.",
      "Past reference with Pattern 2: 'The suspect is thought to have fled the country' (to have + past participle).",
      "Common reporting verbs: allege, believe, claim, consider, estimate, expect, know, report, say, think, understand."
    ],
    keyPointsBurmese: [
      "Pattern 1: 'It is said / thought / reported that...' ပုံစံ။",
      "Pattern 2: 'Subject + is said / reported + to + V1' ပုံစံ။",
      "အတိတ်ကိစ္စကို ရည်ညွှန်းလျှင် 'to have + V3' ဖြစ်သည် (ဥပမာ- He is believed to have escaped)။"
    ],
    reminderRefs: ["D6"],
    sections: [
      {
        id: "A",
        title: "Dual Passive Reporting Patterns",
        content: "Both patterns allow journalists and writers to report claims without taking personal responsibility for their truth.",
        contentBurmese: "သတင်းစာဆရာများသည် အတည်မပြုနိုင်သေးသော သတင်းများကို တင်ပြရာတွင် ဤ passive ပုံစံ ၂ မျိုးကို အသုံးပြုသည်။",
        examples: [
          { text: "It is estimated that the damage will exceed $10 million.", note: "Pattern 1 (It + passive + that)" },
          { text: "The damage is estimated to exceed $10 million.", note: "Pattern 2 (Subject + passive + to-infinitive)" }
        ]
      }
    ],
    exercises: [
      {
        id: "25.1",
        title: "Exercise 25.1: Reporting Passive Transformations",
        instruction: "Rewrite the sentence using the personal passive structure.",
        instructionBurmese: "Personal passive ဖွဲ့စည်းပုံဖြင့် ပြန်လည်ရေးသားပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "It is reported that the CEO has resigned.",
            prefix: "The CEO is reported ",
            suffix: ".",
            correctAnswer: ["to have resigned"],
            explanation: "The past event ('has resigned') shifts to a perfect infinitive: 'to have resigned'.",
            explanationBurmese: "အတိတ်ဖြစ်ရပ်ဖြစ်၍ perfect infinitive 'to have resigned' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 26
  {
    id: 26,
    title: "Wh-questions with who, whom, which, how, etc.",
    category: "passives-questions",
    level: "B2 Intermediate",
    summary: "Form precise subject questions (no auxiliary inversion) vs object questions (auxiliary inversion), and use formal 'whom'.",
    summaryBurmese: "ကတ္တားကို မေးသော မေးခွန်းများ (auxiliary မလို) နှင့် ကံပုဒ်ကို မေးသော မေးခွန်းများ (auxiliary လို)၊ Whom အသုံးပြုပုံ။",
    keyPoints: [
      "Subject question (who/what is the subject): NO auxiliary 'do/did' -> 'Who broke the window?' (NOT 'Who did break?').",
      "Object question (who/what is the object): REQUIRES auxiliary -> 'Who did you invite?'.",
      "'Whom' is formal and only used for objects, especially after prepositions ('To whom it may concern', 'With whom were you talking?').",
      "'Which' chooses from a limited, known set; 'What' is used for an open, unlimited range."
    ],
    keyPointsBurmese: [
      "ကတ္တားကို မေးပါက do/did မလိုဘဲ မူရင်းကြိယာအတိုင်း မေးသည် (Who wrote this?)။",
      "ကံပုဒ်ကို မေးပါက do/did အကူကြိယာ ထည့်ရသည် (Who did you meet?)။",
      "Whom သည် Formal အသုံးဖြစ်ပြီး Preposition နောက်တွင် သုံးလေ့ရှိသည်။"
    ],
    reminderRefs: ["D7"],
    sections: [
      {
        id: "A",
        title: "Subject Questions vs Object Questions",
        content: "When the question word represents the subject of the verb, standard word order without auxiliary inversion is maintained.",
        contentBurmese: "မေးခွန်းစကားလုံးသည် ကတ္တားဖြစ်နေပါက အကူကြိယာ မထည့်ရဘဲ ပုံမှန်အတိုင်း မေးရသည်။",
        examples: [
          { text: "Who won the gold medal?", note: "Subject question (Who = subject)" },
          { text: "Who did you see at the stadium?", note: "Object question (You = subject, Who = object)" }
        ]
      }
    ],
    exercises: [
      {
        id: "26.1",
        title: "Exercise 26.1: Subject vs Object Wh-Questions",
        instruction: "Select the correct question form.",
        instructionBurmese: "မှန်ကန်သော မေးခွန်းပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "[Who discovered / Who did discover] penicillin in 1928?",
            options: ["Who discovered", "Who did discover"],
            correctAnswer: "Who discovered",
            explanation: "'Who' is the subject of the sentence, so no auxiliary 'did' is used.",
            explanationBurmese: "'Who' သည် ကတ္တားဖြစ်သောကြောင့် 'did' မလိုဘဲ 'Who discovered' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 27
  {
    id: 27,
    title: "Negative questions; echo questions; questions with that-clauses",
    category: "passives-questions",
    level: "C1 Advanced",
    summary: "Express surprise, seek confirmation, and navigate polite conversational echoes and complex question clauses.",
    summaryBurmese: "အံ့အားသင့်မှုနှင့် အတည်ပြုချက်တောင်းသော အငြင်းမေးခွန်းများ (Negative questions)၊ Echo questions နှင့် That-clause ပါသော မေးခွန်းများ။",
    keyPoints: [
      "Negative questions express surprise or seek agreement: 'Haven't you seen the news yet?' / 'Isn't it a lovely day?'.",
      "Answering negative questions: 'Yes' confirms the positive fact; 'No' confirms the negative.",
      "Echo questions repeat part of what someone said with rising intonation to show disbelief: 'You paid HOW MUCH?!'.",
      "Questions with embedded that-clauses: 'Do you think that we should leave?'"
    ],
    keyPointsBurmese: [
      "အငြင်းမေးခွန်း (Negative questions) များသည် အံ့သြခြင်း သို့မဟုတ် ထောက်ခံမှုတောင်းခြင်းကို ဖော်ပြသည်။",
      "မယုံကြည်နိုင်မှုကို ဖော်ပြရန် Echo question ဖြင့် အသံမြှင့်မေးလေ့ရှိသည်။"
    ],
    reminderRefs: ["D8"],
    sections: [
      {
        id: "A",
        title: "Nuance in Negative Questions",
        content: "Negative questions often reveal the speaker's prior expectation or surprise.",
        contentBurmese: "အငြင်းမေးခွန်းများသည် ပြောသူ၏ မျှော်လင့်ချက် သို့မဟုတ် အံ့သြမှုကို ဖော်ပြသည်။",
        examples: [
          { text: "Didn't you know that the deadline was yesterday?", note: "Expressing surprise at ignorance" }
        ]
      }
    ],
    exercises: [
      {
        id: "27.1",
        title: "Exercise 27.1: Negative Question Intonation",
        instruction: "Select the most natural negative question.",
        instructionBurmese: "အသင့်တော်ဆုံး အငြင်းမေးခွန်းကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "A: I didn't recognize her at all. B: [Didn't you notice / You not noticed] her bright red hair?",
            options: ["Didn't you notice", "Not noticed you"],
            correctAnswer: "Didn't you notice",
            explanation: "'Didn't you notice...' naturally expresses surprise in conversation.",
            explanationBurmese: "အံ့သြမှုကို ဖော်ပြသော သဘာဝကျသည့် အငြင်းမေးခွန်းမှာ 'Didn't you notice' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
