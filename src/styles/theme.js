import { createTheme } from '@mui/material/styles';
import { Zoom } from '@mui/material';
import BergenSansSemiBold from '@/assets/font/oficial/BergenSans-SemiBold.otf';
import BergenSansRegular from '@/assets/font/oficial/BergenSans-Regular.otf';

export const theme = createTheme({
	palette: {
		common: {
			black: '#000814',
			white: '#ffffff',
		},
		primary: {
			main: '#06038D',
			dark: '#040273',
			contrastText: '#fff',
		},
		secondary: {
			main: '#071D49',
			dark: '#051433',
			contrastText: '#fff',
		},
		tertiary: {
			main: '#FF6900',
			dark: '#E66000',
			contrastText: '#000',
		},
		alternate: {
			main: '#FFC300',
			dark: '#E6B000',
			contrastText: '#000',
		},
		error: {
			main: '#C1272D',
			dark: '#A82226',
			contrastText: '#fff',
		},
		warning: {
			main: '#FFD217',
			dark: '#E6BC15',
			contrastText: '#000',
		},
		success: {
			main: '#309C3F',
			dark: '#309C3F',
			contrastText: '#fff',
		},
		divider: '#BEBDC6',
		background: {
			default: '#F5F4FA',
			paper: '#ffffff',
			fondo: '#eaecf9',
		},
	},
	typography: {
		fontFamily: ['Albert sans', 'Bergen Sans', 'sans-serif'].join(','),
	},
	shape: {
		borderRadius: 5,
	},
	spacing: 5,
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'Bergen Sans';
					src: url(${BergenSansSemiBold}) format('opentype');
					font-weight: 600;
				}
				@font-face {
					font-family: 'Bergen Sans';
					src: url(${BergenSansRegular}) format('opentype');
					font-weight: 400;
				}
				body::-webkit-scrollbar {
					display: none;
				}
				
				`,
		},
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
