/* eslint-disable camelcase */
export interface RussianVerb {
	bare: string;
	accented: string;

	translations_en: string;
	translations_de: string;

	aspect: string;
	partner: string;

	imperative_sg: string;
	imperative_pl: string;

	past_m: string;
	past_f: string;
	past_n: string;
	past_pl: string;

	presfut_sg1: string;
	presfut_sg2: string;
	presfut_sg3: string;
	presfut_pl1: string;
	presfut_pl2: string;
	presfut_pl3: string;
}

export const RussianVerbsHeader = [
	'bare',
	'accented',

	'translation_en',
	'translation_de',

	'aspect',
	'partner',

	'imperative_sg',
	'imperative_pl',

	'past_m',
	'past_f',
	'past_n',
	'past_pl',

	'presfut_sg1',
	'presfut_sg2',
	'presfut_sg3',
	'presfut_pl1',
	'presfut_pl2',
	'presfut_pl3'
]