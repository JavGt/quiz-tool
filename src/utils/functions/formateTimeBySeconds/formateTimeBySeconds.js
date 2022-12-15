import { formateClock } from '../formateClock/formateClock';

export const formateTimeBySeconds = seconds => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secondsLeft = Math.floor((seconds % 3600) % 60);

	return `${formateClock(hours)}:${formateClock(minutes)}:${formateClock(secondsLeft)}`;
};
