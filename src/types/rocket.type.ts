export type Rocket = {
	heat_shield: {
		material: string;
		size_meters: number;
		temp_degrees: number;
		dev_partner: string;
	};
	launch_payload_mass: {
		kg: number;
		lb: number;
	};
	launch_payload_vol: {
		cubic_meters: number;
		cubic_feet: number;
	};
	return_payload_mass: {
		kg: number;
		lb: number;
	};
	return_payload_vol: {
		cubic_meters: number;
		cubic_feet: number;
	};
	pressurized_capsule: {
		payload_volume: {
			cubic_meters: number;
			cubic_feet: number;
		};
	};
	trunk: {
		trunk_volume: {
			cubic_meters: number;
			cubic_feet: number;
		};
		cargo: {
			solar_array: number;
			unpressurized_cargo: true;
		};
	};
	height_w_trunk: {
		meters: number;
		feet: number;
	};
	diameter: {
		meters: number;
		feet: number;
	};
	first_flight: number;
	flickr_images: string[];
	name: string;
	type: string;
	active: boolean;
	crew_capacity: number;
	sidewall_angle_deg: number;
	orbit_duration_yr: number;
	dry_mass_kg: number;
	dry_mass_lb: number;
	thrusters: [
		{
			type: string;
			amount: number;
			pods: number;
			fuel_1: number;
			fuel_2: number;
			isp: number;
			thrust: {
				kN: number;
				lbf: number;
			};
		}
	];
	wikipedia: string;
	description: string;
	id: number;
};
