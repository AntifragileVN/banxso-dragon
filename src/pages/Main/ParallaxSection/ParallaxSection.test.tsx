import { render, screen } from '@testing-library/react';
import ParallaxSection from './ParallaxSection';
import type { ParallaxContentType } from '@/types/parallax.type';

import MainWrapper from '@/MainWrapper';

describe('ToolList', () => {
	it('Render nothing if empty array was given', () => {
		render(
			<MainWrapper>
				<ParallaxSection parallaxContent={[]} />
			</MainWrapper>
		);

		expect(screen.queryByTestId('rocket-list')).toBeNull();
	});

	it('Render nothing if null was given', () => {
		render(
			<MainWrapper>
				<ParallaxSection
					parallaxContent={null as unknown as ParallaxContentType[]}
				/>
			</MainWrapper>
		);

		expect(screen.queryByTestId('parallax-list')).toBeNull();
	});

	it('Render nothing if undefined was given', () => {
		render(
			<MainWrapper>
				<ParallaxSection
					parallaxContent={undefined as unknown as ParallaxContentType[]}
				/>
			</MainWrapper>
		);

		expect(screen.queryByTestId('rocket-list')).toBeNull();
	});

	it('Renders rocketlist correctly with data', () => {
		const parallaxContent = [
			{
				title: 'STARSHIP CAPABILITIES',
				description:
					'As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point here on Earth.',
				img: '/asdfasdf',
			},
			{
				title: 'STARSHIP',
				description:
					'As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point here on Earth.',
				img: 'adsfa',
			},
		] as ParallaxContentType[];

		render(
			<MainWrapper>
				<ParallaxSection parallaxContent={parallaxContent} />
			</MainWrapper>
		);

		expect(screen.getByTestId('parallax-list')).toBeInTheDocument();
		expect(screen.getAllByTestId('parallax-slide-item')).toHaveLength(
			parallaxContent.length
		);
	});
});
