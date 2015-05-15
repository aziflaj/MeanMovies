app.directive('movie', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/movie.html',
        scope: {
            title: '@',
            movieId: '@',
            img: '@',
            descr: '@'
        }
    };
});