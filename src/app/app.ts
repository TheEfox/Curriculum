import { Component, OnInit, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { Home } from "./components/home/home";

@Component({
    selector: 'app-root',
    imports: [Home],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
    protected readonly title = signal('Curriculum');

    ngOnInit(): void {
        initFlowbite();
    }
}