let App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchTerm: '',
            gif: {}
        };
    },
    getGif(searchTerm, callback){
        let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchTerm;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText).data;
                    let gif = {
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };
                    callback(gif);
            }
        };
        xhr.send();
    },
    searchHandler(searchTerm) {
        this.setState({
            loading: true
        });
        this.getGif(searchTerm, function(gif) {
            this.setState({
                loading: false,
                gif: gif,
                searchTerm: searchTerm
            });
        }.bind(this));
    },
    render(){
        let styles = {
        margin: '0 auto',
        textAlign: 'center',
        width: '90%'
        };
        return(
            <div style={styles}>
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