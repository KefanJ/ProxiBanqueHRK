import { Adresse } from './adresse';
import { Compte } from './compte';
export class Client {
  id: number;
  nom: string='';
  prenom: string='';
  // login: string='';
  // motDePasse: string='';
adresse: Adresse={codePostal:'', rue:'', ville:''};
listeCompte:Compte[];
//email: string=''
telephone: string=''


}
