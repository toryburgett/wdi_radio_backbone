App.Collections.Songs = Backbone.Collection.extend({
  model: App.Models.Song,
  url: "http://localhost:3000/songs",
  initialize: function(){
    console.log("New songs collection initialized");
  }
});
