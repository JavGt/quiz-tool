import { useChronometer } from '@/hooks/common/useChronometer';
import { Box, CircularProgress, Typography } from '@mui/material';
import { memo, useEffect } from 'react';

const TimerQuiz = ({ time, handleFinish }) => {
	const { remainingTime, originalTime, finished, fullTime, percentage } = useChronometer(
		time,
		true
	);

	useEffect(() => {
		if (finished) handleFinish();
	}, [finished]);

	return (
		<Box
			sx={{
				position: 'relative',
				display: 'inline-flex',
			}}
		>
			<CircularProgress
				size={70}
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'grey.500',
				}}
				variant='determinate'
				value={100}
			/>

			<CircularProgress
				size={70}
				color={
					remainingTime > originalTime / 2
						? 'success'
						: remainingTime > originalTime / 3
						? 'warning'
						: 'error'
				}
				variant='determinate'
				value={percentage}
			/>
			<Typography
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				fontWeight={700}
			>
				{fullTime}
			</Typography>
		</Box>
	);
};

export default memo(TimerQuiz);
