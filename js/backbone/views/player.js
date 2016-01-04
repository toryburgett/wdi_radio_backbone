App.Views.Player = Backbone.View.extend ({
  el: "#player",
  initialize: function(){
    console.log("new song in the player");
  },
  renderSong: function (song){
    var source = $("#playerTemplate").html();
    var template = Handlebars.compile(source);
    this.$el.html(template(song.attributes));
  }
});
