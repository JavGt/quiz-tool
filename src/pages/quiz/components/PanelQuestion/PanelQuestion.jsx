import { showTypeFactory } from '@/utils/functions/showTypeFactory/showTypeFactory';
import { Box, Button, Container, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import RedoIcon from '@mui/icons-material/Redo';
import { Fragment } from 'react';

const PanelQuestion = ({
	question,
	indexQuestion,
	jumpAvailable,
	handleJumpQuestion,
	totalQuestions,
}) => {
	return (
		<Container maxWidth='sm' sx={{ height: '100%' }}>
			<Stack height='100%' spacing={2}>
				<Box component='img' src='/Logotype_official_nombre.svg' py={5} width={100} />

				<Box flex={1} overflow='auto'>
					<Typography mb={5} variant='h5' color='text.secondary'>
						Pregunta <strong>{indexQuestion + 1}</strong> de {totalQuestions}
					</Typography>

					<Stack spacing={1}>
						{question.map((detail, index) => (
							<Fragment key={index}>{showTypeFactory(detail)}</Fragment>
						))}
					</Stack>
				</Box>

				<Stack py={5} direction='row' gap={2} alignItems='center' width='100%'>
					<div>
						<Typography variant='body1' fontWeight={700}>
							¿Te es complicado resolver este tipo de problemas?
						</Typography>
						<Typography variant='body2' color={'text.secondary'}>
							Tienes <strong>{jumpAvailable}</strong> saltos disponibles,{' '}
							{jumpAvailable
								? 'esta pregunta te puede esperar.'
								: 'no puedes saltar más preguntas.'}
						</Typography>
					</div>

					<Tooltip title='Los saltos son aleatorios, hay riesgo de que te toque la misma pregunta.'>
						<Button
							disabled={!jumpAvailable}
							onClick={handleJumpQuestion}
							endIcon={<RedoIcon />}
						>
							Saltar
						</Button>
					</Tooltip>
				</Stack>
			</Stack>
		</Container>
	);
};

export default PanelQuestion;
