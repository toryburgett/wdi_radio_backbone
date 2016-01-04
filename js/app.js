
App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  App.Routers.songsRouter = new App.Routers.Song();
  Backbone.history.start();
});
