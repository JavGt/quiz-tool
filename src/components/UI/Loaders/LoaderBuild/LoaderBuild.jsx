import { CircularProgress, Stack, Typography } from '@mui/material';

const LoaderBuild = ({ text = 'Cargando' }) => {
	return (
		<Stack alignItems='center' justifyContent='center' height='100%' width='100%' gap={5}>
			<CircularProgress size={200} />

			<Typography variant='h4' fontWeight={200}>
				{text}
			</Typography>
		</Stack>
	);
};

export default LoaderBuild;
