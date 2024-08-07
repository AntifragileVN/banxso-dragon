import type { TeamMember } from '../TeamSection';
import c from './TeamCard.module.scss';

type TeamCardProps = {
	teamMember: TeamMember;
};

const TeamCard = ({ teamMember }: TeamCardProps) => {
	const { name, role, avatar } = teamMember;
	return (
		<div className={c.teamcard__wrapper}>
			<div className={c.teamcard__gif}>
				<img src={avatar} alt={`${name} avatar`} />
			</div>
			<h3 className={c.teamcard__role}>{role}</h3>
			<h3 className={c.teamcard__title}>{name}</h3>
		</div>
	);
};

export default TeamCard;
