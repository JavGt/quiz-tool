import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import BuildIcon from '@mui/icons-material/Build';
import { Link } from 'react-router-dom';
import { HeaderLayout } from '@/components/UI/HeaderLayout';
import { Container } from '@/components/UI/Container';
import { TextCopyright } from '@/components/UI/TextCopyright';

const Home = () => {
	return (
		<>
			<HeaderLayout />

			<Container>
				<Stack
					height='100%'
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<div>
						<Typography variant='h3'>
							¡<strong>Quiz</strong> tools!
						</Typography>

						<Typography variant='body1'>
							Herramienta interna para crear y probar tus propios <strong>quizzes</strong>
						</Typography>
					</div>

					<Stack direction='row' spacing={2}>
						<Button
							LinkComponent={Link}
							variant='outlined'
							to='/quiz'
							endIcon={<ExtensionIcon />}
						>
							Demo quiz
						</Button>
						<Button
							LinkComponent={Link}
							variant='outlined'
							to='/demo/quiz'
							endIcon={<ExtensionIcon />}
						>
							Nuevo quiz
						</Button>

						<Button
							LinkComponent={Link}
							variant='contained'
							to='/create-quiz'
							endIcon={<BuildIcon />}
						>
							Creador de quiz
						</Button>
					</Stack>
				</Stack>
			</Container>

			<Divider />
			<Box textAlign='center' py={10}>
				<TextCopyright />
			</Box>
		</>
	);
};

export default Home;
