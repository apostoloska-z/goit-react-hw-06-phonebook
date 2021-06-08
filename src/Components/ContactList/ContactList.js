import PropTypes from 'prop-types';
import ContactItem from "../ContactItem";
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import "./ContactList.scss"

const ContactList = ({ contacts, deleteHandler }) => (
    <ul className="contact-list">
        {contacts.map((contact) => (
            
            <li className="contact-list__item" key={contact.id}>
                <ContactItem
                    name={contact.name}
                    number={contact.number}
                    id={contact.id}
                    deleteHandler={deleteHandler}
                />
            </li>
        ))}
    </ul>
)


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteHandler: PropTypes.func.isRequired,
}

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    deleteHandler: (contactId) => dispatch(deleteContact(contactId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);