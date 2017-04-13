import { Injectable } from '@angular/core'
import { MdDialog } from '@angular/material'
import { Http, Headers, RequestOptionsArgs } from '@angular/http'
import { Router } from '@angular/router'
import { DialogComponent } from '../components'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class HttpDefaultService {

    private _headers: Headers
    constructor(
        private _http: Http,
        private _dialog: MdDialog,
        private _router: Router
    ) {
        this._headers = new Headers()
        this._headers.append('Content-Type', 'application/json')
        this._headers.append('Access-Control-Allow-Origin', '*')
    }

    public get(url: string, headers?: Headers): Promise<any> {

        let options: RequestOptionsArgs = {}
        if (headers) options.headers = headers
        return this._http.get(url, options)
            .toPromise()
            .then((response) => this.handleSuccess(response))
            .catch((error) => this.handleError(error))
    }

    public post(url: string, object?: Object): Promise<any> {
        return this._http.post(url, object, { headers: this._headers })
            .toPromise()
            .then((response) => this.handleSuccess(response))
            .catch((error) => this.handleError(error))
    }

    private handleSuccess(response) {
        try {
            return response.json()
        }
        catch (err) {
            return response.text()
        }
    }

    private handleError(error: any): Promise<never> {
        console.warn('An error occurred', error)

        switch (error.status) {

            case 403:
                this._router.navigate(['denied'])
                break
            case 500:
                let json = error.json()
                let dialog = this._dialog.open(DialogComponent, {
                    disableClose: true
                })
                dialog.componentInstance.title = json.titre
                dialog.componentInstance.icon = {
                    code: "error",
                    color: "warn"
                }
                dialog.componentInstance.content = json.message
                dialog.componentInstance.actions = {
                    cancel: "Fermer"
                }
                return Promise.reject(error.message || error)
            default:
                console.warn('An error occurred', error)
                break
        }
    }
}