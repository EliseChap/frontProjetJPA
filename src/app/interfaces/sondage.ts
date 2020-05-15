 import {dateReponse} from './dateReponse';
 import {email} from './email';
import { datePossible } from './datePossible';
import { administrateur } from './administrateur';

 export interface sondage {
   id : number;
   datesPossibles:datePossible[];
   dateReponses : dateReponse[];
   dateValide:Date;
   administrateur:administrateur;

 }
