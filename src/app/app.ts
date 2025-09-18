import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

import { Home } from "./components/home/home";
import { About } from './components/about/about';
import { Footer } from "./components/footer/footer";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Home, About, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
    protected readonly title = signal('Curriculum');

    ngOnInit(): void {
        initFlowbite();
    }
}