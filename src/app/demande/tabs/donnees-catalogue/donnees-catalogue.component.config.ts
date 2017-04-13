export class DonneesCatalogueConfig {
    static getNotices0Columns = (params) => {
        return [
            {
                name: 'Nom',
                prop: 'nom',
            },
            {
                name: 'Prenom',
                prop: 'prenom',
            },
            {
                name: 'Date',
                prop: 'date'
            },
            {
                name: 'Qualificatif',
                prop: 'qualificatif'
            },
            {
                name: 'NNA',
                prop: 'nna',
                cellTemplate: params.tpl.nnaTpl
            },
            {
                name: 'ISNI',
                prop: 'isni',
                cellTemplate: params.tpl.isniTpl,
            },
            {
                name: '',
                cellTemplate: params.tpl.actionTpl
            }
        ]
    }

    static getNotices1Columns = (params) => {
        return [
            {
                name: 'Nom',
                prop: 'nom'
            },
            {
                name: 'Prenom',
                prop: 'prenom',
            },
            {
                name: 'Date',
                prop: 'date'
            },
            {
                name: 'Qualificatif',
                prop: 'qualificatif'
            },
            {
                name: 'NNA',
                prop: 'nna',
                cellTemplate: params.tpl.nnaTpl
            },
            {
                name: 'ISNI',
                prop: 'isni',
                cellTemplate: params.tpl.isniTpl,
            },
            {
                name: '',
                cellTemplate: params.tpl.actionTpl
            }
        ]
    }

    static getNotices2Columns = (params) => {
        return [
            {
                name: 'Nom',
                prop: 'nom'
            },
            {
                name: 'Prenom',
                prop: 'prenom',
            },
            {
                name: 'Date',
                prop: 'date'
            },
            {
                name: 'Qualificatif',
                prop: 'qualificatif'
            },
            {
                name: 'NNA',
                prop: 'nna',
                cellTemplate: params.tpl.nnaTpl
            },
            {
                name: 'ISNI',
                prop: 'isni',
                cellTemplate: params.tpl.isniTpl,
            },
            {
                name: '',
                cellTemplate: params.tpl.actionTpl
            }
        ]
    }
}