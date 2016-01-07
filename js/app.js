App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function(){
  console.log("console dot log");
  var songCollect = new App.Collections.Songs();
  songCollect.fetch().then(function(){
    for(var i = 0; i < songCollect.length; i++){
      var songView = new App.Views.Song({
        model: songCollect.models[i]
      });
      $("#songs").append(songView.$el);
    }
  });
});
