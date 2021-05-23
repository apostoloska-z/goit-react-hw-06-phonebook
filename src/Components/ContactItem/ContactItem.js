import PropTypes from 'prop-types';
import "./ContactItem.scss"

const ContactItem = ({ name, number, id, deleteHandler }) => (
    <>
        <span className="contact-item__data">
            {name} : {number}
        </span>
        <button
            onClick={()=>deleteHandler(id)} 
            type="button"
            className="button"
        >Delete</button>
    </>
)

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func.isRequired,
}

export default ContactItem;