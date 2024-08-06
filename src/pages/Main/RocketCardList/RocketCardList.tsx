import RocketCard from './RocketCard/RocketCard';
import c from './RocketCardList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import type { Rocket } from '@/types/rocket.type';
import './customSwiper.css';

type RocketCardListProps = {
	rockets: Rocket[];
};

const RocketCardList = ({ rockets }: RocketCardListProps) => {
	return (
		<>
			<Swiper
				// centeredSlides={true}
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					clickable: true,
					// dynamicBullets: true,
					el: '.swiper-pagination',
					type: 'bullets',
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				modules={[Pagination, Navigation]}
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
			<div className="button-Atrangment">
				<div className="button-swiper">
					<div className="swiper-button-prev"></div>
					<div className="swiper-pagination"></div>
					<div className="swiper-button-next"></div>
				</div>
			</div>
		</>
	);
};

export default RocketCardList;
