import { Pipe, PipeTransform } from "@angular/core"
@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    transform(array: Array<any>, orderField: string, orderType: boolean): Array<any> {
        if(!array) return
        array.sort((a: any, b: any) => {
            let ae = a[orderField]
            let be = b[orderField]
            if (ae == undefined && be == undefined) return 0
            else if (ae == undefined && be != undefined) return orderType ? 1 : -1
            else if (ae != undefined && be == undefined) return orderType ? -1 : 1
            else if (ae == be) return 0

            if(!isNaN(parseFloat(ae)) && isFinite(ae) && !isNaN(parseFloat(be)) && isFinite(be)) return ae - be
            return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1)
        })
        return array
    }
}