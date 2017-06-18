import { LoungeLobbyPage } from './app.po';

describe('lounge-lobby App', () => {
  let page: LoungeLobbyPage;

  beforeEach(() => {
    page = new LoungeLobbyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
