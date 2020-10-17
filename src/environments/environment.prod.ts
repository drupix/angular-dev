export const environment = {
  production: true,
  application: {
    name: 'angular-dev',
    angular: 'Angular 10.1.3',
    node: 'Node 12.19.0',
    bootstrap: 'Bootstrap 4.5.2',
    fontawesome: 'Font Awesome 5.14.0',
  },
  url: 'http://localhost:5200',
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
    api: false,
    url: './assets/params/json/crud/',

    /* LOCAL REST API CRUD  */
    /* api: true,
    url: 'http://localhost:5200/', */
  },
};
