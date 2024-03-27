import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private toggleSidenavSubject = new Subject<void>();
  private format = new BehaviorSubject<string>('pt-BR');
  toggleSidenav$ = this.toggleSidenavSubject.asObservable();

  toggleSidenav(): void {
    this.toggleSidenavSubject.next();
  }

  toggleFormat() {
    this.format.next(this.format.value === 'en-CA' ? 'pt-BR' : 'en-CA');
  }

  getFormat() {
    return this.format.asObservable();
  }
}
