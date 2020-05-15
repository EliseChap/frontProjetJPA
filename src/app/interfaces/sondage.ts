/*
Id

	@Column(updatable = false, length = 20)
	String nom;
	@Column(updatable = false, length = 20)
	String prenom;
	@Column(name = "email")
	String mail;

	Date date;

	@ManyToOne
	Email email;

	@OneToMany(mappedBy = "utilisateur")
	Collection<DateReponses> datesReponses;

  */
 import {dateReponse} from './dateReponse';
 import {email} from './email';

 export interface administrateur {
   id : number;
   sondage: sondage;
   date: Date;
   nom : string;
   prenom : string;
   mail : string;
   email: email;
   dateReponses : dateReponse;

 }
