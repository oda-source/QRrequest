/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://api.iconify.design/ion:qr-code.svg?color=%234f46e5',
      text: 'QRコード依頼',
      callback: function (t) {
        // ボード情報とカード一覧を安全に同時取得
        return Promise.all([
          t.board('url', 'name'),
          t.cards('name', 'url')
        ]).then(function (results) {
          var board = results[0];
          var cards = results[1] || [];

          // 「QR添付カード」という名前のカードを探す
          var targetCard = cards.find(function (card) {
            return card.name && card.name.trim() === 'QR添付カード';
          });

          // 見つかればカードURL、見つからなければボードURLを使う
          var targetUrl = targetCard ? targetCard.url : board.url;

          return t.popup({
            title: 'QRコード依頼',
            url: './index.html?targetUrl=' + encodeURIComponent(targetUrl) + '&boardName=' + encodeURIComponent(board.name),
            height: 680
          });
        }).catch(function (err) {
          console.error('Trello Power-Up Error:', err);
          // エラー時でも最低限ボードURLを取得して開く
          return t.board('url', 'name').then(function (board) {
            return t.popup({
              title: 'QRコード依頼',
              url: './index.html?targetUrl=' + encodeURIComponent(board.url) + '&boardName=' + encodeURIComponent(board.name),
              height: 680
            });
          });
        });
      }
    }];
  }
});
