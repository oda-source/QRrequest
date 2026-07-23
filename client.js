/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://api.iconify.design/ion:qr-code.svg?color=%234f46e5',
      text: 'QRコード依頼',
      callback: function (t) {
        return Promise.all([
          t.board('url', 'name', 'id'),
          t.cards('id', 'name', 'url', 'attachments')
        ]).then(function (results) {
          var board = results[0];
          var cards = results[1] || [];

          var targetCard = cards.find(function (card) {
            return card && card.name && card.name.trim() === 'QR添付カード';
          });

          var targetUrl = targetCard ? targetCard.url : board.url;
          
          // 添付ファイル名をカンマ区切りで取得
          var attachmentNames = [];
          if (targetCard && targetCard.attachments) {
            attachmentNames = targetCard.attachments.map(function (att) {
              return att.name;
            });
          }

          var modalUrl = './index.html?targetUrl=' + encodeURIComponent(targetUrl) +
            '&boardName=' + encodeURIComponent(board.name) +
            '&attachments=' + encodeURIComponent(JSON.stringify(attachmentNames));

          return t.modal({
            title: 'QRコード依頼',
            url: modalUrl,
            height: 750,
            fullscreen: false
          });
        }).catch(function (err) {
          return t.board('url', 'name').then(function (board) {
            return t.modal({
              title: 'QRコード依頼',
              url: './index.html?targetUrl=' + encodeURIComponent(board.url) + '&boardName=' + encodeURIComponent(board.name) + '&attachments=%5B%5D',
              height: 750,
              fullscreen: false
            });
          });
        });
      }
    }];
  },

  'show-settings': function (t, opts) {
    return t.popup({
      title: 'GAS連携設定',
      url: './settings.html',
      height: 200
    });
  }
});
