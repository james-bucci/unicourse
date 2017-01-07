import { UnicoursePage } from './app.po';

describe('unicourse App', function() {
  let page: UnicoursePage;

  beforeEach(() => {
    page = new UnicoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
