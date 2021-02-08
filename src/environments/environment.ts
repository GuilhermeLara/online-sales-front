// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mock: '',
  target: 'https://identity-sandbox.vwgroup.io/oidc',
  urlLogin: 'https://identity-sandbox.vwgroup.io/oidc/v1/authorize?client_id=2a616150-fc53-4156-83ca-9ec7e5302797@apps_vw-dilab_com&scope=openid&response_type=code&redirect_uri=http://localhost:4200/portalonlinesales&state=http://localhost:4200/portalonlinesales'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
