const ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render(){
        return (
            <form className='contactForm'>
                <input type='text' placeholder='Name' defaultValue={this.props.contact.firstName} />
                <input type='text' placeholder='Surname' defaultValue={this.props.contact.lastName} />
                <input type='email' placeholder='Email' defaultValue={this.props.contact.email} />
                <button type='submit'>Add contact</button>
            </form>
        )
    },
});