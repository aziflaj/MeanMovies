app.controller('MoviesCtrl', ['WebMovies',
    function( WebMovies) {
        var self = this;
        this.movies = null;

        WebMovies.movies().success(function(data) {
            self.movies = data;
            //console.log(self.movies);
        });


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