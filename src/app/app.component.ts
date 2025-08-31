import { Component, HostListener } from '@angular/core';

type Project = {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  projectUrl: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  readonly name = 'Devang Phadnis';

  // UI state
  mobileOpen = false;
  scrolled = false;
  currentHash = window.location.hash || '#home';
  currYear = new Date().getFullYear();

  // Projects
  projects: Project[] = [
    {
      title: 'Course Purchase Platform',
      desc: 'Full-stack app: Angular + Spring Boot, Razorpay payments, PDF receipts, S3 video streaming, resume-playback.',
      tech: ['Angular', 'Spring Boot', 'AWS S3', 'Razorpay', 'MySQL'],
      github: 'https://github.com/DevangPhadnis/CoursePurchase#readme',
      projectUrl: 'http://ec2-3-82-98-7.compute-1.amazonaws.com:4200/login'
    },
    {
      title: 'Employee Management System',
      desc: 'JWT auth, role-based access, CRUD modules, dashboards, email/SMS notifications.',
      tech: ['Angular', 'Spring Boot', 'JWT', 'PrimeNG', 'RDS MySQL'],
      github: 'https://github.com/DevangPhadnis/EmployeeManagement#readme',
      projectUrl: 'http://ec2-3-82-98-7.compute-1.amazonaws.com:80/login'
    }
  ];

  toggleMobile() { this.mobileOpen = !this.mobileOpen; }
  closeMobile()  { this.mobileOpen = false; }

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 8; }

  @HostListener('window:hashchange')
  onHashChange() { this.currentHash = window.location.hash || '#home'; }
  
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
