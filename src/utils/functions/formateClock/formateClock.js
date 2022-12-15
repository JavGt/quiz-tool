export const formateClock = value => {
	const number = Number(value);

	return number < 10 ? `0${number}` : `${number}`.replace(/^0+/, '');
};
