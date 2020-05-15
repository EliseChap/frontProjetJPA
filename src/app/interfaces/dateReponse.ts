/*
@Id
	@GeneratedValue
	long id;

	@ManyToOne
	Sondage sondage;
	@ManyToOne
	Utilisateur utilisateur;

	@Temporal(TemporalType.DATE)
  Date dateReponse;
  */

 import {sondage} from './sondage';
 import {utilisateur} from './utilisateur';

 export interface administrateur {
   id : number;
   sondage: sondage;
   dateReponse: Date;
   utilisateur: utilisateur;
 }
