import { AngularTrainingAppPage } from './app.po';

describe('angular-training-app App', function() {
  let page: AngularTrainingAppPage;

  beforeEach(() => {
    page = new AngularTrainingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
