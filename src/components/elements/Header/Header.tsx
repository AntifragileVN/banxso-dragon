import Button from '@/components/UI/Button/Button';
import c from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className={c.header__wrapper}>
			<Button>
				<NavLink to="/">Logo</NavLink>
			</Button>
			<nav className={c.menu}>
				<a href="#" className={c.menu__item}>
					Home
				</a>
				<a href="#" className={c.menu__item}>
					About
				</a>
				<a href="#" className={c.menu__item}>
					QA
				</a>
				<a href="#" className={c.menu__item}>
					Contact Form
				</a>
			</nav>
			<Button>
				<NavLink to="/">Contact Form</NavLink>
			</Button>
		</div>
	);
};

export default Header;
