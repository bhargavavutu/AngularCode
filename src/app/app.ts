import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './components/index.component';
import { UserComponent } from './components/user.component';

@Component({
  imports: [RouterOutlet, IndexComponent, UserComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
