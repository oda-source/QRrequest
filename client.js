/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://api.iconify.design/ion:qr-code.svg?color=%234f46e5',
      text: 'QRコード依頼',
      callback: function (t) {
        return Promise.all([
          t.board('url', 'name'),
          t.cards('name', 'url')
        ]).then(function (results) {
          var board = results[0];
          var cards = results[1] || [];

          var targetCard = cards.find(function (card) {
            return card && card.name && card.name.trim() === 'QR添付カード';
          });

          var targetUrl = targetCard ? targetCard.url : board.url;

          return t.modal({
            title: 'QRコード依頼',
            url: './index.html?targetUrl=' + encodeURIComponent(targetUrl) + '&boardName=' + encodeURIComponent(board.name),
            height: 750,
            fullscreen: false
          });
        }).catch(function (err) {
          console.error('Power-Up Error:', err);
          return t.board('url', 'name').then(function (board) {
            return t.modal({
              title: 'QRコード依頼',
              url: './index.html?targetUrl=' + encodeURIComponent(board.url) + '&boardName=' + encodeURIComponent(board.name),
              height: 750,
              fullscreen: false
            });
          });
        });
      }
    }];
  }
});
