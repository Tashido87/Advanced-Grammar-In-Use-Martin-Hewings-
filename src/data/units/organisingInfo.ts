import { GrammarUnit } from "../../types";

export const ORGANISING_INFO_UNITS: GrammarUnit[] = [
  // Unit 94
  {
    id: 94,
    title: "Focusing with it-cleft sentences: It is / was... that",
    category: "organising-information",
    level: "C1 Advanced",
    summary: "Highlight specific sentence elements (subject, object, adverbial) using It-cleft structures: It is / was + [focused element] + that / who...",
    summaryBurmese: "It-cleft ဝါကျများဖြင့် အလေးပေးဖော်ပြခြင်း - 'It is/was [အလေးပေးလိုသောအရာ] that/who...' (ဥပမာ- It was John who broke the vase)။",
    keyPoints: [
      "Formula: 'It + is/was + [Focused Element] + that/who + rest of sentence'.",
      "Focusing the subject: 'It was MARIE CURIE who discovered radium'.",
      "Focusing the object: 'It was THE NOVEL that won the prize, not the poetry collection'.",
      "Focusing the adverbial / time / place: 'It was IN 1969 that humans first walked on the moon'.",
      "Pronoun agreement: in formal English, subjective pronouns are used ('It was I who was responsible'); in informal English, objective pronouns ('It was me who...')."
    ],
    keyPointsBurmese: [
      "It + is/was + အလေးပေးလိုသောအရာ + that/who ပုံစံဖြင့် ရေးသည်။",
      "ကတ္တားကို အလေးပေးခြင်း (It was Professor Smith who...)။",
      "ကံပုဒ်ကို အလေးပေးခြင်း (It was the blue car that he bought)။",
      "အချိန်/နေရာကို အလေးပေးခြင်း (It was in Paris that they first met)။"
    ],
    reminderRefs: ["N1"],
    sections: [
      {
        id: "A",
        title: "It-Cleft Form and Function",
        content: "It-cleft sentences isolate a single piece of information to emphasize it or correct a misconception.",
        contentBurmese: "မှားယွင်းသော ထင်မြင်ချက်ကို ပြင်ဆင်ရန် သို့မဟုတ် အချက်အလက်တစ်ခုတည်းကို အလေးပေးရန် သုံးသည်။",
        examples: [
          { text: "It was his lack of preparation that caused the failure, not his talent.", note: "Emphasizing the true cause" }
        ]
      }
    ],
    exercises: [
      {
        id: "94.1",
        title: "Exercise 94.1: It-Cleft Transformation",
        instruction: "Rewrite the sentence as an It-cleft focusing on the underlined word.",
        instructionBurmese: "It-cleft ပုံစံဖြင့် အလေးပေးပြန်လည်ရေးသားပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "The heavy thunderstorm knocked out the city's power grid.",
            prefix: "It was the heavy thunderstorm ",
            suffix: " knocked out the city's power grid.",
            correctAnswer: ["that", "which"],
            explanation: "'It was the heavy thunderstorm that knocked out...'",
            explanationBurmese: "'that' သို့မဟုတ် 'which' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 95
  {
    id: 95,
    title: "Focusing with wh-cleft sentences: What I need is...; All we want is...",
    category: "organising-information",
    level: "C1 Advanced",
    summary: "Structure Wh-cleft (pseudo-cleft) sentences using 'What...', 'All...', and 'The thing that...' to introduce thematic focus.",
    summaryBurmese: "Wh-cleft ဝါကျများ - 'What I really need is...'၊ 'All he wants is...' နှင့် 'The thing that surprised me was...'။",
    keyPoints: [
      "Formula: 'What + clause + is/was + focused complement'.",
      "Example: 'What we need is more investment in green energy'.",
      "Focusing on an action: 'What she DID was (to) call the police immediately'.",
      "Variations: 'All I want is peace and quiet', 'The person who helped us was Dr. Vance', 'The place where we met was Kyoto'."
    ],
    keyPointsBurmese: [
      "What + clause + is/was + အလေးပေးလိုသောအရာ (What I love about this city is the culture)။",
      "လုပ်ဆောင်ချက်ကို အလေးပေးခြင်း (What they did was to protest)။",
      "All I want is..., The reason why I called was... ပုံစံများ။"
    ],
    reminderRefs: ["N2"],
    sections: [
      {
        id: "A",
        title: "Wh-Cleft Structures",
        content: "Wh-clefts organize sentences so that background information comes first in the what-clause, and the focal revelation comes after 'is/was'.",
        contentBurmese: "သိပြီးသား နောက်ခံကို what-clause တွင် ထားပြီး အဓိကအချက်ကို is/was နောက်တွင် ထားသည်။",
        examples: [
          { text: "What surprised the researchers was the speed of the chemical reaction.", note: "Focal revelation after 'was'" }
        ]
      }
    ],
    exercises: [
      {
        id: "95.1",
        title: "Exercise 95.1: Wh-Cleft Formulations",
        instruction: "Transform into a what-cleft sentence.",
        instructionBurmese: "What-cleft ဝါကျအဖြစ် ပြောင်းလဲရေးပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "I really admired her incredible dedication to the project.",
            prefix: "What I really admired ",
            suffix: " her incredible dedication to the project.",
            correctAnswer: ["was"],
            explanation: "Wh-cleft: 'What I really admired WAS her incredible dedication...'",
            explanationBurmese: "အတိတ်ကာလဖြစ်၍ 'was' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 96
  {
    id: 96,
    title: "Inversion 1: negative and restrictive adverbs (Never, Seldom, Rarely, Little)",
    category: "organising-information",
    level: "C1 Advanced",
    summary: "Apply subject-auxiliary inversion after fronted negative or restrictive adverbs: Never, Seldom, Rarely, Little, Scarcely, Hardly, Nowhere.",
    summaryBurmese: "Negative & Restrictive Adverbs များကို ဝါကျအစသို့ ထုတ်သောအခါ Inversion (အကူကြိယာ + ကတ္တား) ပြုလုပ်ပုံ (Never have I seen, Little did he know)။",
    keyPoints: [
      "Formula: 'Negative Adverb + Auxiliary Verb + Subject + Main Verb'.",
      "Never: 'NEVER HAVE I WITNESSED such bravery'.",
      "Rarely / Seldom: 'SELDOM DOES ONE FIND such genuine craftsmanship'.",
      "Little (with know, realize, think): 'LITTLE DID HE REALIZE the danger he was in'.",
      "Nowhere: 'NOWHERE COULD THEY FIND shelter from the tempest'."
    ],
    keyPointsBurmese: [
      "Negative Adverb + အကူကြိယာ + ကတ္တား + မူရင်းကြိယာ အစဉ်အတိုင်း ရေးရသည်။",
      "Never have I ever..., Rarely do we see..., Seldom has there been...",
      "Little did he know (သူ လုံးဝမသိခဲ့ပါ)။"
    ],
    reminderRefs: ["N3"],
    sections: [
      {
        id: "A",
        title: "Negative Adverb Inversion",
        content: "When negative limiters open a clause, auxiliary inversion is strictly mandatory in formal English.",
        contentBurmese: "Negative စကားလုံးများကို ဝါကျအစတွင် ထားပါက အကူကြိယာကို ကတ္တားရှေ့သို့ ထုတ်ရမည်။",
        examples: [
          { text: "Rarely have scientists observed such rapid glacier retreat.", note: "Rarely + have + scientists + observed" }
        ]
      }
    ],
    exercises: [
      {
        id: "96.1",
        title: "Exercise 96.1: Negative Inversion",
        instruction: "Select the correctly inverted sentence.",
        instructionBurmese: "Inversion မှန်ကန်သော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Which sentence displays correct negative inversion?",
            options: ["Seldom have I encountered such an extraordinary talent.", "Seldom I have encountered such an extraordinary talent."],
            correctAnswer: "Seldom have I encountered such an extraordinary talent.",
            explanation: "Negative adverb 'Seldom' triggers auxiliary inversion: 'have I encountered'.",
            explanationBurmese: "'Seldom' ကြောင့် အကူကြိယာရှေ့ထုတ်သော 'have I encountered' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 97
  {
    id: 97,
    title: "Inversion 2: only after, only then, not only... but also, under no circumstances",
    category: "organising-information",
    level: "C1 Advanced",
    summary: "Form inversion after 'Only + time/prepositional clause', 'Not only... but also', 'On no account', and 'Under no circumstances'.",
    summaryBurmese: "Only after, Only then, Not only... but also, Under no circumstances စသော စကားစုများဖြင့် Inversion ပြုလုပ်ပုံ။",
    keyPoints: [
      "'Not only... but also': 'NOT ONLY WAS HE late, BUT he ALSO forgot the tickets'.",
      "'Only after / Only when / Only if': inversion occurs in the MAIN clause, not the only-clause ('Only after the sun had set DID the temperature DROP').",
      "'Under no circumstances' / 'On no account': 'UNDER NO CIRCUMSTANCES SHOULD YOU press this emergency button'."
    ],
    keyPointsBurmese: [
      "Not only was he... but also... (Inversion ဖြစ်သည်)။",
      "Only after / Only when ပါသောအခါ အဓိကဝါကျ (Main clause) တွင် Inversion ဖြစ်သည် (Only after the meeting did I realize...)။",
      "Under no circumstances should you... (ဘယ်လိုအခြေအနေမျိုးမှာမှ မလုပ်ရ)။"
    ],
    reminderRefs: ["N4"],
    sections: [
      {
        id: "A",
        title: "Main Clause Inversion with 'Only When / Only After'",
        content: "Ensure the inversion happens in the main result clause, not inside the dependent only-clause.",
        contentBurmese: "Only when/after ပါသော ဝါကျတွင် Inversion ကို ဒုတိယ အဓိကဝါကျထဲတွင် ပြုလုပ်ရသည်။",
        examples: [
          { text: "Only when the final audit was completed did the magnitude of the loss become clear.", note: "Inversion: did + the magnitude + become" }
        ]
      }
    ],
    exercises: [
      {
        id: "97.1",
        title: "Exercise 97.1: Only When Inversion",
        instruction: "Select the sentence with correct inversion placement.",
        instructionBurmese: "Inversion နေရာမှန်သော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Under no circumstances [should you / you should] leave the laboratory unattended.",
            options: ["should you", "you should"],
            correctAnswer: "should you",
            explanation: "'Under no circumstances' strictly requires auxiliary inversion 'should you'.",
            explanationBurmese: "'Under no circumstances' ကြောင့် Inversion ဖြစ်သော 'should you' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 98
  {
    id: 98,
    title: "Fronting and preposing: topic-setting, locative inversion, and dramatic presentation",
    category: "organising-information",
    level: "C1 Advanced",
    summary: "Front prepositional phrases of place/direction followed by full verb inversion: 'Across the valley stretched a dense forest'.",
    summaryBurmese: "နေရာနှင့် ဦးတည်ချက်ပြ စကားစုများကို ရှေ့သို့ထုတ်၍ ကြိယာတစ်ခုလုံးကို ကတ္တားရှေ့ထားသော Full Inversion (Behind the door stood a man)။",
    keyPoints: [
      "Locative Inversion: Prepositional phrase of place + Full Verb + Subject (NO auxiliary needed): 'On the hill stood an ancient fortress'.",
      "This structure is only possible with INTRANSITIVE verbs of position or movement (stand, sit, lie, hang, come, walk, stretch).",
      "If the subject is a PRONOUN, no inversion occurs: 'Into the room he ran' (NOT 'Into the room ran he')."
    ],
    keyPointsBurmese: [
      "နေရာပြ Prepositional phrase + ပင်မကြိယာ + ကတ္တား (On the table lay a secret document)။",
      "Position / Movement ပြသော Intransitive ကြိယာများတွင်သာ သုံးနိုင်သည်။",
      "ကတ္တားသည် နာမ်စား (Pronoun: he, they) ဖြစ်နေပါက Inversion မလုပ်ရပါ (Out of the car he jumped)။"
    ],
    reminderRefs: ["N5"],
    sections: [
      {
        id: "A",
        title: "Locative Fronting & Full Verb Inversion",
        content: "Locative inversion is a hallmark of vivid literary descriptions and narrative scene-setting.",
        contentBurmese: "စာပေအရေးအသားများတွင် မြင်ကွင်းနှင့် ဇာတ်ကွက်ကို သက်ဝင်စေရန် သုံးသည်။",
        examples: [
          { text: "At the end of the long dark corridor stood a solitary marble statue.", note: "Place phrase + stood (verb) + a marble statue (subject)" }
        ]
      }
    ],
    exercises: [
      {
        id: "98.1",
        title: "Exercise 98.1: Locative Inversion Rules",
        instruction: "Select the grammatically correct locative inversion.",
        instructionBurmese: "မှန်ကန်သော locative inversion ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Through the open window [drifted the scent / the scent drifted] of blooming jasmine.",
            options: ["drifted the scent", "did drift the scent"],
            correctAnswer: "drifted the scent",
            explanation: "Locative inversion inverts the full main verb ('drifted the scent'), without an auxiliary 'did'.",
            explanationBurmese: "Locative inversion တွင် auxiliary 'did' မလိုဘဲ ပင်မကြိယာကို 'drifted the scent' ဟု ရှေ့ထုတ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 99
  {
    id: 99,
    title: "Organising information in texts: given vs new information and theme/rheme",
    category: "organising-information",
    level: "C1 Advanced",
    summary: "Structure paragraphs smoothly using the Given-Before-New principle: start sentences with known information (Theme) and end with new focal information (Rheme).",
    summaryBurmese: "စာပိုဒ်များ ချောမွေ့စွာ ချိတ်ဆက်နိုင်ရန် သိပြီးသား အချက်အလက် (Theme) ကို ဝါကျအစတွင်ထားပြီး အချက်အလက်အသစ် (Rheme) ကို ဝါကျအဆုံးတွင် ထားရှိရေးသားခြင်း။",
    keyPoints: [
      "Given Information (Theme): comes at the beginning of the sentence to connect with the previous sentence.",
      "New Information (Rheme / Focus): placed at the end of the sentence where it receives natural stress and focus.",
      "Use passive voice or cleft sentences when necessary to bring given information to the front.",
      "Ensures coherence and cohesion across academic essays and executive summaries."
    ],
    keyPointsBurmese: [
      "သိပြီးသား အချက်အလက် (Given) ကို ရှေ့တွင် ထားသည်။",
      "အသစ်မိတ်ဆက်သော အချက်အလက် (New) ကို အနောက်တွင် ထားသည်။",
      "လိုအပ်ပါက Passive Voice သို့မဟုတ် Cleft Sentences ကို သုံး၍ အချက်အလက်အစဉ်ကို ချိန်ညှိနိုင်သည်။"
    ],
    reminderRefs: ["N6"],
    sections: [
      {
        id: "A",
        title: "The Given-Before-New Principle",
        content: "Mastering information flow transforms choppy writing into seamless academic prose.",
        contentBurmese: "အချက်အလက် စီးဆင်းမှုစနစ်ကို လိုက်နာခြင်းဖြင့် စာစီစာကုံးများကို ချောမွေ့သပ်ရပ်စေသည်။",
        examples: [
          { text: "Solar energy is rapidly expanding. This growth has been driven by falling panel costs.", note: "'This growth' (given) connects to 'expanding', while 'falling costs' (new) is at the end." }
        ]
      }
    ],
    exercises: [
      {
        id: "99.1",
        title: "Exercise 99.1: Information Flow Optimization",
        instruction: "Select the sentence continuation that maintains optimal Given-Before-New cohesion.",
        instructionBurmese: "ချိတ်ဆက်မှု အချောမွေ့ဆုံး ဝါကျဆက်ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The government introduced new subsidies for wind power. [These subsidies were designed to / Private companies benefited from]",
            options: ["These subsidies were designed to accelerate renewable transition.", "Accelerating renewable transition was what they designed."],
            correctAnswer: "These subsidies were designed to accelerate renewable transition.",
            explanation: "'These subsidies' connects directly to the given information at the end of the previous sentence.",
            explanationBurmese: "ရှေ့ဝါကျမှ 'subsidies' ကို ပြန်လည်ချိတ်ဆက်သော 'These subsidies were designed to...' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 100
  {
    id: 100,
    title: "Grammar in discourse: cohesion, linking words, and discourse markers",
    category: "organising-information",
    level: "C1 Advanced",
    summary: "Orchestrate complex discourse markers: Addition (furthermore, moreover), Contrast (however, nevertheless, on the contrary), Cause/Result (consequently, therefore), and Exemplification (notably, specifically).",
    summaryBurmese: "စာပိုဒ်ချိတ်ဆက် စကားလုံးများ (Discourse Markers) - ဖြည့်စွက်ခြင်း (furthermore)၊ ဆန့်ကျင်ခြင်း (nevertheless)၊ ရလဒ် (consequently, therefore) စသည်တို့။",
    keyPoints: [
      "Addition: furthermore, moreover, in addition, besides.",
      "Concession & Contrast: however, nevertheless, nonetheless, on the other hand, in contrast.",
      "Result & Consequence: consequently, therefore, thus, as a result, accordingly.",
      "Punctuation with conjunctive adverbs: use a semicolon or period before, and a COMMA after ('The evidence was insufficient; therefore, the charges were dropped')."
    ],
    keyPointsBurmese: [
      "Furthermore / Moreover = ထို့အပြင် (အချက်အလက်သစ် ထပ်ဖြည့်သည်)။",
      "Nevertheless / Nonetheless = သို့သော်ငြားလည်း (ဆန့်ကျင်ဘက် အခြေအနေ)။",
      "Consequently / Therefore = ထို့ကြောင့် (ရလဒ်ဖော်ပြသည်)။",
      "Punctuation: စာကြောင်းအလယ်တွင် semi-colon (;) နှင့် ၎င်းနောက်တွင် comma (,) ထည့်ရသည် ( ; therefore, )။"
    ],
    reminderRefs: ["N7"],
    sections: [
      {
        id: "A",
        title: "Discourse Marker Punctuation",
        content: "Conjunctive adverbs connecting independent clauses require semicolons and commas.",
        contentBurmese: "Independent clause ၂ ခုကို ဆက်ရာတွင် Semicolon နှင့် Comma ကို တိကျစွာ သုံးပါ။",
        examples: [
          { text: "The initial investment was substantial; however, the long-term returns exceeded all expectations.", note: "Semicolon + however + comma" }
        ]
      }
    ],
    exercises: [
      {
        id: "100.1",
        title: "Exercise 100.1: Discourse Marker Selection",
        instruction: "Select the most appropriate academic discourse marker.",
        instructionBurmese: "အသင့်တော်ဆုံး academic discourse marker ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The trial was conducted under strict laboratory conditions; [consequently / although], the results possess high internal validity.",
            options: ["consequently", "although"],
            correctAnswer: "consequently",
            explanation: "'Consequently' correctly signals the logical result of the strict experimental conditions.",
            explanationBurmese: "တင်းကျပ်သော စမ်းသပ်မှု၏ ယုတ္တိကျသော ရလဒ်ဖြစ်၍ 'consequently' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
