import { GrammarUnit } from "../../types";

export const FUTURE_UNITS: GrammarUnit[] = [
  // Unit 9
  {
    id: 9,
    title: "Will and be going to: decisions, predictions, and arrangements",
    category: "the-future",
    level: "B2 Intermediate",
    summary: "Distinguish between spontaneous decisions and predictions based on opinion (will) vs prior plans and predictions with present physical evidence (be going to).",
    summaryBurmese: "ချက်ချင်းဆုံးဖြတ်ချက်နှင့် ထင်မြင်ချက်အရ ခန့်မှန်းခြင်း (will) နှင့် ကြိုတင်အစီအစဉ် သို့မဟုတ် လက်ငင်းမျက်မြင်အထောက်အထားအရ ခန့်မှန်းခြင်း (be going to)။",
    keyPoints: [
      "Use 'will' for decisions made at the moment of speaking ('I'll answer the phone').",
      "Use 'be going to' for intentions or plans made before speaking ('I'm going to visit Paris next month').",
      "Use 'be going to' for predictions when there is present, visible evidence ('Look at those clouds! It's going to rain').",
      "Use 'will' for predictions based on general knowledge, opinions, or beliefs ('I think technology will transform medicine')."
    ],
    keyPointsBurmese: [
      "ပြောနေသည့်အချိန်တွင် ချက်ချင်းဆုံးဖြတ်လိုက်သော ကိစ္စများအတွက် 'will' ကို သုံးသည်။",
      "ကြိုတင်ရည်ရွယ်စီစဉ်ထားသော ကိစ္စများနှင့် မျက်မြင်သက်သေရှိသော ခန့်မှန်းချက်များအတွက် 'be going to' ကို သုံးသည်။",
      "ယေဘုယျထင်မြင်ချက် သို့မဟုတ် ယုံကြည်ချက်အရ ခန့်မှန်းရာတွင် 'will' ကို သုံးသည်။"
    ],
    reminderRefs: ["B1", "B2"],
    sections: [
      {
        id: "A",
        title: "Decisions: Instant vs Pre-planned",
        content: "We use will for an instant decision made at the moment of speaking. We use be going to when we have already decided on something before speaking.",
        contentBurmese: "ချက်ချင်းဆုံးဖြတ်ချက်တွင် will သုံးပြီး ကြိုတင်ဆုံးဖြတ်ပြီးသား ကိစ္စတွင် be going to သုံးသည်။",
        examples: [
          { text: "A: The phone is ringing. B: I'll get it.", note: "Instant decision at moment of speech" },
          { text: "I'm going to buy a new laptop this weekend.", note: "Pre-existing plan made earlier" }
        ]
      },
      {
        id: "B",
        title: "Predictions: Evidence vs Belief",
        content: "Use be going to for predictions based on current physical evidence. Use will for predictions based on opinion, experience, or theoretical deduction.",
        contentBurmese: "မျက်မြင်အထောက်အထားရှိလျှင် be going to သုံးပြီး၊ ကိုယ်ပိုင်ထင်မြင်ချက်တွင် will သုံးသည်။",
        examples: [
          { text: "Look at that crane swaying! It's going to collapse!", note: "Visible physical evidence" },
          { text: "I'm sure you will enjoy the conference.", note: "Personal belief/opinion" }
        ]
      }
    ],
    exercises: [
      {
        id: "9.1",
        title: "Exercise 9.1: Will vs Be Going To",
        instruction: "Select will or be going to for each context.",
        instructionBurmese: "ဝါကျအခြေအနေအလိုက် will သို့မဟုတ် be going to ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Look at the dark clouds gathering over the hills. It [is going to rain / will rain] soon.",
            options: ["is going to rain", "will rain"],
            correctAnswer: "is going to rain",
            explanation: "There is direct present physical evidence ('dark clouds'), so 'be going to' is the standard choice.",
            explanationBurmese: "မျက်မြင်သက်သေ (dark clouds) ရှိသောကြောင့် 'is going to rain' ကို ရွေးချယ်ရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 10
  {
    id: 10,
    title: "Present simple and present continuous for the future",
    category: "the-future",
    level: "B2 Intermediate",
    summary: "Use present simple for fixed timetables and schedules, and present continuous for personal arrangements with other people.",
    summaryBurmese: "သတ်မှတ်ထားသော အချိန်ဇယားများ (Present Simple) နှင့် အခြားသူများနှင့် ကြိုတင်ချိန်းဆိုစီစဉ်ထားမှုများ (Present Continuous)။",
    keyPoints: [
      "Present simple is used for fixed public timetables, schedules, programs, and calendar events: 'The train departs at 08:30'.",
      "Present continuous is used for personal arrangements involving other people or definite commitments: 'I'm meeting the director at 3 PM'.",
      "In time clauses after when, as soon as, until, unless: use present simple, not will ('I'll call you when I arrive')."
    ],
    keyPointsBurmese: [
      "အများပြည်သူဆိုင်ရာ အချိန်ဇယား၊ ရထား/လေယာဉ်ထွက်ချိန်များအတွက် Present Simple သုံးသည်။",
      "လူအချင်းချင်း ချိန်းဆိုထားသော ကိုယ်ပိုင်အစီအစဉ်များအတွက် Present Continuous သုံးသည်။",
      "When, as soon as, after စသော time clause များတွင် will မသုံးရဘဲ Present Simple သုံးရသည်။"
    ],
    reminderRefs: ["B3"],
    sections: [
      {
        id: "A",
        title: "Timetables vs Personal Appointments",
        content: "Fixed official timetables use the present simple. Confirmed personal plans with specific people/dates use the present continuous.",
        contentBurmese: "တရားဝင် အချိန်ဇယားများတွင် Present Simple၊ ချိန်းဆိုချက်များတွင် Present Continuous သုံးသည်။",
        examples: [
          { text: "The semester starts on September 15th.", note: "Official calendar/schedule (Present simple)" },
          { text: "We're having dinner with the Johnsons tonight.", note: "Personal social arrangement (Present continuous)" }
        ]
      }
    ],
    exercises: [
      {
        id: "10.1",
        title: "Exercise 10.1: Timetables & Appointments",
        instruction: "Choose between present simple and present continuous.",
        instructionBurmese: "Present Simple နှင့် Present Continuous အနက် အမှန်ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "What time [does your flight leave / is your flight leaving] tomorrow morning?",
            options: ["does your flight leave", "will your flight have left"],
            correctAnswer: "does your flight leave",
            explanation: "Flight schedules follow fixed official timetables, which typically use the present simple ('does your flight leave').",
            explanationBurmese: "လေယာဉ်ထွက်ချိန်သည် တရားဝင်အချိန်ဇယားဖြစ်၍ 'does your flight leave' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 11
  {
    id: 11,
    title: "Future continuous and future perfect (continuous)",
    category: "the-future",
    level: "C1 Advanced",
    summary: "Future continuous (will be doing) for ongoing events at a future point; future perfect (will have done) for completed events before a future time.",
    summaryBurmese: "အနာဂတ်ကာလ သတ်မှတ်ချိန်တွင် ဖြစ်ပျက်နေဆဲအရာ (Future Continuous) နှင့် အနာဂတ်အချိန်မတိုင်မီ ပြီးစီးပြီးဖြစ်မည့်အရာ (Future Perfect)။",
    keyPoints: [
      "Future continuous (will be + -ing): action in progress at a specific future time ('This time tomorrow, I'll be flying to Tokyo').",
      "Future continuous is also used to ask politely about someone's plans without pressuring them ('Will you be using the printer?').",
      "Future perfect (will have + past participle): an event that will be completed before a certain time in the future ('By 2030, they will have completed the bridge').",
      "Future perfect continuous (will have been + -ing): duration of an activity leading up to a future point ('By next month, I will have been working here for 5 years')."
    ],
    keyPointsBurmese: [
      "အနာဂတ်သတ်မှတ်ချိန်တွင် ဖြစ်ပျက်နေဆဲဖြစ်မည့်ကိစ္စအတွက် Future Continuous (will be + V-ing) သုံးသည်။",
      "တစ်စုံတစ်ဦး၏ အစီအစဉ်ကို အားနာစွာ ယဉ်ကျေးစွာ မေးမြန်းလိုသည့်အခါလည်း Future Continuous ကို သုံးနိုင်သည်။",
      "By 2030, by the end of this year စသော အနာဂတ်အချိန်မတိုင်မီ ပြီးစီးသွားမည့်အရာအတွက် Future Perfect (will have + V3) သုံးသည်။"
    ],
    reminderRefs: ["B4", "B5"],
    sections: [
      {
        id: "A",
        title: "Future In-Progress vs Future Completion",
        content: "Use future continuous for actions in progress in the future. Use future perfect with 'by + time' for actions that will finish before that point.",
        contentBurmese: "အနာဂတ်တွင် ဖြစ်ပွားနေဆဲအရာအတွက် Continuous၊ 'by + အချိန်' နှင့်တွဲ၍ ပြီးစီးပြီးဖြစ်မည့်အရာအတွက် Perfect သုံးသည်။",
        examples: [
          { text: "At 10 AM tomorrow, the engineers will be testing the new system.", note: "In progress at 10 AM" },
          { text: "By 5 PM tomorrow, they will have finished all the tests.", note: "Completed before 5 PM" }
        ]
      }
    ],
    exercises: [
      {
        id: "11.1",
        title: "Exercise 11.1: Future Continuous vs Future Perfect",
        instruction: "Select the correct future form.",
        instructionBurmese: "မှန်ကန်သော Future ပုံစံကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "By the time the conference starts next Monday, we [will have finalized / will be finalizing] all our presentations.",
            options: ["will have finalized", "will be finalizing"],
            correctAnswer: "will have finalized",
            explanation: "'By the time...' triggers the future perfect ('will have finalized') to show completion before the conference starts.",
            explanationBurmese: "'By the time...' ကြောင့် ကွန်ဖရင့်မစမီ ပြီးစီးပြီးဖြစ်မည့် 'will have finalized' ကို သုံးသည်။"
          }
        ]
      }
    ]
  },

  // Unit 12
  {
    id: 12,
    title: "Be to + infinitive; be about to + infinitive",
    category: "the-future",
    level: "C1 Advanced",
    summary: "Use 'be to + infinitive' for official instructions and formal arrangements, and 'be about to' for immediate future actions.",
    summaryBurmese: "တရားဝင်အမိန့်နှင့် အစီအစဉ်များအတွက် 'be to + infinitive' နှင့် ချက်ချင်းလက်ငင်းဖြစ်တော့မည့် အနာဂတ်အတွက် 'be about to + infinitive'။",
    keyPoints: [
      "'Be to + infinitive' is used in formal, official announcements and news reports ('The President is to visit Japan next week').",
      "'Be to + infinitive' also expresses official rules or instructions ('You are to report to the manager immediately').",
      "'Be about to + infinitive' means something is on the verge of happening very soon ('Hurry up, the movie is about to start!').",
      "'Be on the brink / point / verge of' are advanced synonyms for 'be about to'."
    ],
    keyPointsBurmese: [
      "တရားဝင် သတင်းထုတ်ပြန်ချက်နှင့် နိုင်ငံတော်အဆင့် အစီအစဉ်များတွင် 'be to + infinitive' ကို သုံးသည်။",
      "စည်းကမ်းနှင့် အမိန့်ပေးရာတွင်လည်း 'You are to...' ဟု သုံးနိုင်သည်။",
      "မကြာမီ စက္ကန့်/မိနစ်ပိုင်းအတွင်း ဖြစ်ပျက်တော့မည့်အရာအတွက် 'be about to + infinitive' သုံးသည်။"
    ],
    reminderRefs: ["B6"],
    sections: [
      {
        id: "A",
        title: "Official Announcements (Be to + Inf)",
        content: "'Be to + infinitive' is common in news broadcasts and formal journalism for planned events.",
        contentBurmese: "သတင်းမီဒီယာများနှင့် တရားဝင်ထုတ်ပြန်ချက်များတွင် 'is/are to + V1' ဖြင့် စီစဉ်ထားမှုကို ဖော်ပြသည်။",
        examples: [
          { text: "The foreign ministers are to meet in Geneva on Friday.", note: "Formal planned event" },
          { text: "The train is about to depart from platform 4.", note: "Immediate future action" }
        ]
      }
    ],
    exercises: [
      {
        id: "12.1",
        title: "Exercise 12.1: Formal Future Structures",
        instruction: "Complete with 'is/are to' or 'is/are about to'.",
        instructionBurmese: "အခြေအနေအလိုက် သင့်တော်သော ပုံစံကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Quiet, please! The conductor [is about to raise / is to raise] his baton to begin the symphony.",
            options: ["is about to raise", "is to raise"],
            correctAnswer: "is about to raise",
            explanation: "The action is imminent (happening in seconds), requiring 'is about to raise'.",
            explanationBurmese: "ချက်ချင်းဖြစ်တော့မည့် အခြေအနေဖြစ်၍ 'is about to raise' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 13
  {
    id: 13,
    title: "Other ways of talking about the future: be bound to, be due to, be set to",
    category: "the-future",
    level: "C1 Advanced",
    summary: "Express certainty, timetables, and anticipated future developments using advanced semi-modal phrases.",
    summaryBurmese: "သေချာပေါက်ဖြစ်မည့်အရာ (be bound to)၊ သတ်မှတ်ချိန်အရဖြစ်မည့်အရာ (be due to) နှင့် အဆင်သင့်ဖြစ်နေမှု (be set to) စသော အဆင့်မြင့်စကားလုံးများ။",
    keyPoints: [
      "'Be bound to + infinitive': certain or inevitable ('With her talent, she is bound to succeed').",
      "'Be due to + infinitive': scheduled to happen at a specific expected time ('The plane is due to land at 14:15').",
      "'Be set to + infinitive': ready or expected to begin soon ('Gas prices are set to rise next month').",
      "'Be likely/unlikely to': express probability."
    ],
    keyPointsBurmese: [
      "'Be bound to' သည် မလွဲမသွေ သေချာပေါက် ဖြစ်လိမ့်မည်ဟု ဆိုလိုသည်။",
      "'Be due to' သည် သတ်မှတ်ထားသော အချိန်အရ ရောက်ရှိ/စတင်မည်ဟု ဆိုလိုသည်။",
      "'Be set to' သည် မကြာမီ စတင်ရန် အဆင်သင့်ဖြစ်နေပြီဟု ဆိုလိုသည်။"
    ],
    reminderRefs: ["B7"],
    sections: [
      {
        id: "A",
        title: "Advanced Future Expressions",
        content: "These expressions add nuance of certainty, schedule, or readiness to future predictions.",
        contentBurmese: "အနာဂတ်အကြောင်း ပြောဆိုရာတွင် ဖြစ်နိုင်ခြေနှင့် သေချာမှုအတိုင်းအတာကို အတိအကျဖော်ပြနိုင်သည်။",
        examples: [
          { text: "There are bound to be difficulties during the transition.", note: "Inevitability" },
          { text: "The new highway is set to open before Christmas.", note: "Ready and scheduled" }
        ]
      }
    ],
    exercises: [
      {
        id: "13.1",
        title: "Exercise 13.1: Nuanced Future Phrasing",
        instruction: "Select the most natural advanced phrase.",
        instructionBurmese: "အသင့်တော်ဆုံး အဆင့်မြင့် phrase ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "If you don't wear a warm coat in this freezing blizzard, you [are bound to / are due to] catch a cold.",
            options: ["are bound to", "are due to"],
            correctAnswer: "are bound to",
            explanation: "'Are bound to' indicates an inevitable outcome from an action.",
            explanationBurmese: "မလွဲမသွေ သေချာပေါက် ဖြစ်လာမည့် အကျိုးဆက်ဖြစ်၍ 'are bound to' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 14
  {
    id: 14,
    title: "The future seen from the past: was going to, would, was to",
    category: "the-future",
    level: "C1 Advanced",
    summary: "Describe future events from a viewpoint in the past: intentions that were fulfilled or unfulfilled, and past destinies.",
    summaryBurmese: "အတိတ်ကာလ ရှုထောင့်မှ အနာဂတ်ကို လှမ်းမျှော်ကြည့်ခြင်း (ဖြစ်မြောက်ခဲ့သော သို့မဟုတ် ပျက်ပြယ်ခဲ့သော ရည်ရွယ်ချက်များနှင့် ကံကြမ္မာများ)။",
    keyPoints: [
      "'Was/were going to': an intention in the past, often one that didn't happen ('I was going to call you, but my phone battery died').",
      "'Would': the past equivalent of 'will' in reported thoughts or storytelling ('He knew that one day he would return').",
      "'Was/were to + infinitive': something that actually happened later as historical fact ('She was to become the first female Prime Minister').",
      "'Was/were to have + past participle': a plan that was not carried out ('The summit was to have taken place in Rome, but was cancelled')."
    ],
    keyPointsBurmese: [
      "'Was going to' သည် အတိတ်က ရည်ရွယ်ခဲ့သော်လည်း အကြောင်းအမျိုးမျိုးကြောင့် မဖြစ်မြောက်ခဲ့သော ကိစ္စများတွင် အသုံးများသည်။",
      "'Was/were to + V1' သည် သမိုင်းမှတ်တမ်းများတွင် နောင်အခါ အမှန်တကယ်ဖြစ်လာခဲ့သော ကံကြမ္မာ/ဖြစ်ရပ်ကို ဖော်ပြသည်။",
      "'Was/were to have + V3' သည် မဖြစ်မြောက်ခဲ့သော စီစဉ်ချက်ကို ဖော်ပြသည်။"
    ],
    reminderRefs: ["B8"],
    sections: [
      {
        id: "A",
        title: "Unfulfilled Intentions vs Historic Destiny",
        content: "Use was going to for intended past actions. Use was to + bare infinitive for historical inevitabilities.",
        contentBurmese: "မဖြစ်မြောက်ခဲ့သော ရည်ရွယ်ချက်အတွက် was going to၊ သမိုင်းဝင်ဖြစ်ရပ်အတွက် was to + V1 သုံးသည်။",
        examples: [
          { text: "We were going to travel by car, but decided on the train instead.", note: "Unfulfilled past plan" },
          { text: "Little did he know that this discovery was to change physics forever.", note: "Historic future from past" }
        ]
      }
    ],
    exercises: [
      {
        id: "14.1",
        title: "Exercise 14.1: Future from the Past",
        instruction: "Select the most accurate form.",
        instructionBurmese: "မှန်ကန်သော ပုံစံကို ရွေးချယ်ပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "I [was going to help / helped] you with your luggage, but you were already finished when I arrived.",
            options: ["was going to help", "am going to help"],
            correctAnswer: "was going to help",
            explanation: "'Was going to help' describes an unfulfilled past intention.",
            explanationBurmese: "အတိတ်က ရည်ရွယ်ခဲ့သော်လည်း မဖြစ်မြောက်ခဲ့သော အစီအစဉ်ဖြစ်၍ 'was going to help' ဖြစ်သည်။"
          }
        ]
      }
    ]
  }
];
