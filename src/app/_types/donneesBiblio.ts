export class DonneesBiblio {
  constructor(
    public ean: string,
    public idDecla: number,
    public statutDecla: string,
    public idC1: string,
    public idC4: string,
    public arkNotice: string,
    public titre: string,
    public editeur: string,
    public resume: string,
    public statutNotice: number,
    public sousTitre: string,
    public titreOriginal: string,
    public idDeposant: number,
    public datePublication: Date,
    public langue: string,
    public langueOriginale: string
  ) {}
}