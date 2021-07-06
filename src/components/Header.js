import PropTypes from "prop-types"; //impt
import Button from "./Button";
//import { Button } from "antd";

const Header = ({ title, onAdd, showAdd }) => {
  //rafce

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "Green" : "Red"}
        text={showAdd ? "Add" : "Close"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.prototypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
