 import {reunion} from './reunion';
 import {email} from './email';

 export interface participant {
   allergies : string;
   preferenceAlimentaire : string;
   emailParticipant: email;
   reunion: reunion;
 }
