 import {sondage} from './sondage';
import { administrateur } from './administrateur';
import { participant } from './participant';
import { utilisateur } from './utilisateur';

 export interface email {
   id : number;
   contenu:string;
   clearCode:number;
   lienWeb:string;
   lienSondage:string;
   lienPad:string;
   administrateur:administrateur
   participants:participant[];
   utilisateurs:utilisateur[];
 }


