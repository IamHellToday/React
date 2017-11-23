
const movies = [
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

const MovieTitle = React.createClass({
    propTypes: { title: React.PropTypes.string.isRequired },
    render() { return React.createElement('h2', {}, this.props.title); }
});

const MovieDescription = React.createClass({
    propTypes: { desc: React.PropTypes.string.isRequired },
    render() { return React.createElement('p', {}, this.props.desc); }
});

const MoviePicture = React.createClass({
    propTypes: { pic: React.PropTypes.string.isRequired },
    render() { return React.createElement('img', {src: this.props.pic})}
});

const Movie = React.createClass({
    propTypes: { SingleMovie: React.PropTypes.object.isRequired},
    render() {
        return (
            React.createElement('li', {}, 
                React.createElement(MovieTitle, {title: this.props.SingleMovie.title}),
                React.createElement(MovieDescription, {desc: this.props.SingleMovie.desc}),
                React.createElement(MoviePicture, {pic: this.props.SingleMovie.pic})
            )
        )
    }
});

const MovieList = React.createClass({
    propTypes: { movies: React.PropTypes.array.isRequired },
    render(){ 

    let moviesElement = this.props.movies.map((arrayitem) => React.createElement(Movie, {key: arrayitem.id, SingleMovie: arrayitem}));

    return(React.createElement('ul', {}, moviesElement));
    }
});

ReactDOM.render(
    React.createElement(MovieList, {movies: movies}), 
    document.getElementById('app')
);
