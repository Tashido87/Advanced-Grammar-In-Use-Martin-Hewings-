import { GrammarUnit } from "../../types";

export const ARTICLES_QUANTIFIERS_UNITS: GrammarUnit[] = [
  // Unit 45
  {
    id: 45,
    title: "A/an and the: generic vs specific reference",
    category: "articles-quantifiers",
    level: "B2 Intermediate",
    summary: "Contrast indefinite articles (a/an for first mention, one member of a class) with definite article (the for unique, known, or specific reference).",
    summaryBurmese: "ယေဘုယျအမျိုးအစား (a/an) နှင့် သီးသန့်တိကျသော ရည်ညွှန်းချက် သို့မဟုတ် တစ်ခုတည်းရှိသောအရာ (the) ကွာခြားချက်။",
    keyPoints: [
      "Use 'a/an' for the first mention of a singular countable noun ('I bought a book').",
      "Use 'the' for subsequent mentions when both speaker and listener know which item is meant ('The book was fascinating').",
      "Use 'the' for unique items in the universe/environment: 'the sun', 'the internet', 'the government'.",
      "Generic reference: 'The tiger is an endangered species' (the + singular noun for species/inventions)."
    ],
    keyPointsBurmese: [
      "ပထမဆုံးအကြိမ် ဖော်ပြရာတွင် 'a/an' သုံးပြီး၊ နားထောင်သူသိပြီးသား တိကျသောအရာတွင် 'the' သုံးသည်။",
      "လောကတွင် တစ်ခုတည်းရှိသောအရာများ (the sun, the moon, the environment) တွင် 'the' သုံးသည်။",
      "တိရစ္ဆာန်မျိုးစိတ် သို့မဟုတ် တီထွင်မှုတစ်ခုလုံးကို ကိုယ်စားပြုပြောရာတွင် 'The tiger / The telephone' ဟု သုံးနိုင်သည်။"
    ],
    reminderRefs: ["H1"],
    sections: [
      {
        id: "A",
        title: "Specific vs Generic Articles",
        content: "Definite 'the' pinpoints a shared referent, while indefinite 'a/an' introduces a new singular instance.",
        contentBurmese: "The သည် တိကျသော သတ်မှတ်ချက်ကို ညွှန်ပြပြီး၊ a/an သည် အသစ်မိတ်ဆက်သော အရာကို ညွှန်ပြသည်။",
        examples: [
          { text: "Could you pass the salt, please?", note: "Shared immediate situation -> 'the salt'" }
        ]
      }
    ],
    exercises: [
      {
        id: "45.1",
        title: "Exercise 45.1: Definite vs Indefinite Choice",
        instruction: "Fill in a, an, or the.",
        instructionBurmese: "A, an, သို့မဟုတ် the ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "We rented ______ small cabin in the woods, and ______ cabin had a wonderful fireplace.",
            prefix: "We rented a small cabin, and ",
            suffix: " cabin had a fireplace.",
            correctAnswer: ["the"],
            explanation: "Second mention of the same cabin takes the definite article 'the'.",
            explanationBurmese: "ဒုတိယအကြိမ် ပြန်လည်ဖော်ပြခြင်းဖြစ်၍ 'the' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 46
  {
    id: 46,
    title: "Zero article: institutions, transport, meals, and general plurals",
    category: "articles-quantifiers",
    level: "B2 Intermediate",
    summary: "Omit articles (zero article) before plural countable nouns in general, institutions used for their primary purpose (school, prison, hospital), and meals.",
    summaryBurmese: "Article မလိုသော အခြေအနေများ (Zero Article) - ယေဘုယျအများနာမ်များ၊ မူလရည်ရွယ်ချက်အတွက် အသုံးပြုသော ကျောင်း/ဆေးရုံ/ထောင်၊ အစားအသောက်နှင့် သယ်ယူပို့ဆောင်ရေး။",
    keyPoints: [
      "General plurals and uncountable nouns: 'Dogs are loyal pets', 'Music brings joy' (NO 'the').",
      "Institutions (school, hospital, prison, university, church): 'He is in prison' (= serving a sentence) vs 'She went to THE prison to visit him' (= the physical building).",
      "Meals: 'have breakfast / lunch / dinner' (NO article, UNLESS preceded by an adjective: 'have A delicious lunch').",
      "Means of transport: 'by car', 'by bus', 'by train', 'on foot'."
    ],
    keyPointsBurmese: [
      "ယေဘုယျပြောသော အများနာမ်နှင့် ရေတွက်မရသော နာမ်များတွင် article မထည့်ရပါ (Music, Dogs)။",
      "မူလရည်ရွယ်ချက်အတွက် သွားပါက article မလိုပါ (in hospital = ဆေးကုသခံနေသည်)၊ အဆောက်အအုံကို သွားလျှင် 'the' ထည့်ရသည် (went to the hospital)။",
      "By car, by train, have dinner တို့တွင် article မလိုပါ။"
    ],
    reminderRefs: ["H2"],
    sections: [
      {
        id: "A",
        title: "Institutions: Primary Purpose vs Physical Building",
        content: "When attending an institution for its fundamental function, zero article is required.",
        contentBurmese: "အဖွဲ့အစည်း၏ အဓိကရည်ရွယ်ချက်အတွက် သုံးပါက zero article ဖြစ်သည်။",
        examples: [
          { text: "He was sent to prison for fraud.", note: "Zero article = inmate serving sentence" },
          { text: "A lawyer walked into the prison to consult a client.", note: "'the prison' = the specific building" }
        ]
      }
    ],
    exercises: [
      {
        id: "46.1",
        title: "Exercise 46.1: Zero Article vs The",
        instruction: "Select the sentence with correct zero article usage.",
        instructionBurmese: "Zero article အသုံးမှန်ကန်သော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "After the severe accident, Marcus was rushed to [hospital / the hospital] in an ambulance.",
            options: ["hospital", "a hospital"],
            correctAnswer: "hospital",
            explanation: "Being admitted as a patient for treatment uses zero article ('to hospital').",
            explanationBurmese: "လူနာအဖြစ် ဆေးကုသမှုခံယူရန် သွားခြင်းဖြစ်၍ zero article 'hospital' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 47
  {
    id: 47,
    title: "Some and any: assertive vs non-assertive contexts",
    category: "articles-quantifiers",
    level: "B2 Intermediate",
    summary: "Use 'some' in positive assertions and polite offers/requests; use 'any' in negatives, open questions, and with 'hardly / without / if'.",
    summaryBurmese: "အပြုသဘောနှင့် ကမ်းလှမ်းချက်/တောင်းဆိုချက်များတွင် 'some'၊ အငြင်း၊ သံသယမေးခွန်းနှင့် hardly/without တို့တွင် 'any' သုံးပုံ။",
    keyPoints: [
      "'Some': affirmative statements ('I have some news'), polite offers ('Would you like some tea?'), and requests ('Can I have some water?').",
      "'Any': negative statements ('I don't have any money'), open questions ('Do you have any questions?'), and with words of negative meaning (hardly, scarcely, without, prevent).",
      "'Any' meaning 'it doesn't matter which': 'You can take any bus from this stand; they all go to the station'."
    ],
    keyPointsBurmese: [
      "အရောင်းအဝယ်/ဧည့်ခံကမ်းလှမ်းချက်နှင့် တောင်းဆိုချက်များတွင် 'some' သုံးသည် (Would you like some coffee?)။",
      "အငြင်းနှင့် မေးခွန်းများ၊ hardly/without ပါသော ဝါကျများတွင် 'any' သုံးသည်။",
      "ကြိုက်ရာတစ်ခုခု (it doesn't matter which) ဟု ဆိုလိုပါက အပြုဝါကျတွင် 'any' သုံးနိုင်သည်။"
    ],
    reminderRefs: ["H3"],
    sections: [
      {
        id: "A",
        title: "Any meaning 'It doesn't matter which'",
        content: "In affirmative clauses, 'any' emphasizes unconstrained choice or open availability.",
        contentBurmese: "အပြုဝါကျတွင် 'any' သည် ကန့်သတ်ချက်မရှိ ကြိုက်ရာကို ရွေးချယ်နိုင်သည်ဟု အဓိပ္ပာယ်ရသည်။",
        examples: [
          { text: "Call me at any time of day or night.", note: "'any' = it doesn't matter what time" }
        ]
      }
    ],
    exercises: [
      {
        id: "47.1",
        title: "Exercise 47.1: Some vs Any Usage",
        instruction: "Fill in some or any.",
        instructionBurmese: "Some သို့မဟုတ် any ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "Would you like ______ freshly baked cookies with your coffee?",
            prefix: "Would you like ",
            suffix: " freshly baked cookies?",
            correctAnswer: ["some"],
            explanation: "Polite offers expect a positive answer, which requires 'some'.",
            explanationBurmese: "ယဉ်ကျေးသော ကမ်းလှမ်းချက်ဖြစ်၍ 'some' ကို သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 48
  {
    id: 48,
    title: "No, none, none of, and not any: negatives in noun phrases",
    category: "articles-quantifiers",
    level: "B2 Intermediate",
    summary: "Structure negative noun phrases using 'no + noun', 'none of the + noun/pronoun', and standalone pronoun 'none'.",
    summaryBurmese: "အငြင်းသဘောဆောင်သော နာမ်တွဲများ - 'no + noun'၊ 'none of + the + noun' နှင့် နာမ်စားအဖြစ်သုံးသော 'none'။",
    keyPoints: [
      "'No + noun': 'There are no vacancies' (stronger and more emphatic than 'There aren't any vacancies').",
      "'None' as a standalone pronoun: 'How many tickets are left? None'.",
      "'None of + plural noun': can take a SINGULAR verb (formal) or PLURAL verb (informal): 'None of the witnesses WAS / WERE willing to testify'.",
      "Avoid double negatives: do NOT say 'I haven't got no money'."
    ],
    keyPointsBurmese: [
      "'No + noun' သည် 'not any' ထက် ပိုမိုပြတ်သား အလေးနက်သော အငြင်းဖြစ်သည်။",
      "None သည် သီးခြားရပ်တည်နိုင်သော နာမ်စား (Pronoun) ဖြစ်သည်။",
      "None of the... နောက်တွင် Formal တွင် Singular ကြိယာ၊ Informal တွင် Plural ကြိယာ သုံးနိုင်သည်။"
    ],
    reminderRefs: ["H4"],
    sections: [
      {
        id: "A",
        title: "Emphatic Negative 'No' vs 'None of'",
        content: "Use 'no' directly before nouns without determiners. Use 'none of' before determiners (the, my, these).",
        contentBurmese: "Determiner မပါသော နာမ်ရှေ့တွင် 'no' သုံးပြီး the/my/these ရှေ့တွင် 'none of' သုံးသည်။",
        examples: [
          { text: "No students failed the exam.", note: "no + bare plural noun" },
          { text: "None of my colleagues knew about the secret.", note: "none of + determiner + noun" }
        ]
      }
    ],
    exercises: [
      {
        id: "48.1",
        title: "Exercise 48.1: No vs None Of",
        instruction: "Select no or none of.",
        instructionBurmese: "No သို့မဟုတ် none of ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "[No / None of] the applicants met all the stringent technical requirements.",
            options: ["None of", "No"],
            correctAnswer: "None of",
            explanation: "Before a determiner ('the applicants'), 'None of' is required.",
            explanationBurmese: "Determiner 'the' ပါရှိသောကြောင့် 'None of' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 49
  {
    id: 49,
    title: "Much, many, a lot of, lots of: quantity and formal vs informal register",
    category: "articles-quantifiers",
    level: "B2 Intermediate",
    summary: "Deploy quantifiers appropriate to register: 'much/many' in questions, negatives, and formal academic texts vs 'a lot of/lots of' in informal affirmative speech.",
    summaryBurmese: "တရားဝင်အရေးအသားတွင် 'much / many' နှင့် နေ့စဉ်စကားပြော အပြုဝါကျတွင် 'a lot of / lots of' သုံးစွဲပုံ။",
    keyPoints: [
      "In informal affirmative sentences, avoid 'much' (say 'a lot of / plenty of time', NOT 'I have much time').",
      "In formal academic/journalistic writing, 'much' and 'many' are common in affirmative statements: 'Much research has been conducted'.",
      "'A great deal of / A large amount of + uncountable noun'; 'A large number of + plural countable noun'."
    ],
    keyPointsBurmese: [
      "နေ့စဉ်စကားပြော အပြုဝါကျတွင် much မသုံးဘဲ 'a lot of' သုံးသည် (I have a lot of work)။",
      "ပညာရပ်ဆိုင်ရာ စာတမ်းများတွင်မူ 'Much research has been done' ဟု အသုံးပြုသည်။",
      "ရေတွက်မရသော နာမ်အတွက် 'a large amount of'၊ ရေတွက်ရ နာမ်အတွက် 'a large number of' သုံးသည်။"
    ],
    reminderRefs: ["H5"],
    sections: [
      {
        id: "A",
        title: "Register Calibration in Quantifiers",
        content: "Academic discourse prefers 'much', 'many', and 'a considerable amount of' over colloquial 'lots of'.",
        contentBurmese: "အဆင့်မြင့် စာစီစာကုံးများတွင် 'a lot of' အစား 'much/many' သို့မဟုတ် 'a large amount of' ကို သုံးသည်။",
        examples: [
          { text: "A great deal of effort went into the preservation project.", note: "Formal uncountable quantifier" }
        ]
      }
    ],
    exercises: [
      {
        id: "49.1",
        title: "Exercise 49.1: Formal vs Informal Quantifiers",
        instruction: "Select the most appropriate formal academic quantifier.",
        instructionBurmese: "အသင့်တော်ဆုံး formal academic quantifier ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "[A large number of / Lots of] studies have confirmed the correlation between sleep and cognitive function.",
            options: ["A large number of", "Lots of"],
            correctAnswer: "A large number of",
            explanation: "Academic writing requires the formal quantifier 'A large number of'.",
            explanationBurmese: "Formal academic အရေးအသားအတွက် 'A large number of' သည် အသင့်တော်ဆုံး ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 50
  {
    id: 50,
    title: "All, whole, every, each: totality and distribution",
    category: "articles-quantifiers",
    level: "C1 Advanced",
    summary: "Contrast whole group totality (all, whole) with individual distribution (each, every).",
    summaryBurmese: "အားလုံးစုပေါင်းခြင်း (all, whole) နှင့် တစ်ဦးချင်း/တစ်ခုချင်းစီ ခွဲခြားဖော်ပြခြင်း (each, every)။",
    keyPoints: [
      "'All the + plural noun' vs 'The whole + singular noun': 'all the town' vs 'the whole town'.",
      "'Each': focuses on individual items in a small, distinct group of two or more ('Each student received a certificate').",
      "'Every': focuses on all members of a larger series ('Every seat in the theater was occupied').",
      "Pronoun agreement: 'Each person has their own opinion' (singular verb, plural pronoun)."
    ],
    keyPointsBurmese: [
      "'All the + plural' နှင့် 'The whole + singular' ကွာခြားချက် (the whole day = တစ်နေ့လုံး)။",
      "'Each' သည် ၂ ခု သို့မဟုတ် အုပ်စုငယ်အတွင်း တစ်ခုချင်းစီကို အလေးပေးသည်။",
      "'Every' သည် အများကြီးထဲမှ အားလုံးကို တစ်ခုချင်းစီ သဘောဖြင့် အလေးပေးသည်။"
    ],
    reminderRefs: ["H6"],
    sections: [
      {
        id: "A",
        title: "All vs Whole Structure",
        content: "Note the article position: 'all THE world' vs 'THE whole world'.",
        contentBurmese: "Article နေရာကို သတိပြုပါ - 'all the...' ဖြစ်ပြီး 'the whole...' ဖြစ်သည်။",
        examples: [
          { text: "She spent the whole morning cleaning her studio.", note: "'the whole morning' = from beginning to end of morning" }
        ]
      }
    ],
    exercises: [
      {
        id: "50.1",
        title: "Exercise 50.1: All vs Whole",
        instruction: "Select all or whole.",
        instructionBurmese: "All သို့မဟုတ် whole ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "He ate [the whole / all the] pizza by himself in less than ten minutes.",
            options: ["the whole", "whole"],
            correctAnswer: "the whole",
            explanation: "Singular complete item takes 'the whole pizza'.",
            explanationBurmese: "တစ်ခုလုံးအပြည့်ဖြစ်၍ 'the whole pizza' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 51
  {
    id: 51,
    title: "Few, little, a few, a little: positive vs negative bias",
    category: "articles-quantifiers",
    level: "B2 Intermediate",
    summary: "Master positive nuance (a few / a little = some, enough) vs negative restrictive nuance (few / little = hardly any, not enough).",
    summaryBurmese: "အပြုသဘော အနည်းငယ်ရှိသည် (a few / a little) နှင့် အငြင်းသဘော နီးပါးမရှိသလောက် နည်းပါးသည် (few / little)။",
    keyPoints: [
      "'A few' (plural countable) / 'A little' (uncountable): positive idea (= some, a small quantity exists).",
      "'Few' (plural countable) / 'Little' (uncountable): negative idea (= hardly any, insufficient).",
      "'Only a few / Only a little' emphasizes that the quantity is small.",
      "'Quite a few' means a substantial, large number!"
    ],
    keyPointsBurmese: [
      "'A few' / 'A little' (a ပါသည်) = အနည်းငယ်ရှိသေးသည် (Positive)။",
      "'Few' / 'Little' (a မပါ) = မရှိသလောက် ရှားပါးသည် (Negative)။",
      "'Quite a few' သည် မနည်းလှသော ပမာဏများစွာကို ဆိုလိုသည်။"
    ],
    reminderRefs: ["H7"],
    sections: [
      {
        id: "A",
        title: "A few / A little vs Few / Little",
        content: "Adding the indefinite article changes the semantic polarity from negative scarcity to positive sufficiency.",
        contentBurmese: "'a' ပါဝင်မှုသည် မရှိသလောက်နည်းခြင်းမှ အနည်းငယ်ရှိသေးသော အပြုသဘောသို့ ပြောင်းလဲပေးသည်။",
        examples: [
          { text: "He has few friends. (= He is lonely, negative)", note: "few = almost none" },
          { text: "He has a few friends. (= He has some good companions, positive)", note: "a few = some" }
        ]
      }
    ],
    exercises: [
      {
        id: "51.1",
        title: "Exercise 51.1: Few vs A Few",
        instruction: "Select the phrase that matches the positive/negative context.",
        instructionBurmese: "ဝါကျအခြေအနေအလိုက် မှန်ကန်သော quantifier ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "We still have [a little / little] time left before the train leaves, so let's grab a cup of coffee.",
            options: ["a little", "little"],
            correctAnswer: "a little",
            explanation: "Having enough time to grab coffee is positive, requiring 'a little time'.",
            explanationBurmese: "ကော်ဖီသောက်ရန် အချိန်အနည်းငယ် ကျန်သေးသည် (အပြုသဘော) ဖြစ်၍ 'a little' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 52
  {
    id: 52,
    title: "Either, neither, both: pairs of people and things",
    category: "articles-quantifiers",
    level: "B2 Intermediate",
    summary: "Handle dual reference: 'both' (+ plural verb), 'either' (one or the other + singular verb), and 'neither' (not one and not the other + singular verb).",
    summaryBurmese: "အရာဝတ္ထု/လူ ၂ ခုတွဲများတွင် နှစ်ခုစလုံး (both)၊ တစ်ခုမဟုတ်တစ်ခု (either) နှင့် နှစ်ခုစလုံးမဟုတ် (neither) သုံးစွဲပုံ။",
    keyPoints: [
      "'Both (+ of the) + plural noun' takes a PLURAL verb: 'Both brothers are engineers'.",
      "'Either (+ of the) + singular noun' takes a SINGULAR verb: 'Either candidate is qualified'.",
      "'Neither (+ of the) + singular noun' takes a SINGULAR verb: 'Neither explanation is satisfactory'.",
      "'Both... and...', 'Either... or...', 'Neither... nor...'."
    ],
    keyPointsBurmese: [
      "Both နောက်တွင် Plural ကြိယာ ယူသည်။",
      "Either နှင့် Neither နောက်တွင် Singular ကြိယာ ယူသည်။",
      "Both... and, Either... or, Neither... nor ပုံစံများ။"
    ],
    reminderRefs: ["H8"],
    sections: [
      {
        id: "A",
        title: "Dual Determiners & Verb Agreement",
        content: "Both always governs plural verbs; either and neither govern singular verbs in formal English.",
        contentBurmese: "Both သည် အမြဲ plural ဖြစ်ပြီး either/neither သည် formal တွင် singular ဖြစ်သည်။",
        examples: [
          { text: "Neither of the restaurants is open on Mondays.", note: "Neither of + singular verb 'is'" }
        ]
      }
    ],
    exercises: [
      {
        id: "52.1",
        title: "Exercise 52.1: Dual Quantifier Selection",
        instruction: "Select both, either, or neither.",
        instructionBurmese: "Both, either, သို့မဟုတ် neither ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "I tried calling on Monday and Tuesday, but on [neither / either] day was anyone in the office.",
            options: ["neither", "either"],
            correctAnswer: "neither",
            explanation: "Negative inversion ('was anyone') coupled with dual days requires 'neither day'.",
            explanationBurmese: "ရက် ၂ ရက်လုံး မရှိကြောင်း အငြင်းဖော်ပြခြင်းဖြစ်၍ 'neither day' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
