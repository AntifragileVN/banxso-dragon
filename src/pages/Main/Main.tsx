import React, { useEffect } from 'react';
import * as api from '@/services/index';
import c from './Main.module.scss';
import RocketCardList from './RocketCardList/RocketCardList';
import { rocketsState } from '@/store/rockets.store';
import { useRecoilState } from 'recoil';
import Player from '@/components/elements/Player/Player';
import AboutUsBg from '@/assets/video__bg.jpg';

const Main = () => {
	const [rockets, setRockets] = useRecoilState(rocketsState);

	useEffect(() => {
		const fetchRocketParams = async () => {
			const response = await api.getRocketParams();
			if (response?.length >= 0) {
				console.log(response);
				setRockets(response);
				setRockets((prev) => [...prev, ...response]);
			}
		};

		fetchRocketParams();
	}, []);
	return (
		<>
			<section className={c.rocketcards__section}>
				<div className="container">
					<h1 className={c.section__title}>Our Rockets</h1>
					<RocketCardList rockets={rockets} />
				</div>
			</section>
			<section className={c.statistic__section}>
				<div className="container">
					<ul className={c.statistic__list}>
						<li className={c.statistic__listItem}>
							<span className={c.statistic__value}>43</span>
							<span className={c.statistic__description}>
								TOTAL LAUNCHES
							</span>
						</li>
						<li className={c.statistic__listItem}>
							<span className={c.statistic__value}>46</span>
							<span className={c.statistic__description}>
								VISITS TO THE ISS
							</span>
						</li>
						<li className={c.statistic__listItem}>
							<span className={c.statistic__value}>25</span>
							<span className={c.statistic__description}>
								TOTAL REFLIGHTS
							</span>
						</li>
					</ul>
				</div>
			</section>

			<section className={c.rocketcards__section}>
				<div className="container">
					<h1 className={c.section__title}>About Us</h1>
					<Player
						url="https://www.youtube.com/watch?v=ujX6CuRELFE"
						light={AboutUsBg}
					/>
				</div>
			</section>
		</>
	);
};

export default Main;
