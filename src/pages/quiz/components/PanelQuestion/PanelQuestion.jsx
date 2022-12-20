import { showTypeFactory } from '@/utils/functions/showTypeFactory/showTypeFactory';
import { Box, Button, Chip, Container, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import RedoIcon from '@mui/icons-material/Redo';
import { Fragment } from 'react';

const PanelQuestion = ({
	question,
	indexQuestion,
	jumpAvailable,
	handleJumpQuestion,
	totalQuestions,
	mode,
	title,
}) => {
	return (
		<Container maxWidth='sm' sx={{ height: '100%' }}>
			<Stack height='100%' spacing={2}>
				<Box
					component='img'
					src='/Logotype_official_nombre.svg'
					py={5}
					width={100}
					gap={2}
				/>

				<Stack direction='row' alignItems='center' justifyContent='space-between'>
					<div>
						<Typography variant='h5' fontWeight={700}>
							{title}
						</Typography>

						<Typography mb={5} variant='body1' color='text.secondary'>
							Pregunta <strong>{indexQuestion + 1}</strong> de {totalQuestions}
						</Typography>
					</div>
					<Typography variant='body1' color='text.secondary'>
						iconografía
					</Typography>
				</Stack>

				<Box flex={1}>
					<Stack gap={2} width='100%' height='100%' alignItems='center'>
						{question.map((detail, index) => (
							<Fragment key={index}>
								{showTypeFactory(detail, {
									width: '100%',
									variant: index === 0 ? 'h5' : 'body1',
								})}
							</Fragment>
						))}
					</Stack>
				</Box>

				{mode === 'jump' && (
					<div>
						<Chip label='Pregunta saltada' color='warning' variant='filled' />
					</div>
				)}

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

					<Tooltip title='Saltar a la siguiente pregunta'>
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
