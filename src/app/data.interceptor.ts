import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export function PhotoInterceptor (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    const baseApiUrl = 'http://localhost:3000'
    const modified_req = req.clone({
        url: baseApiUrl + req.url
    })

    return next(modified_req)
}