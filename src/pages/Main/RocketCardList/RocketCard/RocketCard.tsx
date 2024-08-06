import { NavLink } from 'react-router-dom';
import c from './RocketCard.module.scss';
import gif from '@/assets/rocket.gif';

import type { Rocket } from '@/types/rocket.type';

type RocketCardProps = {
	rocket: Rocket;
};

const RocketCard = ({ rocket }: RocketCardProps) => {
	const {
		height_w_trunk,
		diameter,
		launch_payload_mass,
		return_payload_mass,
		trunk,
		launch_payload_vol,
		name,
		id,
	} = rocket;
	return (
		<div className={c.rocketcard__wrapper}>
			<div className={c.rocketcard__gif}>
				<NavLink to={`rocket/${id}`}>
					<img src={gif} alt="Rocket photo" />
				</NavLink>
			</div>
			<h3 className={c.rocketcard__title}>{name}</h3>
			<ul className={c.rocketcard__list}>
				<li className={c.rocketcard__listItem}>
					HEIGHT:
					<span>{`${height_w_trunk.meters} M / ${height_w_trunk.feet} F`}</span>
				</li>
				<li className={c.rocketcard__listItem}>
					DIAMETER:
					<span>{`${diameter.meters} M / ${diameter.feet} F`}</span>
				</li>
				<li className={c.rocketcard__listItem}>
					SPACECRAFT VOLUME:
					<span>
						{`${launch_payload_vol.cubic_meters} M³ / ${launch_payload_vol.cubic_meters} F³`}
					</span>
				</li>
				<li className={c.rocketcard__listItem}>
					TRUNK VOLUME:
					<span>
						{`${trunk.trunk_volume.cubic_meters} M³ / ${trunk.trunk_volume.cubic_feet} FT³`}
					</span>
				</li>
				<li className={c.rocketcard__listItem}>
					LAUNCH PAYLOAD MASS:
					<span>
						{`${launch_payload_mass.kg} KG / ${launch_payload_mass.lb} LBS`}
					</span>
				</li>
				<li className={c.rocketcard__listItem}>
					RETURN PAYLOAD MASS:
					<span>
						{`${return_payload_mass.kg} KG / ${return_payload_mass.lb} LBS`}
					</span>
				</li>
			</ul>
			{/* {result} */}
		</div>
	);
};

export default RocketCard;
