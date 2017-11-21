let App = React.createClass({
    render: () => {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});

let contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

let contacts = [ 
    {
        id: 1,
        firstName: 'Tomek',
        lastName: 'Nowak',
        email: 'nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Ada',
        lastName: 'Nowak',
        email: 'ada@example.com'
    },
    {
        id: 3,
        firstName: 'Łukasz',
        lastName: 'Nowak',
        email: 'łukasz@example.com'
    }
];
