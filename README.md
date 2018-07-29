# CounterappPwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## PWA
Make a Progressive Web App: https://angular.io/guide/service-worker-getting-started

Execute this command: `ng add  @angular/pwa`

> Note at the time I wrote this, there is the following error when running this command `Path "/ngsw-config.json" already exist`. I used the solution described at https://stackoverflow.com/a/51562327/2179668 and used the following command instead `ng add  @angular/pwa@0.6.8` (with `@angular/cli@6.0.8` installed)

