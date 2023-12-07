import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Mod1Module } from './mod1/mod1.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[Mod1Module],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <mod1-container></mod1-container>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
