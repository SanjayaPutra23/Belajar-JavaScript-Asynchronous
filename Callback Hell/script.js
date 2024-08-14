setTimeout(function() {
    document.body.style.backgroundColor = 'red';
    setTimeout(function() {
        document.body.style.backgroundColor = 'orange';
        setTimeout(function() {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(function() {
                document.body.style.backgroundColor = 'green';
                setTimeout(function() {
                    document.body.style.backgroundColor = 'blue';
                    setTimeout(function() {
                        document.body.style.backgroundColor = 'purple';
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

searchMoviesApi(
    'naruto',
    function (movies) {
        saveToMyDb(
            movies,
            function () {
                // Kalau berhasil kita simpan
                filteringMovie(
                    movies, 
                    () => {},
                    () => {}
                );
            },
            () => {
                // Kalau gagal kita coba lagi
            }
        );
    },
    () => {
        // Server Error
    }
)