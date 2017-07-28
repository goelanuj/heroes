// import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'hero-details',
  template: `
      <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <h2>{{hero.title}}</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
    `
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}