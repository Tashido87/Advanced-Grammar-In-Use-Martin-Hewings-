import { GrammarUnit } from "../../types";

export const ACADEMIC_UNITS: GrammarUnit[] = [
  // Unit 101
  {
    id: 101,
    title: "Academic English 1: Hedging and cautious language",
    category: "academic-english",
    level: "C1 Advanced",
    summary: "Modulate academic claims cautiously using hedges: modal verbs (may, might, could), lexical verbs (suggest, indicate, appear to, tend to), and probability adverbs (presumably, arguably).",
    summaryBurmese: "ပညာရပ်ဆိုင်ရာ အရေးအသားတွင် အလွန်အကျွံ အာမခံပြောဆိုခြင်းကို ရှောင်ရှားသော Hedging (Cautious Language) - may, suggest, tend to, arguably သုံးစွဲနည်းများ။",
    keyPoints: [
      "Avoid over-generalizations: use 'tends to / appears to' instead of absolute 'is'.",
      "Hedges with verbs: suggest, indicate, propose, appear, seem, imply ('The findings SUGGEST that...').",
      "Hedges with modals: may, might, could ('This COULD lead to...').",
      "Hedges with adverbs/adjectives: arguably, potentially, plausibly, likely, possible ('It is ARGUABLY the most significant factor')."
    ],
    keyPointsBurmese: [
      "Academic စာတမ်းများတွင် 'သေချာပေါက်ဖြစ်သည်' ဟု တိုက်ရိုက်မပြောဘဲ 'tends to / suggests that / may lead to' ကဲ့သို့သော ချိန်ဆစကားလုံးများ (Hedges) ကို သုံးသည်။",
      "Arguably, potentially, likely ကဲ့သို့သော ညင်သာသော အသုံးအနှုန်းများ။"
    ],
    reminderRefs: ["O1"],
    sections: [
      {
        id: "A",
        title: "The Art of Academic Hedging",
        content: "Scholarly discourse avoids unprovable absolutes by softening assertions appropriately.",
        contentBurmese: "ပညာရပ်ဆိုင်ရာ အရေးအသားတွင် အငြင်းပွားနိုင်ဖွယ် မရှိစေရန် အဆိုပြုချက်များကို ညင်သာစွာ တင်ပြသည်။",
        examples: [
          { text: "The data suggests that urban noise levels may contribute to elevated stress markers.", note: "Double hedge: 'suggests' + 'may contribute'" }
        ]
      }
    ],
    exercises: [
      {
        id: "101.1",
        title: "Exercise 101.1: Academic Hedging Practice",
        instruction: "Select the appropriately hedged academic sentence.",
        instructionBurmese: "Academic စံနှုန်းနှင့် ကိုက်ညီသော hedged sentence ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Which sentence adheres best to academic cautious style?",
            options: ["The new policy will completely eliminate poverty.", "The new policy appears to have the potential to alleviate poverty."],
            correctAnswer: "The new policy appears to have the potential to alleviate poverty.",
            explanation: "'Appears to have the potential to alleviate' uses cautious scholarly language.",
            explanationBurmese: "အာမခံလွန်းသော စကားလုံးအစား ချိန်ဆရေးသားသော 'appears to have the potential' သည် အကောင်းဆုံး ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 102
  {
    id: 102,
    title: "Academic English 2: Nominalization and noun phrase density",
    category: "academic-english",
    level: "C1 Advanced",
    summary: "Transform verbose verb and adjective clauses into concise, authoritative nominalized noun phrases.",
    summaryBurmese: "ကြိယာနှင့် နာမဝိသေသနများကို နာမ်အဖြစ် ပြောင်းလဲ၍ စာသားကို ပိုမိုကျစ်လျစ်လေးနက်စေသော Nominalization (ဥပမာ- analyze -> analysis, expand -> expansion)။",
    keyPoints: [
      "Nominalization converts verbs/adjectives into nouns: 'investigate' -> 'investigation', 'frequent' -> 'frequency'.",
      "Example: 'Because the population grew rapidly...' -> 'The RAPID GROWTH of the population...'.",
      "Increases lexical density and allows complex ideas to serve as grammatical subjects.",
      "Caution: Avoid over-nominalization that creates obscure or impenetrable prose."
    ],
    keyPointsBurmese: [
      "ကြိယာ/နာမဝိသေသနကို နာမ်အဖြစ် ပြောင်းလဲခြင်း (Nominalization)။",
      "ဝါကျအရှည်ကြီးများအစား 'rapid economic development', 'thorough investigation' ကဲ့သို့ နာမ်တွဲများဖြင့် တိုတိုနှင့် လေးနက်စွာ ရေးသည်။"
    ],
    reminderRefs: ["O2"],
    sections: [
      {
        id: "A",
        title: "Nominalization in Research Writing",
        content: "Nominalization packages previous clauses into concise noun concepts that drive subsequent arguments.",
        contentBurmese: "ရှေ့တွင် ဖော်ပြခဲ့သော အကြောင်းအရာများကို နာမ်တစ်ခုအဖြစ် အနှစ်ချုပ်၍ ဆက်လက်ဆွေးနွေးသည်။",
        examples: [
          { text: "The rapid degradation of coral reefs has prompted urgent conservation initiatives.", note: "Nominalized subject: 'The rapid degradation of coral reefs'" }
        ]
      }
    ],
    exercises: [
      {
        id: "102.1",
        title: "Exercise 102.1: Nominalization Transformation",
        instruction: "Rewrite the clause using nominalization.",
        instructionBurmese: "Nominalization သုံး၍ နာမ်အဖြစ် ပြောင်းလဲရေးပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "Because the market expanded dramatically, new competitors entered the sector.",
            prefix: "The dramatic ",
            suffix: " of the market encouraged new competitors to enter the sector.",
            correctAnswer: ["expansion"],
            explanation: "'Expanded' nominalizes to 'expansion'.",
            explanationBurmese: "'expansion' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 103
  {
    id: 103,
    title: "Academic English 3: Impersonal passive and stance",
    category: "academic-english",
    level: "C1 Advanced",
    summary: "Establish objective scholarly distance: 'It is widely acknowledged that...', 'The phenomenon can be classified as...'.",
    summaryBurmese: "ပုဂ္ဂိုလ်ရေး ခံစားချက်ကို ဖယ်ထုတ်၍ ဓမ္မဓိဋ္ဌာန်ကျကျ တင်ပြသော Impersonal Passive (It is argued that..., Evidence suggests that...)။",
    keyPoints: [
      "Replace 'I think' or 'In my opinion' with objective stance structures ('It can be argued that...', 'The evidence demonstrates that...').",
      "Impersonal reporting passives: 'It is widely believed', 'It has been observed that', 'It is hypothesized that'.",
      "Authorial voice calibration: maintaining scholarly authority while remaining open to peer critique."
    ],
    keyPointsBurmese: [
      "'I think / In my opinion' အစား 'It is argued that / It is generally accepted that' ဟု သုံးသည်။",
      "ဓမ္မဓိဋ္ဌာန်ကျသော သုတေသန အသံနေအထားကို ထိန်းသိမ်းသည်။"
    ],
    reminderRefs: ["O3"],
    sections: [
      {
        id: "A",
        title: "Objective Scholarly Stance",
        content: "Impersonal passives present ideas as consensus or evidence-grounded rather than mere personal whim.",
        contentBurmese: "ကိုယ်ပိုင်ထင်မြင်ချက် သက်သက်မဟုတ်ဘဲ အထောက်အထားခိုင်လုံသော ယူဆချက်အဖြစ် တင်ပြသည်။",
        examples: [
          { text: "It is widely recognized that early intervention improves developmental outcomes.", note: "Impersonal passive stance" }
        ]
      }
    ],
    exercises: [
      {
        id: "103.1",
        title: "Exercise 103.1: Academic Stance Phrasing",
        instruction: "Select the most professional scholarly stance phrase.",
        instructionBurmese: "အသင့်တော်ဆုံး academic stance phrase ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "[I personally feel that / It is generally accepted that] bilingualism enhances executive cognitive control.",
            options: ["It is generally accepted that", "I personally feel that"],
            correctAnswer: "It is generally accepted that",
            explanation: "Academic papers use impersonal objective formulas ('It is generally accepted that').",
            explanationBurmese: "Academic စာတမ်းများတွင် impersonal ပုံစံဖြစ်သော 'It is generally accepted that' ကို သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 104
  {
    id: 104,
    title: "Academic English 4: Citations, referencing, and reported claims",
    category: "academic-english",
    level: "C1 Advanced",
    summary: "Incorporate external academic literature: integral citations (According to Chen, 2021; Chen asserts that) vs non-integral citations (Parenthetical).",
    summaryBurmese: "သုတေသနကိုးကားချက်များ (Citations & Referencing) - 'According to Smith (2020)...'၊ 'Smith contends that...' နှင့် Parenthetical citations ရေးသားပုံ။",
    keyPoints: [
      "Integral citations: the author's name is part of the sentence syntax ('Johnson (2019) argues that...').",
      "Non-integral citations: author's name appears in parentheses at the end ('...as shown in recent trials (Johnson, 2019)').",
      "Reporting verbs with distinct evaluative nuances: 'demonstrate / prove' (fact), 'argue / contend / claim' (viewpoint), 'suggest / propose' (tentative hypothesis)."
    ],
    keyPointsBurmese: [
      "Integral citation: စာရေးသူအမည်ကို ဝါကျ၏ ကတ္တားအဖြစ် သုံးခြင်း (Brown (2022) highlights that...)။",
      "Non-integral citation: ဝါကျအဆုံးတွင် ကွင်းစကွင်းပိတ်ဖြင့် ကိုးကားခြင်း။",
      "Reporting verbs ရွေးချယ်မှု- demonstrate (သက်သေပြသည်)၊ contend (အဆိုပြုသည်)၊ suggest (အကြံပြုသည်)။"
    ],
    reminderRefs: ["O4"],
    sections: [
      {
        id: "A",
        title: "Citation Verb Nuances",
        content: "Choose citation verbs that accurately communicate your evaluation of the cited author's work.",
        contentBurmese: "ကိုးကားသော စာရေးသူ၏ အဆိုအပေါ် မိမိ၏ သဘောထားကို reporting verb ဖြင့် ဖော်ပြသည်။",
        examples: [
          { text: "Williams (2022) contends that the current regulatory framework is obsolete.", note: "contends = argues strongly" }
        ]
      }
    ],
    exercises: [
      {
        id: "104.1",
        title: "Exercise 104.1: Academic Citation Verbs",
        instruction: "Select the most appropriate citation verb.",
        instructionBurmese: "အသင့်တော်ဆုံး citation verb ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "As Davis (2020) convincingly [demonstrates / claims vaguely], climate adaptation requires cross-border cooperation.",
            options: ["demonstrates", "claims vaguely"],
            correctAnswer: "demonstrates",
            explanation: "'Convincingly demonstrates' forms a cohesive, positive academic citation collocation.",
            explanationBurmese: "'Convincingly demonstrates' (ခိုင်လုံစွာ သက်သေပြသည်) ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 105
  {
    id: 105,
    title: "Academic English 5: Synthesizing arguments and counter-arguments",
    category: "academic-english",
    level: "C1 Advanced",
    summary: "Weave complex scholarly debates together: presenting opposing viewpoints (While proponents argue X, critics maintain Y) and synthesizing a balanced conclusion.",
    summaryBurmese: "ဆန့်ကျင်ဘက် အမြင်များကို ချိန်ညှိနှိုင်းယှဉ်၍ သုတေသနနိဂုံးချုပ်ခြင်း (Synthesizing Arguments: While proponents argue..., critics contend...)။",
    keyPoints: [
      "Introducing counter-arguments: 'While it is often claimed that..., closer examination reveals...'.",
      "Refutation markers: 'However, this perspective overlooks...', 'Notwithstanding these valid concerns...'.",
      "Balanced synthesis: 'Taken together, the evidence indicates that while X is valid, Y must also be prioritized'."
    ],
    keyPointsBurmese: [
      "ဆန့်ကျင်ဘက် အမြင်များကို တင်ပြရာတွင် 'While critics argue X, evidence indicates Y' ပုံစံဖြင့် ချိန်ညှိသည်။",
      "အငြင်းပွားဖွယ် အချက်များကို ဓမ္မဓိဋ္ဌာန်ကျစွာ နှိုင်းယှဉ်ပြီး မျှတသော နိဂုံးချုပ်ကို ဖော်ထုတ်သည်။"
    ],
    reminderRefs: ["O5"],
    sections: [
      {
        id: "A",
        title: "Master Academic Synthesis",
        content: "Synthesizing literature is the pinnacle skill for C1/C2 IELTS 8.0+ writing and dissertation defense.",
        contentBurmese: "အမြင်အမျိုးမျိုးကို စနစ်တကျ ပေါင်းစပ်တင်ပြခြင်းသည် အဆင့်မြင့် စာတမ်းရေးသားမှု၏ အဓိက သော့ချက်ဖြစ်သည်။",
        examples: [
          { text: "While proponents argue that automation increases efficiency, critics emphasize the associated labor market displacement.", note: "Balanced dual-perspective synthesis" }
        ]
      }
    ],
    exercises: [
      {
        id: "105.1",
        title: "Exercise 105.1: Argument Synthesis",
        instruction: "Select the most sophisticated synthesizing connector.",
        instructionBurmese: "အဆင့်အမြင့်ဆုံး synthesizing connector ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "[While / Because] some scholars emphasize genetic factors, environmental influences cannot be dismissed.",
            options: ["While", "Because"],
            correctAnswer: "While",
            explanation: "'While' establishes a concession balancing the two complementary academic perspectives.",
            explanationBurmese: "အမြင်နှစ်ခုကို မျှတစွာ ချိန်ညှိပေးသော Concessive 'While' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
