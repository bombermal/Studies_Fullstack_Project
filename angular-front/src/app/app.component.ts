import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DashComponent } from './dash/dash.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet
    , HeaderComponent
    , BodyComponent
    , DashComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simplebank';
}
