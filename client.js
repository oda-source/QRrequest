/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://api.iconify.design/ion:qr-code.svg?color=%234f46e5',
      text: 'QRコード依頼',
      callback: function (t) {
        // 現在のボードの全カードを取得して「QR添付カード」を探す
        return t.cards('name', 'url').then(function (cards) {
          var targetCard = cards.find(function (card) {
            return card.name.trim() === 'QR添付カード';
          });
          
          // カードが見つかればそのURL、なければボード全体のURLを取得
          var cardUrl = targetCard ? targetCard.url : '';

          return t.board('url', 'name').then(function (board) {
            var finalUrl = cardUrl || board.url;
            return t.popup({
              title: 'QRコード依頼',
              url: './index.html?targetUrl=' + encodeURIComponent(finalUrl) + '&boardName=' + encodeURIComponent(board.name),
              height: 680
            });
          });
        });
      }
    }];
  }
});
