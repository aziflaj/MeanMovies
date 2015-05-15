app.controller('SingleMovieCtrl', ['WebMovies', '$routeParams',
    function(WebMovies, $routeParams) {
        this.id = $routeParams.movieId;
        var self = this;

        WebMovies.getMovieById(this.id).success(function (data) {
            self.movie = data;
            console.log(self.movie);
        });
}]);