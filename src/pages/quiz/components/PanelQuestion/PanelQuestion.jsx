import { showTypeFactory } from '@/utils/functions/showTypeFactory/showTypeFactory';
import {
	Avatar,
	AvatarGroup,
	Box,
	Button,
	Chip,
	Container,
	Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import RedoIcon from '@mui/icons-material/Redo';
import { Fragment } from 'react';

const iconografia = [
	{
		src: 'src/assets/image/iconografia/icons_libro-01.svg',
		alt: 'icono libro 1',
	},
	{
		src: 'src/assets/image/iconografia/icons_libro-02.svg',
		alt: 'icono libro 2',
	},
	{
		src: 'src/assets/image/iconografia/icons_libro-03.svg',
		alt: 'icono libro 3',
	},
	{
		src: 'src/assets/image/iconografia/icons_libro-04.svg',
		alt: 'icono libro 4',
	},
];

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
			<Stack alignItems='flex-start' height='100%'>
				<Stack
					position='sticky'
					top={0}
					py={5}
					direction='row'
					alignItems='center'
					justifyContent='space-between'
					width='100%'
					sx={{ backgroundColor: 'background.default' }}
				>
					<div>
						<Typography variant='h5' fontWeight={700}>
							{title}
						</Typography>

						<Typography mb={5} variant='body1' color='text.secondary'>
							Pregunta <strong>{indexQuestion + 1}</strong> de {totalQuestions}
						</Typography>
					</div>

					<AvatarGroup>
						{iconografia.map(icono => (
							<Avatar key={icono.alt} src={icono.src} alt={icono.alt} />
						))}
					</AvatarGroup>
				</Stack>

				<Box flex={1} width='100%'>
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
					<Chip label='Pregunta saltada' color='warning' variant='filled' />
				)}

				<Stack
					py={5}
					direction='row'
					alignItems='center'
					justifyContent='space-between'
					width='100%'
					position='sticky'
					bottom={0}
					sx={{ backgroundColor: 'background.default' }}
				>
					<div>
						<Typography variant='body1' fontWeight='700'>
							¿Te es complicado resolver esta pregunta?
						</Typography>

						<Typography variant='body2' color='text.secondary'>
							Tienes <strong>{jumpAvailable}</strong> saltos disponibles,{' '}
							{jumpAvailable
								? 'esta pregunta te puede esperar.'
								: 'no puedes saltar más preguntas.'}
						</Typography>
					</div>

					<Button
						disabled={!jumpAvailable}
						onClick={handleJumpQuestion}
						endIcon={<RedoIcon />}
					>
						Saltar
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};

export default PanelQuestion;
