const Search = React.createClass({
    getInitialState() {
        return {
            searchTerm: ''
        };
    },
    
    changeHandler(searchTerm) {
        this.setState({
            searchTerm: searchTerm
        });  
        
        if (searchTerm.length > 2) {
            this.props.onSearch(searchTerm);
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
                onChange={(e) => this.changeHandler(e.target.value)}
                placeholder='Enter gif name'
                style={styles}
                value={this.state.searchTerm}
                />
    }
});