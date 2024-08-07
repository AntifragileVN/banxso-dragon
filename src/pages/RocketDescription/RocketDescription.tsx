import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import c from './RocketDescription.module.scss';
import * as api from '@/services/index';
import { Rocket } from '@/types/rocket.type';
import gif from '@/assets/rocket.gif';
import ParallaxSection from '@/pages/Main/ParallaxSection/ParallaxSection';
import { ParallaxContentType } from '@/types/parallax.type';

const RocketDescription = () => {
	const { id } = useParams();
	const [rocket, setRocket] = useState<Rocket | null>(null);

	useEffect(() => {
		const fetchRocketParams = async (id: string) => {
			const response = await api.getRocketParamsById(id);
			if (response !== null) {
				console.log(response);
				setRocket(response);
			}
		};

		if (id) {
			fetchRocketParams(id);
		}
	}, [id]);

	if (!rocket) {
		return null;
	}

	const {
		height_w_trunk,
		diameter,
		launch_payload_mass,
		return_payload_mass,
		trunk,
		launch_payload_vol,
		name,
		flickr_images,
	} = rocket;

	const rocketImages = flickr_images.map((img) => ({
		img,
	})) as ParallaxContentType[];
	return (
		<>
			<section className={`${c.description__section}`}>
				<div className="container">
					<h1 className={c.description__title}>{name}</h1>
					<div className={c.description__wrapper}>
						<img src={gif} alt="" className={c.description__img} />
						<div className={c.description__content}>
							<h2 className={c.description__contentTitle}>{name}</h2>

							<ul className={c.description__list}>
								<li className={c.description__listItem}>
									HEIGHT:
									<span>{`${height_w_trunk.meters} M / ${height_w_trunk.feet} F`}</span>
								</li>
								<li className={c.description__listItem}>
									DIAMETER:
									<span>{`${diameter.meters} M / ${diameter.feet} F`}</span>
								</li>
								<li className={c.description__listItem}>
									SPACECRAFT VOLUME:
									<span>
										{`${launch_payload_vol.cubic_meters} M³ / ${launch_payload_vol.cubic_meters} F³`}
									</span>
								</li>
								<li className={c.description__listItem}>
									TRUNK VOLUME:
									<span>
										{`${trunk.trunk_volume.cubic_meters} M³ / ${trunk.trunk_volume.cubic_feet} FT³`}
									</span>
								</li>
								<li className={c.description__listItem}>
									LAUNCH PAYLOAD MASS:
									<span>
										{`${launch_payload_mass.kg} KG / ${launch_payload_mass.lb} LBS`}
									</span>
								</li>
								<li className={c.description__listItem}>
									RETURN PAYLOAD MASS:
									<span>
										{`${return_payload_mass.kg} KG / ${return_payload_mass.lb} LBS`}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<ParallaxSection parallaxContent={rocketImages} />
		</>
	);
};

export default RocketDescription;
