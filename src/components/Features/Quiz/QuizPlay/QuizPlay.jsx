import { Container } from '@/components/UI/Container';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const QuizPlay = () => {
	return (
		<Container maxWidth='xl'>
			<Grid
				sx={{
					height: '100%',
				}}
				container
				columns={12}
			>
				<Grid item xs={12} md={6} overflow='auto'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam
					alias voluptates dolor veritatis consequatur fugiat, obcaecati commodi, quam,
					pariatur provident eum architecto molestiae fuga laudantium non delectus
					inventore minima!
				</Grid>
				<Grid item xs={12} md={6} overflow='auto'>
					Opciones
				</Grid>
			</Grid>
		</Container>
	);
};

export default QuizPlay;
