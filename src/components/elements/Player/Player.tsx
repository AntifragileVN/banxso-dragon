/// <reference types="vite-plugin-svgr/client" />
import ReactPlayer from 'react-player';
import c from './Player.module.scss';
import PlayIcon from '@/assets/customPlay.svg?react';

type PlayerProps = {
	url: string;
	light?: string;
};

const Player = ({ url, light, ...rest }: PlayerProps) => (
	<div className={c.player__container}>
		<div className={c.player__wrapper}>
			<ReactPlayer
				className={c.player}
				url={url}
				light={light}
				playIcon={<PlayIcon />}
				width="100%"
				height="100%"
				controls={true}
				{...rest}
			/>
		</div>
	</div>
);

export default Player;
