import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Stack,
	Typography,
} from '@mui/material';

const QuizInit = ({ open, data, handleInit }) => {
	return (
		<Dialog
			fullWidth
			disableEscapeKeyDown
			style={{ backdropFilter: 'blur(10px)' }}
			open={open}
		>
			<DialogContent>
				<Stack alignItems='center'>
					<Typography variant='h5'>{data.nombre}</Typography>
					<DialogActions>
						<Button onClick={handleInit}>Empezar</Button>
					</DialogActions>
				</Stack>
			</DialogContent>
		</Dialog>
	);
};

export default QuizInit;
