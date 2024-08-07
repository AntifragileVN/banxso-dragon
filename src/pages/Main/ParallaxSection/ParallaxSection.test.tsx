import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ParallaxSection from './ParallaxSection';
import type { ParallaxContentType } from '@/types/parallax.type';

describe('ToolList', () => {
	it('Render nothing if empty array was given', () => {
		render(
			<MemoryRouter>
				<ParallaxSection parallaxContent={[]} />
			</MemoryRouter>
		);

		expect(screen.queryByTestId('rocket-list')).toBeNull();
	});

	it('Render nothing if null was given', () => {
		render(
			<MemoryRouter>
				<ParallaxSection
					parallaxContent={null as unknown as ParallaxContentType[]}
				/>
			</MemoryRouter>
		);

		expect(screen.queryByTestId('parallax-list')).toBeNull();
	});

	it('Render nothing if undefined was given', () => {
		render(
			<MemoryRouter>
				<ParallaxSection
					parallaxContent={undefined as unknown as ParallaxContentType[]}
				/>
			</MemoryRouter>
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
			<MemoryRouter>
				<ParallaxSection parallaxContent={parallaxContent} />
			</MemoryRouter>
		);

		expect(screen.getByTestId('parallax-list')).toBeInTheDocument();
		expect(screen.getAllByTestId('parallax-slide-item')).toHaveLength(
			parallaxContent.length
		);
	});
});
