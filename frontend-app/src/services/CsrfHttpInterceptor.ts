import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfHttpInterceptor implements HttpInterceptor {

    constructor(private csrfTokenExtrator: HttpXsrfTokenExtractor) { }
    
   intercept(request: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
       // All HTTP requests are going to go through this method
       console.log("Cookie = ", document.cookie);
       const token = this.csrfTokenExtrator.getToken() as string;
       if (request.method == "POST" && token != null) {
        const modifiedRequest = request.clone({ 
                headers: request.headers.set("X-XSRF-TOKEN", token),
            });
            console.log(modifiedRequest.headers);
            return next.handle(modifiedRequest);
        }
        /*if (this.cookieService.get('XSRF-TOKEN') != null) {
            var xsrfCookie = this.cookieService.get('XSRF-TOKEN');
            this.cookieService.remove('XSRF-TOKEN');
            console.log("Cookies = ", this.cookieService.getAll());
            const options = {domain: 'localhost'} as CookieOptions;
            this.cookieService.put ('XSRF-TOKEN', xsrfCookie, options);  
            console.log("Cookies = ", this.cookieService.getAll());
        }*/
       return next.handle(request);
   }
} 