import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PathService } from '../api/path.service';

/**
 * classe para manutenção dos dados de autenticação armazenados no cookie
 */
@Injectable()
export class Auth {

  public userAuth: any;

  constructor(
    private http: HttpClient,
    private api: PathService
  ) {
  }

  /**
   * @name getAuth
   * @description retorna o email e senha armazenados no cookie
   * @return {object} retorna um objeto com os dados armazenados no cookie
   */
  public getAuth() {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      return accessToken;
    }
    return this.userAuth;
  }


  /**
   * @name setAuth
   * @description método para armazenar os dados no cookie
   * @param {string} token - token gerado para o usuário
   * @param {string} accessToken - email do usuário
   * @param {string} refreshToken - email do usuário
   */
  public setAuth(auth): boolean {
    this.userAuth = auth;
    this.cacheLogin(auth);
    return true;
  }


  public cacheLogin(auth) {
    if (!environment.production) {
      sessionStorage.setItem('currentUser', JSON.stringify(auth));
    }
  }

  /**
   * @name  clearCredentials
   * @description limpa os dados armazenados no cookie
   */
  public clearCredentials() {
    this.userAuth = false;
    sessionStorage.removeItem('currentUser');
  }

  public setToken(token: string) {
    const auth = {
      accessToken: token,
      tokenId: token
    };

    this.setAuth(auth);
  }

}
