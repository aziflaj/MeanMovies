app.controller('SingleMovieCtrl', ['Movies', '$routeParams',
    function(Movies, $routeParams) {
        this.id = $routeParams.movieId;

        this.movie = Movies.getById(this.id);

        console.log(this.movie);
}]);