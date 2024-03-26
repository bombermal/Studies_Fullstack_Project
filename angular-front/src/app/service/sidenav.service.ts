import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private toggleSidenavSubject = new Subject<void>();
  toggleSidenav$ = this.toggleSidenavSubject.asObservable();

  toggleSidenav(): void {
    this.toggleSidenavSubject.next();
  }
}
