

 import {dateReponse} from './dateReponse';
 import {email} from './email';

 export interface utilisateur {
   id : number;
   nom:string;
   prenom:string;
   mail:string;
   date:Date;
   email:email;
   dateReponses : dateReponse[];
 }
