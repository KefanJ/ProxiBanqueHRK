import { Adresse } from "./adresse";

export class Conseiller {
    id:number;
    nom : string;
    prenom: string;
    email : string;
    
    // login: string;
    // password: string;
    adresse: Adresse={codePostal:'', rue:'', ville:''};
    
}
