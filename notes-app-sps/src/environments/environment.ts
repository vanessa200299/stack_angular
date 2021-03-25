// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Agregamos a el environment la base url de la api
// export const environment = {
//   production: false,
//   apiIUrl: 'http://localhost:3000/servicio/api_notes_app',
// };
//Para mandarlo a producción
export const environment = {
  production: false,
  apiIUrl: 'http://18.218.175.120/servicio/api_notes_app',
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
