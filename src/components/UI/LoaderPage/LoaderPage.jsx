import { AppBar, Backdrop, Box, LinearProgress } from '@mui/material';

const LoaderPage = data => {
	return (
		<Backdrop
			open={true}
			sx={{
				zIndex: theme => theme.zIndex.drawer + 1,
				backgroundColor: 'rgba(0, 0, 0, 0.2)',
			}}
		>
			<AppBar color='transparent'>
				<LinearProgress />
			</AppBar>
		</Backdrop>
	);
};

export default LoaderPage;
