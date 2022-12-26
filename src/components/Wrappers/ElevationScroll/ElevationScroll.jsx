import { useScrollTrigger } from '@mui/material';
import { cloneElement } from 'react';

const ElevationScroll = ({ children, window }) => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window && window(),
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
};

export default ElevationScroll;
