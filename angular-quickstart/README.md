# AngularQuickstart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

===============
Instructions
===============

1. Set up the Development Environment
Install latest Nodejs, npm and Angular CLI
npm install -g @angular/cli

2. Create a new project
ng new angular-quickstart

3. Serve the application
cd angular-quickstart
ng serve --open

------------------------------------------
THE APPLICATION SHELL
------------------------------------------
>> Angular CLI project is the foundation for both quick experiments & enterprise solutions

Install the Angular CLI
Create a new application 
Serve the application
Angular Components
Change the application title
Add application styles

You created the initial application structure using the Angular CLI.
You learned that Angular components display data.
You used the double curly braces of interpolation to display the app title.

------------------------------------------
The Hero Editor
------------------------------------------
Create the heroes component 
- Add a hero property
- Show the hero
Show the HeroesComponent view
Create a Hero class
Show the hero object
Format with the UppercasePipe
Edit the hero
- Two-way binding
- The missing FormsModule
AppModule
- Import FormsModule
- Deckare HeroesComponent

You used the CLI to create a second HeroesComponent.
You displayed the HeroesComponent by adding it to the AppComponent shell.
You applied the UppercasePipe to format the name.
You used two-way data binding with the ngModel directive.
You learned about the AppModule.
You imported the FormsModule in the AppModule so that Angular would recognize and apply the ngModel directive.
You learned the importance of declaring components in the AppModule and appreciated that the CLI declared it for you.

------------------------------------------
Displaying a list
------------------------------------------

The Tour of Heroes app displays a list of heroes in a Master/Detail view.
The user can select a hero and see that hero's details.
You used *ngFor to display a list.
You used *ngIf to conditionally include or exclude a block of HTML.
You can toggle a CSS style class with a class binding.


------------------------------------------
Master/Detial Components
------------------------------------------
You created a separate, reusable HeroDetailComponent.
You used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.
You used the @Input decorator to make the hero property available for binding by the external HeroesComponent.
