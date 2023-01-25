import { getAlphabet } from '@/utils/functions/getAlphabet';
import { showTypeFactory } from '@/utils/functions/showTypeFactory/showTypeFactory';
import { ButtonBase, Stack, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Fragment } from 'react';

const ButtonOption = ({ indexAlphabet, isSelected, onClick, contents, disabled }) => {
	return (
		<ButtonOptionStyled
			disabled={disabled}
			onClick={onClick}
			variant='contained'
			focusRipple
			isSelected={isSelected}
		>
			<Stack gap={2} alignItems='flex-start' flex={1}>
				{contents.map((content, indexDetails) => (
					<Fragment key={indexDetails}>{showTypeFactory(content)}</Fragment>
				))}
			</Stack>

			<Typography variant='h2' color='inherit'>
				{getAlphabet(indexAlphabet)}
			</Typography>
		</ButtonOptionStyled>
	);
};

const ButtonOptionStyled = styled(ButtonBase, {
	shouldForwardProp: prop => prop !== 'isSelected',
})(({ theme, isSelected }) => ({
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
	}),

	transition: theme.transitions.create(['color', 'border-color', 'box-shadow'], {
		duration: theme.transitions.duration.shortest,
	}),

	'&:hover': {
		color: theme.palette.primary.main,
	},
}));

ButtonOption.defaultProps = {
	isSelected: false,
	disabled: false,
};

export default ButtonOption;
