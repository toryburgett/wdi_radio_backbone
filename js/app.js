
App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  $(document).ready(function() {
    App.Routers.songsRouter = new App.Routers.Song();
    Backbone.history.start();
    // var songs = new App.Collections.Songs();
    // songs.fetch({reset:true});
    // var listView = new App.Views.SongList({collection: songs});
  });

});
