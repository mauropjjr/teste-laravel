import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr'; // Suponha que você esteja usando ngx-toastr para notificações/toasts.


@Injectable({
  providedIn: 'root'
})
export class AppInterceptor implements HttpInterceptor {
  private apiUrl = 'http://localhost/api/';
  constructor(private toastr: ToastrService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let api_key = '';
    const cloneReq = request.clone({
      url: this.apiUrl + request.url,
     // headers: request.headers.set('Authorization', `Basic YWRtaW46YWRtaW5AMjAyMw==${api_key}`)
    });

    return next.handle(cloneReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Erro de cliente
          console.error('Erro do cliente:', error.error.message);
        } else {
          // Erro do servidor
          if (error.status === 401) {
            this.toastr.warning('Erro na solicitação: ' + error.status + ' ' + error.statusText + ' ' + error.error?.message);
          } else if (error.status === 500) {
            this.toastr.error('Erro no servidor: ' + error.status + ' ' + error.statusText);
          } 
        }

        return throwError(error);
      })
    );
  }
}
