import { getAlphabet } from '@/utils/functions/getAlphabet';
import { showTypeFactory } from '@/utils/functions/showTypeFactory/showTypeFactory';
import { ButtonBase, Stack, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Fragment } from 'react';

const ButtonOption = ({ index, isSelected, option, onSelected }) => {
	return (
		<ButtonOptionStyled
			onClick={() => onSelected(option, index)}
			variant='contained'
			focusRipple
			isSelected={isSelected}
		>
			<Stack gap={2} alignItems='center' flex={1}>
				{option.contents.map((content, index) => (
					<Fragment key={index}>{showTypeFactory(content)}</Fragment>
				))}
			</Stack>

			<Typography variant='h2' color='inherit'>
				{getAlphabet(index)}
			</Typography>
		</ButtonOptionStyled>
	);
};

const ButtonOptionStyled = styled(ButtonBase)(({ theme, isSelected }) => ({
	width: '100%',
	display: 'flex',
	gap: theme.spacing(2),

	justifyContent: 'space-between',
	border: '1px solid',

	borderColor: theme.palette.grey[400],
	padding: theme.spacing(2, 4),
	borderRadius: theme.shape.borderRadius,
	color: theme.palette.grey[600],

	...(isSelected && {
		color: theme.palette.primary.main,
		borderColor: theme.palette.primary.main,
		backgroundColor: alpha(theme.palette.primary.main, 0.1),
		boxShadow: theme.shadows[1],
	}),

	transition: theme.transitions.create(['color', 'border-color', 'box-shadow'], {
		duration: theme.transitions.duration.shortest,
	}),

	'&:hover, &:focus': {
		color: theme.palette.primary.main,
		borderColor: theme.palette.primary.main,
	},
}));

export default ButtonOption;
