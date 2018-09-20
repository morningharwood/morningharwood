import { SelectCollectionModule } from './select-collection.module';

describe('SelectCollectionModule', () => {
  let selectCollectionModule: SelectCollectionModule;

  beforeEach(() => {
    selectCollectionModule = new SelectCollectionModule();
  });

  it('should create an instance', () => {
    expect(selectCollectionModule).toBeTruthy();
  });
});
