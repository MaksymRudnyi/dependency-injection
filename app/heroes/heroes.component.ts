import { Component } from '@angular/core';
import { HeroListComponent }  from './hero-list.component';
import { heroServiceProvider } from './hero.service.provider';

@Component({
    selector: 'my-heroes',
    template: `
        <h2>Heroes</h2>
        <hero-list></hero-list>
    `,
    directives: [
        HeroListComponent
    ],
    providers: [
        heroServiceProvider
    ]
})

export class HeroesComponent {

}