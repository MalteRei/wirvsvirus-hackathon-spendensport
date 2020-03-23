# #WirVsVirus Hackathon – Spendensport // GoBonsai.de

GoBonsai ist eine App, die Challenges und Einsatz (Spende) miteinander verbindet.
Eine Herausforderung wird erstellt, indem Menge, (Sport)Art und Dauer festgelegt werden (K) und dann Spende und Organisation (B) ausgewählt wird.
In der App gibt es zwei Möglichkeiten zur Weiterentwicklung:
die Kontrollschnittstelle (K), die die Challenge kontrolliert und bestätigt sowie die Bezahlschnittstelle (B), um einen Einsatz einzutragen. Der Einsatz einer API ermöglicht, die Schnittstellen durch externe Anwendungen zu bedienen, z.B. eine Tracking-App, die den Fortschritt automatisch einträgt oder eine Verknüpfung mit PayPal, die bei verfehlen des Ziels den Spendenbetrag automatisch verbucht.
So können auch neue Arten von Challenges (z.B. Mental Health Übungen, Kreative Aufgaben, Haushalt) mit neuen Spendenmöglichkeiten (z.B. Blutspende, Zeit mit Oma, Abwasch für die ganze Familie) eingefügt werden.
Entstanden ist die App während des #WirVsVirus Hackathon vom 20.03-22.03.2020, initiiert durch die Bundesregierung, Tech4Germany, Code for Germany, Initiative D21, Impact Hub Berlin, ProjectTogether, Prototype Fund und SEND e.V. 

[![Build Status](https://dev.azure.com/Maltereimann/spendensport/_apis/build/status/MalteRei.wirvsvirus-hackathon-spendensport?branchName=master)](https://dev.azure.com/Maltereimann/spendensport/_build/latest?definitionId=22&branchName=master)

## Running the project locally

1. Make sure you have [node.js](https://nodejs.org/en/download/) installed
2. Open a terminal
3. `npm install -g @angular/cli`
4. `git clone https://github.com/MalteRei/wirvsvirus-hackathon-spendensport`
5. `cd frontend/spendensport/`
6. `npm install`
7. run `ng serve` for a dev server
8. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.
