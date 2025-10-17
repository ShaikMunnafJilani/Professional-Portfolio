import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define a simple TypeScript Interface for type safety
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // 🚨 IMPORTANT: Replace this with your actual Render URL after deployment!
  // Example placeholder URL (Render provides HTTPS)
  private apiUrl = 'https://portfolio-backend-fmn0.onrender.com/api/projects'; 

  // private apiUrl = 'http://localhost:8080/api/projects'; // <-- Old local URL

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}