import { createTheme } from '@mui/material/styles';
import { blue, green, red, orange } from '@mui/material/colors';
import { Zoom } from '@mui/material';

export const theme = createTheme({
	palette: {
		common: {
			black: '#000814',
			white: '#ffffff',
		},
		primary: {
			main: '#06038D',
		},
		secondary: {
			main: '#071D49',
		},
		tertiary: {
			main: '#FF6900',
		},
		alternate: {
			main: '#FFC300',
		},
		error: {
			main: red[700],
		},
		warning: {
			main: orange[700],
		},
		info: {
			main: blue[700],
		},
		success: {
			main: green[700],
			contrastText: '#fff',
		},
		divider: '#eee',
		text: {
			primary: '#000814',
		},
		background: {
			default: '#f0f2f5',
			paper: '#ffffff',
		},
	},
	typography: {
		fontFamily: 'Albert Sans',
	},
	shape: {
		borderRadius: 5,
	},
	spacing: 5,
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: theme.spacing(2, 4.8),
					borderRadius: theme.spacing(100),
					textTransform: 'capitalize',
					lineHeight: theme.spacing(4),
					boxShadow: 'none',
				}),
			},
		},
		MuiTooltip: {
			defaultProps: {
				placement: 'top-start',
				TransitionComponent: Zoom,
				arrow: true,
			},
			styleOverrides: {
				tooltip: ({ theme }) => ({
					background: theme.palette.background.paper,
					color: theme.palette.text.primary,
					boxShadow: theme.shadows[1],
					fontWeight: theme.typography.fontWeightRegular,
				}),
			},
		},
	},
});
