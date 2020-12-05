import { Observable } from 'rxjs';
import { Plat } from './plat';

export class TypePlat{
  id: number;
  nom: string;
  description: string;
  plats: Observable<Plat[]>;
}