import {email} from './email';
import {sondage} from './sondage';

export interface administrateur {
  emails: email[];
  sondages: sondage[];
}
