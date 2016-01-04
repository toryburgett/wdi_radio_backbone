App.Routers.Song = Backbone.Router.extend({
  routes: {
    "": "index",
    "songs/:id/play": "playSong",
    "songs/new": "newSong"
  },

  initialize: function(){
    console.log("Router initialized");
    App.Collections.songs = new App.Collections.Songs();
    App.Views.songsList = new App.Views.SongList({collection: App.Collections.songs });
    App.Views.player = new App.Views.Player();
    App.Views.newSong = new App.Views.SongForm({collection: App.Collections.songs});
  },

  index: function(){
    App.Collections.songs.fetch({reset:true});
    //if form toggle breaks, its because of this janky code
    if( $("#new-song-modal").css("display") == "block"){
      $("#new-song-modal").hide();
    }
  },

  playSong: function(id){
   App.Collections.songs.fetch().then(function(){
     view = App.Views.songsList.findView(id);
     App.Views.player.renderSong(view.model);
   });
  },

  newSong: function(){
      App.Collections.songs.fetch();
      App.Views.newSong.renderForm();
  }

});
