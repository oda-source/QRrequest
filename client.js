/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://api.iconify.design/ion:qr-code.svg?color=%234f46e5',
      text: 'QR Flow Express',
      callback: function (t) {
        return t.popup({
          title: 'QR Flow Express',
          url: './index.html',
          height: 600
        });
      }
    }];
  }
});
