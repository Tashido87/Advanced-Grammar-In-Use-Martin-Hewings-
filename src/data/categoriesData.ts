export interface CategoryInfo {
  id: string;
  name: string;
  nameBurmese: string;
  unitRange: string;
  startUnit: number;
  endUnit: number;
  description: string;
  descriptionBurmese: string;
  badgeColor: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "tenses",
    name: "Tenses",
    nameBurmese: "ကာလပြ ကြိယာပုံစံများ (Tenses)",
    unitRange: "Units 1 – 8",
    startUnit: 1,
    endUnit: 8,
    description: "State verbs, performatives, subtle differences between simple and continuous forms, and past/present perfect nuances.",
    descriptionBurmese: "State verbs နှင့် Performatives များ၊ Continuous နှင့် Simple အသုံးကွာခြားချက်၊ Past နှင့် Present Perfect ကာလများ အတိအကျ သုံးစွဲပုံ။",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-300 dark:text-emerald-300 dark:border-emerald-700"
  },
  {
    id: "the-future",
    name: "The Future",
    nameBurmese: "အနာဂတ်ကာလဖော်ပြချက်များ (The Future)",
    unitRange: "Units 9 – 14",
    startUnit: 9,
    endUnit: 14,
    description: "Will vs be going to, be to + infinitive, be about to, and future seen from the past.",
    descriptionBurmese: "Will နှင့် be going to ကွာခြားချက်၊ တရားဝင်အစီအစဉ်များအတွက် be to + infinitive နှင့် အတိတ်မှလှမ်းမြင်သောအနာဂတ် (Future from past)။",
    badgeColor: "bg-teal-500/10 text-teal-700 border-teal-300 dark:text-teal-300 dark:border-teal-700"
  },
  {
    id: "modals",
    name: "Modals and Semi-modals",
    nameBurmese: "အထောက်အကူပြုကြိယာများ (Modals & Semi-modals)",
    unitRange: "Units 15 – 20",
    startUnit: 15,
    endUnit: 20,
    description: "Ability, permission, possibility, necessity, deduction, should, ought to, and had better in advanced contexts.",
    descriptionBurmese: "စွမ်းရည် (Ability)၊ ခွင့်ပြုချက်၊ ဖြစ်နိုင်ခြေ၊ တာဝန်နှင့် ကောက်ချက်ချမှု (Deduction) အဆင့်မြင့် အသုံးပြုပုံများ။",
    badgeColor: "bg-cyan-500/10 text-cyan-700 border-cyan-300 dark:text-cyan-300 dark:border-cyan-700"
  },
  {
    id: "passives-questions",
    name: "Linking verbs, Passives, Questions",
    nameBurmese: "Linking Verbs၊ Passive နှင့် အမေးဝါကျပုံစံများ",
    unitRange: "Units 21 – 27",
    startUnit: 21,
    endUnit: 27,
    description: "Advanced passives, reporting with passives (It is said that...), Wh-questions, negative and echo questions.",
    descriptionBurmese: "အဆင့်မြင့် Passive ဝါကျများ၊ သတင်းထုတ်ပြန်ချက်သုံး Passives၊ Echo questions နှင့် Negative questions ဖွဲ့စည်းပုံ။",
    badgeColor: "bg-blue-500/10 text-blue-700 border-blue-300 dark:text-blue-300 dark:border-blue-700"
  },
  {
    id: "verb-complementation",
    name: "Verb complementation",
    nameBurmese: "ကြိယာနောက်လိုက်ပုံစံများ (What follows verbs)",
    unitRange: "Units 28 – 31",
    startUnit: 28,
    endUnit: 31,
    description: "Verbs with objects and complements, double objects with to/for, and verb + -ing vs to-infinitive choices.",
    descriptionBurmese: "Double objects (to/for သုံးပုံ)၊ Verb + -ing နှင့် to-infinitive ရွေးချယ်မှု၊ အဓိပ္ပာယ်ပြောင်းလဲပုံများ။",
    badgeColor: "bg-indigo-500/10 text-indigo-700 border-indigo-300 dark:text-indigo-300 dark:border-indigo-700"
  },
  {
    id: "reporting",
    name: "Reporting",
    nameBurmese: "တဆင့်ပြန်ပြောပြခြင်း (Reported Speech & Subjunctive)",
    unitRange: "Units 32 – 39",
    startUnit: 32,
    endUnit: 39,
    description: "That-clauses, reporting offers/suggestions, modal changes, nouns & adjectives in reporting, and the present subjunctive.",
    descriptionBurmese: "စကားကို နာမ်/နာမဝိသေသနဖြင့် တဆင့်ပြန်ပြောခြင်း၊ Subjunctive နှင့် Should in that-clauses အသုံးပြုပုံ။",
    badgeColor: "bg-violet-500/10 text-violet-700 border-violet-300 dark:text-violet-300 dark:border-violet-700"
  },
  {
    id: "nouns",
    name: "Nouns & Agreement",
    nameBurmese: "နာမ်များနှင့် ကိန်းညှိနှိုင်းမှု (Subject-Verb Agreement)",
    unitRange: "Units 40 – 43",
    startUnit: 40,
    endUnit: 43,
    description: "Complex subject-verb agreement, collective nouns, singular/plural with 's, and compound nouns.",
    descriptionBurmese: "ကိန်းညှိနှိုင်းမှုစည်းမျဉ်း (Agreement rules)၊ အစုပြနာမ်များ (Collective nouns) နှင့် ပေါင်းစပ်နာမ်များ။",
    badgeColor: "bg-purple-500/10 text-purple-700 border-purple-300 dark:text-purple-300 dark:border-purple-700"
  },
  {
    id: "articles-quantifiers",
    name: "Articles, Determiners & Quantifiers",
    nameBurmese: "အညွှန်းစကားလုံးများနှင့် ပမာဏပြစကားလုံးများ",
    unitRange: "Units 44 – 52",
    startUnit: 44,
    endUnit: 52,
    description: "A/an, the and zero article rules, some vs any, no/none, much/many, all/whole/every/each, and few/little.",
    descriptionBurmese: "A/an/the နှင့် Zero article အသုံးပြုမှု၊ Some/any, All/whole, Few/little နည်းစနစ်ကျကျ ခွဲခြားသုံးစွဲနည်း။",
    badgeColor: "bg-pink-500/10 text-pink-700 border-pink-300 dark:text-pink-300 dark:border-pink-700"
  },
  {
    id: "relative-clauses",
    name: "Relative Clauses & Participles",
    nameBurmese: "ပုဒ်ဆက်ဝါကျစိတ်များနှင့် Participle Clauses",
    unitRange: "Units 53 – 59",
    startUnit: 53,
    endUnit: 59,
    description: "Relative pronouns, whose/whereby, prepositions in relative clauses, and adverbial participle clauses (-ing/-ed).",
    descriptionBurmese: "Defining vs Non-defining clauses၊ Whereby/whose သုံးစွဲပုံ၊ Participle Clauses (-ing / having + V3) ဖွဲ့စည်းပုံ။",
    badgeColor: "bg-rose-500/10 text-rose-700 border-rose-300 dark:text-rose-300 dark:border-rose-700"
  },
  {
    id: "pronouns-ellipsis",
    name: "Pronouns, Substitution & Ellipsis",
    nameBurmese: "နာမ်စားများ၊ အစားထိုးခြင်းနှင့် စကားလုံးချန်လှပ်ခြင်း",
    unitRange: "Units 60 – 65",
    startUnit: 60,
    endUnit: 65,
    description: "Reflexive pronouns, one/ones, 'so' and 'not' substitutes, 'do so', and ellipsis after auxiliary verbs and to-infinitives.",
    descriptionBurmese: "Reflexive pronouns၊ One/ones၊ So/not အစားထိုးခြင်းနှင့် စကားလုံးချန်လှပ်ခြင်း (Ellipsis) အဆင့်မြင့်နည်းများ။",
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-300 dark:text-amber-300 dark:border-amber-700"
  },
  {
    id: "adjectives-adverbs",
    name: "Adjectives and Adverbs",
    nameBurmese: "နာမဝိသေသနများနှင့် ကြိယာဝိသေသနများ",
    unitRange: "Units 66 – 78",
    startUnit: 66,
    endUnit: 78,
    description: "Position of adjectives, gradable vs non-gradable, comparative/superlative forms, and adverb positions & viewpoints.",
    descriptionBurmese: "Gradable vs Non-gradable adjectives၊ နှိုင်းယှဉ်ချက်ပုံစံများ၊ Adverb နေရာထားရှိမှုနှင့် Viewpoint adverbs။",
    badgeColor: "bg-orange-500/10 text-orange-700 border-orange-300 dark:text-orange-300 dark:border-orange-700"
  },
  {
    id: "adverbial-clauses",
    name: "Adverbial Clauses & Conditionals",
    nameBurmese: "အခြေအနေပြဝါကျစိတ်များနှင့် အကယ်၍ (Conditionals)",
    unitRange: "Units 79 – 87",
    startUnit: 79,
    endUnit: 87,
    description: "Time, reason, purpose, contrast clauses, and real/unreal conditionals with inversions (Had I known, Were you to...).",
    descriptionBurmese: "အကြောင်းပြချက်၊ ဆန့်ကျင်ဘက်ဖော်ပြချက်၊ အကယ်၍ဝါကျများ (If conditionals) နှင့် Inversion စည်းမျဉ်းများ။",
    badgeColor: "bg-lime-500/10 text-lime-700 border-lime-300 dark:text-lime-300 dark:border-lime-700"
  },
  {
    id: "prepositions",
    name: "Prepositions & Phrasal Verbs",
    nameBurmese: "ဝိဘတ်များနှင့် Phrasal Verbs",
    unitRange: "Units 88 – 94",
    startUnit: 88,
    endUnit: 94,
    description: "Prepositions of place/time/movement, between vs among, exceptions, prepositions after verbs/nouns, and multi-word verb word order.",
    descriptionBurmese: "Between vs Among၊ ခြွင်းချက်ဖော်ပြ ဝိဘတ်များ၊ ကြိယာ/နာမ်နောက်လိုက် ဝိဘတ်များနှင့် စကားလုံးစဉ်ပုံစံများ။",
    badgeColor: "bg-emerald-600/10 text-emerald-800 border-emerald-300 dark:text-emerald-300 dark:border-emerald-700"
  },
  {
    id: "organising-info",
    name: "Organising Information & Inversion",
    nameBurmese: "ဝါကျအလေးပေးမှုနှင့် Inversion (စကားလုံးပြောင်းပြန်စဉ်ခြင်း)",
    unitRange: "Units 95 – 100",
    startUnit: 95,
    endUnit: 100,
    description: "There is/was, introductory 'It', cleft sentences (It-clauses, What-clauses), and Inversion for emphasis (Seldom had I...).",
    descriptionBurmese: "Introductory 'It'၊ Cleft sentences (အလေးပေးဝါကျ) နှင့် အဆင့်မြင့် Inversion (ကြိယာ-ကတ္တား ရှေ့နောက်လှန်ခြင်း)။",
    badgeColor: "bg-sky-500/10 text-sky-700 border-sky-300 dark:text-sky-300 dark:border-sky-700"
  },
  {
    id: "academic-grammar",
    name: "Grammar in Academic Contexts",
    nameBurmese: "ပညာရပ်ဆိုင်ရာ အရေးအသားသဒ္ဒါ (Academic Grammar)",
    unitRange: "Units 101 – 105",
    startUnit: 101,
    endUnit: 105,
    description: "Complex noun phrases, impersonal It-clauses, linking ideas in academic writing, citations (As noted by...), and discussion lead-ins.",
    descriptionBurmese: "Academic စာတမ်းနှင့် ဆွေးနွေးချက်များတွင် သုံးသည့် Complex noun phrases၊ ကိုးကားချက်ဖော်ပြပုံများနှင့် တင်ပြချက်အသုံးများ။",
    badgeColor: "bg-blue-600/10 text-blue-800 border-blue-300 dark:text-blue-300 dark:border-blue-700"
  }
];
