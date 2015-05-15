app.factory('Movies', [function() {
    var _movies = [
        {
            id: 1,
            title: 'Star Wars IV',
            poster: 'assets/img/star-wars-iv.jpg',
            descr: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.'
        },
        {
            id: 2,
            title: 'Star Wars V',
            poster: 'assets/img/star-wars-v.jpg',
            descr: 'After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.'
        },
        {
            id: 3,
            title: 'Star Wars VI',
            poster: 'assets/img/star-wars-vi.jpg',
            descr: 'After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star, while Luke struggles to make Vader return from the dark side of the Force.'
        },
        {
            id: 4,
            title: 'Star Wars I',
            poster: 'assets/img/star-wars-i.jpg',
            descr: 'Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to reclaim their old glory.'
        },
        {
            id: 5,
            title: 'Star Wars II',
            poster: 'assets/img/star-wars-ii.jpg',
            descr: 'Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé, while Obi-Wan investigates an assassination attempt on the Senator and discovers a secret clone army crafted for the Jedi.'
        },
        {
            id: 6,
            title: 'Star Wars III',
            poster: 'assets/img/star-wars-iii.jpg',
            descr: 'As the Clone Wars near an end, the Sith Lord Darth Sidious steps out of the shadows, at which time Anakin succumbs to his emotions, becoming Darth Vader and putting his relationships with Obi-Wan and Padme at risk.'
        }
    ];

    return {
        movies: _movies,
        getById: function (id) {
            var movieId = parseInt(id);
            for(var i=0; i<_movies.length; i++) {
                if (_movies[i].id === movieId) {
                    return _movies[i];
                }
            }
        },

        addMovie: function (mv) {
            _movies.push(mv);
        }
    };
}]);