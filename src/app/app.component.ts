import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'authentication';
  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('ko');
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService
      .get('langTranslate')
      .subscribe((res) => this.config.setTranslation(res));
  }
}
