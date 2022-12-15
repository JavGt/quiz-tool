import { Box, Button, Container, Stack, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { TimerQuiz } from '../TimerQuiz';
import { FlatList } from '@/components/Wrappers/FlatList';
import { ButtonOption } from '../ButtonOption';
import { useState } from 'react';

const PanelOptions = ({ options, time, onNext, onFinish }) => {
	const [optionsSelected, setOptionsSelected] = useState([]);

	const [optionsModified, setOptionsModified] = useState(options);

	const [availableOption, setAvailableOption] = useState(
		options.filter(option => option.correct).length
	);

	const handleClickOption = (option, index) => {
		if (option.selected) {
			setOptionsModified(prev => {
				const copyOptions = [...prev];
				copyOptions[index].selected = false;
				return copyOptions;
			});
			setOptionsSelected(prev => prev.filter(item => item !== option));
			setAvailableOption(prev => prev + 1);
		} else {
			if (!availableOption) return;
			setOptionsModified(prev => {
				const copyOptions = [...prev];
				copyOptions[index].selected = true;
				return copyOptions;
			});
			setOptionsSelected(prev => [...prev, option]);
			setAvailableOption(prev => (prev ? prev - 1 : prev));
		}
	};

	const handleNext = () => {
		onNext(optionsSelected);
		setOptionsSelected([]);
		setAvailableOption(options.filter(option => option.correct).length);
	};

	return (
		<>
			<Box sx={{ position: 'sticky', top: 0, zIndex: 1, backdropFilter: 'blur(10px)' }}>
				<Container maxWidth='sm'>
					<Stack
						direction='row'
						spacing={2}
						justifyContent='space-between'
						alignItems='center'
						py={5}
					>
						<Typography variant='subtitle1'>
							Tiene <strong>{availableOption}</strong>{' '}
							{availableOption > 1 ? 'opciones disponibles' : 'opción disponible'}
						</Typography>

						<TimerQuiz handleFinish={onFinish} time={time} />

						<Button
							disabled={!optionsSelected.length}
							onClick={handleNext}
							endIcon={<DoneIcon />}
							variant='contained'
							color='success'
						>
							Siguiente
						</Button>
					</Stack>
				</Container>
			</Box>

			<Container maxWidth='sm'>
				<FlatList
					pb={5}
					keyExtractor={(_, index) => index.toString()}
					gap={4}
					data={optionsModified}
					renderItem={(option, index) => (
						<ButtonOption
							isSelected={option.selected}
							onSelected={handleClickOption}
							option={option}
							index={index}
						/>
					)}
				/>
			</Container>
		</>
	);
};

export default PanelOptions;
