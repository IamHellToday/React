
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

let Movie = movies.map(function(movie){
    React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            picture: React.PropTypes.object.isRequired
        },
        render: () => {
            return (
                React.createElement('div', {}, 
                    React.createElement('h2', {}, movieTitle),
                    React.createElement('p', {}, movieDescription),
                    React.createElement('img', {}, moviePicture)
                )
            )
        }
    });
});

let movieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: () => {
        return (React.createElement({key: movie.id}, `Title: ${this.props.movies.title}`))
    }
});

let movieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    render: () => {
        return (React.createElement({key: movie.id}, `Description: ${this.props.movies.desc}`))
    }
});

let moviePicture = React.createClass({
    propTypes: {
        picture: React.PropTypes.object.isRequired
    },
    render: () => {
        return (React.createElement({key: movie.id, src: this.props.movies.pic}))
    }
});

ReactDOM.render(Movie, document.getElementById('app'));