/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://api.iconify.design/ion:qr-code.svg?color=%234f46e5',
      text: 'QRコード依頼',
      callback: function (t) {
        return t.popup({
          title: 'QRコード依頼',
          url: './index.html',
          height: 680
        });
      }
    }];
  }
});
