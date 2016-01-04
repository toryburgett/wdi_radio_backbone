App.Views.Player = Backbone.View.extend ({
  el: "#player",
  initialize: function(){
    console.log("new song in the player");
      // this.template = HandlebarsTemplates['songs/player'];
      // this.render();
      // this.$el.hide();
  },
  render: function(){
  //  this.$el.html(this.template);
  },
  renderSong: function (song){
    var source = $("#playerTemplate").html();
    var template = Handlebars.compile(source);
    // this.$el.html(this.template(song.toJSON()));
    this.$el.html(template(song.attributes));
  }
});
