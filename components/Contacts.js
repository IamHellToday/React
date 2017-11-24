const Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },
    render(){
        let contacts = this.props.items.map(contact => React.createElement(Contact, {item: contact, key: contact.id}));

        return <ul className='contactList'>{contacts}</ul>
    }
});