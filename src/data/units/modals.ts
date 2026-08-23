import { GrammarUnit } from "../../types";

export const MODALS_UNITS: GrammarUnit[] = [
  // Unit 15
  {
    id: 15,
    title: "Can, could, be able to and be allowed to: ability and permission",
    category: "modals",
    level: "B2 Intermediate",
    summary: "Distinguish between general past ability (could) vs specific successful single-occasion achievements (was/were able to, managed to).",
    summaryBurmese: "အတိတ်က ယေဘုယျစွမ်းရည် (could) နှင့် တစ်ကြိမ်တစ်ခါ အခက်အခဲကြားမှ အောင်မြင်အောင် လုပ်ဆောင်နိုင်ခဲ့မှု (was/were able to / managed to) ကွာခြားချက်။",
    keyPoints: [
      "General past ability uses 'could': 'When I was young, I could run very fast'.",
      "Specific achievement on a single occasion uses 'was/were able to' or 'managed to' (NOT could): 'The fire spread fast, but everyone was able to escape'.",
      "In negative sentences, 'couldn't' CAN be used for both general ability and specific occasions: 'I couldn't find my keys anywhere'.",
      "With verbs of sense (see, hear, feel, smell, taste) and mental processes (understand, remember), 'could' is used even for specific occasions: 'I could smell smoke'."
    ],
    keyPointsBurmese: [
      "အတိတ်က ယေဘုယျလုပ်တတ်သော စွမ်းရည်တွင် 'could' သုံးသည်။",
      "သီးခြားအချိန်တစ်ခုတွင် အောင်အောင်မြင်မြင် လုပ်ဆောင်နိုင်ခဲ့သည့် ကိစ္စများတွင် 'could' မသုံးရဘဲ 'was/were able to' သို့မဟုတ် 'managed to' သာ သုံးရသည်။",
      "အငြင်းဝါကျတွင်မူ 'couldn't' ကို ၂ မျိုးစလုံးအတွက် သုံးနိုင်သည်။",
      "အာရုံခံစားမှုပြကြိယာများ (hear, see, smell) နှင့်တွဲလျှင် တစ်ကြိမ်တစ်ခါအတွက်လည်း 'could' သုံးနိုင်သည်။"
    ],
    reminderRefs: ["C1", "C2"],
    sections: [
      {
        id: "A",
        title: "Single Occasion Success vs General Ability",
        content: "To say that someone succeeded in doing something in a specific past situation, use was/were able to, managed to, or succeeded in, NOT could.",
        contentBurmese: "သီးသန့်အခြေအနေတစ်ခုတွင် အောင်မြင်စွာ ပြုလုပ်နိုင်ခဲ့ခြင်းအတွက် 'was able to' သုံးရပြီး 'could' မသုံးရပါ။",
        examples: [
          { text: "Despite the heavy blizzard, the rescue team was able to reach the climbers.", note: "Specific occasion success (NOT could reach)" },
          { text: "My grandfather could speak five languages fluently.", note: "General permanent ability" }
        ]
      }
    ],
    exercises: [
      {
        id: "15.1",
        title: "Exercise 15.1: Could vs Was Able To",
        instruction: "Choose could or was/were able to.",
        instructionBurmese: "Could သို့မဟုတ် was/were able to ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Although the door was jammed tightly, the firefighters [were able to / could] break it down.",
            options: ["were able to", "could"],
            correctAnswer: "were able to",
            explanation: "Breaking down a jammed door is a specific single-occasion success, requiring 'were able to'.",
            explanationBurmese: "ပိတ်မိနေသော တံခါးကို ဖျက်ဆီးဖွင့်နိုင်ခဲ့ခြင်းသည် သီးခြားအောင်မြင်မှုဖြစ်၍ 'were able to' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 16
  {
    id: 16,
    title: "Will, would and used to: habits and typical characteristics",
    category: "modals",
    level: "B2 Intermediate",
    summary: "Express characteristic habits, typical behavior (will/would), and past states that no longer exist (used to).",
    summaryBurmese: "ပုံမှန်အလေ့အထ (will/would) နှင့် ယခုအခါ မရှိတော့သော အတိတ်က အခြေအနေများ (used to)။",
    keyPoints: [
      "'Will' expresses typical present habits or characteristics: 'She'll sit by the window for hours reading'.",
      "'Would' expresses typical past repeated habits: 'In summer, we would swim in the river every afternoon'.",
      "'Used to' can describe both past habits AND past states ('I used to live in London'); 'would' cannot describe past states (NOT 'I would live in London').",
      "Stressed 'WILL' or 'WOULD' expresses annoyance at annoying repeated behavior ('He WOULD forget his keys!')."
    ],
    keyPointsBurmese: [
      "လက်ရှိ ပုံမှန်အပြုအမူများတွင် 'will'၊ အတိတ်က ထပ်တလဲလဲ ပြုမူချက်များတွင် 'would' သုံးသည်။",
      "အတိတ်က အခြေအနေ (State) ဖြစ်ပါက 'used to' သာ သုံးရသည် ('would' မသုံးရပါ)။",
      "စိတ်အနှောင့်အယှက်ဖြစ်စေသော အလေ့အထကို ဖော်ပြရာတွင် အသံဖိကာ 'He WOULD do that!' ဟု သုံးသည်။"
    ],
    reminderRefs: ["C3", "C4"],
    sections: [
      {
        id: "A",
        title: "Past Habits (Would vs Used To)",
        content: "Both used to and would describe repeated past actions, but only used to can describe past states.",
        contentBurmese: "ထပ်ခါတလဲလဲလုပ်ရပ်များတွင် နှစ်မျိုးလုံးသုံးနိုင်သော်လည်း၊ အခြေအနေ (state) များတွင် 'used to' သာ သုံးနိုင်သည်။",
        examples: [
          { text: "There used to be a cinema on this corner.", note: "Past state -> only 'used to' (NOT would be)" },
          { text: "Every weekend we would visit our grandparents.", note: "Repeated past action -> both would / used to valid" }
        ]
      }
    ],
    exercises: [
      {
        id: "16.1",
        title: "Exercise 16.1: Would vs Used to",
        instruction: "Select whether 'would' or 'used to' is required.",
        instructionBurmese: "Would သို့မဟုတ် Used to ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "My father [used to / would] have a vintage sports car when he was younger.",
            options: ["used to", "would"],
            correctAnswer: "used to",
            explanation: "'Have a car' is a state, not an action, so only 'used to' is grammatically correct.",
            explanationBurmese: "'Have a car' သည် အခြေအနေ (State) ဖြစ်၍ 'used to' သာ သုံးရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 17
  {
    id: 17,
    title: "May and might: possibility and probability",
    category: "modals",
    level: "B2 Intermediate",
    summary: "Express degrees of possibility in present, future, and counterfactual past situations (might have done vs may have done).",
    summaryBurmese: "ဖြစ်နိုင်ခြေအတိုင်းအတာများ (May / Might) နှင့် အတိတ်က ဖြစ်ပျက်လုနီးပါးဖြစ်ခဲ့သော်လည်း အမှန်တကယ်မဖြစ်ခဲ့သော ကိစ္စများ (might have + V3)။",
    keyPoints: [
      "'May' and 'might' both express present/future possibility with little difference in strength.",
      "'Might' (NOT may) is used for hypothetical conditions: 'If you asked politely, she might help you'.",
      "'Might have + past participle' describes an event that was possible in the past but did not actually happen: 'You were driving so fast! You might have had a crash!'.",
      "'May well / might well' indicates a strong likelihood."
    ],
    keyPointsBurmese: [
      "လက်ရှိ/အနာဂတ် ဖြစ်နိုင်ခြေတွင် may နှင့် might နှစ်မျိုးလုံး သုံးနိုင်သည်။",
      "စိတ်ကူးယဉ် အခြေအနေများ (hypothetical) တွင် 'might' ကို သုံးသည်။",
      "အတိတ်က မတော်တဆဖြစ်လုနီးပါးဖြစ်ခဲ့သော်လည်း အမှန်တကယ် မဖြစ်ခဲ့သည့်ကိစ္စတွင် 'might have + V3' သုံးသည်။"
    ],
    reminderRefs: ["C5", "C6"],
    sections: [
      {
        id: "A",
        title: "Unfulfilled Past Possibility",
        content: "Use might have + past participle to say that something was possible in the past, but didn't happen.",
        contentBurmese: "အတိတ်တွင် ဖြစ်နိုင်ချေရှိခဲ့သော်လည်း လက်တွေ့တွင် မဖြစ်ခဲ့သောအရာအတွက် 'might have + V3' သုံးသည်။",
        examples: [
          { text: "Why did you climb that slippery wall? You might have fallen!", note: "You didn't fall, but it was a serious danger." }
        ]
      }
    ],
    exercises: [
      {
        id: "17.1",
        title: "Exercise 17.1: Modal Possibility",
        instruction: "Select the correct modal phrase.",
        instructionBurmese: "မှန်ကန်သော modal phrase ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "You shouldn't have walked through that dark alley alone! You [might have been / may have been] mugged!",
            options: ["might have been", "could be"],
            correctAnswer: "might have been",
            explanation: "Refers to a dangerous past possibility that luckily did not happen ('might have been').",
            explanationBurmese: "အတိတ်တွင် ဖြစ်သွားနိုင်ခဲ့သည့် အန္တရာယ်အတွက် 'might have been' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 18
  {
    id: 18,
    title: "Must and have (got) to: obligation and deduction",
    category: "modals",
    level: "B2 Intermediate",
    summary: "Contrast internal speaker obligation (must) with external rules/laws (have to), and deduction (must be vs can't be).",
    summaryBurmese: "ပြောသူကိုယ်တိုင်၏ ခံယူချက်အရ တာဝန် (must) နှင့် ပြင်ပဥပဒေ/စည်းကမ်းအရ တာဝန် (have to)၊ ယုတ္တိတန်သော ကောက်ချက်ချမှုများ။",
    keyPoints: [
      "'Must': speaker's personal authority or feeling of obligation ('I must call my parents tonight').",
      "'Have to': external obligation imposed by laws, rules, or external circumstances ('In Britain, you have to drive on the left').",
      "Logical deduction: 'must be' (positive deduction), 'can't be' (negative deduction, NOT 'mustn't be').",
      "Past deduction: 'must have + past participle' ('The ground is wet; it must have rained')."
    ],
    keyPointsBurmese: [
      "ပြောသူကိုယ်တိုင် လိုလားချက်/တာဝန်တွင် 'must'၊ ဥပဒေ/အမိန့်/စည်းကမ်းကြောင့် လုပ်ရလျှင် 'have to' သုံးသည်။",
      "ယုတ္တိအရ သေချာပေါက်ဖြစ်သည်ဟု ကောက်ချက်ချလျှင် 'must be'၊ သေချာပေါက် မဖြစ်နိုင်ဟု ကောက်ချက်ချလျှင် 'can't be' သုံးသည်။",
      "အတိတ်ကောက်ချက်ချမှုတွင် 'must have + V3' သုံးသည်။"
    ],
    reminderRefs: ["C7", "C8"],
    sections: [
      {
        id: "A",
        title: "Deduction: Must be vs Can't be",
        content: "We use must for positive logical deductions, and can't / couldn't for negative deductions.",
        contentBurmese: "ဖြစ်နိုင်ချေ သေချာမှုတွင် 'must be'၊ မဖြစ်နိုင်မှုတွင် 'can't be' သုံးသည်။",
        examples: [
          { text: "He has worked twelve hours without a break; he must be exhausted.", note: "Positive deduction" },
          { text: "That can't be Lucas; he is on holiday in Australia.", note: "Negative deduction (NOT mustn't be)" }
        ]
      }
    ],
    exercises: [
      {
        id: "18.1",
        title: "Exercise 18.1: Deduction & Obligation",
        instruction: "Select must, have to, or can't.",
        instructionBurmese: "Must, have to သို့မဟုတ် can't ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "She only left five minutes ago, so she [can't / mustn't] have arrived at the airport yet.",
            options: ["can't", "mustn't"],
            correctAnswer: "can't",
            explanation: "For negative logical deduction, use 'can't', never 'mustn't'.",
            explanationBurmese: "မဖြစ်နိုင်ကြောင်း ယုတ္တိအရ ကောက်ချက်ချရာတွင် 'can't' သာ သုံးရပြီး 'mustn't' မသုံးရပါ။"
          }
        ]
      }
    ]
  },

  // Unit 19
  {
    id: 19,
    title: "Need(n't), don't need to and needn't have: absence of necessity",
    category: "modals",
    level: "C1 Advanced",
    summary: "Contrast 'needn't have done' (action was done unnecessarily) with 'didn't need to do' (action was unnecessary, so was usually not done).",
    summaryBurmese: "မလိုအပ်ဘဲ လုပ်ခဲ့မိခြင်း (needn't have + V3) နှင့် မလိုအပ်သောကြောင့် မလုပ်ခဲ့ခြင်း (didn't need to + V1) အဓိပ္ပာယ်ကွာခြားချက်။",
    keyPoints: [
      "'Needn't have + past participle': something was done, but in retrospect it was completely unnecessary ('I needn't have bought milk; we already had three bottles').",
      "'Didn't need to + infinitive': it was not necessary, and usually the person did not do it ('I didn't need to set an alarm because it was Sunday').",
      "'Need' can act as both a modal verb ('You needn't come') and a main verb ('You don't need to come')."
    ],
    keyPointsBurmese: [
      "'Needn't have + V3' သည် အမှန်တကယ် လုပ်ခဲ့ပြီးမှ မလိုအပ်မှန်း သိရသော ကိစ္စများတွင် သုံးသည်။",
      "'Didn't need to + V1' သည် မလိုအပ်ကြောင်း ကြိုသိ၍ မလုပ်ခဲ့သော ကိစ္စများတွင် သုံးသည်။"
    ],
    reminderRefs: ["C9"],
    sections: [
      {
        id: "A",
        title: "Needn't have done vs Didn't need to do",
        content: "Needn't have done means the action took place unnecessarily. Didn't need to do means it wasn't necessary (and typically wasn't done).",
        contentBurmese: "Needn't have done သည် မလိုအပ်ဘဲ လုပ်ခဲ့မိခြင်း၊ Didn't need to do သည် မလို၍ မလုပ်ခဲ့ခြင်း ဖြစ်သည်။",
        examples: [
          { text: "We needn't have rushed to the cinema; the film was delayed by 30 minutes.", note: "We rushed, but it was unnecessary." },
          { text: "We didn't need to buy tickets because admission was free.", note: "We knew in advance and didn't buy tickets." }
        ]
      }
    ],
    exercises: [
      {
        id: "19.1",
        title: "Exercise 19.1: Unnecessary Past Actions",
        instruction: "Select needn't have or didn't need to.",
        instructionBurmese: "Needn't have သို့မဟုတ် didn't need to ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "I prepared a huge dinner, but then everyone went out to eat! I [needn't have cooked / didn't need to cook] all that food!",
            options: ["needn't have cooked", "didn't need to cook"],
            correctAnswer: "needn't have cooked",
            explanation: "The cooking was done, but turned out to be unnecessary, requiring 'needn't have cooked'.",
            explanationBurmese: "ချက်ပြုတ်ပြီးမှ မလိုအပ်မှန်း သိရသဖြင့် 'needn't have cooked' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 20
  {
    id: 20,
    title: "Should, ought to and had better: advice and recommendations",
    category: "modals",
    level: "B2 Intermediate",
    summary: "Deliver recommendations (should/ought to) and urgent warnings with specific consequences (had better).",
    summaryBurmese: "ယေဘုယျအကြံပေးချက် (should / ought to) နှင့် မလိုက်နာပါက ဆိုးကျိုးဖြစ်မည့် သတိပေးချက် (had better)။",
    keyPoints: [
      "'Should' and 'ought to' are interchangeable for general advice and moral duty.",
      "'Had better' gives strong, urgent advice where there is a negative consequence if not followed ('You'd better leave now, or you'll miss the flight').",
      "The negative of 'had better' is 'had better NOT' (NOT hadn't better).",
      "'Should have / ought to have + past participle' criticizes past actions ('You should have told me earlier')."
    ],
    keyPointsBurmese: [
      "Should နှင့် ought to သည် ယေဘုယျ အကြံပြုချက်များတွင် အတူတူဖြစ်သည်။",
      "Had better သည် မလုပ်ပါက ပြဿနာကြုံရမည့် သတိပေးချက်ဖြစ်ပြီး အငြင်းတွင် 'had better not' ဟု သုံးရသည်။",
      "အတိတ်က မလုပ်ခဲ့မိသည်ကို ပြစ်တင်ဝေဖန်ရာတွင် 'should have + V3' သုံးသည်။"
    ],
    reminderRefs: ["C10"],
    sections: [
      {
        id: "A",
        title: "Had Better for Urgent Warnings",
        content: "Had better is used for specific situations with a clear impending danger or problem if the advice is ignored.",
        contentBurmese: "မလိုက်နာပါက ပြဿနာတက်မည့် အရေးပေါ်သတိပေးချက်တွင် 'had better' သုံးသည်။",
        examples: [
          { text: "You had better not touch that exposed electrical wire.", note: "Urgent warning of danger" }
        ]
      }
    ],
    exercises: [
      {
        id: "20.1",
        title: "Exercise 20.1: Advice & Warnings",
        instruction: "Select the most appropriate form.",
        instructionBurmese: "မှန်ကန်သော အသုံးကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "We [had better / should have] hurry up, otherwise the grocery store will be closed when we arrive.",
            options: ["had better", "should have"],
            correctAnswer: "had better",
            explanation: "'Had better' provides urgent advice to avoid the consequence of the store closing.",
            explanationBurmese: "ဆိုင်ပိတ်သွားမည့် အကျိုးဆက်ကို ကာကွယ်ရန် အရေးပေါ်အကြံပေးခြင်းဖြစ်၍ 'had better' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
