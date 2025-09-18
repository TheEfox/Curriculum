import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.html',
    styleUrl: './footer.css'
})
export class Footer {
    currentYear = new Date().getFullYear();
    githubUrl = 'https://github.com/TheEfox';
    linkedinUrl = 'https://www.linkedin.com/in/pedro-angel-moreno-romera/';
    logoUrl = 'https://flowbite.com/docs/images/examples/image-4@2x.jpg';
}
