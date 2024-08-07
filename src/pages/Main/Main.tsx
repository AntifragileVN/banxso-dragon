import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { rocketsState } from '@/store/rockets.store';
import * as api from '@/services/index';
import c from './Main.module.scss';
import RocketCardList from './RocketCardList/RocketCardList';
import Header from '@/components/elements/Header/Header';
import Player from '@/components/elements/Player/Player';
import AboutUsBg from '@/assets/video__bg.jpg';
import TeamSection from './TeamSection/TeamSection';
import ParallaxSection from './ParallaxSection/ParallaxSection';
import PlanetIcon from '@/assets/Planet.svg?react';

import capabilitiesImg from '@/assets/capabilities__bg.jpg';
import oterImg from '@/assets/starbase__bg.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const parallaxContent = [
	{
		title: 'STARSHIP CAPABILITIES',
		description:
			'As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point here on Earth.',
		img: oterImg,
	},
	{
		title: 'STARSHIP',
		description:
			'As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point here on Earth.',
		img: capabilitiesImg,
	},
];

const Main = () => {
	const [rockets, setRockets] = useRecoilState(rocketsState);

	useEffect(() => {
		const fetchRocketParams = async () => {
			const response = await api.getRocketParams();
			if (response?.length >= 0) {
				setRockets(response);
				setRockets((prev) => [...prev, ...response]);
			}
		};

		fetchRocketParams();
	}, [setRockets]);
	return (
		<>
			<section className={c.hero__section}>
				<div className={c.hero__background}></div>
				<div className="container">
					<div className={c.hero__wrapper}>
						<Header />
						<h1 className={c.hero__title}>dive deep in to the future</h1>
						<div className={c.hero__decorations}>
							<PlanetIcon className={c.hero__planetIcon} />
							<div className={c.hero__line}></div>
						</div>
					</div>
				</div>
			</section>
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
			<TeamSection />
			<ParallaxSection parallaxContent={parallaxContent} />
		</>
	);
};

export default Main;
