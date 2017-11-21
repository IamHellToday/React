let Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },
    render: () => {
        let contacts = this.props.items.map(function(contact){
            return React.createElement(Contact, {item: contact, key: contact.id});
        });
        return (
            React.createElement('ul', {className: 'contactList'}, contacts)
        );
    }
});