import { ChangeDetectorRef } from '@angular/core';
import { Chef } from './Chef';
import { FeedBack } from './FeedBack';
import { TypePlat } from './typeplat';

export class Plat{
  id: number;
  nom: string;
  prix: number;
  feedback: FeedBack;
  type: TypePlat;
  chef: Chef;
}