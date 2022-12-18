import { Header } from '@/components/UI/Header';
import {
	Avatar,
	AvatarGroup,
	Badge,
	Button,
	Card,
	CardActions,
	CardContent,
	Chip,
	Container,
	Divider,
	Grid,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import BuildIcon from '@mui/icons-material/Build';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Header
				title={
					<>
						¡<strong>Quiz</strong> tools!
					</>
				}
			/>
			<Container sx={{ py: 5 }} maxWidth='lg'>
				<Stack
					direction={{
						sm: 'column',
						md: 'row',
					}}
					alignItems='center'
					justifyContent='space-between'
					gap={5}
				>
					<div>
						<Typography variant='h2'>
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
							variant='contained'
							to='/create-quiz'
							endIcon={<BuildIcon />}
						>
							Creador de quiz
						</Button>
					</Stack>
				</Stack>
				<Stack my={5} direction='row' gap={5} width='100%'>
					<Badge badgeContent={4} color='primary'>
						<Button size='small' variant='outlined' endIcon={<FilterAltIcon />}>
							Filtros
						</Button>
					</Badge>

					<Stack flex={1} direction='row' gap={1}>
						<TextField size='small' fullWidth placeholder='Buscar quiz' />
						<Button color='info' variant='contained'>
							Buscar
						</Button>
					</Stack>
				</Stack>

				<Grid container columns={12} spacing={2}>
					{Array.from({ length: 18 }).map((_, index) => (
						<Grid item md={3}>
							<Card>
								<CardContent>
									<Typography fontSize={14} color='text.secondary' gutterBottom>
										Actividad 1
									</Typography>
									<Typography mb={2} variant='h5' component='div' fontWeight={500}>
										Quiz sobre el cuerpo humano
									</Typography>

									<Stack direction='row' gap={2} flexWrap='wrap'>
										<Chip
											color='primary'
											variant='outlined'
											size='small'
											label='12 preguntas'
											icon={<QuestionMarkIcon />}
										/>
										<Chip
											color='primary'
											variant='outlined'
											size='small'
											label='13 Minutos'
											icon={<AccessTimeIcon />}
										/>
										<Chip
											color='primary'
											variant='outlined'
											size='small'
											label='2 saltos'
											icon={<MoveUpIcon />}
										/>
									</Stack>
								</CardContent>
								<Divider />
								<CardActions>
									<Stack
										direction='row'
										justifyContent='space-between'
										width='100%'
										alignItems='center'
									>
										<Chip color='success' label='Activo' />
										<AvatarGroup variant='circular' max={4}>
											<Avatar alt='Remy Sharp' />
											<Avatar alt='Travis Howard' />
											<Avatar alt='Cindy Baker' />
											<Avatar alt='Agnes Walker' />
											<Avatar alt='Trevor Henderson' />
										</AvatarGroup>
										<IconButton>
											<MoreVertIcon />
										</IconButton>
									</Stack>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
