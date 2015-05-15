app.controller('SingleMovieCtrl', ['WebMovies', '$routeParams', 'movie',
    function(WebMovies, $routeParams, movie) {

        this.movie = movie;

}]);