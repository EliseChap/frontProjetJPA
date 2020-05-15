 import {sondage} from './sondage';
 import {utilisateur} from './utilisateur';

 export interface dateReponse {
   id : number;
   sondage: sondage;
   dateReponse: Date;
   utilisateur: utilisateur;
 }
