App.Views.SongList = Backbone.View.extend({
  el: "#library",
  views: [],

  initialize: function(){
    console.log("New SongsList view initialized");
    //listen for reset, then call renderAll
    this.listenTo(this.collection, "reset", this.renderAll);
    // listen for add, then call renderOne
    this.listenTo(this.collection, "add", this.renderOne);
  },
  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(song){
    var view = new App.Views.Song({model:song});
    this.views.push(view);
    this.$el.prepend(view.$el);
  },
  findView: function(id){
    for(var i=0; i < this.views.length; i++){
      if(this.views[i].model.get("id") == id){
        view = this.views[i];
      }
    }
    return(view);
  }
  // renderShow: function(id){
  //
  // }

});
