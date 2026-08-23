import { GrammarUnit } from "../../types";

export const NOUNS_UNITS: GrammarUnit[] = [
  // Unit 41
  {
    id: 41,
    title: "Agreement between subject and verb 1: complex subjects and intervening phrases",
    category: "nouns",
    level: "B2 Intermediate",
    summary: "Ensure correct singular or plural verb agreement across phrases separating the head noun from the verb.",
    summaryBurmese: "ကတ္တားနှင့် ကြိယာ ကိန်းညှိနှိုင်းမှု (Subject-Verb Agreement) - ကြားခံစကားလုံးများ ပါရှိသည့်တိုင် ပင်မကတ္တားနှင့် ကြိယာကို မှန်ကန်စွာ တွဲဖက်ခြင်း။",
    keyPoints: [
      "The verb agrees with the HEAD noun, not the intervening prepositional phrase ('The quality OF the ingredients IS excellent').",
      "Phrases like 'as well as', 'in addition to', 'along with' do NOT make a singular subject plural: 'The captain, along with his crew, WAS rescued'.",
      "Subjects with 'either... or' / 'neither... nor': verb agrees with the CLOSER subject ('Neither the teacher nor the STUDENTS WERE in the classroom')."
    ],
    keyPointsBurmese: [
      "ကြိယာသည် ကြားခံ prepositional phrase နှင့် မဆိုင်ဘဲ ပင်မနာမ် (Head noun) နှင့်သာ ညှိရသည် (The cost of the repairs IS high)။",
      "As well as, along with တို့သည် ကတ္တားကို plural မဖြစ်စေပါ (The manager, as well as the staff, WAS present)။",
      "Either... or / Neither... nor တွင် ကြိယာနှင့် ပိုနီးသော ကတ္တားအတိုင်း ယူရသည်။"
    ],
    reminderRefs: ["G1"],
    sections: [
      {
        id: "A",
        title: "Intervening Prepositional Phrases",
        content: "Always locate the core head noun before choosing singular or plural verbs.",
        contentBurmese: "ကြိယာမရွေးချယ်မီ ပင်မကတ္တားနာမ် (Head noun) ကို အရင်ဆုံး ရှာဖွေပါ။",
        examples: [
          { text: "A box of expensive Cuban cigars was left on the table.", note: "Head noun = 'A box' (singular) -> 'was left'" }
        ]
      }
    ],
    exercises: [
      {
        id: "41.1",
        title: "Exercise 41.1: Complex Subject Agreement",
        instruction: "Select the correct verb form.",
        instructionBurmese: "မှန်ကန်သော ကြိယာပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The list of successful candidates [was / were] posted on the noticeboard this morning.",
            options: ["was", "were"],
            correctAnswer: "was",
            explanation: "The head noun is 'The list' (singular), so the verb must be 'was'.",
            explanationBurmese: "ပင်မကတ္တားမှာ singular ဖြစ်သော 'The list' ဖြစ်၍ 'was' သာ ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 42
  {
    id: 42,
    title: "Agreement between subject and verb 2: collective nouns and institution names",
    category: "nouns",
    level: "C1 Advanced",
    summary: "Choose singular vs plural verbs with collective nouns (committee, jury, team, government) depending on whole unit vs individual members.",
    summaryBurmese: "အစုပြနာမ်များ (Collective nouns: team, committee, government) တွင် အစုအဖွဲ့တစ်ခုလုံးကို ရည်ညွှန်းလျှင် Singular နှင့် အဖွဲ့ဝင်တစ်ဦးချင်းစီကို ရည်ညွှန်းလျှင် Plural သုံးပုံ။",
    keyPoints: [
      "British English uses PLURAL verbs when thinking of individual members acting separately: 'The team ARE putting on their jerseys'.",
      "British English uses SINGULAR verbs when thinking of the group as a single collective unit: 'The team IS the best in the league'.",
      "American English consistently prefers SINGULAR verbs for all collective nouns.",
      "Nouns ending in -s with singular meaning: physics, economics, mathematics, news (all take singular verbs: 'Economics IS fascinating')."
    ],
    keyPointsBurmese: [
      "အဖွဲ့တစ်ခုလုံးကို တစ်ခုတည်းအဖြစ် မြင်လျှင် Singular ကြိယာ သုံးသည်။",
      "အဖွဲ့ဝင်တစ်ဦးချင်းစီ၏ လှုပ်ရှားမှုကို မြင်လျှင် Plural ကြိယာ သုံးသည်။",
      "Physics, mathematics, news တို့သည် 's' ဖြင့် ဆုံးသော်လည်း Singular ကြိယာသာ သုံးရသည်။"
    ],
    reminderRefs: ["G2"],
    sections: [
      {
        id: "A",
        title: "Collective Noun Perspectives",
        content: "Determine whether the collection acts as a unified legal entity or as distinct individuals.",
        contentBurmese: "အစုအဖွဲ့လိုက် တစ်သားတည်း လုပ်ဆောင်သလား၊ တစ်ဦးချင်း ကွဲပြားသလားအပေါ် မူတည်၍ ညှိရသည်။",
        examples: [
          { text: "The committee has published its annual report.", note: "Singular: single institution publication" },
          { text: "The committee have differing opinions on the budget.", note: "Plural: individual members disagreeing" }
        ]
      }
    ],
    exercises: [
      {
        id: "42.1",
        title: "Exercise 42.1: Collective Nouns & Disciplinary Subjects",
        instruction: "Select the appropriate verb.",
        instructionBurmese: "မှန်ကန်သော ကြိယာကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "No news [is / are] good news, as the old saying goes.",
            options: ["is", "are"],
            correctAnswer: "is",
            explanation: "'News' is an uncountable noun and always takes a singular verb ('is').",
            explanationBurmese: "'News' သည် အမြဲတမ်း singular ကြိယာ 'is' သာ ယူသည်။"
          }
        ]
      }
    ]
  },

  // Unit 43
  {
    id: 43,
    title: "Agreement between subject and verb 3: quantities, percentages, and fractions",
    category: "nouns",
    level: "C1 Advanced",
    summary: "Handle verb agreement with fractions, percentages (percent of...), 'a number of' vs 'the number of', and measurements of time/money.",
    summaryBurmese: "ပမာဏများ၊ ရာခိုင်နှုန်းများ (percent of...)၊ 'a number of' (plural) နှင့် 'the number of' (singular)၊ ငွေကြေး/အချိန်ပြ နာမ်များနှင့် ကိန်းညှိနှိုင်းမှု။",
    keyPoints: [
      "'A number of + plural noun' takes a PLURAL verb: 'A number of issues HAVE arisen'.",
      "'The number of + plural noun' takes a SINGULAR verb: 'The number of unemployed workers HAS decreased'.",
      "Amounts of money, periods of time, distances take SINGULAR verbs: 'Fifty thousand dollars IS a lot of money', 'Three years WAS a long time to wait'.",
      "Fractions/Percentages agree with the noun that follows: 'Two-thirds OF THE CAKE WAS eaten' vs 'Two-thirds OF THE STUDENTS WERE absent'."
    ],
    keyPointsBurmese: [
      "'A number of...' သည် Plural ကြိယာ ယူသည်။",
      "'The number of...' သည် Singular ကြိယာ ယူသည်။",
      "ငွေကြေးပမာဏ၊ အချိန်ကာလ၊ အကွာအဝေးတို့သည် အမြဲတမ်း Singular ကြိယာ ယူသည် (Five miles IS a long walk)။",
      "ရာခိုင်နှုန်း/အပိုင်းကိန်းများတွင် နောက်လိုက်နာမ် Plural ဖြစ်လျှင် Plural၊ Uncountable ဖြစ်လျှင် Singular ယူသည်။"
    ],
    reminderRefs: ["G3"],
    sections: [
      {
        id: "A",
        title: "A number of vs The number of",
        content: "'A number of' means 'several' (plural). 'The number of' refers to the specific numerical count itself (singular).",
        contentBurmese: "'A number of' သည် အများ (plural) ဖြစ်ပြီး 'The number of' သည် ဂဏန်းအရေအတွက် (singular) ဖြစ်သည်။",
        examples: [
          { text: "A number of tourists were stranded at the airport.", note: "'A number of' -> plural verb 'were'" },
          { text: "The number of tourists is increasing each year.", note: "'The number of' -> singular verb 'is'" }
        ]
      }
    ],
    exercises: [
      {
        id: "43.1",
        title: "Exercise 43.1: Percentages & Quantifiers",
        instruction: "Select the correct verb.",
        instructionBurmese: "မှန်ကန်သော ကြိယာကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Ten thousand pounds [was / were] stolen during the armed robbery.",
            options: ["was", "were"],
            correctAnswer: "was",
            explanation: "Sums of money take a singular verb as a unified total amount ('was stolen').",
            explanationBurmese: "ငွေကြေးပမာဏသည် စုစုပေါင်းပမာဏတစ်ခုတည်း (singular) အဖြစ် သတ်မှတ်၍ 'was' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 44
  {
    id: 44,
    title: "Compound nouns and noun phrases: noun + noun, 's vs of",
    category: "nouns",
    level: "B2 Intermediate",
    summary: "Form compound nouns (income tax, solar panel), choose between possessive 's (people, animals, institutions) vs 'of' (inanimate objects).",
    summaryBurmese: "ပေါင်းစပ်နာမ်များ (Compound nouns) နှင့် ပိုင်ဆိုင်မှုပြ 's (လူ၊ သက်ရှိ) နှင့် 'of' (သက်မဲ့) ခွဲခြားအသုံးပြုပုံ။",
    keyPoints: [
      "Compound nouns: first noun acts like an adjective and is almost always singular ('toothbrush', 'car park', 'eye test' NOT 'eyes test').",
      "Possessive 's is preferred for people, animals, organizations, and time expressions ('the doctor's diagnosis', 'yesterday's meeting').",
      "'Of' is preferred for inanimate objects, parts of things, and abstract relations ('the leg OF the table', 'the title OF the book').",
      "Double possessive: 'a friend of my brother's'."
    ],
    keyPointsBurmese: [
      "Compound noun တွင် ရှေ့နာမ်သည် singular ဖြစ်ရသည် (toothbrush, car park)။",
      "လူ၊ တိရစ္ဆာန်၊ နိုင်ငံ၊ အချိန်များတွင် 's သုံးပြီး၊ သက်မဲ့ပစ္စည်း အစိတ်အပိုင်းများတွင် 'of' သုံးသည်။",
      "Double possessive ပုံစံ- 'a friend of my sister's'။"
    ],
    reminderRefs: ["G4"],
    sections: [
      {
        id: "A",
        title: "Possessive 's vs Preposition 'of'",
        content: "Use 's for human ownership and agency; use 'of' for structural parts and components.",
        contentBurmese: "လူပုဂ္ဂိုလ်ဆိုင်ရာတွင် 's သုံးပြီး အရာဝတ္ထု အစိတ်အပိုင်းတွင် 'of' သုံးသည်။",
        examples: [
          { text: "The roof of the house was damaged in the gale.", note: "Inanimate part -> 'the roof of the house'" }
        ]
      }
    ],
    exercises: [
      {
        id: "44.1",
        title: "Exercise 44.1: Compound & Possessive Choice",
        instruction: "Select the most natural English expression.",
        instructionBurmese: "သဘာဝအကျဆုံး အသုံးအနှုန်းကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Please look at [the bottom of the page / the page's bottom] for footnotes.",
            options: ["the bottom of the page", "the page's bottom"],
            correctAnswer: "the bottom of the page",
            explanation: "Inanimate objects and locations take 'of' ('the bottom of the page').",
            explanationBurmese: "သက်မဲ့နေရာပြ အစိတ်အပိုင်းဖြစ်၍ 'the bottom of the page' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
