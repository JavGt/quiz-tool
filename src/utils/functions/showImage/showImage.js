// Validar si la imagen es un blob o un path
export const showImage = file =>
	file instanceof Blob ? URL.createObjectURL(file) : file;
