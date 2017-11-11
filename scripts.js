/*
let element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Film list'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Lord of The  Rings'),
                React.createElement('p', {}, 'Adventure movie')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Star Wars'),
                React.createElement('p', {}, 'Galactic space opera')
            )
        )
    );
*/
//Code refractoring below.

let movies = [
    {
        id: 1,
        title: 'Lord of the Rings',
        desc: 'Adventure movie',
        pic: 'https://img00.deviantart.net/35cb/i/2013/325/1/1/logo_of_lotr_by_breathing2004-d6v1qbg.jpg'
    },
    {
        id: 2,
        title: 'Star Wars',
        desc: 'Galactic space opera',
        pic: 'http://img.lum.dolimg.com/v1/images/starwars_551c43f4.jpeg'
    },
    {
        id: 3,
        title: 'Blade Runner',
        desc: 'Are we still humans?',
        pic: 'http://1.fwcdn.pl/ph/07/34/734/184121.2.jpg'
    },
    {
        id: 4,
        title: 'Thor',
        desc: 'Classic Marvel',
        pic: 'https://pmcdeadline2.files.wordpress.com/2017/10/thor-ragnarok.jpg?w=446&h=299&crop=1'
    },
];

let moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.pic}),
    );
});

let element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Film list'),
        React.createElement('ul', {}, moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));