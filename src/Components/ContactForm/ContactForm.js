import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import {addContact} from '../../redux/actions'
import "./ContactForm.scss"

class ContactForm extends Component  {
    state = {
        name: '',
        number: '',
    }

    nameInputId = uuidv4();
    numberInputId = uuidv4();

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

        
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
         
    }
    
    reset = () => {
        this.setState({name: '', number: ''})
    }
        
    render() {
        return (
        <form className="form" onSubmit={this.handleSubmit}>
                <label className="form__element" htmlFor={this.nameInputId}>
                    <span className="input__title">Name</span>
                <input className="input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value = {this.state.name}
                    onChange = {this.handleChange}
                    id = {this.nameInputId}
                />
            </label>
                <label className="form__element" htmlFor={this.numberInputId}>
                    <span className="input__title">Number</span>    
                <input className="input"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value = {this.state.number}
                    onChange = {this.handleChange}
                    id = {this.numberInputId}
                />
            </label>
            <button className="button" type="submit"> Add contact</button>
        </form>
        )
    }    
}

const mapDispatchToProps = dispatch => ({
    onSubmit: ({name, number}) => dispatch(addContact({name, number}))
})

export default connect(null, mapDispatchToProps)(ContactForm);