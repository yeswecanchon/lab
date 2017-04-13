export class AppConfig {

    static URL_LOGIN = (conf) => { return `${conf.appUrl}/caspro/login` }
    static URL_LOGOUT= `rest/logout`

    static URL_CONF = `rest/conf`
    static URL_HABILITATIONS = `rest/habilitation`
      
    static URL_STATUTS = `rest/demande/listeStatuts`
    static URL_PRIORITES = `rest/demande/listePriorites`

    static URL_DEMANDES = `rest/demande/listeDemandes`

    static URL_DEMANDE = (id) => { return `rest/demande/fiche/${id}` }
    static URL_UPDATE_STATUT = `/rest/demande/changerStatut`
    static URL_UPDATE_PRIORITE = (id) => `/rest/demande/changerPriorite/${id}`
    static URL_ADD_COMMENT = (id) => `/rest/demande/ajouterCommentaire/${id}`
    static URL_UPDATE_COMMENT =  `/rest/demande/enregistrerCommentaire`
    static URL_DELETE_COMMENT = (idComment) => `/rest/demande/supprimerCommentaire/${idComment}`
    static URL_SEARCH_ISNI = (id) => `/rest/demande/rechercheIsni/${id}`
    static URL_GENERATE_NNA = (id) => `/rest/demande/genererNNA/${id}`
    static URL_VALIDATE_TEXT_NNA = (id) => `/rest/demande/validerTexteNNA/${id}`
    static URL_DELETE_NNA = (id) => `/rest/demande/supprimerNNA/${id}`
    static URL_CANCEL_DEMANDE = (id) => `/rest/demande/annuler/${id}`
    static URL_PRE_VALIDATE_NNA = (id, nna) => `/rest/demande/preValidationNNA/${id}/${nna}`
    static URL_VALIDATE_NNA = `/rest/demande/validationNNA/`
    static URL_ONIX = (idDecla) => `/rest/demande/onix/${idDecla}`

    static URL_DONNEES_BIBLIO = (idDecla) => { return `rest/demande/donneesBiblio/${idDecla}` }
    static URL_RECHERCHE_MOT_AUTORITE = `/rest/demande/rechercheMotAutorite`
 
    static URL_COUV = (host: string, couverture: number, largeur: number, hauteur: number, idImage: string) => {
        return `${host}/getImage?appName=SI&couverture=${couverture}&largeur=${largeur}&hauteur=${hauteur}&idImage=${idImage}` 
    }
    static URL_SAISIE_DECLA = (host: string, idDecla: string | number) => { 
        return `${host}/saisirDeclarationMonographie.do?id=${idDecla}&page=1`
    }

    static URL_HELP = `rest/pageStatique/aide`
}