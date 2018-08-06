import { async, TestBed } from '@angular/core/testing';
import { MhUiModule } from './mh-ui.module';

describe('MhUiModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MhUiModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(MhUiModule).toBeDefined();
  });
});
