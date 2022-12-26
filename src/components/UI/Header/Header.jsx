import { ElevationScroll } from '@/components/Wrappers/ElevationScroll';
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';

const Header = ({ title, ...rest }) => {
	return (
		<ElevationScroll {...rest}>
			<AppBar color='transparent' sx={{ backdropFilter: 'blur(10px)' }} position='sticky'>
				<Toolbar>
					<Stack
						width='100%'
						direction='row'
						alignItems='center'
						gap={2}
						justifyContent='space-between'
					>
						<Box position='relative'>
							<Box component='img' src='/Logotype_official_nombre.svg' height={30} />
							<Typography
								sx={{ position: 'absolute', top: -5, right: -30 }}
								variant='body2'
							>
								tools
							</Typography>
						</Box>
						<Typography variant='h5'>{title}</Typography>
					</Stack>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
};

export default Header;
