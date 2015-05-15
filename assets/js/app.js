var app = angular.module('mean-movies', ['truncate', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/all_movies.html',
            controller: 'MoviesCtrl',
            controllerAs: 'mv'
        })

        .when('/movie/:movieId', {
            templateUrl: 'views/movie.html',
            controller: 'SingleMovieCtrl',
            controllerAs: 'mv',
            resolve: {
                movie: function(WebMovies, $route) {
                    return WebMovies.getMovieById($route.current.params.movieId)
                        .then(function (response) {
                            return response.data[0];
                        })
                }
            }
        })

        .when('/add', {
            templateUrl: 'views/add_movie.html',
            controller: 'MoviesCtrl',
            controllerAs: 'mv'
        })

        .otherwise({
            redirectTo: '/'
        });
}]);