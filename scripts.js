let Counter = React.createClass({
    getInitialState(){
        return { counter: 0 };
    },
    increment: function() { // przy próbie napisania increment: () => {} gubi się kontekts this? Wyrzuca counter is undefined
        this.setState({
            counter: this.state.counter +1 // czemu nie działa zapis this.state.counter++?
        });
    },
    decrement: function(){
        this.setState({
            counter: this.state.counter -1
        });
    },
    render(){
        return React.createElement('div', {},
                React.createElement('span', {}, 'The counter: ', this.state.counter),
                React.createElement('button', {onClick: this.decrement}, 'Click me to decrement'),
                React.createElement('button', {onClick: this.increment}, 'Click me to incremenet'));
    }
});

const element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
