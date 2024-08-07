// import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import c from './ParallaxSection.module.scss';
import capabilitiesImg from '@/assets/capabilities__bg.jpg';
import oterImg from '@/assets/starbase__bg.jpg';
import './swiperParallax.css';
// import '@/pages/Main/RocketCardList/customSwiper.css';
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
const ParallaxSection = () => {
	return (
		<section className={c.parallax__section}>
			<Swiper
				spaceBetween={0}
				effect="slide"
				speed={500}
				centeredSlides={true}
				navigation={true}
				pagination={{
					clickable: true,
					type: 'bullets',
				}}
				modules={[Navigation, Pagination, Parallax]}
				parallax={true}
				data-swiper-parallax="-23%"
				className="ParallaxSwiper"
			>
				{parallaxContent.map(({ title, description }, index) => (
					<>
						<SwiperSlide key={title} className="hero-slide">
							<div className="parallax-bg">
								<img src={parallaxContent[index].img} alt="" />
							</div>
							<div className="content">
								<h1
									className={c.parallax__title}
									data-swiper-parallax="-500"
								>
									{title}
								</h1>
								<p className={c.parallax__text}>{description}</p>
							</div>
						</SwiperSlide>
					</>
				))}
			</Swiper>
		</section>
	);
};

export default ParallaxSection;
