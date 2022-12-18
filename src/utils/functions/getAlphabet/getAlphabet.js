export const getAlphabet = position => {
	const MAX_ALPHABET = 26;

	if (position !== 0 && !position)
		return Array.from({ length: MAX_ALPHABET }, (_, i) => String.fromCharCode(i + 65));

	return String.fromCharCode(position + 65).toUpperCase();
};
