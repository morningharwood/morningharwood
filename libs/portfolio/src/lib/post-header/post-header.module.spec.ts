import { PostHeaderModule } from './post-header.module';

describe('PostHeaderModule', () => {
  let postHeaderModule: PostHeaderModule;

  beforeEach(() => {
    postHeaderModule = new PostHeaderModule();
  });

  it('should create an instance', () => {
    expect(postHeaderModule).toBeTruthy();
  });
});
