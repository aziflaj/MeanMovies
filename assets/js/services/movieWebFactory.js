app.factory('WebMovies', ['$http',
    function ($http) {

        var apiURL = '/api';

        return {
            movies: function() {
                return $http.get(apiURL + '/movies');
            },

            getMovieById: function(id) {
                return $http.get(apiURL + '/movies/'+id);
            }
        };
}]);