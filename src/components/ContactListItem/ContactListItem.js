import PropTypes from "prop-types";

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" onClick={() => onDelete(id)} title="Delete">
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
