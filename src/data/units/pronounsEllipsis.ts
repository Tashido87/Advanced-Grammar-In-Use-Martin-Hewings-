import { GrammarUnit } from "../../types";

export const PRONOUNS_ELLIPSIS_UNITS: GrammarUnit[] = [
  // Unit 60
  {
    id: 60,
    title: "Reflexive pronouns: myself, herself, themselves, each other, one another",
    category: "pronouns-substitution-ellipsis",
    level: "B2 Intermediate",
    summary: "Contrast reflexive pronouns (action directed back to subject: myself, himself) with reciprocal pronouns (mutual interaction: each other, one another) and emphatic uses.",
    summaryBurmese: "မိမိကိုယ်ကို ပြန်လည်ရည်ညွှန်းသော Reflexive Pronouns (myself, himself) နှင့် အချင်းချင်း အပြန်အလှန် (each other, one another)၊ အလေးပေးဖော်ပြမှုများ။",
    keyPoints: [
      "Reflexive (myself, himself, themselves): subject and object are the same person ('He cut himself shaving').",
      "Reciprocal (each other, one another): two or more people doing the same action to each other ('They looked at each other and laughed').",
      "Emphatic use: emphasizing that someone did it personally without help ('The Queen herself opened the hospital').",
      "Verbs not normally reflexive in English: dress, shave, wash, relax, concentrate, feel (say 'I washed and dressed', NOT 'I washed myself and dressed myself')."
    ],
    keyPointsBurmese: [
      "ပြုလုပ်သူနှင့် ခံရသူ တူညီပါက Reflexive pronoun (himself, myself) သုံးသည်။",
      "အချင်းချင်း အပြန်အလှန် လုပ်ဆောင်ပါက 'each other / one another' သုံးသည်။",
      "အင်္ဂလိပ်ဘာသာတွင် wash, dress, shave, relax နောက်တွင် myself/himself မထည့်ရပါ။"
    ],
    reminderRefs: ["J1"],
    sections: [
      {
        id: "A",
        title: "Reflexive vs Reciprocal Pronouns",
        content: "Reflexive indicates self-action; reciprocal indicates mutual cross-action between two or more parties.",
        contentBurmese: "Reflexive သည် မိမိကိုယ်တိုင်ကို ရည်ညွှန်းပြီး Reciprocal သည် အချင်းချင်း အပြန်အလှန် ဖြစ်ခြင်းကို ရည်ညွှန်းသည်။",
        examples: [
          { text: "Tom and Jerry blamed themselves for the failure.", note: "Each blamed himself (reflexive)" },
          { text: "Tom and Jerry blamed each other for the failure.", note: "Tom blamed Jerry, and Jerry blamed Tom (reciprocal)" }
        ]
      }
    ],
    exercises: [
      {
        id: "60.1",
        title: "Exercise 60.1: Reflexive vs Reciprocal Selection",
        instruction: "Select themselves or each other.",
        instructionBurmese: "Themselves သို့မဟုတ် each other ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The two rival debaters shook hands and congratulated [each other / themselves] on a fantastic performance.",
            options: ["each other", "themselves"],
            correctAnswer: "each other",
            explanation: "They congratulated one another mutually, so 'each other' is correct.",
            explanationBurmese: "အချင်းချင်း အပြန်အလှန် ဂုဏ်ပြုခြင်းဖြစ်၍ 'each other' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 61
  {
    id: 61,
    title: "One and ones: pronominal substitution for countable nouns",
    category: "pronouns-substitution-ellipsis",
    level: "B2 Intermediate",
    summary: "Substitute repeated singular and plural countable nouns with 'one' and 'ones' after adjectives, determiners, and demonstratives.",
    summaryBurmese: "ရေတွက်ရနာမ်များ ထပ်ခါတလဲလဲ မဖြစ်စေရန် Adjective၊ This/That တို့နောက်တွင် 'one' နှင့် 'ones' ဖြင့် အစားထိုးခြင်း။",
    keyPoints: [
      "Use 'one' to replace a singular countable noun ('I need a pen. Do you have one?').",
      "Use 'ones' to replace a plural countable noun ('I prefer the blue ones').",
      "Do NOT use 'one/ones' for uncountable nouns (say 'some / a little', NOT 'I'd like a milk... a cold one').",
      "Omission after superlatives: 'Which cake do you want? The largest (one)'."
    ],
    keyPointsBurmese: [
      "ရေတွက်ရ နာမ်တစ်ခုတည်းအတွက် 'one'၊ အများအတွက် 'ones' ဖြင့် အစားထိုးသည်။",
      "ရေတွက်မရသော နာမ်များတွင် one/ones မသုံးရပါ။"
    ],
    reminderRefs: ["J2"],
    sections: [
      {
        id: "A",
        title: "One/Ones Substitution",
        content: "One and ones avoid awkward repetition of countable nouns in adjacent clauses.",
        contentBurmese: "နာမ်များကို ထပ်ခါထပ်ခါ မပြောစေရန် one / ones ဖြင့် အစားထိုးသည်။",
        examples: [
          { text: "These shoes are worn out; I need some new ones.", note: "ones = shoes (plural)" }
        ]
      }
    ],
    exercises: [
      {
        id: "61.1",
        title: "Exercise 61.1: One vs Ones",
        instruction: "Fill in one or ones.",
        instructionBurmese: "One သို့မဟုတ် ones ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "I don't like this green apple; do you have a sweeter ______?",
            prefix: "Do you have a sweeter ",
            suffix: "?",
            correctAnswer: ["one"],
            explanation: "Replaces singular countable 'apple' -> 'one'.",
            explanationBurmese: "Singular countable 'apple' ကို အစားထိုးသဖြင့် 'one' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 62
  {
    id: 62,
    title: "So and not: clausal substitution with think, hope, believe, expect, etc.",
    category: "pronouns-substitution-ellipsis",
    level: "B2 Intermediate",
    summary: "Replace entire that-clauses with 'so' (affirmative) and 'not' or negative verbs (negative) after cognitive verbs.",
    summaryBurmese: "That-clause တစ်ခုလုံးကို ပြန်မပြောဘဲ 'so' (အပြု) နှင့် 'not' (အငြင်း) ဖြင့် အစားထိုးခြင်း (I hope so, I think not, I don't think so)။",
    keyPoints: [
      "Affirmative: 'Is it going to rain?' -> 'I think so / I hope so / I believe so'.",
      "Negative with think, believe, expect, suppose: prefer 'I don't think so / I don't believe so'.",
      "Negative with hope, fear, suspect, be afraid: use 'I hope not / I'm afraid not' (NOT 'I don't hope so')."
    ],
    keyPointsBurmese: [
      "Think, believe, expect တို့တွင် 'I don't think so' ဟု သုံးသည်။",
      "Hope, be afraid တို့တွင် 'I hope not' / 'I'm afraid not' ဟု သုံးသည် ('I don't hope so' မဟုတ်ပါ)။"
    ],
    reminderRefs: ["J3"],
    sections: [
      {
        id: "A",
        title: "Clausal Substitution Nuances",
        content: "Different cognitive verbs govern distinct patterns for negative clausal substitution.",
        contentBurmese: "ကြိယာတစ်ခုချင်းစီ၏ အငြင်းအစားထိုးပုံစံ မတူညီမှုကို သတိပြုပါ။",
        examples: [
          { text: "A: Will we miss the flight? B: I hope not.", note: "Correct: I hope not (NOT I don't hope so)" }
        ]
      }
    ],
    exercises: [
      {
        id: "62.1",
        title: "Exercise 62.1: So vs Not Clausal Substitution",
        instruction: "Select the correct conversational response.",
        instructionBurmese: "မှန်ကန်သော တုံ့ပြန်စကားကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "A: Is the concert cancelled? B: [I'm afraid so / I afraid not], due to heavy torrential rain.",
            options: ["I'm afraid so", "I'm afraid not"],
            correctAnswer: "I'm afraid so",
            explanation: "The concert is indeed cancelled (affirmative bad news), so 'I'm afraid so' is correct.",
            explanationBurmese: "ဖျက်သိမ်းလိုက်ပြီဖြစ်ကြောင်း အတည်ပြုသဖြင့် 'I'm afraid so' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 63
  {
    id: 63,
    title: "Do so, do that, do it: substituting for verb phrases",
    category: "pronouns-substitution-ellipsis",
    level: "C1 Advanced",
    summary: "Substitute predicate action verb phrases using formal 'do so', emphatic 'do that', or concrete 'do it'.",
    summaryBurmese: "ကြိယာစကားစုတစ်ခုလုံးကို အစားထိုးရာတွင် Formal ဆန်သော 'do so'၊ အလေးပေးသော 'do that' နှင့် 'do it' အသုံးပြုပုံ။",
    keyPoints: [
      "'Do so' is formal and refers to a deliberate dynamic action previously mentioned ('The bank asked him to repay the loan, and he did so immediately').",
      "'Do so' CANNOT substitute for state verbs (NOT 'She likes art, and her sister does so too' -> use 'does too').",
      "'Do that' puts strong emphasis on the specific action or unexpected nature of the deed.",
      "'Do it' refers to a well-defined physical task or action."
    ],
    keyPointsBurmese: [
      "'Do so' သည် Formal အရေးအသားတွင် အသုံးများပြီး ရည်ရွယ်ချက်ရှိသော လုပ်ဆောင်ချက်ကို အစားထိုးသည်။",
      "State verbs များတွင် 'do so' မသုံးရပါ။",
      "'Do that' သည် ထိုလုပ်ရပ်ကို အထူးအလေးပေးလိုသည့်အခါ သုံးသည်။"
    ],
    reminderRefs: ["J4"],
    sections: [
      {
        id: "A",
        title: "Do so vs Do that vs Do it",
        content: "Do so is typical of formal written reports and legal documents.",
        contentBurmese: "Do so သည် တရားဝင် စာတမ်းများနှင့် အဆင့်မြင့် အရေးအသားတွင် အသုံးအများဆုံး ဖြစ်သည်။",
        examples: [
          { text: "Employees wishing to apply for sabbatical leave must do so before November 1st.", note: "do so = apply for sabbatical leave" }
        ]
      }
    ],
    exercises: [
      {
        id: "63.1",
        title: "Exercise 63.1: Verb Phrase Substitution",
        instruction: "Select the most natural formal substitute.",
        instructionBurmese: "အသင့်တော်ဆုံး formal substitute ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "All passengers are requested to fasten their seatbelts and to [do so / do them] without delay.",
            options: ["do so", "do that"],
            correctAnswer: "do so",
            explanation: "Formal instructions use 'do so' to substitute for the dynamic verb phrase 'fasten seatbelts'.",
            explanationBurmese: "Formal ညွှန်ကြားချက်တွင် 'do so' ကို သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 64
  {
    id: 64,
    title: "Leaving out words after auxiliaries: ellipsis in verb phrases",
    category: "pronouns-substitution-ellipsis",
    level: "C1 Advanced",
    summary: "Omit repeated main verbs after auxiliary verbs, modal verbs, and the 'to' of a to-infinitive (reduced infinitive).",
    summaryBurmese: "အကူကြိယာနှင့် Modal များနောက်တွင် မူရင်းကြိယာကို ချန်လှပ်ခြင်း (Ellipsis) နှင့် 'to' ဖြင့်သာ အဆုံးသတ်သော Reduced Infinitive။",
    keyPoints: [
      "Auxiliary ellipsis: 'She said she would call me, but she didn't [call me]'.",
      "Reduced infinitive with 'to': 'I wanted to come to the party, but I wasn't able TO [come]'.",
      "Verbs commonly taking reduced 'to': agree, afford, ask, choose, decide, forget, hate, hope, intend, like, love, mean, prefer, refuse, try, want."
    ],
    keyPointsBurmese: [
      "စကားထပ်မဖြစ်စေရန် အကူကြိယာနောက်မှ ကြိယာကို ချန်လှပ်နိုင်သည် (She promised to help, but she didn't)။",
      "Infinitive တစ်ခုလုံး မပြောဘဲ 'to' ဖြင့် ရပ်ထားနိုင်သည် (I'd love to)။"
    ],
    reminderRefs: ["J5"],
    sections: [
      {
        id: "A",
        title: "Reduced Infinitives (To-Ellipsis)",
        content: "Leaving 'to' at the end of the clause signals the omission of the full infinitive predicate.",
        contentBurmese: "ဝါကျအဆုံးတွင် 'to' ဖြင့် ချန်ထားခြင်းသည် ရှေ့ကြိယာကို အတိုချုံးလိုက်ခြင်း ဖြစ်သည်။",
        examples: [
          { text: "A: Are you joining us for dinner? B: I'd love to, but I have to finish this paper.", note: "to = to join you for dinner" }
        ]
      }
    ],
    exercises: [
      {
        id: "64.1",
        title: "Exercise 64.1: Auxiliary & Infinitive Ellipsis",
        instruction: "Select the most natural elliptical response.",
        instructionBurmese: "သဘာဝအကျဆုံး ချန်လှပ်မှုပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "A: Did you remember to water the plants? B: No, I forgot [to / to do it water].",
            options: ["to", "to water them plants"],
            correctAnswer: "to",
            explanation: "The reduced infinitive 'forgot to' naturally avoids repeating 'water the plants'.",
            explanationBurmese: "Reduced infinitive ဖြစ်သော 'forgot to' သည် သဘာဝအကျဆုံး ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 65
  {
    id: 65,
    title: "Ellipsis across sentences: omitting subjects, verbs, and repeated heads",
    category: "pronouns-substitution-ellipsis",
    level: "C1 Advanced",
    summary: "Master natural conversational omissions (initial ellipsis) and cohesive reductions in formal paragraphs.",
    summaryBurmese: "နေ့စဉ်စကားပြောတွင် အစပိုင်း စကားလုံးများ ချန်လှပ်ခြင်း (Initial ellipsis) နှင့် စာပိုဒ်များတွင် စကားထပ်မဖြစ်အောင် ဖြုတ်ပစ်ပုံ။",
    keyPoints: [
      "Informal initial ellipsis: omitting subject pronoun / auxiliary in rapid speech ('[I] Hope to see you soon', '[Have you] Seen my keys?').",
      "Compound sentences with 'and / but / or': omit shared subject or verb ('She opened the door and [she] walked in').",
      "Academic cohesion: avoiding clunky repetition through structural ellipsis."
    ],
    keyPointsBurmese: [
      "စကားပြောတွင် 'Hope to see you soon', 'Seen my phone?' ကဲ့သို့ ရှေ့ဆုံးမှ နာမ်စား/အကူကြိယာကို ချန်လှပ်နိုင်သည်။",
      "And/But ဖြင့် ဆက်သောဝါကျတွင် တူညီသော ကတ္တားကို ချန်လှပ်နိုင်သည်။"
    ],
    reminderRefs: ["J6"],
    sections: [
      {
        id: "A",
        title: "Initial Conversational Ellipsis",
        content: "In informal contexts, speakers frequently drop unstressed introductory words.",
        contentBurmese: "ပေါ့ပေါ့ပါးပါး စကားပြောရာတွင် အလေးမပေးသော ရှေ့ဆုံးစကားလုံးများကို ချန်လှပ်လေ့ရှိသည်။",
        examples: [
          { text: "Sounds good to me! (= That sounds good to me)", note: "Omitted subject 'That'" }
        ]
      }
    ],
    exercises: [
      {
        id: "65.1",
        title: "Exercise 65.1: Conversational Ellipsis",
        instruction: "Select the sentence with standard natural conversational ellipsis.",
        instructionBurmese: "သဘာဝကျသော ellipsis ပါသော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Which informal greeting demonstrates natural initial ellipsis?",
            options: ["Good to see you again!", "Good it is to see you again!"],
            correctAnswer: "Good to see you again!",
            explanation: "'[It is] Good to see you again!' drops the introductory subject and verb.",
            explanationBurmese: "'It is' ကို ချန်လှပ်ထားသော 'Good to see you again!' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
