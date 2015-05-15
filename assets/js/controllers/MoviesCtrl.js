app.controller('MoviesCtrl', ['Movies',
    function(Movies) {

        var self = this;
        this.movies = Movies.movies;
        this.hello = "Halo";

        this.addMovie = function(mv) {
            var newMovie = {
                id: self.movies.length+1,
                title: mv.title,
                poster: mv.poster,
                descr: mv.descr
            };

            Movies.addMovie(newMovie);

            console.log(newMovie);
        };
}]);