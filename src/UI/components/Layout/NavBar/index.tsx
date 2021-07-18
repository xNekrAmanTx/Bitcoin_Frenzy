import { navConstants } from '../../../../constants/navConstants'
import ListItem from '../../ListItem';

const Navbar = () => {
    return (
        <aside className='nav-bar white-on-blue'>
            <ul className='nav-list'>
                {navConstants.map(({text, path}, i) => (
                    <ListItem /* isActive={(match) => {
                        if(!match) return !i
                    }} */ key={i} text={text} path={path} />
                ))}
            </ul>
        </aside>
    );
};

export default Navbar;