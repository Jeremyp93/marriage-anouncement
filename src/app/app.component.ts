import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marriage-anouncement';
  isChecked = false;

  constructor(private translate: TranslateService) {}

  onValueChange(): void {
    if (!this.isChecked) {
      this.translate.use('fr');
    } else {
      this.translate.use('nl');
    }
  }
}
