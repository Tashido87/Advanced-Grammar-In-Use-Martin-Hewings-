import { GrammarUnit } from "../../types";

export const PREPOSITIONS_UNITS: GrammarUnit[] = [
  // Unit 88
  {
    id: 88,
    title: "Prepositions of position and direction: at, on, in, into, onto",
    category: "prepositions",
    level: "B2 Intermediate",
    summary: "Contrast static points/surfaces/spaces (at, on, in) with dynamic directional movement (into, onto, towards).",
    summaryBurmese: "တည်နေရာပြ Prepositions (at - အမှတ်အသား၊ on - မျက်နှာပြင်၊ in - အတွင်းပိုင်း) နှင့် ရွေ့လျားမှုပြ Prepositions (into, onto)။",
    keyPoints: [
      "'At': specific precise point, event, or address ('at the bus stop', 'at the conference', 'at 42 Elm Street').",
      "'On': surface, line, floor of building, or public transport ('on the table', 'on the wall', 'on the train', 'on the second floor').",
      "'In': enclosed 3D space, geographic area, town, country ('in the room', 'in Tokyo', 'in the box').",
      "'Into / Onto': show dynamic movement entering a space or landing upon a surface ('He jumped INTO the water', 'The cat climbed ONTO the roof')."
    ],
    keyPointsBurmese: [
      "At = တိကျသော အမှတ်အသား သို့မဟုတ် အခမ်းအနား (at the station, at the party)။",
      "On = မျက်နှာပြင် သို့မဟုတ် အထပ် သို့မဟုတ် အများသုံးယာဉ် (on the wall, on the 3rd floor, on the bus)။",
      "In = အတွင်းပိုင်း သို့မဟုတ် မြို့/နိုင်ငံ (in the kitchen, in Myanmar)။",
      "Into / Onto = ရွေ့လျားမှုပါဝင်သော အထဲသို့/အပေါ်သို့ ဝင်ရောက်ခြင်း။"
    ],
    reminderRefs: ["M1"],
    sections: [
      {
        id: "A",
        title: "Static Position vs Dynamic Motion",
        content: "Static locations take at/on/in; dynamic actions of penetration or boarding take into/onto.",
        contentBurmese: "ငြိမ်သက်နေသော နေရာတွင် at/on/in သုံးပြီး၊ ရွေ့လျားဝင်ရောက်မှုတွင် into/onto သုံးသည်။",
        examples: [
          { text: "She walked into the conference hall and sat in the front row.", note: "into (movement) + in (position)" }
        ]
      }
    ],
    exercises: [
      {
        id: "88.1",
        title: "Exercise 88.1: Position vs Direction Prepositions",
        instruction: "Fill in in, on, at, or into.",
        instructionBurmese: "In, on, at, သို့မဟုတ် into ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "The diver plunged ______ the icy waters of the fjord without hesitation.",
            prefix: "The diver plunged ",
            suffix: " the icy waters.",
            correctAnswer: ["into"],
            explanation: "Dynamic movement entering the water requires 'into'.",
            explanationBurmese: "ရေထဲသို့ ရွေ့လျားခုန်ဆင်းခြင်း (movement) ဖြစ်၍ 'into' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 89
  {
    id: 89,
    title: "Prepositions of time: at, on, in, during, for, since, by, until",
    category: "prepositions",
    level: "B2 Intermediate",
    summary: "Select precise temporal prepositions: 'at' (exact clock times), 'on' (days/dates), 'in' (months/years/centuries), 'by' (deadline) vs 'until' (continuation).",
    summaryBurmese: "အချိန်ပြ Prepositions - at (နာရီအတိအကျ)၊ on (ရက်စွဲ/နေ့ရက်)၊ in (လ/နှစ်)၊ by (နောက်ဆုံးသတ်မှတ်ချိန်) နှင့် until (ထိုအချိန်အထိ ဆက်တိုက်)။",
    keyPoints: [
      "'At': exact times, festivals ('at 5:30', 'at noon', 'at Christmas', 'at night').",
      "'On': days, dates, specific day parts ('on Monday', 'on May 14th', 'on Friday morning').",
      "'In': months, years, seasons, centuries, durations ('in July', 'in 2026', 'in winter', 'in two hours').",
      "'By' vs 'Until': 'by' indicates a deadline on or before a time ('Finish BY 5 PM'); 'until' indicates continuous action up to that point ('Wait UNTIL 5 PM')."
    ],
    keyPointsBurmese: [
      "At = နာရီအချိန်၊ ညအချိန် (at 6:00, at midnight)။",
      "On = နေ့ရက်၊ ရက်စွဲ (on Sunday, on 1st January)။",
      "In = လ၊ နှစ်၊ ရာစု (in 2024, in May)။",
      "By = ထိုအချိန်မတိုင်မီ အပြီးလုပ်ရမည့် သတ်မှတ်ချိန် (deadline)။ Until = ထိုအချိန်အထိ ဆက်တိုက်လုပ်နေခြင်း။"
    ],
    reminderRefs: ["M2"],
    sections: [
      {
        id: "A",
        title: "By (Deadline) vs Until (Duration)",
        content: "By specifies the latest completion milestone; until defines continuous duration terminating at that time.",
        contentBurmese: "By သည် နောက်ဆုံးပြီးရမည့် အချိန်သတ်မှတ်ချက်ဖြစ်ပြီး၊ until သည် ထိုအချိန်အထိ ဆက်လုပ်နေခြင်း ဖြစ်သည်။",
        examples: [
          { text: "All assignments must be submitted by Friday afternoon.", note: "by Friday = on or before Friday (deadline)" },
          { text: "The library remains open until 9 PM.", note: "until 9 PM = continuously up to 9 PM" }
        ]
      }
    ],
    exercises: [
      {
        id: "89.1",
        title: "Exercise 89.1: By vs Until",
        instruction: "Select by or until.",
        instructionBurmese: "By သို့မဟုတ် until ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "You must finish your thesis [by / until] the 30th of June if you wish to graduate this year.",
            options: ["by", "until"],
            correctAnswer: "by",
            explanation: "The 30th of June is a strict deadline (on or before), which requires 'by'.",
            explanationBurmese: "နောက်ဆုံးသတ်မှတ်ရက် (Deadline) ဖြစ်သောကြောင့် 'by' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 90
  {
    id: 90,
    title: "Prepositions after verbs 1: verb + preposition combinations (depend on, agree with)",
    category: "prepositions",
    level: "B2 Intermediate",
    summary: "Master essential dependent prepositions: depend on, rely on, insist on, believe in, succeed in, apologize for, consent to.",
    summaryBurmese: "ကြိယာနှင့် တွဲဖက်သုံးရသော Prepositions (Dependent Prepositions) - depend on, succeed in, apologize for, insist on စသည်တို့။",
    keyPoints: [
      "Verbs with 'ON': concentrate on, depend on, insist on, rely on, congratulate on.",
      "Verbs with 'IN': believe in, specialize in, succeed in, participate in.",
      "Verbs with 'FOR': apologize for, apply for, forgive for, prepare for.",
      "Verbs with 'TO': belong to, consent to, object to, refer to."
    ],
    keyPointsBurmese: [
      "Depend on, rely on, insist on (on ဖြင့် တွဲရသည်)။",
      "Succeed in, believe in, specialize in (in ဖြင့် တွဲရသည်)။",
      "Apologize for, apply for (for ဖြင့် တွဲရသည်)။",
      "Object to, belong to (to ဖြင့် တွဲရသည်)။"
    ],
    reminderRefs: ["M3"],
    sections: [
      {
        id: "A",
        title: "Dependent Preposition Precision",
        content: "Using the correct preposition after specific verbs is essential for fluency and academic accuracy.",
        contentBurmese: "ကြိယာတစ်ခုချင်းစီ၏ မူရင်းတွဲဖက် preposition ကို တိကျစွာ မှတ်သားပါ။",
        examples: [
          { text: "She succeeded in securing funding for the laboratory.", note: "succeed + in + -ing" }
        ]
      }
    ],
    exercises: [
      {
        id: "90.1",
        title: "Exercise 90.1: Verb + Preposition Selection",
        instruction: "Fill in the required preposition.",
        instructionBurmese: "လိုအပ်သော preposition ကို ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "Several prominent shareholders strongly objected ______ the proposed merger.",
            prefix: "Several shareholders objected ",
            suffix: " the proposed merger.",
            correctAnswer: ["to"],
            explanation: "'Object' takes preposition 'to' ('object to something').",
            explanationBurmese: "'Object' သည် 'to' ဖြင့်သာ တွဲရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 91
  {
    id: 91,
    title: "Prepositions after verbs 2: two-object verbs and prepositional verbs",
    category: "prepositions",
    level: "C1 Advanced",
    summary: "Handle complex structures: 'Verb + Object + Preposition' (accuse sb of, blame sb for, protect sb from, remind sb of).",
    summaryBurmese: "ကြိယာ + ကံပုဒ် + Preposition ဖွဲ့စည်းပုံများ - accuse sb of, blame sb for, protect sb from, prevent sb from V-ing။",
    keyPoints: [
      "'Accuse someone OF a crime', 'Charge someone WITH a crime'.",
      "'Blame someone FOR a problem', 'Blame a problem ON someone'.",
      "'Protect / Prevent someone FROM danger / -ing'.",
      "'Remind someone OF something' (= resembles or brings memory) vs 'Remind someone ABOUT something' (= don't forget to do it)."
    ],
    keyPointsBurmese: [
      "Accuse sb OF (စွပ်စွဲသည်)၊ Charge sb WITH (တရားစွဲသည်)။",
      "Blame sb FOR (အပြစ်တင်သည်)၊ Prevent sb FROM -ing (တားဆီးသည်)။",
      "Remind sb OF (သတိရစေသည်/ဆင်တူသည်)၊ Remind sb ABOUT (မမေ့ရန် သတိပေးသည်)။"
    ],
    reminderRefs: ["M4"],
    sections: [
      {
        id: "A",
        title: "Verb + Object + Preposition Collocations",
        content: "Ensure the dependent preposition matches the verb semantics and object configuration.",
        contentBurmese: "ကံပုဒ်ပါရှိသော အဆင့်မြင့် ကြိယာတွဲများ၏ preposition ကို သတိပြုပါ။",
        examples: [
          { text: "The security system prevents unauthorized personnel from entering the facility.", note: "prevent + object + from + -ing" }
        ]
      }
    ],
    exercises: [
      {
        id: "91.1",
        title: "Exercise 91.1: Complex Verb + Preposition Patterns",
        instruction: "Fill in the missing preposition.",
        instructionBurmese: "သင့်တော်သော preposition ကို ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "The police accused the accountant ______ embezzling company funds.",
            prefix: "The police accused him ",
            suffix: " embezzling funds.",
            correctAnswer: ["of"],
            explanation: "'Accuse someone of' is the fixed prepositional collocation.",
            explanationBurmese: "'Accuse someone of' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 92
  {
    id: 92,
    title: "Prepositions after nouns: reason for, decrease in, difference between, solution to",
    category: "prepositions",
    level: "B2 Intermediate",
    summary: "Pair abstract nouns with their fixed dependent prepositions: cause of, reason for, decrease/increase in, answer/solution to.",
    summaryBurmese: "နာမ်နှင့် တွဲဖက်သုံးရသော Prepositions - reason for, increase/decrease in, solution to, difference between စသည်တို့။",
    keyPoints: [
      "Nouns with 'FOR': demand for, need for, reason for, request for.",
      "Nouns with 'IN': decrease in, fall in, increase in, rise in, experience in.",
      "Nouns with 'TO': access to, answer to, damage to, invitation to, reaction to, solution to, key to.",
      "Nouns with 'OF': cause of, photo of, fear of, knowledge of."
    ],
    keyPointsBurmese: [
      "Demand for, reason for, need for (for ဖြင့် တွဲရသည်)။",
      "Increase in, decrease in, rise in (in ဖြင့် တွဲရသည်)။",
      "Solution to, answer to, key to (to ဖြင့် တွဲရသည်)။",
      "Cause of, result of (of ဖြင့် တွဲရသည်)။"
    ],
    reminderRefs: ["M5"],
    sections: [
      {
        id: "A",
        title: "Noun + Preposition Complementation",
        content: "Mastering noun prepositions eliminates common writing errors in IELTS/Cambridge exams.",
        contentBurmese: "စာစီစာကုံးများတွင် နာမ်နှင့် preposition တွဲဖက်မှု မှန်ကန်ရန် အလွန်အရေးကြီးသည်။",
        examples: [
          { text: "There has been a notable increase in renewable energy investments.", note: "increase + in" },
          { text: "Scientists are working on a viable solution to the water crisis.", note: "solution + to" }
        ]
      }
    ],
    exercises: [
      {
        id: "92.1",
        title: "Exercise 92.1: Noun Prepositions",
        instruction: "Fill in in, to, for, or of.",
        instructionBurmese: "In, to, for, သို့မဟုတ် of ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "What was the government's official response ______ the economic crisis?",
            prefix: "What was their response ",
            suffix: " the economic crisis?",
            correctAnswer: ["to"],
            explanation: "'Response' takes preposition 'to' ('response to something').",
            explanationBurmese: "'Response to' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 93
  {
    id: 93,
    title: "Prepositions after adjectives: accustomed to, keen on, capable of, good at",
    category: "prepositions",
    level: "B2 Intermediate",
    summary: "Deploy precise dependent prepositions after descriptive adjectives: capable of, aware of, interested in, keen on, famous for, married to.",
    summaryBurmese: "နာမဝိသေသနနှင့် တွဲဖက်သုံးရသော Prepositions - capable of, good at, keen on, proud of, famous for, married to စသည်တို့။",
    keyPoints: [
      "Adjectives with 'AT': brilliant at, good at, terrible at, surprised at.",
      "Adjectives with 'OF': afraid of, aware of, capable of, jealous of, proud of, typical of.",
      "Adjectives with 'TO': accustomed to, addicted to, married to, similar to, opposed to.",
      "Adjectives with 'ABOUT': anxious about, curious about, excited about, furious about.",
      "Never say 'married with' (say 'married TO')."
    ],
    keyPointsBurmese: [
      "Good at, bad at, clever at (at ဖြင့် တွဲရသည်)။",
      "Capable of, aware of, proud of (of ဖြင့် တွဲရသည်)။",
      "Accustomed to, married to, similar to (to ဖြင့် တွဲရသည် - 'married with' လုံးဝမသုံးရပါ)။",
      "Keen on, interested in, famous for။"
    ],
    reminderRefs: ["M6"],
    sections: [
      {
        id: "A",
        title: "Adjective Preposition Systems",
        content: "Follow adjectives with their obligatory prepositions, followed by noun phrases or -ing gerunds.",
        contentBurmese: "Adjective နောက်မှ preposition နှင့် ၎င်းနောက်တွင် Noun သို့မဟုတ် V-ing လိုက်ရသည်။",
        examples: [
          { text: "She is capable of managing complex multinational projects.", note: "capable + of + -ing" },
          { text: "He is married to a talented neurosurgeon.", note: "married + to (NOT married with)" }
        ]
      }
    ],
    exercises: [
      {
        id: "93.1",
        title: "Exercise 93.1: Adjective + Preposition Collocations",
        instruction: "Select the correct preposition.",
        instructionBurmese: "မှန်ကန်သော preposition ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "She was completely unaware [of / about] the sudden changes in company policy.",
            options: ["of", "about"],
            correctAnswer: "of",
            explanation: "'Unaware' takes preposition 'of' ('unaware of something').",
            explanationBurmese: "'Unaware of' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
