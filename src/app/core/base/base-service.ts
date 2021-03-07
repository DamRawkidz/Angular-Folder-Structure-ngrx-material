import { HttpClient, HttpEventType } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface IapiResponse<T>{
    apiResponse:{
        id:number,
        desc:string,
    },
    data:Array<T>
}

export class BaseService {

    host:string = ''
    protected prefix:string = `${this.host}/api`
    protected fullUrl:string = ''

    constructor(
        endpoint:string,
        protected http: HttpClient
    ) {
        this.fullUrl = this.prefix + endpoint
    }

    // callService<T>(action: string, data?: any[]): Observable<IapiResponse<T>> {
    //     const body = {
    //         apiRequest: {
    //             action: action
    //         }
    //         , data: data || []
    //     };
    //     return this.http.post<IapiResponse<T>>(this.fullUrl, body)
    // }
    uploadDocument<HttpHeaderResponse>(target: FormData){
        return this.http.post(this.fullUrl,target,{
            reportProgress: true,
            observe:'events'
        }).pipe(
            map((event) => {
                switch(event.type){
                    case HttpEventType.UploadProgress:
                        const progress = Math.round(100 * event.loaded / event.total);
                        return { status: 'progress', message: `${progress}` };
                    case HttpEventType.Response:
                        return { status: 'success', message:  event.body }; 
                    default:
                        return `Unhandled event: ${event.type}`;
                    }
                }
            ), 
            catchError(err => {               
                return of({ status: 'error', message:  `${err.message}` })
            })
        )
    }

    getAll<T>(): Observable<T[]>{
        return this.http.get<T[]>(this.fullUrl)
    }

    add<T>(data: T): Observable<T> {
        return this.http.post<T>(this.fullUrl,data)
    }

    get<T>(id: number): Observable<T> {
        return this.http.get<T>(`${this.fullUrl}/${id}`)
    }

    update<T>(id: number,data: T): Observable<Response>{
        return this.http.put<Response>(`${this.fullUrl}/${id}`,data)
    }

    deleteData(id: number): Observable<Response> {
        return this.http.delete<Response>(`${this.fullUrl}/${id}`)
    }

    query<T>(query: string): Observable<T> {
        return this.http.get<T>(`${this.fullUrl}/${query}`)
    }
}

