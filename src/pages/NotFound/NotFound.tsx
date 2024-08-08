import c from './_NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={`${c.notfound__container} container`}>
			<div className={c.notfound__text}>404 | NOT FOUND</div>
		</div>
	);
};

export default NotFound;
