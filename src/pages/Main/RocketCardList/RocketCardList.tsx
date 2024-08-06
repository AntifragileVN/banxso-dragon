import React, { useRef } from 'react';
import RocketCard from '../RocketCard/RocketCard';
import c from './RocketCardList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import SwiperNavButtons from '@/components/UI/SwiperNavButtons/SwiperNavButtons';

import type { Rocket } from '@/types/rocket.type';
import { Navigation, Pagination } from 'swiper/modules';
import './customSwiper.css';

type RocketCardListProps = {
	rockets: Rocket[];
};

const RocketCardList = ({ rockets }: RocketCardListProps) => {
	const swiperRef = useRef<SwiperType | null>(null);
	return (
		<div className={c.rocketcard__container}>
			<Swiper
				centeredSlides={true}
				slidesPerView={3}
				modules={[Navigation, Pagination]}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				loop={true}
				pagination={{
					clickable: true,
					dynamicBullets: true,
					el: '.swiper-pagination',
				}}
				navigation={{
					nextEl: 'swiper-button-next',
					prevEl: 'swiper-button-prev',
				}}
				breakpoints={{
					600: { slidesPerView: 2 },
					968: { slidesPerView: 3 },
				}}
				className={`mySwiper ${c.rocketlist}`}
			>
				{rockets?.length > 0
					? rockets.map(({ id, ...rest }) => (
							<SwiperSlide key={id}>
								<RocketCard rocket={{ id, ...rest }} />
							</SwiperSlide>
					  ))
					: null}
			</Swiper>
			<div className="button-Atrangment"></div>/
			{swiperRef?.current ? <SwiperNavButtons swiper={swiperRef.current} /> : null}
		</div>
	);
};

export default RocketCardList;
