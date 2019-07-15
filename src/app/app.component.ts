import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .highlightLog {
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'ng8-basics-assignment03';
  displayDetails = false;
  clicksLog = [];

  onDisplayDetailsClick() {
    this.displayDetails = !this.displayDetails;
    this.clicksLog.push(
      `button clicked: count=${this.clicksLog.length+1}, time=${new Date()}`);
  }
}
