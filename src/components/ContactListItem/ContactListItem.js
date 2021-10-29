import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const { item, text, span, button } = styles;

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={item}>
      <p className={text}>
        {name}: <span className={span}>{number}</span>
      </p>
      <button
        type="button"
        onClick={() => onDelete(id)}
        title="Delete"
        className={button}
      >
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
