import { PlexTorrentPage } from './app.po';

describe('plex-torrent App', () => {
  let page: PlexTorrentPage;

  beforeEach(() => {
    page = new PlexTorrentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
