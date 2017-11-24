let App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchTerm: '',
            gif: {}
        };
    },
    searchHandler(searchTerm) {
        this.setState({
            loading: true
        });
        this.getGif
    }
    render(){
        let styles = {
        margin: '0 auto',
        textAlign: 'center',
        width: '90%'
        };
        return(
            <div styles={style}>
                <h1>GIF Search</h1>
                <p>Search your gif on <a href='http://giphy.com'>giphy</a>Press enter for downloading another ones</p>
                <Search 
                    onSearch={this.searchHandler}
                />
                <Gif 
                    loading={this.state.loading}
                    url={this.state.url}
                    sourceURL={this.state.sourceURL}
                />
            </div>
        );
    }
});