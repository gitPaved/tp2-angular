import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { MessagesComponent } from '../messages/messages.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    HeroDetailComponent,
    MessagesComponent,
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    RouterModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

}
