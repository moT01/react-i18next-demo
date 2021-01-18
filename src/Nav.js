import { Link } from 'react-router-dom';

const Nav = () => (
	<header className='nav'>
		<div>i18n React Demo</div>
		<div>
				<Link to="/">Home</Link>
				<Link to="/page2">Page 2</Link>
		</div>
	</header>
);

export default Nav;
