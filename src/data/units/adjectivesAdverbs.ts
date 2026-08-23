import { GrammarUnit } from "../../types";

export const ADJECTIVES_ADVERBS_UNITS: GrammarUnit[] = [
  // Unit 66
  {
    id: 66,
    title: "Position of adjectives: attributive vs predicative",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Contrast attributive adjectives (before nouns: a main road) with predicative adjectives (after linking verbs: the child was asleep).",
    summaryBurmese: "နာမ်ရှေ့တွင်သာ သုံးရသော နာမဝိသေသနများ (Attributive: main, mere) နှင့် Linking verb နောက်တွင်သာ သုံးရသော နာမဝိသေသနများ (Predicative: asleep, alone, afraid, alive)။",
    keyPoints: [
      "Attributive-only adjectives (before nouns only): main, mere, sheer, utter, elder, eventual, former, chief, only.",
      "Predicative-only adjectives (after linking verbs only): afraid, alike, alive, alone, ashamed, asleep, awake, aware, glad, ill, pleased, upset.",
      "Never put 'a-' adjectives directly before nouns: say 'the sleeping child', NOT 'the asleep child'."
    ],
    keyPointsBurmese: [
      "Main, mere, utter, former စသည်တို့သည် နာမ်ရှေ့တွင်သာ နေရသည် (Attributive only)။",
      "Asleep, alive, afraid, alone စသည့် 'a-' စသော စကားလုံးများသည် ကြိယာနောက်တွင်သာ နေရသည် (Predicative only)။ ဥပမာ- The baby is asleep (The asleep baby မဟုတ်ပါ)။"
    ],
    reminderRefs: ["K1"],
    sections: [
      {
        id: "A",
        title: "Attributive vs Predicative Exclusivity",
        content: "Some adjectives can only appear before a noun, while others can only appear after a linking verb.",
        contentBurmese: "အချို့သော adjective များသည် နာမ်ရှေ့တွင်သာ လိုက်နိုင်ပြီး၊ အချို့မှာ linking verb နောက်တွင်သာ လိုက်နိုင်သည်။",
        examples: [
          { text: "This was the main reason for his resignation.", note: "main = attributive only (NOT the reason was main)" },
          { text: "The frightened child was alone in the room.", note: "alone = predicative only (NOT the alone child)" }
        ]
      }
    ],
    exercises: [
      {
        id: "66.1",
        title: "Exercise 66.1: Predicative vs Attributive Adjectives",
        instruction: "Select the grammatically correct sentence.",
        instructionBurmese: "သဒ္ဒါမှန်ကန်သော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Which sentence is grammatically correct?",
            options: ["The doctor treated an ill patient.", "The doctor treated a sick patient."],
            correctAnswer: "The doctor treated a sick patient.",
            explanation: "'Ill' is predominantly predicative; before a noun, 'sick' is standard.",
            explanationBurmese: "နာမ်ရှေ့တွင် 'sick' သုံးရပြီး 'ill' ကို ကြိယာနောက်တွင်သာ သုံးလေ့ရှိသည်။"
          }
        ]
      }
    ]
  },

  // Unit 67
  {
    id: 67,
    title: "Gradable and ungradable adjectives: modifying with extremely, absolutely, completely",
    category: "adjectives-adverbs",
    level: "C1 Advanced",
    summary: "Pair gradable adjectives (cold, good) with submodifiers (very, extremely) and non-gradable/extreme adjectives (freezing, fantastic) with absolute modifiers (absolutely, completely).",
    summaryBurmese: "အဆင့်အတန်းခွဲခြားနိုင်သော Adjectives (cold, good) တွင် very/extremely သုံးပြီး၊ အကန့်အသတ်မဲ့ အစွန်းရောက် Adjectives (freezing, superb, essential) တွင် absolutely/completely သုံးပုံ။",
    keyPoints: [
      "Gradable adjectives (exist on a scale of degrees: cold, warm, hot, tired, angry): modify with 'very', 'extremely', 'fairly', 'rather', 'slightly'.",
      "Non-gradable extreme adjectives (embody the absolute maximum: freezing, boiling, exhausted, furious, brilliant, terrible): modify with 'absolutely', 'completely', 'totally', 'utterly'.",
      "Non-gradable classifying adjectives (categorical: nuclear, chemical, environmental): modify with 'purely', 'strictly'.",
      "'Really' can modify BOTH gradable and extreme adjectives ('really cold', 'really freezing').",
      "'Quite' with gradable = fairly / moderately; 'Quite' with ungradable = completely / absolutely."
    ],
    keyPointsBurmese: [
      "Gradable (အဆင့်ရှိသော) adjectives တွင် very, extremely, slightly, rather သုံးသည်။",
      "Extreme / Ungradable (အစွန်းရောက်) adjectives တွင် absolutely, completely, totally, utterly သုံးသည်။ (ဥပမာ- absolutely exhausted, NOT very exhausted)။",
      "'Really' ကို ၂ မျိုးစလုံးနှင့် တွဲသုံးနိုင်သည်။",
      "'Quite' သည် Gradable နှင့်တွဲလျှင် 'fairly/အတန်အသင့်' ဖြစ်ပြီး၊ Ungradable နှင့်တွဲလျှင် 'completely/လုံးဝ' ဖြစ်သည်။"
    ],
    reminderRefs: ["K2", "K3"],
    sections: [
      {
        id: "A",
        title: "Gradable vs Extreme Classifications",
        content: "Pairing a degree adverb like 'very' with an extreme adjective like 'terrified' is a major collocation error.",
        contentBurmese: "Extreme adjective (terrified, furious) ရှေ့တွင် 'very' မသုံးရဘဲ 'absolutely' သုံးရသည်။",
        examples: [
          { text: "The marathon runner was absolutely exhausted.", note: "Correct: absolutely + exhausted (NOT very exhausted)" },
          { text: "The water was very cold.", note: "Correct: very + gradable 'cold'" }
        ]
      }
    ],
    exercises: [
      {
        id: "67.1",
        title: "Exercise 67.1: Adverb-Adjective Collocations",
        instruction: "Select the correct intensifying adverb.",
        instructionBurmese: "မှန်ကန်သော အားဖြည့် adverb ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The performance was [absolutely fantastic / very fantastic] from beginning to end.",
            options: ["absolutely fantastic", "very fantastic"],
            correctAnswer: "absolutely fantastic",
            explanation: "'Fantastic' is an extreme/ungradable adjective, so it pairs with 'absolutely', never 'very'.",
            explanationBurmese: "'Fantastic' သည် extreme adjective ဖြစ်၍ 'absolutely' ဖြင့်သာ တွဲရသည်။"
          }
        ]
      }
    ]
  },

  // Unit 68
  {
    id: 68,
    title: "Order of adjectives: opinion, size, physical quality, shape, age, colour, origin, material, type, purpose",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Master the standard multi-adjective sequence before a head noun: Opinion -> Size -> Physical Quality -> Shape -> Age -> Colour -> Origin -> Material -> Type -> Purpose.",
    summaryBurmese: "နာမဝိသေသနများ ရှေ့ဆင့်နောက်ဆင့် စီစဉ်ပုံ အစဉ်အတိုင်း (ထင်မြင်ချက် -> အရွယ်အစား -> ပုံသဏ္ဌာန် -> သက်တမ်း -> အရောင် -> မူရင်းဒေသ -> ပစ္စည်းအမျိုးအစား -> ရည်ရွယ်ချက်)။",
    keyPoints: [
      "Standard sequence: [Opinion] -> [Size] -> [Physical Quality] -> [Shape] -> [Age] -> [Colour] -> [Origin] -> [Material] -> [Type/Purpose] + NOUN.",
      "Example: 'A wonderful (opinion) small (size) antique (age) French (origin) wooden (material) writing (purpose) desk'.",
      "Adjectives of the same category are joined with 'and' or separated with commas ('a black and white photo')."
    ],
    keyPointsBurmese: [
      "Adjective အစီအစဉ်: Opinion (လှပ/အရသာရှိ) -> Size (ကြီး/ငယ်) -> Age (ဟောင်း/သစ်) -> Shape (ဝိုင်း/လေးထောင့်) -> Colour (အရောင်) -> Origin (နိုင်ငံ/ဒေသ) -> Material (သစ်သား/ရွှေ) -> Purpose (သုံးစွဲရန်) + Noun။"
    ],
    reminderRefs: ["K4"],
    sections: [
      {
        id: "A",
        title: "Adjective Ordering System",
        content: "General opinion adjectives precede specific factual descriptors.",
        contentBurmese: "ထင်မြင်ချက်ပြ adjective များသည် အချက်အလက်ပြ adjective များ၏ ရှေ့တွင် အမြဲရှိသည်။",
        examples: [
          { text: "She wore a gorgeous long Italian silk dress.", note: "Opinion (gorgeous) + Size/Length (long) + Origin (Italian) + Material (silk)" }
        ]
      }
    ],
    exercises: [
      {
        id: "68.1",
        title: "Exercise 68.1: Adjective Order",
        instruction: "Select the sentence with correct adjective order.",
        instructionBurmese: "Adjective အစီအစဉ် မှန်ကန်သော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "He bought a [charming small old Swiss / Swiss charming old small] watch.",
            options: ["charming small old Swiss", "Swiss charming old small"],
            correctAnswer: "charming small old Swiss",
            explanation: "Order: Opinion (charming) -> Size (small) -> Age (old) -> Origin (Swiss).",
            explanationBurmese: "Opinion (charming) -> Size (small) -> Age (old) -> Origin (Swiss) အစဉ်အတိုင်း ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 69
  {
    id: 69,
    title: "Adjectives and adverbs: fast, hard, late, well, friendly",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Identify words with identical adjective/adverb forms (fast, hard, early, late) and avoid confusion with '-ly' adjectives (friendly, lovely, lively).",
    summaryBurmese: "Adjective ရော Adverb ပါ ပုံစံတူသော စကားလုံးများ (fast, hard, late, early) နှင့် -ly ဆုံးသော်လည်း Adjective ဖြစ်နေသော စကားလုံးများ (friendly, lovely)။",
    keyPoints: [
      "Identical forms: 'a FAST car' (adj) / 'drive FAST' (adv); 'HARD work' (adj) / 'work HARD' (adv); 'a LATE train' (adj) / 'arrive LATE' (adv).",
      "'Hardly' does NOT mean hard (hardly = scarcely/barely); 'Lately' does NOT mean late (lately = recently).",
      "'-ly' adjectives (friendly, lively, lovely, lonely, silly, cowardly) cannot become adverbs by adding -ly; use 'in a friendly manner / way'."
    ],
    keyPointsBurmese: [
      "Fast, hard, late, early တို့သည် Adjective ရော Adverb ပါ ပုံစံတူသည်။",
      "'Hardly' သည် ခက်ခဲစွာ မဟုတ်ဘဲ 'မရှိသလောက်' ဖြစ်သည်။ 'Lately' သည် နောက်ကျစွာ မဟုတ်ဘဲ 'မကြာသေးမီက' ဖြစ်သည်။",
      "Friendly, lovely, lively တို့သည် Adjectives များဖြစ်၍ adverb လုပ်လိုပါက 'in a friendly manner' ဟု သုံးရသည်။"
    ],
    reminderRefs: ["K5"],
    sections: [
      {
        id: "A",
        title: "False Friends: Hard vs Hardly, Late vs Lately",
        content: "Never confuse adverbs of manner with distinct aspectual adverbs.",
        contentBurmese: "Hard နှင့် Hardly၊ Late နှင့် Lately ကွာခြားချက်ကို သတိပြုပါ။",
        examples: [
          { text: "He worked hard all his life.", note: "hard = with great effort (adverb)" },
          { text: "He hardly worked today; he spent all morning chatting.", note: "hardly = almost not at all" }
        ]
      }
    ],
    exercises: [
      {
        id: "69.1",
        title: "Exercise 69.1: Hard vs Hardly",
        instruction: "Fill in hard or hardly.",
        instructionBurmese: "Hard သို့မဟုတ် hardly ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "The fog was so dense that we could ______ see the road ahead.",
            prefix: "We could ",
            suffix: " see the road ahead.",
            correctAnswer: ["hardly"],
            explanation: "'Hardly see' means scarcely/almost could not see.",
            explanationBurmese: "မမြင်နိုင်သလောက် ဖြစ်သည်ဟူသော အဓိပ္ပာယ်ဖြစ်၍ 'hardly' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 70
  {
    id: 70,
    title: "Comparative and superlative forms of adjectives and adverbs",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Form regular (-er/-est, more/most) and irregular comparatives (farther/further, elder/older), and handle double comparatives (the more... the more).",
    summaryBurmese: "နှိုင်းယှဉ်ပြ နာမဝိသေသနများ (Comparatives & Superlatives)၊ အထူးပုံစံများ (further, elder) နှင့် 'the more... the more...' ဖွဲ့စည်းပုံ။",
    keyPoints: [
      "One-syllable adjectives add -er/-est; three or more syllables use more/most.",
      "Two-syllable adjectives ending in -y change to -ier/-iest (easier, happier); others generally take more/most.",
      "'Further' vs 'Farther': 'farther' refers only to physical distance; 'further' refers to distance AND additional extent ('further information').",
      "'The + comparative..., the + comparative...': 'The more you practice, the more confident you become'."
    ],
    keyPointsBurmese: [
      "ဝဏ္ဏတစ်လုံးပါ adjective များတွင် -er/-est ပေါင်းပြီး၊ သုံးလုံးနှင့်အထက်တွင် more/most ပေါင်းသည်။",
      "'Further' သည် ရုပ်ပိုင်းဆိုင်ရာ အကွာအဝေးရော ထပ်ဆောင်းအချက်အလက် (further details) ပါ သုံးနိုင်သည်။",
      "'The more..., the more...' (ပိုလုပ်လေ၊ ပိုဖြစ်လေ) ဖွဲ့စည်းပုံ။"
    ],
    reminderRefs: ["K6"],
    sections: [
      {
        id: "A",
        title: "Proportional Comparisons (The... The...)",
        content: "This correlative construction balances two comparative clauses to show direct causal proportion.",
        contentBurmese: "တစ်ခုတိုးတက်လာသည်နှင့်အမျှ အခြားတစ်ခု လိုက်ပါပြောင်းလဲမှုကို 'The + comparative..., the + comparative...' ဖြင့် ရေးသည်။",
        examples: [
          { text: "The earlier we set off, the less traffic we will encounter.", note: "Proportional comparison" }
        ]
      }
    ],
    exercises: [
      {
        id: "70.1",
        title: "Exercise 70.1: Proportional Comparatives",
        instruction: "Complete the proportional comparative sentence.",
        instructionBurmese: "ဝါကျကို ပြည့်စုံအောင် ဖြည့်ပါ။",
        type: "sentence-rewrite",
        questions: [
          {
            id: 1,
            prompt: "If you study harder, you will perform better in the examination.",
            prefix: "The harder you study, ",
            suffix: " you will perform in the examination.",
            correctAnswer: ["the better"],
            explanation: "Correlative comparison: 'The harder you study, the better you will perform'.",
            explanationBurmese: "'the better' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 71
  {
    id: 71,
    title: "Comparative clauses and phrases: as... as, not so... as, than",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Construct equative (as... as), negative equative (not as / not so... as), and comparative (than) structures with modifiers like 'far', 'much', 'slightly'.",
    summaryBurmese: "တူညီမှုနှိုင်းယှဉ်ခြင်း (as... as)၊ မတူညီမှု (not as... as) နှင့် အားဖြည့်စကားလုံးများ (far more, much better, slightly less)။",
    keyPoints: [
      "Equative: 'as + adjective/adverb + as' ('She is as tall as her mother').",
      "Negative equative: 'not as... as' or 'not so... as'.",
      "Modifiers before comparatives: far, much, a lot, significantly, considerably, slightly, a bit, marginally ('far more expensive').",
      "Modifiers before equatives: just, almost, nearly, twice as... as, three times as... as ('twice as expensive as')."
    ],
    keyPointsBurmese: [
      "တူညီမှုတွင် 'as + adj + as' သုံးသည်။",
      "Comparative ရှေ့တွင် far, much, considerably, slightly စသော modifier များ ထည့်သွင်းနိုင်သည်။",
      "အဆပမာဏတွင် 'twice as much as', 'three times as large as' ဟု သုံးသည်။"
    ],
    reminderRefs: ["K7"],
    sections: [
      {
        id: "A",
        title: "Multiple Multipliers with As... As",
        content: "Multipliers (twice, three times, four times) precede 'as... as'.",
        contentBurmese: "အဆပမာဏများကို 'as... as' ၏ အရှေ့တွင် ထားရှိရသည်။",
        examples: [
          { text: "The new electric model is three times as energy-efficient as the older version.", note: "Multiplier + as... as" }
        ]
      }
    ],
    exercises: [
      {
        id: "71.1",
        title: "Exercise 71.1: Multipliers & Comparatives",
        instruction: "Select the correct comparative phrasing.",
        instructionBurmese: "မှန်ကန်သော နှိုင်းယှဉ် phrase ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The new stadium is [twice as large as / twice larger than] the old arena.",
            options: ["twice as large as", "twice larger than"],
            correctAnswer: "twice as large as",
            explanation: "Standard multiplier structure uses 'twice as large as', not 'twice larger than'.",
            explanationBurmese: "Standard multiplier ဖွဲ့စည်းပုံမှာ 'twice as large as' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 72
  {
    id: 72,
    title: "Superlatives: the + most, -est, one of the, by far the",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Structure superlative statements modified by 'by far', 'easily', 'one of the', and relative clauses with 'ever'.",
    summaryBurmese: "အသာလွန်ဆုံး နှိုင်းယှဉ်ချက်များ (Superlatives) - 'by far the most', 'easily the best' နှင့် 'one of the + plural noun'။",
    keyPoints: [
      "Prepositions after superlatives: use 'IN' for singular places/groups ('the tallest building IN the city', 'the best student IN the class'); use 'OF' for periods of time or plurals ('the hottest day OF the year', 'the best OF all').",
      "Emphatic superlative modifiers: 'by far the...', 'easily the...', 'quite the...'.",
      "'One of the + superlative + PLURAL noun + SINGULAR verb': 'One of the greatest challenges IS climate change'."
    ],
    keyPointsBurmese: [
      "Superlative နောက်တွင် နေရာ/အဖွဲ့အစည်းဖြစ်ပါက 'in' သုံးပြီး၊ အချိန်ကာလ/အများနာမ်ဖြစ်ပါက 'of' သုံးသည်။",
      "အလေးပေးစကားလုံးများ- 'by far the best', 'easily the most important'။",
      "'One of the greatest...' နောက်တွင် Plural noun လိုက်ပြီး ကြိယာသည် Singular ဖြစ်ရသည်။"
    ],
    reminderRefs: ["K8"],
    sections: [
      {
        id: "A",
        title: "Preposition Selection: In vs Of with Superlatives",
        content: "Use 'in' for containers, geographic locations, and groups; use 'of' for timeframes and plural sets.",
        contentBurmese: "နေရာနှင့် အစုအဖွဲ့တွင် 'in'၊ အချိန်ကာလနှင့် အများစုတွင် 'of' သုံးသည်။",
        examples: [
          { text: "She is the most talented musician in the orchestra.", note: "in + group" },
          { text: "It was the coldest winter of the century.", note: "of + timeframe" }
        ]
      }
    ],
    exercises: [
      {
        id: "72.1",
        title: "Exercise 72.1: Prepositions with Superlatives",
        instruction: "Fill in in or of.",
        instructionBurmese: "In သို့မဟုတ် of ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "He is recognized as the fastest sprinter ______ the world.",
            prefix: "He is the fastest sprinter ",
            suffix: " the world.",
            correctAnswer: ["in"],
            explanation: "Geographic location / domain takes 'in the world'.",
            explanationBurmese: "ကမ္ဘာပေါ်တွင် (နေရာ/နယ်ပယ်) ဖြစ်၍ 'in the world' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 73
  {
    id: 73,
    title: "Adverbs of manner, place, and time: clause positioning",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Position adverbs accurately: Manner -> Place -> Time (MPT order) at the end of clauses, and place introductory adverbs at the front.",
    summaryBurmese: "Adverb များ၏ နေရာချထားမှု - ဝါကျအဆုံးတွင် အမူအရာ (Manner) -> နေရာ (Place) -> အချိန် (Time) အစဉ်အတိုင်း ထားရှိပုံ။",
    keyPoints: [
      "Standard end-position sequence: [Manner] -> [Place] -> [Time] (MPT Rule).",
      "Example: 'She sang beautifully (manner) in the cathedral (place) yesterday (time)'.",
      "Do NOT place an adverb between a transitive verb and its direct object (say 'He read the book quickly', NOT 'He read quickly the book').",
      "Time adverbs can move to the front for emphasis or topic-setting ('Yesterday, the committee met')."
    ],
    keyPointsBurmese: [
      "ဝါကျအဆုံးတွင် Manner (ဘယ်လို) -> Place (ဘယ်မှာ) -> Time (ဘယ်အချိန်) အစဉ်အတိုင်း စီရသည်။",
      "ကြိယာနှင့် ကံပုဒ် (Object) ကြားတွင် Adverb မထည့်ရပါ (read the book quickly ဟုသာ ပြောရမည်)။"
    ],
    reminderRefs: ["K9"],
    sections: [
      {
        id: "A",
        title: "Verb-Object Inseparability",
        content: "Never insert an adverb between a main verb and its direct object.",
        contentBurmese: "ကြိယာနှင့် Object ကြားထဲသို့ adverb မထည့်သွင်းရပါ။",
        examples: [
          { text: "He speaks Spanish fluently.", note: "Correct: speaks [object: Spanish] [adverb: fluently]" }
        ]
      }
    ],
    exercises: [
      {
        id: "73.1",
        title: "Exercise 73.1: Adverb Placement",
        instruction: "Select the sentence with correct adverb positioning.",
        instructionBurmese: "Adverb နေရာချထားမှု မှန်ကန်သော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Which sentence has correct word order?",
            options: ["The pianist played the sonata beautifully in the hall last night.", "The pianist played beautifully the sonata last night in the hall."],
            correctAnswer: "The pianist played the sonata beautifully in the hall last night.",
            explanation: "Verb + Object ('played the sonata') followed by Manner (beautifully) -> Place (in the hall) -> Time (last night).",
            explanationBurmese: "Verb + Object နောက်မှ Manner -> Place -> Time အစဉ်အတိုင်း လိုက်သော ဝါကျဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 74
  {
    id: 74,
    title: "Adverbs of frequency, degree, and certainty: mid-position rules",
    category: "adjectives-adverbs",
    level: "B2 Intermediate",
    summary: "Master mid-position placement: before single main verbs, after auxiliary 'be', and after the FIRST auxiliary in multi-verb chains.",
    summaryBurmese: "Mid-position Adverb များ (frequency, degree, certainty) နေရာချထားပုံ - ပင်မကြိယာရှေ့၊ 'be' ကြိယာနောက်၊ အကူကြိယာပါပါက ပထမအကူကြိယာနောက်။",
    keyPoints: [
      "Rule 1: Before single-word main verbs ('She OFTEN visits us', 'He DEFINITELY agreed').",
      "Rule 2: After 'be' as a main verb ('They ARE always punctual', 'She IS probably tired').",
      "Rule 3: After the FIRST auxiliary verb in compound tenses ('They have NEVER been to Asia', 'She will CERTAINLY have finished').",
      "In negative sentences, certainty adverbs (probably, definitely) come BEFORE the negative auxiliary ('He PROBABLY won't come')."
    ],
    keyPointsBurmese: [
      "ပင်မကြိယာရှေ့တွင် ထားသည် (often goes)။",
      "Be ကြိယာနောက်တွင် ထားသည် (is always on time)။",
      "အကူကြိယာပါပါက ပထမအကူကြိယာနောက်တွင် ထားသည် (has never seen)။",
      "အငြင်းဝါကျတွင် probably, definitely တို့သည် အငြင်းအကူကြိယာရှေ့သို့ ရောက်သည် (probably won't)။"
    ],
    reminderRefs: ["K10"],
    sections: [
      {
        id: "A",
        title: "Mid-Position Rules",
        content: "Mid-position adverbs split auxiliary chains immediately after the primary operator.",
        contentBurmese: "ပထမဆုံး အကူကြိယာ၏ အနောက်တည့်တည့်တွင် mid-position adverb ကို ထည့်သွင်းရသည်။",
        examples: [
          { text: "We have definitely decided to relocate our headquarters.", note: "have (1st aux) + definitely + decided" }
        ]
      }
    ],
    exercises: [
      {
        id: "74.1",
        title: "Exercise 74.1: Mid-position Adverb Placement",
        instruction: "Select the sentence with correct adverb positioning.",
        instructionBurmese: "Adverb နေရာချထားမှု မှန်သော ဝါကျကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "Where does 'probably' belong?",
            options: ["The plane probably will be delayed by the fog.", "The plane will probably be delayed by the fog."],
            correctAnswer: "The plane will probably be delayed by the fog.",
            explanation: "After the first auxiliary verb 'will' -> 'will probably be delayed'.",
            explanationBurmese: "ပထမအကူကြိယာ 'will' ၏ နောက်တွင် ထားရှိသော 'will probably be' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 75
  {
    id: 75,
    title: "Focusing adverbs: even, only, just, particularly, especially",
    category: "adjectives-adverbs",
    level: "C1 Advanced",
    summary: "Control semantic scope with focusing adverbs: placement immediately before the element being highlighted.",
    summaryBurmese: "အလေးပေးဖော်ပြသော Focusing adverbs များ (even, only, particularly, especially) - အလေးပေးလိုသော စကားလုံး၏ အရှေ့တည့်တည့်တွင် ထားရှိပုံ။",
    keyPoints: [
      "The meaning of the sentence changes depending on where 'only' or 'even' is placed.",
      "'Only Marcus lent me five dollars' (nobody else lent me money).",
      "'Marcus only lent me five dollars' (he didn't give it as a gift).",
      "'Marcus lent me only five dollars' (not ten or twenty dollars).",
      "'Especially' = particularly / above all ('I love Italian cuisine, especially pasta'); 'Specially' = for a specific unique purpose ('This coat was specially made for arctic expeditions')."
    ],
    keyPointsBurmese: [
      "'Only' နေရာပြောင်းသွားသည်နှင့် ဝါကျအဓိပ္ပာယ် လုံးဝပြောင်းလဲသွားသည်။",
      "'Especially' သည် အထူးသဖြင့် (particularly) ဟု အဓိပ္ပာယ်ရသည်။",
      "'Specially' သည် သီးသန့်ရည်ရွယ်ချက်တစ်ခုအတွက် ပြုလုပ်ထားသည် (for a specific purpose) ဟု အဓိပ္ပာယ်ရသည်။"
    ],
    reminderRefs: ["K11"],
    sections: [
      {
        id: "A",
        title: "Especially vs Specially",
        content: "Use especially to mean 'in particular'. Use specially for customized individual design or function.",
        contentBurmese: "အထူးသဖြင့်ဆိုလျှင် especially သုံးပြီး၊ သီးသန့်ရည်ရွယ်ပြုလုပ်ထားမှုတွင် specially သုံးသည်။",
        examples: [
          { text: "I love all sports, especially tennis.", note: "especially = in particular" },
          { text: "This software was specially developed for blind users.", note: "specially = customized purpose" }
        ]
      }
    ],
    exercises: [
      {
        id: "75.1",
        title: "Exercise 75.1: Especially vs Specially",
        instruction: "Fill in especially or specially.",
        instructionBurmese: "Especially သို့မဟုတ် specially ဖြင့် ဖြည့်ပါ။",
        type: "fill-in",
        questions: [
          {
            id: 1,
            prompt: "The orthopedic shoes were ______ designed to support his injured ankle.",
            prefix: "The shoes were ",
            suffix: " designed to support his ankle.",
            correctAnswer: ["specially"],
            explanation: "Designed for a specific custom purpose takes 'specially'.",
            explanationBurmese: "သီးသန့် ရည်ရွယ်ချက်အတွက် ပြုလုပ်ထားခြင်းဖြစ်၍ 'specially' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 76
  {
    id: 76,
    title: "Viewpoint adverbs and comment adverbs: personally, astonishingly, presumably",
    category: "adjectives-adverbs",
    level: "C1 Advanced",
    summary: "Deploy sentence adverbs at the front of clauses (with a comma) to express perspective (financially, scientifically) or speaker attitude (remarkably, foolishly).",
    summaryBurmese: "ရှုထောင့်ပြ Adverb များ (financially, technologically) နှင့် သဘောထားမှတ်ချက်ပြ Adverb များ (astonishingly, fortunately) ကို ဝါကျအစတွင် ကော်မာဖြင့် သုံးစွဲပုံ။",
    keyPoints: [
      "Viewpoint adverbs indicate the domain/angle of analysis: 'Financially, the company is sound, but technologically, it is falling behind'.",
      "Comment adverbs evaluate the entire event: 'Foolishly, he rejected the promotion' (= It was foolish of him to reject it).",
      "Sentence-initial position followed by a COMMA is standard for comment and viewpoint adverbs."
    ],
    keyPointsBurmese: [
      "ရှုထောင့်ပြစကားလုံးများ (Economically, Scientifically) သည် ဆန်းစစ်သည့် ရှုထောင့်ကို ညွှန်ပြသည်။",
      "မှတ်ချက်ပြစကားလုံးများ (Astonishingly, Fortunately) သည် ပြောသူ၏ ခံစားချက်ကို ဖော်ပြသည်။",
      "ဝါကျအစတွင်ထားပါက ကော်မာ (Comma) မဖြစ်မနေ ထည့်ရသည်။"
    ],
    reminderRefs: ["K12"],
    sections: [
      {
        id: "A",
        title: "Sentence Adverb Framing",
        content: "Viewpoint and comment adverbs frame the entire proposition from a distinct evaluation perspective.",
        contentBurmese: "ဝါကျတစ်ခုလုံး၏ သဘောထားနှင့် ရှုထောင့်ကို အစပိုင်းမှ စတင်သတ်မှတ်ပေးသည်။",
        examples: [
          { text: "Astonishingly, nobody was injured in the multi-car pileup.", note: "Comment adverb modifying entire clause" }
        ]
      }
    ],
    exercises: [
      {
        id: "76.1",
        title: "Exercise 76.1: Viewpoint Adverbs",
        instruction: "Select the most appropriate viewpoint adverb.",
        instructionBurmese: "အသင့်တော်ဆုံး viewpoint adverb ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "[Economically / Economic], the country is recovering, but politically, deep divisions remain.",
            options: ["Economically", "Economy"],
            correctAnswer: "Economically",
            explanation: "The viewpoint adverb 'Economically' frames the domain of financial recovery.",
            explanationBurmese: "စီးပွားရေးရှုထောင့်အရဖြစ်၍ viewpoint adverb 'Economically' ဖြစ်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 77
  {
    id: 77,
    title: "Adverbs of degree: extremely, totally, rather, quite, fairly, pretty",
    category: "adjectives-adverbs",
    level: "C1 Advanced",
    summary: "Calibrate nuances between 'quite', 'rather', 'fairly', and 'pretty' across positive and negative contexts.",
    summaryBurmese: "အတိုင်းအတာပြ Adverb များ - quite, rather, fairly, pretty တို့၏ သိမ်မွေ့သော ကွဲပြားချက်များနှင့် အဆိုး/အကောင်း သဘောထားများ။",
    keyPoints: [
      "'Fairly': mildest degree, typically with positive adjectives ('She is fairly good at chess').",
      "'Rather': stronger than fairly, often used with negative ideas or unexpected pleasant surprises ('The exam was rather difficult', 'The hotel was rather nice!').",
      "'Rather' can modify comparatives ('rather better') and verbs ('I rather like it'); 'fairly' CANNOT.",
      "Word order: 'a fairly good book' vs 'a rather good book' OR 'rather a good book'."
    ],
    keyPointsBurmese: [
      "'Fairly' သည် အပျော့ဆုံး အတိုင်းအတာဖြစ်ပြီး အကောင်းသဘောတွင် သုံးသည်။",
      "'Rather' သည် fairly ထက် ပိုပြင်းထန်ပြီး အဆိုးသဘော သို့မဟုတ် မမျှော်လင့်ဘဲ ကောင်းမွန်သည့်အခါ သုံးသည်။",
      "'Rather' သည် Comparative နှင့် ကြိယာများကို modify လုပ်နိုင်သည် (rather more expensive, I rather agree)။"
    ],
    reminderRefs: ["K13"],
    sections: [
      {
        id: "A",
        title: "Rather vs Fairly Nuance",
        content: "Rather expresses surprise or negative evaluation and has greater syntactic flexibility than fairly.",
        contentBurmese: "Rather သည် အံ့အားသင့်မှု သို့မဟုတ် အနုတ်သဘောတွင် သုံးပြီး fairly ထက် အသုံးပိုစုံသည်။",
        examples: [
          { text: "It was rather a disappointing result.", note: "rather + a/an + adjective + noun" }
        ]
      }
    ],
    exercises: [
      {
        id: "77.1",
        title: "Exercise 77.1: Rather vs Fairly",
        instruction: "Select rather or fairly.",
        instructionBurmese: "Rather သို့မဟုတ် fairly ကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "The new laptop is [rather / fairly] more powerful than the model it replaces.",
            options: ["rather", "fairly"],
            correctAnswer: "rather",
            explanation: "Only 'rather' can modify comparative adjectives ('rather more powerful'), not 'fairly'.",
            explanationBurmese: "Comparative adjectives (more powerful) ကို 'rather' ကသာ modify လုပ်နိုင်သည်။"
          }
        ]
      }
    ]
  },

  // Unit 78
  {
    id: 78,
    title: "Comparative adverbs and clauses of degree: as much as, more than, no sooner... than",
    category: "adjectives-adverbs",
    level: "C1 Advanced",
    summary: "Form complex adverbial comparisons and negative temporal correlatives (no sooner... than, scarcely... when).",
    summaryBurmese: "အဆင့်မြင့် အချိန်နှင့် အတိုင်းအတာပြ နှိုင်းယှဉ်ချက်များ - 'no sooner... than'၊ 'scarcely... when' နှင့် 'as much as'။",
    keyPoints: [
      "Inversion with 'No sooner... than': 'No sooner HAD we ARRIVED than it started raining'.",
      "Inversion with 'Scarcely / Hardly... when': 'Hardly HAD the plane TAKEN OFF when an engine failed'.",
      "'As much as' / 'As little as' for striking quantities: 'He paid as much as $5,000 for the antique'."
    ],
    keyPointsBurmese: [
      "No sooner... than တွင် Inversion ဖြစ်သည် (No sooner had we arrived than...)။",
      "Hardly / Scarcely... when တွင်လည်း Inversion ဖြစ်သည် (Hardly had I sat down when...)။",
      "များပြားသော ပမာဏကို အလေးပေးရာတွင် 'as much as $1,000' ဟု သုံးသည်။"
    ],
    reminderRefs: ["K14"],
    sections: [
      {
        id: "A",
        title: "No Sooner... Than Inversion",
        content: "Negative temporal limiters trigger subject-auxiliary inversion in literary English.",
        contentBurmese: "No sooner / Hardly ကို ဝါကျအစတွင် ထားပါက အကူကြိယာကို ကတ္တားရှေ့သို့ ထုတ်ရသည်။",
        examples: [
          { text: "No sooner had the curtain fallen than the audience erupted into applause.", note: "Inversion: had + the curtain + fallen" }
        ]
      }
    ],
    exercises: [
      {
        id: "78.1",
        title: "Exercise 78.1: Temporal Inversion Correlatives",
        instruction: "Select the correct correlative pair.",
        instructionBurmese: "မှန်ကန်သော correlative အတွဲကို ရွေးပါ။",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            prompt: "No sooner had the meeting concluded [than / when] the participants began discussing the outcome.",
            options: ["than", "when"],
            correctAnswer: "than",
            explanation: "'No sooner' pairs exclusively with 'than' ('No sooner... than').",
            explanationBurmese: "'No sooner' သည် 'than' နှင့်သာ တွဲဖက်ရသည်။"
          }
        ]
      }
    ]
  }
];
