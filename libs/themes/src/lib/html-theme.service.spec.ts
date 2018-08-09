import { TestBed, inject } from '@angular/core/testing';

import { HtmlThemeService } from './html-theme.service';

describe('HtmlThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlThemeService]
    });
  });

  it('should be created', inject([HtmlThemeService], (service: HtmlThemeService) => {
    expect(service).toBeTruthy();
  }));
});
