import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathService } from '../../api/path.service';

@Injectable()
export class AuthService {


  constructor(
    private http: HttpClient,
    private api: PathService
    ) {
  }

    /**
   * @name isAuthenticated
   * @description Método para verificar se o token é válido
   * @return {Observable} com os dados da requisição na API
   */

  public isAuthenticated(): Observable<Object> {
    return this.http.get(this.api.getApi('login'));
  }

  public getIP(): Observable<any> {
    return this.http.get('http://ipinfo.io')
    .pipe(
      map(res => {
        return res;
      })
    );
  }
}
