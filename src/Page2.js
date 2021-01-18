import { Link } from 'react-router-dom';

const Page2 = () => (
	<div className='body'>
		<p>This is <strong>page 2</strong></p>
		<p>Go to <Link to='/'>the home page</Link></p>
	</div>
);

export default Page2;