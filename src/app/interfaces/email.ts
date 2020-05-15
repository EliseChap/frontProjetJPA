/*
@Id
	@GeneratedValue
	long id;

	@Transient
	String contenu;

	int clearCode; 			// code du batiment
	String lienWeb;			// lien unique pour que les participants donnent leurs allergies et pref alimentaire
	String lienSondage;		// lien du sondage
	String lienPad;			// lien du pad

	@ManyToOne
	Administrateur administrateur;


	@OneToMany(mappedBy="emailparticipant")
	Collection<Participants> participants;

	@OneToMany(mappedBy="email")
	Collection<Utilisateur> utilisateurs;

  */

 import {sondage} from './sondage';

 export interface administrateur {
   id : number;
   sondage: sondage;
   date: Date;
   contenu:string;
   clearCode:
 }

