import c from './SwiperNavButtons.module.scss';
import { Swiper as SwiperType } from 'swiper/types';

type SwiperNavButtonsProps = {
	swiper: SwiperType;
};

const SwiperNavButtons = ({ swiper }: SwiperNavButtonsProps) => {
	return (
		<div className="swiper-nav-btns">
			<button onClick={() => swiper.slidePrev()}>Prev</button>
			<div className={c.dots}>
				{swiper.slides.map((_, index) => (
					<button
						key={index}
						className={`${c.dot} ${
							swiper.activeIndex === index ? c.active : ''
						}`}
						onClick={() => swiper.slideTo(index)}
					></button>
				))}
			</div>
			<button onClick={() => swiper.slideNext()}>Next</button>
		</div>
	);
};

export default SwiperNavButtons;
