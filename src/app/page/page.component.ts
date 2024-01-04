import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
  languageCode: string = 'fr';

  constructor(private translate: TranslateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      this.languageCode = params.get('languageCode') ?? 'fr';
      this.setLanguage();
    });
  }

  setLanguage(): void {
    console.log(this.languageCode);
    this.translate.use(this.languageCode);
  }
}
