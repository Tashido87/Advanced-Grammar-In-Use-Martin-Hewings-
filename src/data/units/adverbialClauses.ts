import { GrammarUnit } from "../../types";

export const ADVERBIAL_CLAUSES_UNITS: GrammarUnit[] = [
  // Unit 79
  {
    id: 79,
    title: "Adverbial clauses of time: as, when, while, as soon as, once",
    category: "adverbial-clauses",
    level: "B2 Intermediate",
    summary: "Coordinate simultaneous actions (as, while) vs sequential actions (when, once, as soon as) with present tenses for future time reference.",
    summaryBurmese: "အချိန်ပြ ဝါကျများ (Adverbial clauses of time) - တစ်ပြိုင်နက်ဖြစ်ပျက်မှု (while, as) နှင့် ဆင့်ကဲဖြစ်ပျက်မှု (when, once, as soon as)၊ အနာဂတ်အတွက် Present Tense သုံးပုံ။",
    keyPoints: [
      "In time clauses referring to the future, use PRESENT tenses (never 'will'): 'I will call you as soon as I arrive' (NOT 'as soon as I will arrive').",
      "'While' and 'as' express two continuous actions occurring simultaneously: 'While I was cooking, my sister was studying'.",
      "'Once' and 'as soon as' mean immediately after an action is completed ('Once you have finished, you may leave')."
    ],
    keyPointsBurmese: [
      "Time clause (as soon as, when, until, once) ထဲတွင် 'will' မသုံးရဘဲ Present Simple သို့မဟုတ် Present Perfect သာ သုံးရသည်။",
      "While / As သည် တစ်ပြိုင်နက် ဖြစ်ပျက်နေသော လုပ်ဆောင်ချက်များတွင် သုံးသည်။",
      "Once သည် 'ပြီးဆုံးသွားသည်နှင့် ချက်ချင်း' ဟု အဓိပ္ပာယ်ရသည်။"
    ],
    reminderRefs: ["L1"],
    sections: [
      {
        id: "A",
        title: "Future Reference in Time Clauses",
        content: "Never use future auxiliaries inside subordinate temporal clauses.",
        contentBurmese: "အချိန်ပြ subordinate clause ထဲတွင် will / would မထည့်ရပါ။",
        examples: [
          { text: "We will depart as soon as the rain stops.", note: "Correct: 'as the rain stops' (Present simple)" }
        ]
      }
    ],
    exercises: [
      {
        id: "79.1",
        title: "Exercise 79.1: Future Time Clauses",
        instruction: "Fill in the correct form of the verb.",
        instructionBurmese: "မှန်ကန်သော ကြိယာပုံစံဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "Please send me an email the moment you ______ (reach) your hotel.",
            prefix: "Please email me the moment you ",
            suffix: " your hotel.",
            correctAnswer: ["reach", "have reached"],
            explanation: "Time clauses use present simple ('reach') or present perfect ('have reached').",
            explanationBurmese: "Time clause ဖြစ်သောကြောင့် Present Simple 'reach' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 80
  {
    id: 80,
    title: "Clauses of reason and cause: because, since, as, due to, owing to",
    category: "adverbial-clauses",
    level: "B2 Intermediate",
    summary: "Articulate cause and effect: 'because' (focus on new reason), 'since/as' (known background reason), and prepositions 'due to / owing to (+ noun)'.",
    summaryBurmese: "အကြောင်းပြ ဝါကျများ (Clauses of reason) - because (အကြောင်းပြချက်အသစ်)၊ since/as (သိပြီးသား အကြောင်းပြချက်) နှင့် due to / owing to + Noun။",
    keyPoints: [
      "'Because' introduces the most important part of the sentence and is often at the end: 'He stayed home because he was ill'.",
      "'As' and 'Since' introduce reasons that are already known or obvious to the listener, and usually come at the beginning: 'Since it was raining, we took an umbrella'.",
      "'Due to' and 'Owing to' are followed by a NOUN phrase (or 'the fact that'): 'The delay was due to severe weather'.",
      "'Owing to' can start a sentence; traditional grammar prefers 'due to' after 'be' ('The crash was due to...')."
    ],
    keyPointsBurmese: [
      "Because သည် အဓိက အကြောင်းပြချက်ကို အလေးပေးရာတွင် သုံးသည်။",
      "As / Since သည် နားထောင်သူသိပြီးသား အကြောင်းပြချက်ဖြစ်ပြီး ဝါကျအစတွင် ထားလေ့ရှိသည်။",
      "Due to / Owing to နောက်တွင် Noun phrase (သို့မဟုတ် 'the fact that') လိုက်ရသည်။"
    ],
    reminderRefs: ["L2"],
    sections: [
      {
        id: "A",
        title: "Because vs Since/As vs Due to",
        content: "Select the connector matching whether the reason is given information or new focal information.",
        contentBurmese: "အကြောင်းပြချက်သည် သိပြီးသားအချက်လား၊ အသစ်အလေးပေးဖော်ပြချက်လားပေါ် မူတည်၍ ရွေးချယ်ပါ။",
        examples: [
          { text: "Owing to unforeseen circumstances, the lecture is cancelled.", note: "Owing to + noun phrase" }
        ]
      }
    ],
    exercises: [
      {
        id: "80.1",
        title: "Exercise 80.1: Reason Connectors",
        instruction: "Select the correct connector.",
        instructionBurmese: "မှန်ကန်သော ဆက်သွယ်စကားလုံးကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The flight was delayed [due to / because] dense fog over the runway.",
            options: ["due to", "because"],
            correctAnswer: "due to",
            explanation: "Followed directly by a noun phrase ('dense fog'), requiring preposition 'due to'.",
            explanationBurmese: "Noun phrase 'dense fog' ပါရှိသောကြောင့် preposition 'due to' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 81
  {
    id: 81,
    title: "Clauses of purpose: so that, in order to, in order that, so as to",
    category: "adverbial-clauses",
    level: "B2 Intermediate",
    summary: "Express intentions and purpose: 'so that + modal clause', 'in order to + infinitive', and negative purpose ('so as not to / in order not to').",
    summaryBurmese: "ရည်ရွယ်ချက်ပြ ဝါကျများ (Clauses of purpose) - so that + clause၊ in order to + V1 နှင့် အငြင်းရည်ရွယ်ချက် 'so as not to / in order not to'။",
    keyPoints: [
      "'So that / In order that + Subject + can/could/will/would': 'She spoke loudly so that everyone could hear'.",
      "'In order to / So as to + infinitive': 'He woke up early in order to catch the train'.",
      "Negative purpose: use 'so as NOT to' or 'in order NOT to' (NOT 'not to'): 'He walked quietly so as not to wake the baby'."
    ],
    keyPointsBurmese: [
      "So that နောက်တွင် 'ကတ္တား + can/could/will + V1' လိုက်သည်။",
      "In order to / So as to နောက်တွင် V1 လိုက်သည်။",
      "အငြင်းရည်ရွယ်ချက်တွင် 'so as NOT to' သို့မဟုတ် 'in order NOT to' ဟု သုံးရသည် ('not to' ဟု မသုံးရပါ)။"
    ],
    reminderRefs: ["L3"],
    sections: [
      {
        id: "A",
        title: "Negative Purpose Structures",
        content: "To express the intention of preventing something, use 'so as not to' or 'in order not to'.",
        contentBurmese: "တစ်ခုခု မဖြစ်စေရန် ရည်ရွယ်ချက်တွင် 'so as not to' သုံးသည်။",
        examples: [
          { text: "She took notes carefully so as not to forget any critical details.", note: "so as not to + bare infinitive" }
        ]
      }
    ],
    exercises: [
      {
        id: "81.1",
        title: "Exercise 81.1: Negative Purpose Phrasing",
        instruction: "Select the grammatically correct negative purpose clause.",
        instructionBurmese: "မှန်ကန်သော အငြင်းရည်ရွယ်ချက်ပြ စကားစုကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "He set two alarms [so as not to / not to] oversleep for the interview.",
            options: ["so as not to", "not to"],
            correctAnswer: "so as not to",
            explanation: "Negative purpose requires 'so as not to' or 'in order not to', never bare 'not to'.",
            explanationBurmese: "Negative purpose အတွက် 'so as not to' သာ သုံးရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 82
  {
    id: 82,
    title: "Clauses of concession and contrast: although, even though, though, despite, in spite of",
    category: "adverbial-clauses",
    level: "B2 Intermediate",
    summary: "Contrast concessive conjunctions (although, even though + clause) with prepositions (despite, in spite of + noun/-ing).",
    summaryBurmese: "ဆန့်ကျင်ဘက် သဘောဆောင်သော ဝါကျများ (Concession) - although / even though + clause နှင့် despite / in spite of + Noun / V-ing။",
    keyPoints: [
      "'Although / Even though / Though' are conjunctions followed by a full CLAUSE (Subject + Verb): 'Although it was freezing, they went swimming'.",
      "'Despite / In spite of' are prepositions followed by a NOUN phrase, pronoun, or -ING form: 'Despite the freezing weather, they went swimming' (NOT 'Despite it was freezing').",
      "'Despite the fact that + clause' is an alternative way to use despite before a full clause.",
      "'Even though' is more emphatic than 'although'."
    ],
    keyPointsBurmese: [
      "Although, even though, though နောက်တွင် ကတ္တား + ကြိယာ (Clause) လိုက်ရသည်။",
      "Despite, in spite of နောက်တွင် Noun phrase သို့မဟုတ် V-ing လိုက်ရသည် (Clause မလိုက်ရပါ)။",
      "Clause နှင့်တွဲလိုပါက 'Despite the fact that...' ဟု သုံးနိုင်သည်။"
    ],
    reminderRefs: ["L4"],
    sections: [
      {
        id: "A",
        title: "Conjunction vs Preposition Rules",
        content: "Never put a full finite clause directly after 'despite' or 'in spite of' without 'the fact that'.",
        contentBurmese: "Despite နောက်တွင် clause တိုက်ရိုက်မလိုက်ရပါ။",
        examples: [
          { text: "In spite of having no formal qualifications, she got the job.", note: "In spite of + -ing form" }
        ]
      }
    ],
    exercises: [
      {
        id: "82.1",
        title: "Exercise 82.1: Although vs Despite",
        instruction: "Select although or despite.",
        instructionBurmese: "Although သို့မဟုတ် despite ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "[Despite / Although] the heavy traffic on the highway, we reached the airport on time.",
            options: ["Despite", "Although"],
            correctAnswer: "Despite",
            explanation: "Followed by a noun phrase ('the heavy traffic'), requiring preposition 'Despite'.",
            explanationBurmese: "Noun phrase 'the heavy traffic' ပါရှိသောကြောင့် 'Despite' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 83
  {
    id: 83,
    title: "Clauses of result: so... that, such... that, with the result that",
    category: "adverbial-clauses",
    level: "B2 Intermediate",
    summary: "Form emphatic result structures: 'so + adj/adv + that' vs 'such + (a/an) + adj + noun + that'.",
    summaryBurmese: "ရလဒ်ပြ ဝါကျများ (Clauses of result) - 'so + adj + that' နှင့် 'such + (a/an) + noun + that' (လွန်ကဲသဖြင့်... ဖြစ်သွားသည်)။",
    keyPoints: [
      "'So + adjective/adverb + that': 'The music was SO loud THAT we couldn't hear each other'.",
      "'Such + a/an + adjective + singular countable noun + that': 'It was SUCH a lovely day THAT we went for a hike'.",
      "'Such + adjective + plural / uncountable noun + that': 'They had SUCH terrible weather THAT they returned early'.",
      "'So much / So many + noun + that' (use 'so', NOT 'such')."
    ],
    keyPointsBurmese: [
      "'So + adj/adv + that' (so hot that, so quickly that)။",
      "'Such + a/an + adj + noun + that' (such a cold day that)။",
      "Many / Much ပါပါက 'so many / so much' သုံးရသည် ('such many' မသုံးရပါ)။"
    ],
    reminderRefs: ["L5"],
    sections: [
      {
        id: "A",
        title: "So vs Such Structure Rules",
        content: "So modifies adjectives and adverbs; such modifies noun phrases.",
        contentBurmese: "So သည် adjective/adverb ကို အထူးပြုပြီး such သည် noun phrase ကို အထူးပြုသည်။",
        examples: [
          { text: "It was such an intriguing proposal that the board approved it instantly.", note: "such + an intriguing proposal + that" }
        ]
      }
    ],
    exercises: [
      {
        id: "83.1",
        title: "Exercise 83.1: So vs Such",
        instruction: "Fill in so or such (a/an).",
        instructionBurmese: "So သို့မဟုတ် such (a/an) ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "She is ______ brilliant mathematician that she solved the theorem in minutes.",
            prefix: "She is ",
            suffix: " brilliant mathematician that she solved the theorem.",
            correctAnswer: ["such a"],
            explanation: "Followed by adjective + singular countable noun ('brilliant mathematician'), requiring 'such a'.",
            explanationBurmese: "Adjective + singular noun ဖြစ်သောကြောင့် 'such a' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 84
  {
    id: 84,
    title: "Conditional sentences 1: real conditionals (zero and first conditionals)",
    category: "adverbial-clauses",
    level: "B2 Intermediate",
    summary: "Form real conditions: Zero conditional (general truths: If + Present, Present) and First conditional (possible future: If + Present, will + bare infinitive).",
    summaryBurmese: "လက်တွေ့အခြေအနေပြ If-clauses - Zero Conditional (အမြဲမှန်သောအချက်) နှင့် First Conditional (ဖြစ်နိုင်ချေရှိသော အနာဂတ်)။",
    keyPoints: [
      "Zero conditional: 'If / When + Present Simple, Present Simple' ('If you heat ice, it melts').",
      "First conditional: 'If + Present Simple, will + bare infinitive' ('If it rains tomorrow, we will stay indoors').",
      "Never put 'will' in the if-clause: say 'If you COME' (NOT 'If you will come', unless expressing willingness).",
      "'Unless' means 'if... not': 'Unless you study, you will fail' (= If you don't study)."
    ],
    keyPointsBurmese: [
      "Zero Conditional: If + Present Simple, Present Simple (သဘာဝတရား)။",
      "First Conditional: If + Present Simple, will + V1 (ဖြစ်နိုင်သော အနာဂတ်)။",
      "If-clause ထဲတွင် 'will' မသုံးရပါ။",
      "Unless သည် 'If... not' (မ... လျှင်) ဟု အဓိပ္ပာယ်ရသည်။"
    ],
    reminderRefs: ["L6"],
    sections: [
      {
        id: "A",
        title: "First Conditional Tense Alignment",
        content: "The conditional clause remains in the present simple while the result clause employs modal auxiliaries.",
        contentBurmese: "If-clause တွင် Present Simple ထားပြီး Result clause တွင် will/can + V1 ထားသည်။",
        examples: [
          { text: "If the stock price falls further, the company will face severe liquidity issues.", note: "If + present simple, will + base verb" }
        ]
      }
    ],
    exercises: [
      {
        id: "84.1",
        title: "Exercise 84.1: First Conditional Form",
        instruction: "Select the correct form.",
        instructionBurmese: "မှန်ကန်သော ကြိယာပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "If you [press / will press] this red button, the emergency alarm sounds immediately.",
            options: ["press", "will press"],
            correctAnswer: "press",
            explanation: "In conditional clauses, use the present tense ('press'), not 'will'.",
            explanationBurmese: "Conditional clause ထဲတွင် 'will' မသုံးရဘဲ Present Simple 'press' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 85
  {
    id: 85,
    title: "Conditional sentences 2: unreal present and past (second and third conditionals)",
    category: "adverbial-clauses",
    level: "B2 Intermediate",
    summary: "Form hypothetical present conditions (Second: If + Past Simple, would + base) and counterfactual past conditions (Third: If + Past Perfect, would have + past participle).",
    summaryBurmese: "စိတ်ကူးယဉ် အခြေအနေပြ If-clauses - Second Conditional (လက်ရှိစိတ်ကူးယဉ်) နှင့် Third Conditional (အတိတ်က မဖြစ်ခဲ့သော နောင်တ/အဖြစ်အပျက်)။",
    keyPoints: [
      "Second conditional: 'If + Past Simple, would + bare infinitive' ('If I won the lottery, I would buy an island').",
      "Third conditional: 'If + Past Perfect, would have + past participle' ('If I had known about the traffic, I would have taken the train').",
      "'Were' is traditionally used for all persons in second conditional: 'If I WERE you, I would accept the offer'.",
      "Mixed conditional (Past condition with Present result): 'If I had studied medicine, I would be a doctor now'."
    ],
    keyPointsBurmese: [
      "Second Conditional: If + Past Simple, would + V1 (လက်ရှိတွင် မဖြစ်နိုင်သော စိတ်ကူးယဉ်)။",
      "Third Conditional: If + had + V3, would have + V3 (အတိတ်က မဖြစ်ခဲ့သော ကိစ္စ)။",
      "If I were you (ငါသာ မင်းနေရာမှာဆိုရင်) တွင် 'were' သုံးသည်။",
      "Mixed Conditional: အတိတ်က အကြောင်းတရားကြောင့် လက်ရှိတွင် ရလဒ်ဖြစ်ပေါ်နေမှု။"
    ],
    reminderRefs: ["L7", "L8"],
    sections: [
      {
        id: "A",
        title: "Second vs Third Conditionals",
        content: "Second conditional deals with hypothetical present/future; third conditional deals with impossible counterfactual pasts.",
        contentBurmese: "Second conditional သည် လက်ရှိ/အနာဂတ် စိတ်ကူးယဉ်ဖြစ်ပြီး Third conditional သည် အတိတ်က မဖြစ်မြောက်ခဲ့သော ကိစ္စဖြစ်သည်။",
        examples: [
          { text: "If we had left ten minutes earlier, we would have caught the express train.", note: "Third conditional (counterfactual past)" }
        ]
      }
    ],
    exercises: [
      {
        id: "85.1",
        title: "Exercise 85.1: Second vs Third Conditional Selection",
        instruction: "Select the correct conditional verb phrase.",
        instructionBurmese: "မှန်ကန်သော conditional ပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "If she had received proper medical care in time, she [would have recovered / would recover] much faster.",
            options: ["would have recovered", "would recover"],
            correctAnswer: "would have recovered",
            explanation: "Past unreal condition ('had received') requires third conditional result 'would have recovered'.",
            explanationBurmese: "အတိတ်က မဖြစ်ခဲ့သောအရာဖြစ်၍ 'would have recovered' (Third conditional) ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 86
  {
    id: 86,
    title: "Inversion in conditional sentences: Should, Were, Had",
    category: "adverbial-clauses",
    level: "C1 Advanced",
    summary: "Omit 'if' and invert subject with auxiliary in formal/literary styles: Should you need (1st), Were I to accept (2nd), Had we known (3rd).",
    summaryBurmese: "Conditional များတွင် 'if' ကို ဖြုတ်ပြီး Inversion ပြုလုပ်ခြင်း - 'Should you...'၊ 'Were I...'၊ 'Had we...' (Formal & Literary)။",
    keyPoints: [
      "1st Conditional Inversion: 'If you need help' -> 'SHOULD you need help, please call'.",
      "2nd Conditional Inversion: 'If I were in your position' -> 'WERE I in your position, I would resign'; 'If they decided' -> 'WERE they TO decide...'.",
      "3rd Conditional Inversion: 'If we had known' -> 'HAD we known the consequences, we would not have invested'.",
      "Negative inversion: put 'not' after the subject (say 'Had we NOT received', NOT 'Hadn't we received')."
    ],
    keyPointsBurmese: [
      "1st Conditional: If ဖြုတ်ပြီး 'Should + Subject + V1' (Should you require assistance...)။",
      "2nd Conditional: If ဖြုတ်ပြီး 'Were + Subject + to + V1' (Were he to resign...)။",
      "3rd Conditional: If ဖြုတ်ပြီး 'Had + Subject + V3' (Had I known...)။",
      "အငြင်းတွင် 'not' ကို ကတ္တားနောက်တွင် ထားရသည် (Had we not known)။"
    ],
    reminderRefs: ["L9"],
    sections: [
      {
        id: "A",
        title: "Conditional Inversion Formulations",
        content: "Omitting 'if' and fronting Should, Were, or Had produces an elevated, formal academic tone.",
        contentBurmese: "If ကို ဖြုတ်၍ Should/Were/Had ကို ရှေ့ထုတ်ခြင်းသည် အလွန် formal ကျသော အရေးအသား ဖြစ်သည်။",
        examples: [
          { text: "Had the directors taken the auditor's advice, the collapse could have been prevented.", note: "Had + subject + past participle (Third conditional inversion)" }
        ]
      }
    ],
    exercises: [
      {
        id: "86.1",
        title: "Exercise 86.1: Conditional Inversion Rewrite",
        instruction: "Rewrite the sentence without 'if'.",
        instructionBurmese: "'If' မပါဘဲ Inversion ဖြင့် ပြန်လည်ရေးပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "If you should encounter any technical issues, please contact customer support.",
            prefix: "Should you ",
            suffix: " any technical issues, please contact support.",
            correctAnswer: ["encounter"],
            explanation: "'Should you encounter...' is the inverted form of 'If you should encounter...'.",
            explanationBurmese: "'Should you encounter' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 87
  {
    id: 87,
    title: "If only and wish: expressing desires, regrets, and hypothetical states",
    category: "adverbial-clauses",
    level: "C1 Advanced",
    summary: "Express present desires/dissatisfaction (wish/if only + past simple), past regrets (wish/if only + past perfect), and complaints about others' behavior (wish + would).",
    summaryBurmese: "ဆန္ဒနှင့် နောင်တဖော်ပြချက်များ (Wish / If only) - လက်ရှိဆန္ဒ (Past Simple)၊ အတိတ်နောင်တ (Past Perfect) နှင့် အပြုအမူကို မကြိုက်၍ မေတ္တာရပ်ခံခြင်း (would + V1)။",
    keyPoints: [
      "'Wish / If only + Past Simple': desire for a different present situation ('I wish I knew Spanish').",
      "'Wish / If only + Past Perfect': regret about a finished past event ('I wish I had accepted that job offer').",
      "'Wish + would + bare infinitive': expressing frustration/complaint about someone else's annoying habit or wanting them to change ('I wish you would stop interrupting me!').",
      "Never say 'I wish I would' for yourself (say 'I wish I could')."
    ],
    keyPointsBurmese: [
      "Wish + Past Simple = လက်ရှိအခြေအနေကို မကျေနပ်၍ တခြားစီဖြစ်ချင်သော ဆန္ဒ (I wish I had more time)။",
      "Wish + Past Perfect (had + V3) = အတိတ်က လုပ်ရပ်အတွက် နောင်တရခြင်း (I wish I hadn't said that)။",
      "Wish + would + V1 = သူတစ်ပါး၏ စိတ်ပျက်ဖွယ် အပြုအမူကို ရပ်တန့်စေလိုခြင်း (I wish it would stop raining)။"
    ],
    reminderRefs: ["L10"],
    sections: [
      {
        id: "A",
        title: "Wish Forms & Temporal Reference",
        content: "Calibrate the backshifted tense according to whether the regret refers to present states or past deeds.",
        contentBurmese: "လက်ရှိအခြေအနေအတွက် Past Simple နှင့် အတိတ်နောင်တအတွက် Past Perfect သုံးသည်။",
        examples: [
          { text: "If only I had listened to your warning before signing the contract!", note: "Past regret -> had listened" }
        ]
      }
    ],
    exercises: [
      {
        id: "87.1",
        title: "Exercise 87.1: Wish & If Only Tense Choice",
        instruction: "Select the correct verb form after wish / if only.",
        instructionBurmese: "Wish / If only နောက်မှ မှန်ကန်သော ကြိယာပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "I feel terrible today; I wish I [hadn't eaten / wouldn't eat] all those rich desserts last night.",
            options: ["hadn't eaten", "didn't eat"],
            correctAnswer: "hadn't eaten",
            explanation: "Regret about an action last night requires past perfect ('hadn't eaten').",
            explanationBurmese: "မနေ့ညက စားခဲ့မိသည်ကို နောင်တရခြင်းဖြစ်၍ 'hadn't eaten' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
