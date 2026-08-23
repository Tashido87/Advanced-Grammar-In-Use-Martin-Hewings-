import { GrammarUnit } from "../types";
import { TENSES_UNITS } from "./units/tenses";
import { FUTURE_UNITS } from "./units/future";
import { MODALS_UNITS } from "./units/modals";
import { PASSIVES_QUESTIONS_UNITS } from "./units/passivesQuestions";
import { VERB_COMPLEMENTATION_UNITS } from "./units/verbComplementation";
import { REPORTING_UNITS } from "./units/reporting";
import { NOUNS_UNITS } from "./units/nouns";
import { ARTICLES_QUANTIFIERS_UNITS } from "./units/articlesQuantifiers";
import { RELATIVE_CLAUSES_UNITS } from "./units/relativeClauses";
import { PRONOUNS_ELLIPSIS_UNITS } from "./units/pronounsEllipsis";
import { ADJECTIVES_ADVERBS_UNITS } from "./units/adjectivesAdverbs";
import { ADVERBIAL_CLAUSES_UNITS } from "./units/adverbialClauses";
import { PREPOSITIONS_UNITS } from "./units/prepositions";
import { ORGANISING_INFO_UNITS } from "./units/organisingInfo";
import { ACADEMIC_UNITS } from "./units/academic";

// Aggregate all Units 1 through 105
export const UNITS_DATA: GrammarUnit[] = [
  ...TENSES_UNITS,
  ...FUTURE_UNITS,
  ...MODALS_UNITS,
  ...PASSIVES_QUESTIONS_UNITS,
  ...VERB_COMPLEMENTATION_UNITS,
  ...REPORTING_UNITS,
  ...NOUNS_UNITS,
  ...ARTICLES_QUANTIFIERS_UNITS,
  ...RELATIVE_CLAUSES_UNITS,
  ...PRONOUNS_ELLIPSIS_UNITS,
  ...ADJECTIVES_ADVERBS_UNITS,
  ...ADVERBIAL_CLAUSES_UNITS,
  ...PREPOSITIONS_UNITS,
  ...ORGANISING_INFO_UNITS,
  ...ACADEMIC_UNITS,
].sort((a, b) => a.id - b.id);
