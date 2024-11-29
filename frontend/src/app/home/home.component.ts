// home.component.ts
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  email: string;
  image: string;
}

interface TechStack {
  category: string;
  technologies: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgbCarouselModule, CommonModule]
})
export class HomeComponent {
  techStacks: TechStack[] = [
    {
      category: 'backend',
      technologies: ['Java', 'Spring Boot']
    },
    {
      category: 'frontend',
      technologies: ['Angular']
    },
    {
      category: 'database',
      technologies: ['MySQL']
    }
  ];

  constructor(private router: Router) {}

  contact(member: TeamMember) {
    // Implement contact functionality
    console.log(`Contacting ${member.name}`);
  }
}