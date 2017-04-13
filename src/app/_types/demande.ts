import { Statut } from './statut'
import { Priorite } from './priorite'

export class Demande {
  constructor(
    public arkNna: string,
    public commentaires: Object[],
    public dateCreation: string,
    public dateMort: string,
    public dateNaissance: string,
    public dateReponse: string,
    public eanLie: Array<any>,
    public fonction: string,
    public historiques: Array<any>,
    public idDemande: number,
    public idExpediteur: number,
    public idInterneExpediteur: number | string,
    public identifiantDecla: number | string,
    public isni: string,
    public langue: string,
    public langueOriginale: string,
    public nna: number | string,
    public nom: string,
    public nomEditeur: string,
    public nomExpediteur: string,
    public noteBibliographique: string,
    public numeroContributeur: number | string,
    public paysNaissance: string,
    public prenom: string,
    public priorite: Priorite,
    public pseudonyme: string,
    public qualificatifPays: string,
    public siteWeb: String,
    public statut: Statut,
    public texteNNA: string,
    public typeContributeur: string,
    public typeContributeurEnum: any
  ) {}
}