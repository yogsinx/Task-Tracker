import PropTypes from "prop-types";
import { Button as AntButton } from "antd";
const Button = ({ color, text, onClick }) => {
  return (
    <AntButton
      ghost
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </AntButton>
  );
};

Button.defaultProps = {
  color: "Orange",
  text: "ADD",
};

Button.prototypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
};

export default Button;
