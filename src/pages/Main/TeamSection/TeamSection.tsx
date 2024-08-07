// import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import c from './TeamSection.module.scss';
import teamMemberAvatar from '@/assets/developer__avatar.png';
import TeamCard from './TeamCard/TeamCard';
import Arrow from '@/assets/Arrow.svg?react';
import './teamSwiper.css';

export type TeamMember = {
	role: string;
	name: string;
	avatar: string;
};

const team = [
	{
		role: 'st.mechanic',
		name: 'Dave Johnson',
		avatar: teamMemberAvatar,
	},
	{
		role: 'st.mechanic',
		name: 'Tom Johnson',
		avatar: teamMemberAvatar,
	},
	{
		role: 'st.mechanic',
		name: 'Tom Johnson',
		avatar: teamMemberAvatar,
	},
] as TeamMember[];

const TeamSection = () => {
	return (
		<section className={`${c.team__section} `}>
			<div className="container">
				<div className={`${c.team__wrapper}`}>
					<div className={c.team__content}>
						<h2 className={c.team__title}>Team</h2>
						<p className={c.team__description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							auctor sed urna a faucibus. Pellentesque mi nisl, mollis
							convallis metus id, congue semper neque. Sed suscipit eget
							ipsum ut gravida. Fusce.
						</p>

						<div className={c.team__navigation}>
							<div className="team__button-swiper">
								<div className="team-button-prev">
									<Arrow className={c.arrowIcon} />
								</div>
								<div className="team-button-next">
									<Arrow className={`${c.arrowIcon} ${c.rotate}`} />
								</div>
							</div>
						</div>
					</div>
					<div className={c.team__sliderContainer}>
						{
							<Swiper
								slidesPerView={1}
								spaceBetween={10}
								navigation={{
									nextEl: '.team-button-next',
									prevEl: '.team-button-prev',
								}}
								breakpoints={{
									0: {
										slidesPerView: 1,
										spaceBetween: 10,
										centeredSlides: true,
									},
									480: {
										centeredSlides: false,
									},
									1020: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
								}}
								modules={[Navigation]}
								className={`teamSwiper`}
							>
								{team.map((member) => (
									<SwiperSlide>
										<TeamCard teamMember={member} />
									</SwiperSlide>
								))}
							</Swiper>
						}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
