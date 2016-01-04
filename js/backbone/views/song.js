App.Views.Song = Backbone.View.extend({
  tagName: "div",
  className: "song",

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.source = $("#songTemplate").html();
    this.template = Handlebars.compile(this.source);

    this.render();
  },
  events: {
    'click .song-image': "updatePlayer",
    'click .song-info': "renderEditForm",
    'click .updateSong': "updateSong"
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  updateSong: function(){
    event.preventDefault();
     var data = {
       title: this.$("[name='title']").val(),
       artist: this.$("[name='artist']").val(),
     };
     this.model.save(data);
  },

  updatePlayer: function(){
    console.log("Song Clicked, update player");
    App.Views.player.renderSong(this.model);
    App.Routers.songsRouter.navigate('songs/' + this.model.get("id") + '/play');
  }
});
