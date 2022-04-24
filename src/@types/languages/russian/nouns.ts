/* eslint-disable camelcase */
export interface RussianNoun {
	bare: string;
	accented: string;

	translations_en: string;
	translations_de: string;

	gender: string;
	partner: string;
	animate: string;
	indeclinable: string;

	sg_only: string;
	pl_only: string;

	sg_nom: string;
	sg_gen: string;
	sg_dat: string;
	sg_acc: string;
	sg_inst: string;
	sg_prep: string;

	pl_nom: string;
	pl_gen: string;
	pl_dat: string;
	pl_acc: string;
	pl_inst: string;
	pl_prep: string;
}

export const RussianNounsHeader = [
	'bare',
	'accented',

	'translations_en',
	'translations_de',

	'gender',
	'partner',
	'animate',
	'indeclinable',

	'sg_only',
	'pl_only',

	'sg_nom',
	'sg_gen',
	'sg_dat',
	'sg_acc',
	'sg_inst',
	'sg_prep',

	'pl_nom',
	'pl_gen',
	'pl_dat',
	'pl_acc',
	'pl_inst',
	'pl_prep'
]