import { GrammarUnit } from "../../types";

export const RELATIVE_CLAUSES_UNITS: GrammarUnit[] = [
  // Unit 53
  {
    id: 53,
    title: "Defining and non-defining relative clauses: commas and pronoun omission",
    category: "relative-clauses",
    level: "B2 Intermediate",
    summary: "Contrast essential defining relative clauses (no commas, 'that' allowed, object pronouns can be omitted) with non-defining extra-info clauses (commas obligatory, no 'that', no omission).",
    summaryBurmese: "မရှိမဖြစ်အဓိပ္ပာယ်သတ်မှတ်ပေးသော Defining Relative Clauses နှင့် ဖြည့်စွက်အချက်အလက်ပေးသော Non-defining Relative Clauses (ကော်မာပါရမည်၊ that မသုံးရ)။",
    keyPoints: [
      "Defining clauses give essential identifying information: NO commas; 'that' is permitted; object relative pronouns can be omitted ('The man (whom) I met').",
      "Non-defining clauses give extra, non-essential information: COMMAS are obligatory; 'that' is NOT permitted (use who/which); relative pronouns CANNOT be omitted.",
      "Punctuation changes the meaning: 'The athletes who failed were disqualified' (only some athletes) vs 'The athletes, who failed, were disqualified' (all athletes failed)."
    ],
    keyPointsBurmese: [
      "Defining relative clause တွင် ကော်မာမပါပါ၊ that သုံးနိုင်ပြီး Object pronoun ကို ဖြုတ်ပစ်နိုင်သည်။",
      "Non-defining clause တွင် ကော်မာ မဖြစ်မနေထည့်ရမည်၊ that လုံးဝမသုံးရ (who/which သာသုံးရမည်)၊ pronoun ကို ဖြုတ်၍မရပါ။",
      "ကော်မာပါခြင်း/မပါခြင်းသည် ဝါကျ၏ အဓိပ္ပာယ်ကို လုံးဝပြောင်းလဲစေသည်။"
    ],
    reminderRefs: ["I1"],
    sections: [
      {
        id: "A",
        title: "Defining vs Non-defining Rules",
        content: "Never use 'that' in non-defining clauses surrounded by commas.",
        contentBurmese: "ကော်မာပါသော Non-defining clause များတွင် 'that' ကို လုံးဝ မသုံးရပါ။",
        examples: [
          { text: "My brother, who lives in Sydney, is an architect.", note: "Non-defining: commas + who (NOT that)" },
          { text: "The book that I borrowed was fascinating.", note: "Defining: no commas + that/which" }
        ]
      }
    ],
    exercises: [
      {
        id: "53.1",
        title: "Exercise 53.1: Defining vs Non-defining Selection",
        instruction: "Select the grammatically correct relative clause.",
        instructionBurmese: "သဒ္ဒါမှန်ကန်သော relative clause ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Mount Everest, [which is / that is] the highest mountain in the world, attracts hundreds of climbers annually.",
            options: ["which is", "that is"],
            correctAnswer: "which is",
            explanation: "Non-defining clauses with commas require 'which', never 'that'.",
            explanationBurmese: "ကော်မာပါသော Non-defining clause ဖြစ်သောကြောင့် 'which' သာ သုံးရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 54
  {
    id: 54,
    title: "Relative pronouns: who, whom, whose, which, that",
    category: "relative-clauses",
    level: "B2 Intermediate",
    summary: "Select precise relative pronouns for persons (who/whom), possession (whose), and things (which/that).",
    summaryBurmese: "လူပုဂ္ဂိုလ် (who/whom)၊ ပိုင်ဆိုင်မှု (whose) နှင့် သက်မဲ့/တိရစ္ဆာန် (which/that) ဆိုင်ရာ Relative Pronouns များ မှန်ကန်စွာ ရွေးချယ်ပုံ။",
    keyPoints: [
      "'Whose' replaces possessive determiners (his, her, its, their) for both people and things ('a writer whose novels won prizes').",
      "'Whom' is used in formal writing when the person is the object of the relative clause or follows a preposition ('the professor to whom I spoke').",
      "After superlatives and words like all, every, only, none: 'that' is preferred over which ('This is the best film that has ever been made')."
    ],
    keyPointsBurmese: [
      "'Whose' သည် ပိုင်ဆိုင်မှုကို ညွှန်းဆိုသည် (whose car, whose parents)။",
      "'Whom' သည် Preposition နောက် သို့မဟုတ် Object နေရာတွင် Formal အဖြစ် သုံးသည်။",
      "Superlative (the best) သို့မဟုတ် all, only, every နောက်တွင် 'that' ကို ဦးစားပေးသည်။"
    ],
    reminderRefs: ["I2"],
    sections: [
      {
        id: "A",
        title: "Whose for Possession",
        content: "Whose can refer to people, organizations, or objects to indicate possession or association.",
        contentBurmese: "Whose ကို လူ၊ အဖွဲ့အစည်းနှင့် အရာဝတ္ထုများ၏ ပိုင်ဆိုင်မှုတွင် သုံးသည်။",
        examples: [
          { text: "We visited an ancient cathedral whose spire was undergoing restoration.", note: "'whose spire' = the cathedral's spire" }
        ]
      }
    ],
    exercises: [
      {
        id: "54.1",
        title: "Exercise 54.1: Relative Pronoun Choice",
        instruction: "Fill in who, whom, whose, or which.",
        instructionBurmese: "Who, whom, whose, သို့မဟုတ် which ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "She is the scientist ______ research led to the breakthrough discovery.",
            prefix: "She is the scientist ",
            suffix: " research led to the breakthrough.",
            correctAnswer: ["whose"],
            explanation: "'Whose research' expresses possession (her research).",
            explanationBurmese: "သူမ၏ သုတေသန (ပိုင်ဆိုင်မှု) ဖြစ်၍ 'whose' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 55
  {
    id: 55,
    title: "Other relative words: where, when, whereby, why, what",
    category: "relative-clauses",
    level: "C1 Advanced",
    summary: "Use relative adverbs (where, when, why) and nominal relative 'what' (= the thing that).",
    summaryBurmese: "Relative Adverbs (where, when, why)၊ Formal စကားလုံး 'whereby' (by which) နှင့် 'the thing which' အဓိပ္ပာယ်ရသော Nominal 'what'။",
    keyPoints: [
      "'Where' = in/at which (places); 'When' = at/on which (times); 'Why' = for which (reasons).",
      "'Whereby' is formal English meaning 'by which / according to which' ('a system whereby users can vote').",
      "'What' means 'the thing(s) that / which' (nominal relative clause): 'What surprised me was her calm reaction' (NOT 'The thing what surprised me')."
    ],
    keyPointsBurmese: [
      "Where (နေရာ)၊ When (အချိန်)၊ Why (အကြောင်းပြချက်)။",
      "Whereby သည် formal စကားလုံးဖြစ်ပြီး 'by which / နည်းလမ်းဖြင့်' ဟု အဓိပ္ပာယ်ရသည်။",
      "'What' သည် 'the thing which' နှင့် ညီမျှသော နာမ်ဝါကျ (Nominal relative) ဖြစ်သည်။"
    ],
    reminderRefs: ["I3"],
    sections: [
      {
        id: "A",
        title: "Nominal Relative 'What'",
        content: "Never use 'what' after a noun antecedent (say 'the book that I bought', NOT 'the book what I bought'). Use 'what' when there is no preceding head noun.",
        contentBurmese: "ရှေ့တွင် နာမ်ပါပါက 'what' မသုံးရပါ။ ရှေ့တွင် နာမ်မပါဘဲ 'the thing that' အဓိပ္ပာယ်တွင်သာ 'what' သုံးရသည်။",
        examples: [
          { text: "What you need is a good night's rest.", note: "What = The thing that you need" }
        ]
      }
    ],
    exercises: [
      {
        id: "55.1",
        title: "Exercise 55.1: Whereby & What Selection",
        instruction: "Select the correct relative adverb or pronoun.",
        instructionBurmese: "မှန်ကန်သော စကားလုံးကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "They established a new protocol [whereby / what] all financial transactions are double-verified.",
            options: ["whereby", "what"],
            correctAnswer: "whereby",
            explanation: "'Whereby' means 'by which' or 'through which system'.",
            explanationBurmese: "စနစ်အရ လုပ်ဆောင်သည့် နည်းလမ်းဖြစ်၍ 'whereby' (by which) ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 56
  {
    id: 56,
    title: "Prepositions in relative clauses: fronted vs stranded prepositions",
    category: "relative-clauses",
    level: "C1 Advanced",
    summary: "Contrast formal fronted prepositions (preposition + whom/which) with natural informal stranded prepositions at the clause end.",
    summaryBurmese: "Formal အရေးအသားတွင် Preposition ကို ရှေ့သို့ထုတ်ခြင်း (to whom, in which) နှင့် နေ့စဉ်စကားပြောတွင် အနောက်၌ ထားရှိခြင်း (who... to)။",
    keyPoints: [
      "Formal (fronted): Preposition comes before whom/which ('the person to whom I spoke', 'the topic on which we agreed').",
      "Informal (stranded): Preposition stays at the end of the clause ('the person I spoke to', 'the topic we agreed on').",
      "When prepositions are fronted, you CANNOT use 'that' or 'who' (say 'in which', NOT 'in that'; 'with whom', NOT 'with who')."
    ],
    keyPointsBurmese: [
      "Formal အရေးအသားတွင် Preposition ကို ရှေ့ထုတ်သည် (to whom, with which)။",
      "စကားပြောတွင် Preposition ကို ဝါကျအဆုံးတွင် ထားသည် (the man I spoke to)။",
      "Preposition ရှေ့ထုတ်ပါက 'that' သို့မဟုတ် 'who' မသုံးရဘဲ 'whom / which' သာ သုံးရသည်။"
    ],
    reminderRefs: ["I4"],
    sections: [
      {
        id: "A",
        title: "Fronted Preposition Structures",
        content: "In academic prose, placing prepositions before 'which' or 'whom' ensures syntactic clarity.",
        contentBurmese: "Academic အရေးအသားတွင် 'in which / to whom' ပုံစံဖြင့် Preposition ကို ရှေ့ထုတ်ရေးသားသည်။",
        examples: [
          { text: "This is the hypothesis upon which the entire experiment was structured.", note: "Formal fronted preposition 'upon which'" }
        ]
      }
    ],
    exercises: [
      {
        id: "56.1",
        title: "Exercise 56.1: Formal Relative Clauses",
        instruction: "Rewrite the sentence in formal academic style with a fronted preposition.",
        instructionBurmese: "Preposition ကို ရှေ့ထုတ်၍ formal ပုံစံဖြင့် ပြန်လည်ရေးပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "The committee that she presented her research to was deeply impressed.",
            prefix: "The committee to ",
            suffix: " she presented her research was deeply impressed.",
            correctAnswer: ["whom", "which"],
            explanation: "Formal fronted preposition: 'The committee to whom (or which) she presented...'",
            explanationBurmese: "Formal ပုံစံတွင် 'to whom' သို့မဟုတ် 'to which' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 57
  {
    id: 57,
    title: "Participle clauses in place of relative clauses: active (-ing) and passive (-ed)",
    category: "relative-clauses",
    level: "C1 Advanced",
    summary: "Reduce relative clauses to concise participle clauses: present participle (-ing) for active meaning, past participle (-ed) for passive meaning.",
    summaryBurmese: "Relative clause များကို Participle Clauses အဖြစ် အတိုချုံးခြင်း - အပြုသဘောတွင် Present Participle (-ing) နှင့် အခံသဘောတွင် Past Participle (-ed/V3)။",
    keyPoints: [
      "Active reduction: 'The woman who is talking to David' -> 'The woman TALKING to David'.",
      "Passive reduction: 'The cars which were damaged in the storm' -> 'The cars DAMAGED in the storm'.",
      "State verbs can also be reduced: 'Anyone who wants more information' -> 'Anyone WANTING more information'.",
      "Perfect participle: 'Having completed the survey, the team analyzed the data'."
    ],
    keyPointsBurmese: [
      "Active (ပြုလုပ်သူ) ဖြစ်ပါက V-ing သို့ အတိုချုံးသည် (The boy standing there)။",
      "Passive (ခံရသူ) ဖြစ်ပါက V3 သို့ အတိုချုံးသည် (The goods produced in Japan)။"
    ],
    reminderRefs: ["I5"],
    sections: [
      {
        id: "A",
        title: "Participle Reductions",
        content: "Participle clauses eliminate unnecessary relative pronouns and auxiliary verbs for concise, sophisticated writing.",
        contentBurmese: "မလိုအပ်သော pronoun နှင့် auxiliary များကို ဖြုတ်၍ စာအရေးအသား ပိုမိုကျစ်လျစ်စေရန် သုံးသည်။",
        examples: [
          { text: "All passengers holding first-class tickets may board now.", note: "holding = who hold (active participle)" },
          { text: "The methods employed in this study are described below.", note: "employed = which were employed (passive participle)" }
        ]
      }
    ],
    exercises: [
      {
        id: "57.1",
        title: "Exercise 57.1: Participle Clause Reduction",
        instruction: "Select the correct participle reduction.",
        instructionBurmese: "မှန်ကန်သော participle ပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Any parcels [containing / contained] hazardous materials will be confiscated.",
            options: ["containing", "contained"],
            correctAnswer: "containing",
            explanation: "Active meaning ('parcels which contain') reduces to present participle 'containing'.",
            explanationBurmese: "Active အဓိပ္ပာယ် ('ပါဝင်သော') ဖြစ်၍ Present Participle 'containing' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 58
  {
    id: 58,
    title: "To-infinitive clauses in place of relative clauses: the first, the only, the next",
    category: "relative-clauses",
    level: "C1 Advanced",
    summary: "Use to-infinitive clauses after ordinals (the first, the second), superlatives (the best), and 'the only / the next / the last'.",
    summaryBurmese: "The first, the last, the only, the best စသည့် စကားလုံးများနောက်တွင် Relative clause အစား to-infinitive ဖြင့် အဆင့်မြင့် ရေးသားခြင်း။",
    keyPoints: [
      "'The first person to climb Everest' (= the first person who climbed).",
      "'She was the only student to pass the rigorous exam' (= the only student who passed).",
      "Passive infinitive: 'The next problem to be addressed' (= the next problem that must be addressed)."
    ],
    keyPointsBurmese: [
      "The first, the only, the last နောက်တွင် 'to + V1' ဖြင့် relative clause အစား ရေးနိုင်သည်။",
      "Passive တွင် 'to be + V3' သုံးသည် (the first person to be awarded)။"
    ],
    reminderRefs: ["I6"],
    sections: [
      {
        id: "A",
        title: "To-infinitive Reductions with Ordinals",
        content: "To-infinitives replace relative clauses neatly when modifying nouns qualified by ordinals or exclusive adjectives.",
        contentBurmese: "Ordinal နံပါတ်များနောက်တွင် to-infinitive ဖြင့် အဆင့်မြင့်စွာ အစားထိုးနိုင်သည်။",
        examples: [
          { text: "Neil Armstrong was the first human to walk on the moon.", note: "the first human to walk = who walked" }
        ]
      }
    ],
    exercises: [
      {
        id: "58.1",
        title: "Exercise 58.1: To-infinitive Reduction",
        instruction: "Rewrite using a to-infinitive clause.",
        instructionBurmese: "To-infinitive clause ဖြင့် ပြန်လည်ရေးပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "He was the last guest who arrived at the banquet.",
            prefix: "He was the last guest ",
            suffix: " at the banquet.",
            correctAnswer: ["to arrive"],
            explanation: "'The last guest who arrived' -> 'The last guest to arrive'.",
            explanationBurmese: "'to arrive' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 59
  {
    id: 59,
    title: "Non-finite relative clauses and relative clauses with 'of which / of whom'",
    category: "relative-clauses",
    level: "C1 Advanced",
    summary: "Form advanced quantitative relative clauses: 'all of whom', 'most of which', 'neither of which', 'the result of which'.",
    summaryBurmese: "အရေအတွက်ပြ Relative Clauses များ - 'many of whom'၊ 'both of which'၊ 'the majority of whom' စသော အဆင့်မြင့် ဖွဲ့စည်းပုံများ။",
    keyPoints: [
      "Formula: 'Quantifier / Noun + of which (things) / of whom (people)'.",
      "Examples: 'two of whom', 'none of which', 'the cause of which', 'half of which'.",
      "Always set off with COMMAS (non-defining): 'She wrote ten novels, four of which won national awards'."
    ],
    keyPointsBurmese: [
      "လူအတွက် 'many of whom'၊ အရာဝတ္ထုအတွက် 'many of which' သုံးသည်။",
      "အမြဲတမ်း ကော်မာ (Commas) ဖြင့် ခြားရမည် (non-defining ဖြစ်သောကြောင့်)။"
    ],
    reminderRefs: ["I7"],
    sections: [
      {
        id: "A",
        title: "Quantifier + of which / of whom",
        content: "This construction allows dense, sophisticated synthesis of information in academic writing.",
        contentBurmese: "စာစီစာကုံးနှင့် အဆင့်မြင့် သုတေသနများတွင် အချက်အလက်များကို ကျစ်လျစ်စွာ ပေါင်းစပ်နိုင်သည်။",
        examples: [
          { text: "The university interviewed fifty candidates, six of whom were offered professorships.", note: "'six of whom' refers to candidates" }
        ]
      }
    ],
    exercises: [
      {
        id: "59.1",
        title: "Exercise 59.1: Of Whom / Of Which Quantifiers",
        instruction: "Select of whom or of which.",
        instructionBurmese: "Of whom သို့မဟုတ် of which ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The museum acquired twenty ancient artifacts, most [of which / of whom] date back to the Bronze Age.",
            options: ["of which", "of whom"],
            correctAnswer: "of which",
            explanation: "Artifacts are inanimate objects, so 'of which' is required.",
            explanationBurmese: "ရှေးဟောင်းပစ္စည်းများ (သက်မဲ့) ဖြစ်၍ 'of which' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
