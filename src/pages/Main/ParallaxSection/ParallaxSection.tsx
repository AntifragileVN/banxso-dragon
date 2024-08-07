import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import c from './ParallaxSection.module.scss';
import './swiperParallax.css';
import type { ParallaxContentType } from '@/types/parallax.type';

type ParallaxSectionProps = {
	parallaxContent: ParallaxContentType[];
};
const ParallaxSection = ({ parallaxContent }: ParallaxSectionProps) => {
	return (
		<section className={c.parallax__section}>
			<Swiper
				spaceBetween={0}
				effect="slide"
				speed={500}
				// centeredSlides={true}
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
				{parallaxContent?.length >= 0
					? parallaxContent.map(({ title, description }, index) => (
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
					  ))
					: null}
			</Swiper>
		</section>
	);
};

export default ParallaxSection;
