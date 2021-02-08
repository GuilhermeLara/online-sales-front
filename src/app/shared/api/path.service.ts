import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class PathService implements OnInit {

  /**
   * test
   * @description endpoint para API de serviços
   * @exemple nameApi: {target: 'nameApiSwagger'} ou com grupos nameApi: { group: {nameApiChildren: {target: 'nameApiSwagger'}}}
   */

  private api: any = {
    authorize: {
      version: 'v1',
      target: 'authorize'
    },
  };


  constructor() {
    this.api.endpoint = (environment.mock) ? 'mock' : environment.target;
  }

  ngOnInit(): void { }

  /**
   * @name getApi
   * @param {string} api endpoint you want to get/post/put/delete/patch
   * @returns {Object} return settings for that endpoint
   * @example
   *
   *    const pathservice = new PathService ();
   *    let url = pathservice.getApi('account.group.login');
   *
   *    result:
   *    <api>/account/account/login
   */
  public getApi(endpoint: string, aditionalPath?: string[]): string {

    const listEndpoint = endpoint.split('.');
    let apisFiltered = Object.assign(this.api);
    let apiUrl = `${this.api.endpoint}`;

    for (const tagEndpoint of listEndpoint) {
      apisFiltered = apisFiltered[tagEndpoint];
      apiUrl += (apisFiltered.version) ? `/${apisFiltered.version}` : '';
      apiUrl += (apisFiltered.target) ? `/${apisFiltered.target}` : '';
    }

    if (aditionalPath) {
      aditionalPath.forEach(path => {
        apiUrl += `/${path}`;
      });
    }

    return apiUrl;
  }
}
