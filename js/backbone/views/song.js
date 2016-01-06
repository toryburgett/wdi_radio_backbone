App.Views.Song = Backbone.View.extend({
  tagName: "div",
  className: "song",
  events: {
    "click .edit":   "renderEditForm",
    "click .cancel": "render",
    "click .submit": "updateSong",
    "click .delete": "deleteSong",
    "click .fav":    "favFunct"
  },
  initialize: function(){
    this.listenTo(this.model, "change", this.render);

    this.template = Handlebars.compile( $("#songTemplate").html() );
    this.editTemplate = Handlebars.compile( $("#formTemplate").html() );

    this.render();
  },
  render: function(){
    this.$el.html( this.template( this.model.toJSON() ));
  },
  renderEditForm: function(){
    this.$el.html(this.editTemplate(this.model.toJSON() ));

  },
  updateSong: function(){
    console.log("yo");
    event.preventDefault();
    var data = {
      title: this.$("[name='title']").val(),
      artist: this.$("[name='artist']").val(),
      genre: this.$("[name='genre']").val(),
      audio_url: this.$("[name='audio_url']").val(),
      album_art: this.$("[name='album_art']").val()
    };
    console.log(data);
    console.log("next is model");
    console.log(this.model);
    this.model.save(data);
  },
  deleteSong: function(){
    this.model.destroy();
    this.$el.fadeOut();
  },
  favFunct: function(){
    console.log("if there was a favorite function, this would do something cool! :) ");
  }

});
