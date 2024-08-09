import { useAuth } from '@/services/auth.service';
import { useRecoilState } from 'recoil';
import { isAuthenticatedState } from '@/store/user.store';
import Button from '@/components/UI/Button/Button';
import c from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const { logout } = useAuth();
	const [isAuthenticated] = useRecoilState(isAuthenticatedState);

	return (
		<div className={c.header__wrapper}>
			<Button>
				<NavLink to="/">Logo</NavLink>
			</Button>
			<nav className={c.menu}>
				<NavLink to="/" className={c.menu__item}>
					Home
				</NavLink>
				{isAuthenticated ? (
					<NavLink to={'favorites'} className={c.menu__item}>
						Favorites
					</NavLink>
				) : null}
				<a href="#" className={c.menu__item}>
					About
				</a>
				<a href="#" className={c.menu__item}>
					QA
				</a>
			</nav>
			<div className={c.header__authNav}>
				<Button>
					<NavLink to="/">Contact Form</NavLink>
				</Button>
				{isAuthenticated ? (
					<Button type="button" onClick={logout}>
						Log out
					</Button>
				) : (
					<Button>
						<NavLink to="/auth">Log in</NavLink>
					</Button>
				)}
			</div>
		</div>
	);
};

export default Header;
