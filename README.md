# WDI Radio: Backbone Edition

For this app, your job is to build a single-page app that plays music. It's a real,
functional tunr!

For a working solution, please see [the deployed version](http://pbjradio.herokuapp.com).

## API Setup

Fork and clone [this repo](https://github.com/ga-dc/wdi_radio_api). We'll be using a rails back end. It'll be a single model CRUD API for songs. Lets go into this directory and run all our initial rails setup and run our server.

```bash
$ cd wdi_radio_api
$ rake db:create
$ rake db:migrate
$ rake db:seed
$ rails s
```

This will be the backend we'll be using, from http://localhost:3000.

## Tuesday: Add Models, Collections and Item Views

### Item View

* Define a Backbone item view for your `Song` model.
* Create a `render` method and corresponding Handlebars template that defines your view's `.$el`.
* Create a `listenTo` statement that causes the view to re-render upon change.
* Create events that correspond with the following actions. You will need to make new methods and/or Handlebars templates for most of these.
  * Rendering an "Edit Song" form.
  * Canceling an "Edit Song" form.
  * Updating a Grumble with new data.
  * Deleting a Grumble.

## Bonus

* Add functionality to sort songs (e.g., by artists, title, album).
* Add a search box that live-filters the list of songs.
* Add a list of recently played songs to the player view.
* Add a playlist model to the app, and let the user create and play playlists.
