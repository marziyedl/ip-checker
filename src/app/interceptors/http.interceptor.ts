import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    constrcutor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            "Authorization": 'Bearer WookieIP2022'
        })
        const requestClone = request.clone({
            headers
        });
        return next.handle(requestClone);
    }
}