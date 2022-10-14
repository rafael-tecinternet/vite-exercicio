import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/heavy">Heavy Metal</NavLink>
      <NavLink to="/classic">Classic Rock</NavLink>
    </nav>
  );
};
export default Menu;
