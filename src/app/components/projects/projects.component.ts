import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  errorMessage: string | null = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
        this.errorMessage = 'Could not load projects. Ensure the backend is running on port 8080.';
      }
    });
  }
}