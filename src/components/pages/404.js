import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div className=''>
			<ErrorMessage />
			<p style={{ textAlign: 'center', fontSize: '24px' }}>Page doesnt exist</p>
			<Link style={{ display: 'block', textAlign: 'center', fontSize: '24px' }} to='/'>
				Back to main page
			</Link>
		</div>
	);
};

export default Page404;
