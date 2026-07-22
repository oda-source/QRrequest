/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://api.iconify.design/ion:qr-code.svg?color=%234f46e5',
      text: 'QRコード依頼',
      callback: function (t) {
        // 現在開いているボードの情報を取得してポップアップを開く
        return t.board('url', 'name').then(function (board) {
          return t.popup({
            title: 'QRコード依頼',
            url: './index.html?boardUrl=' + encodeURIComponent(board.url) + '&boardName=' + encodeURIComponent(board.name),
            height: 680
          });
        });
      }
    }];
  }
});
