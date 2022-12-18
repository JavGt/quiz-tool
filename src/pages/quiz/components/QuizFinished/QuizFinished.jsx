import { LoaderBuild } from '@/components/UI/Loaders/LoaderBuild';
import { FlatList } from '@/components/Wrappers/FlatList';
import { useQualificationQuiz } from '@/hooks/common/useQualificationQuiz';
import { showTypeFactory } from '@/utils/functions/showTypeFactory/showTypeFactory';
import { CircularProgress, Container, Divider, Stack, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { ButtonOption } from '../ButtonOption';

const QuizFinished = ({ selectedQuestions, questions }) => {
	const { loading, evaluatedQuestions, totalCorrectQuestions } = useQualificationQuiz(
		selectedQuestions,
		questions
	);
	const calification = 90;

	return (
		<Background>
			<Container maxWidth='lg' sx={{ paddingY: 10 }}>
				<StyledPaper
					mb={10}
					direction={{ xs: 'column-reverse', sm: 'row' }}
					alignItems='center'
					gap={15}
				>
					<Stack flex={1} height='100%' justifyContent='center' gap={2}>
						<Typography variant='h2'>
							El <strong>quiz</strong> ha finalizado
						</Typography>

						<Divider />

						<Stack direction='row' alignItems='center' gap={2}>
							<Typography variant='h5'>Total de preguntas correctas:</Typography>

							<Stack direction='row' gap={2} alignItems='center'>
								<Typography variant='h5' color='primary' fontWeight={700}>
									{totalCorrectQuestions}
								</Typography>
								<Typography variant='body1'>/</Typography>
								<Typography variant='h5'>{questions.length}</Typography>
							</Stack>
						</Stack>
						<Typography component='address' variant='body1'>
							"Felicidades, has tenido un excelente desempeño"
						</Typography>
					</Stack>

					<Stack position='relative' alignItems='center' justifyContent='center'>
						<CircularProgress
							sx={{ '.MuiCircularProgress-svg': { strokeLinecap: 'round' } }}
							size={190}
							variant='determinate'
							color={
								calification >= 80 ? 'success' : calification >= 50 ? 'warning' : 'error'
							}
							value={calification}
						/>
						<Typography position={'absolute'} variant='h3'>
							{calification}
						</Typography>
					</Stack>
				</StyledPaper>

				<Typography sx={{ marginBottom: 5 }} variant='h5'>
					Preguntas
				</Typography>

				<Stack gap={5}>
					{questions.map((details, index) => (
						<StyledPaper flex={1} gap={4}>
							<Stack
								direction={{ xs: 'column', sm: 'row' }}
								gap={3}
								alignItems={{ sm: 'flex-start', md: 'center' }}
							>
								<FlatList
									flex={1}
									gap={2}
									data={details.question}
									renderItem={(question, index) =>
										showTypeFactory(question, {
											variant: index === 0 ? 'h5' : 'body1',
											width: '60%',
										})
									}
								/>
								<Divider orientation='vertical' flexItem />
								<Stack flex={1} gap={2} direction={{ sm: 'row', md: 'column' }}>
									<div>
										<Typography variant='body1' fontWeight={700}>
											Total de opciones correctas:
										</Typography>
										<Typography variant='body1'>1 / 4</Typography>
									</div>
									<Divider />
									<div>
										<Typography variant='body1' fontWeight={700}>
											Porcentaje obtenido:
										</Typography>
										<Typography variant='body1'>50%</Typography>
									</div>
								</Stack>
							</Stack>

							<FlatList
								gap={2}
								data={details.options}
								renderItem={(option, index) => (
									<ButtonOption
										disabled={true}
										isSelected={true}
										indexAlphabet={index}
										contents={option.contents}
									/>
								)}
							/>
						</StyledPaper>
					))}
				</Stack>
			</Container>
		</Background>
	);
};

const Background = styled('div')(({ theme }) => ({}));

const StyledPaper = styled(Stack)(({ theme }) => ({
	padding: theme.spacing(8),
	borderRadius: theme.shape.borderRadius * 2,
	backgroundColor: theme.palette.background.paper,
}));

export default QuizFinished;
