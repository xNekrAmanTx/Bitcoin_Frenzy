import { NavLink} from "react-router-dom";
import ICON from "../../assets/images/statisticIcon.svg";

type PropsType = {
  text: string;
  path: string;
};

const ListItem = ({ text, path }: PropsType) => {
  return (
    <li className="nav-list__item">
      <img src={ICON} alt="" />
      <NavLink activeStyle={{ fontWeight: 600 }} to={path}>
        {text}
      </NavLink>
    </li>
  );
};

export default ListItem;
