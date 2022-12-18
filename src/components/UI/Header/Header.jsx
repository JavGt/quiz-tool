import { alpha, AppBar, Box, Divider, Stack, Toolbar, Typography } from '@mui/material';

const Header = ({ title }) => {
	return (
		<AppBar
			elevation={0}
			position='sticky'
			sx={{
				backdropFilter: 'blur(10px)',
				backgroundColor: theme => alpha(theme.palette.background.paper, 0.5),
				color: 'text.primary',
			}}
		>
			<Toolbar>
				<Stack
					px={5}
					width='100%'
					direction='row'
					alignItems='center'
					gap={2}
					justifyContent='space-between'
				>
					<Box component='img' src='/Logotype_official_nombre.svg' width={100} gap={2} />
					<Typography variant='h5'>{title}</Typography>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
