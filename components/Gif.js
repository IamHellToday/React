const Gif = React.createClass({
    getURL(){
        return this.props.sourceUrl || GIPHY_LOADING_URL;
    },
    render(){
        let styles = {
            minHeight: '300px',
            margin: '0.5em'
        };
        let url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
        return (
            <div style={styles}>
                <a href={this.getURL()} title='View this on giphy' target='new'>
                    <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}} />
                </a>
            </div>
        );
    }
});