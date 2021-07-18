import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import ICON from '../../../assets/images/statisticIcon.svg'

type PropsType = {
    text: string
    path: string
    // isActive: (match:any) => boolean
};

const ListItem = ({ text, path/* , isActive */ }: PropsType) => {

    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname)
    }, [])

    return (
        <li className='nav-list__item'>
            <object data={ICON}></object>
            <NavLink /* isActive={isActive} */ activeStyle={{fontWeight: 600}} to={path}> {text}{/*<span className="nav-link-wrapper"></span>*/} </NavLink>
        </li>
    );
};

export default ListItem;