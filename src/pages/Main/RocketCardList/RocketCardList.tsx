import RocketCard from './RocketCard/RocketCard';
import c from './RocketCardList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Arrow from '@/assets/Arrow.svg?react';

import type { Rocket } from '@/types/rocket.type';
import './customSwiper.css';
import { useRecoilState } from 'recoil';
import { favoriteRocketsState } from '@/store/favorites.store';

type RocketCardListProps = {
	rockets: Rocket[];
};

const RocketCardList = ({ rockets }: RocketCardListProps) => {
	const shouldRender = rockets && rockets.length > 0;
	const [favorites] = useRecoilState(favoriteRocketsState);

	return (
		<>
			{shouldRender ? (
				<>
					<Swiper
						data-testid="rocket-list"
						slidesPerView={1}
						spaceBetween={10}
						pagination={{
							clickable: true,
							// dynamicBullets: true,
							el: '.rocketlist-pagination',
							type: 'bullets',
						}}
						navigation={{
							nextEl: '.rocketlist-button-next',
							prevEl: '.rocketlist-button-prev',
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
						{rockets.map(({ id, ...rest }) => (
							<SwiperSlide key={id} data-testid={'rocket-slide-item'}>
								<RocketCard
									rocket={{ id, ...rest }}
									isFavorite={favorites.includes(id)}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="button-Atrangment">
						<div className="rocket-swiper">
							<div className="rocketlist-button-prev">
								<Arrow className={c.arrowIcon} />
							</div>
							<div className="rocketlist-pagination"></div>
							<div className="rocketlist-button-next">
								<Arrow className={`${c.arrowIcon} ${c.rotate}`} />
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default RocketCardList;
