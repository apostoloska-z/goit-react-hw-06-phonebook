import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFilter } from '../../redux/actions';
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

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
    onChange: (event) => dispatch(updateFilter(event.target.value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);