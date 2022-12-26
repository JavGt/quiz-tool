import {
	Alert,
	AlertTitle,
	Box,
	Button,
	Container,
	Stack,
	Typography,
	Zoom,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { TimerQuiz } from '../TimerQuiz';
import { FlatList } from '@/components/Wrappers/FlatList';
import { ButtonOption } from '../ButtonOption';
import { useEffect, useState } from 'react';
import produce from 'immer';

const PanelOptions = ({ options, time, onNext, onFinish }) => {
	const [optionsSelected, setOptionsSelected] = useState([]);

	const [optionsModified, setOptionsModified] = useState([]);

	const [availableOption, setAvailableOption] = useState(0);

	useEffect(() => {
		if (!options.length) return cleanStates();

		setStates();
	}, [options]);

	const cleanStates = () => {
		setOptionsModified([]);
		setOptionsSelected([]);
		setAvailableOption(0);
	};

	const setStates = () => {
		setOptionsModified(options);
		setAvailableOption(options.reduce((acc, { correct }) => (correct ? ++acc : acc), 0));
		setOptionsSelected([]);
	};

	const handleClickOption = (option, index) => {
		if (option.selected) {
			setOptionsModified(
				produce(optionsModified, draft => {
					draft[index].selected = false;
				})
			);

			setOptionsSelected(
				produce(optionsSelected, draft => {
					draft.splice(draft.indexOf(option), 1);
				})
			);
			setAvailableOption(prev => ++prev);
			return;
		}

		if (!availableOption) return;

		setOptionsModified(
			produce(optionsModified, draft => {
				draft[index].selected = true;
			})
		);

		setOptionsSelected(prev => [...prev, option]);
		setAvailableOption(prev => --prev);
	};

	const handleNext = () => onNext(optionsSelected);

	return (
		<>
			<Box sx={{ position: 'sticky', top: 0, zIndex: 1, backdropFilter: 'blur(10px)' }}>
				<Container maxWidth='sm'>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
						py={5}
					>
						<Typography variant='subtitle1'>
							Tiene <strong>{availableOption}</strong>{' '}
							{availableOption > 1 ? 'opciones disponibles' : 'opción disponible'}
						</Typography>

						<TimerQuiz handleFinish={onFinish} time={time} />

						<Zoom in={!!optionsSelected.length}>
							<Button
								disabled={!optionsSelected.length}
								onClick={handleNext}
								endIcon={<DoneIcon />}
								variant='contained'
								color='success'
							>
								Siguiente
							</Button>
						</Zoom>
					</Stack>
				</Container>
			</Box>

			<Container maxWidth='sm'>
				<FlatList
					data={optionsModified}
					{...{ gap: 4, pb: 5 }}
					keyExtractor={(_, index) => index.toString()}
					ListEmptyComponent={
						<Alert severity='error'>
							<AlertTitle>¡Ups!</AlertTitle>
							No hay <strong> opciones </strong> disponibles para esta pregunta
						</Alert>
					}
					renderItem={(option, index) => (
						<ButtonOption
							indexAlphabet={index}
							onClick={() => handleClickOption(option, index)}
							isSelected={option.selected}
							contents={option.contents}
						/>
					)}
				/>
			</Container>
		</>
	);
};

export default PanelOptions;
