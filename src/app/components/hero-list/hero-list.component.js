"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var heroes_1 = require("../../actions/heroes");
var core_1 = require("@angular/core");
var HeroListComponent = (function () {
    function HeroListComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    HeroListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroListComponent.prototype["delete"] = function (hero) {
        this.store.dispatch({ type: heroes_1.ActionTypes.DELETE_HERO, payload: hero.id });
    };
    HeroListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    return HeroListComponent;
}());
__decorate([
    core_1.Input()
], HeroListComponent.prototype, "heroes");
HeroListComponent = __decorate([
    core_1.Component({
        selector: 'app-hero-list',
        templateUrl: './hero-list.component.html',
        styleUrls: ['./hero-list.component.scss']
    })
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
