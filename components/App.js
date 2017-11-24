const App = React.createClass({
    render() {
        return (
            <div className='app'>
                <ContactForm contact={contactForm} />
                <Contacts items={contacts} />
            </div>
            )
    }
});

const contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

const contacts = [ 
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
