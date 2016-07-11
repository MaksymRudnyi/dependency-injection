import { Injectable } from '@angular/core';
import { HEROES } from 'mock-heroes';

import { Logger } from '../logger-service';

@Injectable()
export class HeroService{
    constructor(
        private logger: Logger,
        private isAuthorized: boolean);

    getHeroes() {
        let auth = isAuthorized ? 'authorized' : 'unauthorized';
        this.logger.log(`Getting heroes from ${auth} user...`);
        return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
    }
}