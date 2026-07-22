/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://api.iconify.design/ion:qr-code.svg?color=%234f46e5',
      text: 'QRコード依頼',
      callback: function (t) {
        return t.board('url', 'name').then(function (board) {
          return t.modal({
            title: 'QRコード依頼',
            url: './index.html?targetUrl=' + encodeURIComponent(board.url) + '&boardName=' + encodeURIComponent(board.name),
            height: 750,
            fullscreen: false
          });
        });
      }
    }];
  }
});
