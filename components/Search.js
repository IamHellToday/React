const Search = React.createClass({
    getInitialState() {
        return {
            searchTerm = ''
        }
    },
    changeHandler = (event) => {
        let searchTerm = event.target.value;
        this.setState({
            searchTerm: searchTerm
        });
        if (searchTerm.length > 2) {
            this.props.onSearch(searchTerm);
        }
    },
    keyUpHandler = (event) => {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchTerm);
        }
    },
    render(){
        let styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px'
        };
        return <input
                type='text'
                onChange={this.changeHandler}
                onKeyUp={this.keyUpHandler}
                placeholder='Enter gif name'
                style={styles}
                value={this.state.searchTerm}
                />
    }
});