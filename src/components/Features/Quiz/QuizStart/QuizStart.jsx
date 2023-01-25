import {
	Avatar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Stack,
	Tab,
	Tabs,
	Tooltip,
	Typography,
} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TabPanel } from '@/components/UI/TabPanel';
import { formateTimeBySeconds } from '@/utils/functions/formateTimeBySeconds';

//TODO: agregar el un timer para iniciar el quiz
//TODO: agregar el panel de instrucciones

const QuizStart = ({ open, data, handleStart }) => {
	const navigate = useNavigate();

	const [tabView, setTabView] = useState('info');

	const tabs = [
		{ label: 'Información', value: 'info' },
		{ label: 'Instrucciones', value: 'instructions' },
	];

	const handleBack = () => navigate(-1);

	const handleChangeTab = (_, tab) => setTabView(tab);

	const viewInstructions = (
		<>
			<DialogContentText fontWeight={600}>Instrucciones</DialogContentText>

			<DialogContentText>
				Próximamente se agregaran las instrucciones para realizar el cuestionario de forma
				correcta.
			</DialogContentText>
		</>
	);

	const viewInfo = (
		<>
			<DialogContentText fontWeight={600}>Información del cuestionario</DialogContentText>

			<List>
				<ListItem disablePadding>
					<ListItemAvatar>
						<Avatar>
							<HourglassEmptyIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={
							!data.tiempoS ? 'Sin límite' : `${formateTimeBySeconds(data.tiempoS)}`
						}
						secondary='Tiempo'
					/>
				</ListItem>

				<ListItem disablePadding>
					<ListItemAvatar>
						<Avatar>
							<QuestionMarkIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={data.cuerpo.length} secondary='Preguntas' />
				</ListItem>

				{data.recursos.length && (
					<ListItem
						secondaryAction={
							<Tooltip title='Ver recurso'>
								<IconButton variant='outlined' size='small'>
									<InsertLinkIcon />
								</IconButton>
							</Tooltip>
						}
						disablePadding
					>
						<ListItemAvatar>
							<Avatar>
								<FilePresentIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={data.recursos.length} secondary='Recursos' />
					</ListItem>
				)}
			</List>

			<DialogContentText>
				Es recomendable que antes de empezar el cuestionario, revises los recursos que se
				te proporcionan.
			</DialogContentText>
		</>
	);

	return (
		<Dialog
			PaperProps={{ sx: { padding: 2, borderRadius: 3 } }}
			fullWidth
			disableEscapeKeyDown
			style={{ backdropFilter: 'blur(10px)' }}
			open={open}
		>
			<DialogTitle>
				<Stack alignItems='center' gap={2}>
					<IconButton onClick={handleBack} sx={{ backgroundColor: '#00000010' }}>
						<KeyboardBackspaceIcon />
					</IconButton>
					<Typography
						fontWeight={600}
						fontSize={{ xs: '2rem', sm: '2.5rem', md: '3rem' }}
					>
						{data.titulo}
					</Typography>
				</Stack>
			</DialogTitle>

			<Tabs value={tabView} onChange={handleChangeTab}>
				{tabs.map(tab => (
					<Tab key={tab.value} label={tab.label} value={tab.value} />
				))}
			</Tabs>

			<DialogContent>
				<TabPanel value={tabView} index='instructions'>
					{viewInstructions}
				</TabPanel>
				<TabPanel value={tabView} index='info'>
					{viewInfo}
				</TabPanel>
			</DialogContent>

			<DialogActions>
				<Stack width='100%' direction='row' justifyContent='space-between' gap={2}>
					<Button
						endIcon={<PlayArrowIcon />}
						sx={{ flexGrow: 1 }}
						size='large'
						variant='contained'
						onClick={handleStart}
					>
						Empezar
					</Button>
				</Stack>
			</DialogActions>
		</Dialog>
	);
};

export default QuizStart;
