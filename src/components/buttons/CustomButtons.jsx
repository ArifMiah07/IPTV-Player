import PropTypes from "prop-types";

export function NavMenuButton({label}) {
  return (
    <button className="navMenuBtn ">{label}</button>
  )
}

NavMenuButton.propTypes = {
  label: PropTypes.string.isRequired,
};
