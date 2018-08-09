import { NightOwlModule } from './night-owl.module';

describe('NightOwlModule', () => {
  let nightOwlModule: NightOwlModule;

  beforeEach(() => {
    nightOwlModule = new NightOwlModule();
  });

  it('should create an instance', () => {
    expect(nightOwlModule).toBeTruthy();
  });
});
