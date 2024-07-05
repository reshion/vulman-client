# About Angular ClientApp for vulnerability management system

- Clone the repository and run the following commands to install all dependencies and libraries.

```console
npm install
```

- Generate the Swagger client using the following command.

```console
npm run generate-api
```

- After the API has been changed, copy the l5-swagger.json file from the backend to the client app. The file should be placed in the following folder.

```console
  codegen/schema/swagger.json
```

- Run client app using the following command.

```console
npm run start
```

# ClientApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
