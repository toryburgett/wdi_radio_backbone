App.Views.SongForm = Backbone.View.extend({
  el: "#new-song-modal",
  events: {
    "click .close": "cancelForm",
    "click .submit": "createSong"
  },

  renderForm: function(){
    this.$el.show();
  },

  createSong: function(event){
    event.preventDefault();
    console.log("in createSong method");
    var data = {
      artist: this.$("#new-song-artist").val(),
      title: this.$("#new-song-title").val(),
      genre: this.$("#new-song-genre").val(),
      audio_url: this.$("#new-song-audio-url"),
      album_art: this.$("#new-song-album-art")
    };
    this.collection.create(data);
    this.$("input").val("");
    this.$el.hide();
    App.Routers.songsRouter.navigate("");
  },

  cancelForm: function(){
    this.$el.hide();
    App.Routers.songsRouter.navigate("");
  }

});
