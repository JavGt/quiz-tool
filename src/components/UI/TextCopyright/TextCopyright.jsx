import { Typography } from '@mui/material';

const TextCopyright = ({ variantMui, colorMui }) => {
	const currentYear = new Date().getFullYear();

	return (
		<Typography variant={variantMui} color={colorMui}>
			&copy; {currentYear} <strong>Ktdra</strong>. Todos los derechos reservados.
		</Typography>
	);
};

TextCopyright.defaultProps = {
	variantMui: 'subtitle2',
	colorMui: 'text.secondary',
};

export default TextCopyright;
