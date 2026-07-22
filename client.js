/* Trello Power-Up Client Script */
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: 'https://cdn.icon-icons.com/icons2/2699/SHA/512/trello_tile_logo_icon_168807.png',
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
