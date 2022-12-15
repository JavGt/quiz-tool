import { Box, Typography } from '@mui/material';
import { MathJax } from 'better-react-mathjax';
import { showImage } from '../showImage/showImage';

export const showTypeFactory = (
	item,
	{ width = 100, variant = 'body1', variantLatex = 'h6', color = 'inherit' } = {}
) => {
	const { type, value } = item;

	switch (type) {
		case 'text':
			return <Typography color={color} variant={variant} children={value} />;
		case 'image':
			return <Box component='img' src={showImage(value)} alt='imagen' width={width} />;
		case 'latex':
			return (
				<MathJax inputMode='tex'>
					<Typography color={color} variant={variantLatex} children={value} />
				</MathJax>
			);
		default:
			return null;
	}
};
