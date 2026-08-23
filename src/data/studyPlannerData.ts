import { StudyPlannerQuestion } from "../types";

export const STUDY_PLANNER_QUESTIONS: StudyPlannerQuestion[] = [
  // Section 1: Tenses (1.1 - 1.15)
  {
    id: "1.1",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "'Who ______ ?' '______ to get through to Misaki.'",
    options: [
      { label: "A", text: "do you phone ... I'm trying" },
      { label: "B", text: "are you phoning ... I'm trying" },
      { label: "C", text: "are you phoning ... I try" },
      { label: "D", text: "do you phone ... I try" }
    ],
    correctAnswer: "B",
    reminderRef: "A1",
    unitRef: "1, 2",
    explanation: "We use the present continuous (are you phoning / I'm trying) to talk about activities that are in progress at the time of speaking.",
    explanationBurmese: "စကားပြောနေသည့်အချိန်၌ တိုက်ရိုက်ဖြစ်ပျက်နေသော လုပ်ဆောင်ချက်ဖြစ်သောကြောင့် Present Continuous (are you phoning ... I'm trying) ကို သုံးရပါမည်။"
  },
  {
    id: "1.2",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "______ to Turkey every year for your holidays?",
    options: [
      { label: "A", text: "Are you going" },
      { label: "B", text: "Were you going" },
      { label: "C", text: "Have you gone" },
      { label: "D", text: "Do you go" }
    ],
    correctAnswer: "D",
    reminderRef: "A5",
    unitRef: "1, 2",
    explanation: "We use the present simple (Do you go) to talk about habits or regular repeated events (every year).",
    explanationBurmese: "နှစ်စဉ် ပုံမှန်ပြုလုပ်နေကျ အလေ့အထ (regular habit) ဖြစ်သောကြောင့် Present Simple (Do you go) ကို သုံးရပါမည်။"
  },
  {
    id: "1.3",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "I ______ you park outside the city and get the bus to the centre.",
    options: [
      { label: "A", text: "am suggesting" },
      { label: "B", text: "suggests" },
      { label: "C", text: "suggest" },
      { label: "D", text: "was suggesting" }
    ],
    correctAnswer: "C",
    reminderRef: "A1-A5",
    unitRef: "1, 2",
    explanation: "Suggest is a performative verb. Verbs which perform the action they describe usually take the present simple in affirmative sentences.",
    explanationBurmese: "Suggest ကဲ့သို့သော Performative verb (ပြောရင်းနှင့် လုပ်ဆောင်ချက်ဖြစ်သွားသော ကြိယာများ) သည် Affirmative ဝါကျတွင် Present Simple ပုံစံဖြင့်သာ အသုံးပြုရပါသည်။"
  },
  {
    id: "1.4",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "Sophia ______ me that you're thinking of emigrating.",
    options: [
      { label: "A", text: "told" },
      { label: "B", text: "tells" },
      { label: "C", text: "is telling" },
      { label: "D", text: "tell" }
    ],
    correctAnswer: "A, B", // Both A and B are possible in English; Key to Study planner accepts B or A (B is listed on p.273)
    reminderRef: "A1-A5",
    unitRef: "2, 1",
    explanation: "We can use the present simple ('Sophia tells me...') to introduce news that we have heard, or past simple ('told').",
    explanationBurmese: "မိမိကြားသိရသော သတင်းအချက်အလက်ကို မိတ်ဆက်ပြောကြားရာတွင် 'Sophia tells me...' ဟု Present Simple သို့မဟုတ် Past Simple 'told' ကို အသုံးပြုနိုင်ပါသည်။"
  },
  {
    id: "1.5",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "Aisha ______ a few minutes ago.",
    options: [
      { label: "A", text: "has left" },
      { label: "B", text: "leaves" },
      { label: "C", text: "left" },
      { label: "D", text: "had left" }
    ],
    correctAnswer: "C",
    reminderRef: "A6",
    unitRef: "3, 4, 5",
    explanation: "We use the past simple ('left') with past time adverbials such as 'a few minutes ago'.",
    explanationBurmese: "အတိတ်အချိန်ပြစကားစု 'a few minutes ago' ပါရှိသောကြောင့် Past Simple ('left') ကိုသာ သုံးရပါမည်။"
  },
  {
    id: "1.6",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "We ______ to the tennis club since we moved here.",
    options: [
      { label: "A", text: "have belonged" },
      { label: "B", text: "belong" },
      { label: "C", text: "belonged" },
      { label: "D", text: "are belonging" }
    ],
    correctAnswer: "A",
    reminderRef: "A11",
    unitRef: "3, 6",
    explanation: "We use the present perfect ('have belonged') to talk about a state that started in the past and continues to the present with 'since'. Also 'belong' is a state verb.",
    explanationBurmese: "အတိတ်မှစတင်ပြီး ယခုတိုင် ဆက်လက်ဖြစ်တည်နေသော အခြေအနေအတွက် 'since' နှင့်တွဲ၍ Present Perfect ('have belonged') ကို သုံးရပါသည်။"
  },
  {
    id: "1.7",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "After she ______ hospital, she had a long holiday.",
    options: [
      { label: "A", text: "leaves" },
      { label: "B", text: "is leaving" },
      { label: "C", text: "has left" },
      { label: "D", text: "left" }
    ],
    correctAnswer: "D",
    reminderRef: "A6",
    unitRef: "3, 4, 5",
    explanation: "With past time clauses after 'after', when the main clause is past ('she had a long holiday'), we use the past simple ('left') or past perfect ('had left').",
    explanationBurmese: "ပင်မဝါကျသည် အတိတ်ဖြစ်သောကြောင့် 'after' ပါသော time clause တွင် Past Simple ('left') ကို သုံးရပါသည်။"
  },
  {
    id: "1.8",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "When he realised I ______ at him, he ______ away.",
    options: [
      { label: "A", text: "looked ... was turning" },
      { label: "B", text: "was looking ... turned" },
      { label: "C", text: "was looking ... was turning" },
      { label: "D", text: "looked ... turned" }
    ],
    correctAnswer: "B",
    reminderRef: "A13",
    unitRef: "4, 7",
    explanation: "We use the past continuous ('was looking') for an activity in progress, and the past simple ('turned') for a single completed action that happened.",
    explanationBurmese: "အတိတ်တွင် ဖြစ်ပျက်နေဆဲအခြေအနေ (was looking) နှင့် ရုတ်တရက်ဖြစ်ပေါ်သွားသော ပြီးပြတ်လုပ်ဆောင်ချက် (turned) ကို ခွဲခြားဖော်ပြပါသည်။"
  },
  {
    id: "1.9",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "When the builders were here I ______ them cups of tea all the time.",
    options: [
      { label: "A", text: "was making" },
      { label: "B", text: "am making" },
      { label: "C", text: "made" },
      { label: "D", text: "make" }
    ],
    correctAnswer: "A, C", // A or C
    reminderRef: "A13",
    unitRef: "4, 7",
    explanation: "Both 'was making' (to emphasise repeated actions over a temporary period) and 'made' (completed past habit) are possible.",
    explanationBurmese: "ယာယီကာလအတွင်း ထပ်ခါတလဲလဲပြုလုပ်ခြင်းကို အလေးပေးလိုပါက 'was making' (Past continuous) သို့မဟုတ် 'made' (Past simple) နှစ်မျိုးလုံး သုံးနိုင်ပါသည်။"
  },
  {
    id: "1.10",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "When I went into the bathroom, I found that the bath ______ .",
    options: [
      { label: "A", text: "overflows" },
      { label: "B", text: "overflowed" },
      { label: "C", text: "had overflowed" },
      { label: "D", text: "is overflowing" }
    ],
    correctAnswer: "C",
    reminderRef: "A14",
    unitRef: "5, 7",
    explanation: "We use the past perfect ('had overflowed') to show that an event happened before another event in the past ('I found').",
    explanationBurmese: "အတိတ်တွင် တစ်ခုထက်စော၍ ပြီးဆုံးနှင့်နေသော လုပ်ဆောင်ချက်ဖြစ်၍ Past Perfect ('had overflowed') ကို သုံးရပါသည်။"
  },
  {
    id: "1.11",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "I was sure that I ______ him before.",
    options: [
      { label: "A", text: "had met" },
      { label: "B", text: "am meeting" },
      { label: "C", text: "meet" },
      { label: "D", text: "met" }
    ],
    correctAnswer: "A",
    reminderRef: "A14",
    unitRef: "5, 7",
    explanation: "We use the past perfect ('had met') because the meeting happened before the past moment of being sure.",
    explanationBurmese: "အတိတ်အချိန်မတိုင်မီ ကြိုတင်တွေ့ဆုံခဲ့ဖူးခြင်းဖြစ်၍ Past Perfect ('had met') သုံးရပါသည်။"
  },
  {
    id: "1.12",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "Your eyes are red – ______ ?",
    options: [
      { label: "A", text: "did you cry" },
      { label: "B", text: "have you been crying" },
      { label: "C", text: "have you cried" },
      { label: "D", text: "do you cry" }
    ],
    correctAnswer: "B",
    reminderRef: "A17",
    unitRef: "6",
    explanation: "We use the present perfect continuous ('have you been crying') when we see present evidence/results of a recently finished continuous activity.",
    explanationBurmese: "မျက်စိနီရဲနေသည့် မျက်မှောက်သက်သေအထောက်အထား (present evidence) ကို မြင်တွေ့ရသောကြောင့် Present Perfect Continuous ('have you been crying') ကို သုံးရပါသည်။"
  },
  {
    id: "1.13",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "______ this holiday for ages.",
    options: [
      { label: "A", text: "We're looking forward to" },
      { label: "B", text: "We've been looking forward to" },
      { label: "C", text: "We look forward to" },
      { label: "D", text: "We've looked forward to" }
    ],
    correctAnswer: "B, D",
    reminderRef: "A16",
    unitRef: "6, 3",
    explanation: "With 'for ages' describing an ongoing state or activity up to now, both present perfect continuous ('We've been looking forward to') and present perfect simple ('We've looked forward to') can be used.",
    explanationBurmese: "'for ages' (ကာလကြာရှည်စွာ) ပါဝင်ပြီး ယခုထိဆက်လက်စောင့်မျှော်နေခြင်းဖြစ်၍ B သို့မဟုတ် D နှစ်မျိုးလုံး သုံးနိုင်ပါသည်။"
  },
  {
    id: "1.14",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "When I saw the vase on the website, I knew it was exactly what I ______ .",
    options: [
      { label: "A", text: "looked for" },
      { label: "B", text: "look for" },
      { label: "C", text: "had been looking for" },
      { label: "D", text: "have looked for" }
    ],
    correctAnswer: "C",
    reminderRef: "A18",
    unitRef: "7",
    explanation: "We use the past perfect continuous ('had been looking for') to talk about an activity that was in progress over a period up to a past point in time.",
    explanationBurmese: "အတိတ်ကာလမတိုင်မီကတည်းက ကြာရှည်ရှာဖွေနေခဲ့သောအခြေအနေဖြစ်၍ Past Perfect Continuous ('had been looking for') ဖြစ်ပါသည်။"
  },
  {
    id: "1.15",
    sectionNumber: 1,
    sectionName: "Tenses",
    prompt: "______ hard all year, so I felt that I deserved a holiday.",
    options: [
      { label: "A", text: "I work" },
      { label: "B", text: "I'd been working" },
      { label: "C", text: "I'd worked" },
      { label: "D", text: "I'm working" }
    ],
    correctAnswer: "B, C",
    reminderRef: "A18",
    unitRef: "7, 4, 5",
    explanation: "We can often use either past perfect continuous ('I'd been working') or past perfect ('I'd worked') with similar meaning to describe an activity prior to a past feeling.",
    explanationBurmese: "အတိတ်ခံစားချက်မတိုင်မီ တစ်နှစ်ပတ်လုံး ပင်ပန်းစွာအလုပ်လုပ်ခဲ့ခြင်းအတွက် B သို့မဟုတ် C နှစ်မျိုးလုံး မှန်ကန်ပါသည်။"
  },

  // Section 2: The future (2.1 - 2.11)
  {
    id: "2.1",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "I ______ one of my special desserts for dinner, if you like.",
    options: [
      { label: "A", text: "make" },
      { label: "B", text: "'m going to make" },
      { label: "C", text: "'ll make" },
      { label: "D", text: "'m making" }
    ],
    correctAnswer: "C",
    reminderRef: "B3",
    unitRef: "9",
    explanation: "We use 'will' ('ll make) when making spontaneous offers or expressing willingness at the moment of speaking.",
    explanationBurmese: "စကားပြောနေစဉ် ချက်ချင်းကမ်းလှမ်းခြင်း (offer) ပြုလုပ်သောအခါ 'will' ('ll make) ကို သုံးရပါသည်။"
  },
  {
    id: "2.2",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "If Erik phones I ______ you know.",
    options: [
      { label: "A", text: "'m going to let" },
      { label: "B", text: "let" },
      { label: "C", text: "'m letting" },
      { label: "D", text: "'ll let" }
    ],
    correctAnswer: "D",
    reminderRef: "B3",
    unitRef: "9",
    explanation: "In an if-sentence when the main clause refers to an offer, promise, or intention made conditionally, we use 'will' ('ll let), not 'be going to'.",
    explanationBurmese: "If-clause နောက်ဆက် ပင်မဝါကျတွင် ကတိပေးခြင်း သို့မဟုတ် ကမ်းလှမ်းခြင်းဖြစ်ပါက 'will' ('ll let) ကို သုံးရပါသည်။"
  },
  {
    id: "2.3",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "'Has anybody offered to look after the children?' 'Sophia ______ it.'",
    options: [
      { label: "A", text: "is to do" },
      { label: "B", text: "'s going to do" },
      { label: "C", text: "does" },
      { label: "D", text: "will do" }
    ],
    correctAnswer: "B, D", // Key p.273 lists B, D (B when decision was made before, D for willingness)
    reminderRef: "B5",
    unitRef: "9",
    explanation: "We use 'be going to' ('s going to do) when reporting a decision made previously, or 'will' ('will do) for willingness.",
    explanationBurmese: "ယခင်ကတည်းက ကြိုတင်ဆုံးဖြတ်ထားပြီးဖြစ်ပါက 'is going to do' သို့မဟုတ် ဆန္ဒရှိမှုကိုဖော်ပြလိုပါက 'will do' ကို သုံးနိုင်ပါသည်။"
  },
  {
    id: "2.4",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "The next train to Dublin ______ at 3:45. (station announcement)",
    options: [
      { label: "A", text: "will leave" },
      { label: "B", text: "is leaving" },
      { label: "C", text: "is going to leave" },
      { label: "D", text: "leaves" }
    ],
    correctAnswer: "A, D", // D (leaves) is preferred for timetables, A also used
    reminderRef: "B6",
    unitRef: "10",
    explanation: "We use the present simple ('leaves') for fixed timetables and schedules, though 'will leave' is also possible in formal announcements.",
    explanationBurmese: "အချိန်ဇယား သတ်မှတ်ချက် (Timetable) ဖြစ်သောကြောင့် Present Simple ('leaves') သို့မဟုတ် 'will leave' ကို သုံးပါသည်။"
  },
  {
    id: "2.5",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "When you ______ Ben, tell him he still owes me some money.",
    options: [
      { label: "A", text: "are going to see" },
      { label: "B", text: "are seeing" },
      { label: "C", text: "see" },
      { label: "D", text: "will see" }
    ],
    correctAnswer: "C",
    reminderRef: "B6",
    unitRef: "10",
    explanation: "In time clauses introduced by when, as soon as, before, etc., we use the present simple ('see'), not 'will' or 'going to'.",
    explanationBurmese: "When ပါသော time clause များတွင် အနာဂတ်အကြောင်းပြောလျှင်တောင် 'will' မသုံးရဘဲ Present Simple ('see') ကိုသာ သုံးရပါသည်။"
  },
  {
    id: "2.6",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "We ______ a party next Saturday. Can you come?",
    options: [
      { label: "A", text: "'re to have" },
      { label: "B", text: "'re having" },
      { label: "C", text: "have" },
      { label: "D", text: "'ll have" }
    ],
    correctAnswer: "B",
    reminderRef: "B7",
    unitRef: "10",
    explanation: "We use the present continuous ('re having') to talk about personal arrangements that have already been made for the future.",
    explanationBurmese: "ကြိုတင်စီစဉ်ပြင်ဆင်ပြီးသော ကိုယ်ပိုင်အစီအစဉ်များ (personal arrangements) အတွက် Present Continuous ('re having') ကို သုံးရပါသည်။"
  },
  {
    id: "2.7",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "After the operation you ______ any sport for a while.",
    options: [
      { label: "A", text: "won't be doing" },
      { label: "B", text: "aren't doing" },
      { label: "C", text: "don't do" },
      { label: "D", text: "won't to do" }
    ],
    correctAnswer: "A",
    reminderRef: "B8",
    unitRef: "11",
    explanation: "We use the future continuous ('won't be doing') to talk about an activity happening over a period in the future as a natural consequence of events.",
    explanationBurmese: "အနာဂတ်ကာလ အပိုင်းအခြားတစ်ခုအတွင်း ဖြစ်ပေါ်လာမည့် အခြေအနေအတွက် Future Continuous ('won't be doing') ကို သုံးပါသည်။"
  },
  {
    id: "2.8",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "When the race starts later this afternoon the drivers ______ for drier weather than last year.",
    options: [
      { label: "A", text: "were hoping" },
      { label: "B", text: "are hoping" },
      { label: "C", text: "hope" },
      { label: "D", text: "will be hoping" }
    ],
    correctAnswer: "D",
    reminderRef: "B8",
    unitRef: "11",
    explanation: "We use the future continuous ('will be hoping') because the activity will already be in progress when the race starts in the future.",
    explanationBurmese: "အနာဂတ်တွင် ပြိုင်ပွဲစတင်ချိန်၌ ကြိုတင်မျှော်လင့်နေဆဲဖြစ်မည့် အခြေအနေဖြစ်၍ Future Continuous ('will be hoping') ကို သုံးရပါသည်။"
  },
  {
    id: "2.9",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "In the next few years, thousands of speed cameras ______ on major roads.",
    options: [
      { label: "A", text: "are appear" },
      { label: "B", text: "will appear" },
      { label: "C", text: "are to appear" },
      { label: "D", text: "are appearing" }
    ],
    correctAnswer: "B, C",
    reminderRef: "B",
    unitRef: "12",
    explanation: "'Be to + infinitive' ('are to appear') is used in formal/news contexts for official future arrangements, and 'will appear' is also standard.",
    explanationBurmese: "တရားဝင်အစီအစဉ်များ သို့မဟုတ် သတင်းအရေးအသားတွင် 'are to appear' (be to + infinitive) သို့မဟုတ် 'will appear' ကို သုံးပါသည်။"
  },
  {
    id: "2.10",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "I ______ to Bangkok by the end of June.",
    options: [
      { label: "A", text: "aim getting" },
      { label: "B", text: "'m aiming getting" },
      { label: "C", text: "aim to get" },
      { label: "D", text: "'m aiming to get" }
    ],
    correctAnswer: "C, D",
    reminderRef: "B",
    unitRef: "13",
    explanation: "The verb 'aim' takes 'to-infinitive', and can be used in either present simple ('aim to get') or present continuous ('am aiming to get') to talk about intentions.",
    explanationBurmese: "'Aim' ကြိယာသည် 'to-infinitive' လိုက်ရပြီး ရည်ရွယ်ချက်ဖော်ပြရာတွင် Present Simple (aim to get) သို့မဟုတ် Continuous (am aiming to get) နှစ်မျိုးလုံး သုံးနိုင်ပါသည်။"
  },
  {
    id: "2.11",
    sectionNumber: 2,
    sectionName: "The future",
    prompt: "We ______ each other later that day, but I had to phone and cancel.",
    options: [
      { label: "A", text: "see" },
      { label: "B", text: "are seeing" },
      { label: "C", text: "were seeing" },
      { label: "D", text: "saw" }
    ],
    correctAnswer: "C",
    reminderRef: "B",
    unitRef: "14",
    explanation: "We use past continuous ('were seeing') to talk about an arrangement made in the past that was future at that time (the future seen from the past).",
    explanationBurmese: "အတိတ်ကာလတွင် ပြုလုပ်ခဲ့သော အနာဂတ်အစီအစဉ် (Future seen from the past) အတွက် Past Continuous ('were seeing') ကို သုံးရပါသည်။"
  },

  // Section 3: Modals and semi-modals (3.1 - 3.12)
  {
    id: "3.1",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "Despite yesterday's snowfalls, we ______ home in less than an hour.",
    options: [
      { label: "A", text: "could drive" },
      { label: "B", text: "can drive" },
      { label: "C", text: "were able to drive" },
      { label: "D", text: "are able to drive" }
    ],
    correctAnswer: "C",
    reminderRef: "C5",
    unitRef: "15",
    explanation: "To talk about ability to achieve something in a specific, single past situation (a specific achievement against odds), we use 'were able to', not 'could'.",
    explanationBurmese: "အတိတ်က သီးခြားအခြေအနေတစ်ခုတွင် အောင်မြင်စွာ လုပ်ဆောင်နိုင်ခဲ့သည့် စွမ်းဆောင်ရည် (single achievement) အတွက် 'were able to' ကို သုံးရပြီး 'could' မသုံးရပါ။"
  },
  {
    id: "3.2",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "She swam strongly and ______ cross the river easily, even though it was swollen by the heavy rain.",
    options: [
      { label: "A", text: "can" },
      { label: "B", text: "was able to" },
      { label: "C", text: "could" },
      { label: "D", text: "is able to" }
    ],
    correctAnswer: "B",
    reminderRef: "C5",
    unitRef: "15",
    explanation: "We use 'was able to' for a single completed achievement in the past.",
    explanationBurmese: "အတိတ်က သီးသန့်အောင်မြင်မှုတစ်ခုအတွက် 'was able to' သုံးရပါသည်။"
  },
  {
    id: "3.3",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "______ me to get you some water?",
    options: [
      { label: "A", text: "Would you like" },
      { label: "B", text: "Should you like" },
      { label: "C", text: "Shall you like" },
      { label: "D", text: "Will you like" }
    ],
    correctAnswer: "A",
    reminderRef: "C12",
    unitRef: "16",
    explanation: "We use 'Would you like...' to make an offer. We don't use 'Will you like...' or 'Should you like...'.",
    explanationBurmese: "ယဉ်ကျေးစွာ ကမ်းလှမ်းမှုပြုလုပ်ရာတွင် 'Would you like me to...' ဟုသာ သုံးရပါသည်။"
  },
  {
    id: "3.4",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "We ______ Switzerland four times during the 2010s.",
    options: [
      { label: "A", text: "would visit" },
      { label: "B", text: "used to visit" },
      { label: "C", text: "visit" },
      { label: "D", text: "visited" }
    ],
    correctAnswer: "D",
    reminderRef: "C13",
    unitRef: "16",
    explanation: "When we say exactly how many times something happened in total ('four times'), we use the past simple ('visited'), not 'used to' or 'would'.",
    explanationBurmese: "အကြိမ်အရေအတွက် အတိအကျ ('four times') ဖော်ပြပါက 'used to' သို့မဟုတ် 'would' မသုံးရဘဲ Past Simple ('visited') ကိုသာ သုံးရပါသည်။"
  },
  {
    id: "3.5",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "'While we're in Moscow shall we go and see Dariya?' 'But it's been nearly 20 years since we last saw her. She ______ remember us.'",
    options: [
      { label: "A", text: "can't" },
      { label: "B", text: "couldn't" },
      { label: "C", text: "may not" },
      { label: "D", text: "might not" }
    ],
    correctAnswer: "C, D",
    reminderRef: "C17",
    unitRef: "17",
    explanation: "In negative sentences, we use 'may not' or 'might not' to say it is possible that something is not true or will not happen.",
    explanationBurmese: "မဖြစ်နိုင်ခြေ သို့မဟုတ် မမှတ်မိနိုင်ခြေရှိသည်ဟု ယူဆရာတွင် 'may not' သို့မဟုတ် 'might not' ကို သုံးပါသည်။"
  },
  {
    id: "3.6",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "During the war, the police ______ arrest you for criticising the government.",
    options: [
      { label: "A", text: "may" },
      { label: "B", text: "might" },
      { label: "C", text: "should" },
      { label: "D", text: "could" }
    ],
    correctAnswer: "B, D",
    reminderRef: "C",
    unitRef: "17",
    explanation: "'Might' or 'could' + bare infinitive can be used in formal/literary English to talk about what was typically possible or permitted in the past.",
    explanationBurmese: "အတိတ်ကာလတွင် ယေဘုယျအားဖြင့် ဖြစ်ပျက်နိုင်သော ခွင့်ပြုချက် သို့မဟုတ် အာဏာရှိမှုကို formal ပုံစံဖြင့် 'might' သို့မဟုတ် 'could' သုံးနိုင်သည်။"
  },
  {
    id: "3.7",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "'I'm seeing Dr Evans next week.' 'That ______ be right. He's on holiday then.'",
    options: [
      { label: "A", text: "mustn't" },
      { label: "B", text: "can't" },
      { label: "C", text: "hasn't to" },
      { label: "D", text: "hasn't got to" }
    ],
    correctAnswer: "B",
    reminderRef: "C23",
    unitRef: "18",
    explanation: "When we draw a negative conclusion from evidence that something is impossible, we use 'can't', not 'mustn't'.",
    explanationBurmese: "သက်သေအထောက်အထားအရ မဖြစ်နိုင်ကြောင်း အငြင်းကောက်ချက်ချရာတွင် (negative deduction) 'can't' ကို သုံးရပြီး 'mustn't' မသုံးရပါ။"
  },
  {
    id: "3.8",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "I can't access the database. You ______ a password.",
    options: [
      { label: "A", text: "must have got to put in" },
      { label: "B", text: "must've to put in" },
      { label: "C", text: "must have to put in" },
      { label: "D", text: "must put in" }
    ],
    correctAnswer: "C",
    reminderRef: "C20",
    unitRef: "18",
    explanation: "We can use 'must have to' to draw a conclusion based on what we know about a situation.",
    explanationBurmese: "လက်ရှိအခြေအနေအရ လိုအပ်ချက်တစ်ခုရှိရမည်ဟု ကောက်ချက်ချရာတွင် 'must have to' ကို သုံးပါသည်။"
  },
  {
    id: "3.9",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "I ______ an interview because I'd worked there before.",
    options: [
      { label: "A", text: "didn't have to have" },
      { label: "B", text: "needn't have had" },
      { label: "C", text: "didn't need to have" },
      { label: "D", text: "needn't have" }
    ],
    correctAnswer: "A, C",
    reminderRef: "C27",
    unitRef: "19",
    explanation: "When it was not necessary in the past and so the action wasn't done, we use 'didn't have to' or 'didn't need to' (unlike 'needn't have done' where it was done unnecessarily).",
    explanationBurmese: "အတိတ်တွင် မလိုအပ်သောကြောင့် အင်တာဗျူး မဖြေခဲ့ရသည့်အတွက် 'didn't have to' သို့မဟုတ် 'didn't need to' ကို သုံးရပါသည်။"
  },
  {
    id: "3.10",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "Nowadays it ______ cost a fortune to own an eBook reader.",
    options: [
      { label: "A", text: "hasn't to" },
      { label: "B", text: "needn't" },
      { label: "C", text: "doesn't have to" },
      { label: "D", text: "mustn't" }
    ],
    correctAnswer: "B, C",
    reminderRef: "C25",
    unitRef: "19",
    explanation: "We can use 'needn't' or 'doesn't have to' to say that something is not necessarily true.",
    explanationBurmese: "ထိုအရာသည် မဖြစ်မနေ မလိုအပ်/မှန်ကန်ဖို့မလိုဟု ဖော်ပြရာတွင် 'needn't' သို့မဟုတ် 'doesn't have to' ကို သုံးနိုင်ပါသည်။"
  },
  {
    id: "3.11",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "Walking under a ladder ______ be unlucky.",
    options: [
      { label: "A", text: "is suppose to" },
      { label: "B", text: "should" },
      { label: "C", text: "ought to" },
      { label: "D", text: "is supposed to" }
    ],
    correctAnswer: "D",
    reminderRef: "C32",
    unitRef: "20",
    explanation: "We use 'is supposed to' to report what many people generally believe or say (superstition/reputation).",
    explanationBurmese: "လူအများ ယုံကြည်လက်ခံပြောဆိုထားသော အယူအဆဖြစ်၍ 'is supposed to' ကို သုံးရပါသည်။"
  },
  {
    id: "3.12",
    sectionNumber: 3,
    sectionName: "Modals and semi-modals",
    prompt: "It's the third time she's been skating this week. She ______ really enjoy it.",
    options: [
      { label: "A", text: "must" },
      { label: "B", text: "should" },
      { label: "C", text: "ought to" },
      { label: "D", text: "had better" }
    ],
    correctAnswer: "A",
    reminderRef: "C22",
    unitRef: "20",
    explanation: "When we conclude on the basis of evidence that something is almost certain, we use 'must' (not 'should' or 'ought to').",
    explanationBurmese: "ခိုင်လုံသော သက်သေအထောက်အထားအရ သေချာသလောက်ရှိသည်ဟု ကောက်ချက်ချရာတွင် 'must' ကို သုံးရပါမည်။"
  }
];
