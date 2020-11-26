import { Chef } from './Chef';
import { FeedBack } from './FeedBack';
import { Plat } from './plat';

export class Menu {
  id_menu: number;
  plats: Plat;
  chef: Chef;
  feedback: FeedBack;

}