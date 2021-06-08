import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from "../../redux/phonebook-actions";
import { getFilter } from "../../redux/phonebook-selectors";
import "./Filter.scss"

const Filter = ({ value, onChange }) => (
    <label className="input__title"> Filter contacts by name
        <input
            className="input"
            type="text"
            value={value}
            name="filter"
            onChange={onChange}
        >
        </input>
    </label>
)

Filter.defaultProps = {
    value: '',
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    value: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
    onChange: (event) => dispatch(changeFilter(event.target.value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);