/* eslint-disable camelcase */
export interface RussianAdjective {
	bare: string;
	accented: string;

	translations_en: string;
	translations_de: string;

	comparative: string;
	superlative: string;

	short_m: string;
	short_f: string;
	short_n: string;
	short_pl: string;

	decl_m_nom: string;
	decl_m_gen: string;
	decl_m_dat: string;
	decl_m_acc: string;
	decl_m_inst: string;
	decl_m_prep: string;

	decl_f_nom: string;
	decl_f_gen: string;
	decl_f_dat: string;
	decl_f_acc: string;
	decl_f_inst: string;
	decl_f_prep: string;

	decl_n_nom: string;
	decl_n_gen: string;
	decl_n_dat: string;
	decl_n_acc: string;
	decl_n_inst: string;
	decl_n_prep: string;

	decl_pl_nom: string;
	decl_pl_gen: string;
	decl_pl_dat: string;
	decl_pl_acc: string;
	decl_pl_inst: string;
	decl_pl_prep: string;
}

export const RussianAdjectivesHeader = [
	'bare',
	'accented',

	'translations_en',
	'translations_de',

	'comparative',
	'superlative',

	'short_m',
	'short_f',
	'short_n',
	'short_pl',

	'decl_m_nom',
	'decl_m_gen',
	'decl_m_dat',
	'decl_m_acc',
	'decl_m_inst',
	'decl_m_prep',

	'decl_f_nom',
	'decl_f_gen',
	'decl_f_dat',
	'decl_f_acc',
	'decl_f_inst',
	'decl_f_prep',

	'decl_n_nom',
	'decl_n_gen',
	'decl_n_dat',
	'decl_n_acc',
	'decl_n_inst',
	'decl_n_prep',

	'decl_pl_nom',
	'decl_pl_gen',
	'decl_pl_dat',
	'decl_pl_acc',
	'decl_pl_inst',
	'decl_pl_prep'
]