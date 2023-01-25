import { Box, Typography } from '@mui/material';
import logoName from '/Logotype_official_nombre.svg';
import logoHead from '/Logotype_official_cabeza.svg';
import PropTypes from 'prop-types';

const Logo = ({ suffix, height, type }) => {
	return (
		<Box position='relative'>
			<Box
				component='img'
				alt='Logo Ktdra'
				src={type === 'name' ? logoName : logoHead}
				height={height}
			/>

			<Typography
				position='absolute'
				bottom='70%'
				left='80%'
				width='100%'
				fontFamily='Bergen Sans'
				fontSize={height / 3}
				color='primary'
			>
				{suffix}
			</Typography>
		</Box>
	);
};
Logo.defaultProps = {
	suffix: '',
	height: 30,
	type: 'name',
};

Logo.propTypes = {
	suffix: PropTypes.string,
	height: PropTypes.number,
	type: PropTypes.oneOf(['name', 'head']),
};

export default Logo;
