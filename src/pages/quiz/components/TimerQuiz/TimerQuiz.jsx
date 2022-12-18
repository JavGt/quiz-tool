import { useChronometer } from '@/hooks/common/useChronometer';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { memo, useEffect } from 'react';

const TimerQuiz = ({ time, handleFinish }) => {
	const { remainingTime, originalTime, finished, fullTime, percentage } = useChronometer(
		time,
		true
	);

	useEffect(() => {
		if (finished) handleFinish();
	}, [finished]);

	return time ? (
		<Stack position='relative' alignItems='center' justifyContent='center'>
			<CircularProgress
				size={80}
				sx={{ position: 'absolute', color: 'grey.500' }}
				variant='determinate'
				value='100'
			/>

			<CircularProgress
				variant='determinate'
				size={80}
				color={
					remainingTime > originalTime / 2
						? 'success'
						: remainingTime > originalTime / 4
						? 'warning'
						: 'error'
				}
				value={percentage}
			/>
			<Typography sx={{ position: 'absolute' }}>{fullTime}</Typography>
		</Stack>
	) : null;
};

export default memo(TimerQuiz);
