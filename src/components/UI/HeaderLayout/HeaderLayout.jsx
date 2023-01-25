import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/UI/Logo';

const HeaderLayout = ({
	position = 'sticky',
	backgroundColor = 'background.default',
}) => {
	return (
		<AppBar
			elevation={0}
			position={position}
			sx={{
				backgroundColor,
				zIndex: theme => theme.zIndex.drawer + 1,
			}}
		>
			<Toolbar>
				<Stack
					direction='row'
					alignItems='center'
					width='100%'
					justifyContent='space-between'
					flexWrap='wrap'
					gap={2}
				>
					<Box
						sx={{ '&:hover': { cursor: 'pointer', opacity: 0.5 } }}
						component={Link}
						to='/'
					>
						<Logo height={35} suffix='Tools' />
					</Box>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderLayout;
