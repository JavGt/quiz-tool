import { useDropzone } from 'react-dropzone';
import { alpha, styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';

const DropZone = ({ onDrop, accept }) => {
	const { getRootProps, isFocused, isDragAccept, isDragReject, getInputProps } =
		useDropzone({ accept, onDrop });

	const DynamicIcon = isDragReject
		? BlockIcon
		: isDragAccept
		? CheckIcon
		: UploadFileIcon;

	const text = isDragReject
		? 'Archivo no soportado'
		: isDragAccept
		? 'Suelte el archivo aquí'
		: 'Seleccione un archivo';

	return (
		<DropZoneStyle
			height={140}
			justifyContent='center'
			alignItems='center'
			width='100%'
			gap={1}
			isDragAccept={isDragAccept}
			isDragReject={isDragReject}
			isFocused={isFocused}
			{...getRootProps({
				className: 'dropzone',
			})}
		>
			<input {...getInputProps()} />
			<DynamicIcon fontSize='large' color='inherit' />
			<Typography align='center' variant='subtitle1' fontWeight={600} color='inherit'>
				{text}
			</Typography>
			<Typography align='center' variant='caption' color='text.secondary'>
				O arrastre y suelte el archivo aquí
			</Typography>
		</DropZoneStyle>
	);
};

const DropZoneStyle = styled(Stack)(
	({ theme, isDragAccept, isDragReject, isFocused }) => {
		const color = isDragReject
				? theme.palette.error.main
				: isDragAccept
				? theme.palette.success.main
				: isFocused
				? theme.palette.primary.main
				: theme.palette.grey[500],
			backgroundColor = isDragReject
				? alpha(theme.palette.error.light, 0.3)
				: isDragAccept
				? alpha(theme.palette.success.light, 0.3)
				: theme.palette.grey[100];

		return {
			backgroundColor,
			borderWidth: 2,
			borderColor: color,
			borderStyle: 'dashed',
			outline: 'none',

			cursor: 'pointer',
			color,
			borderRadius: theme.shape.borderRadius,

			transition: theme.transitions.create([
				'border-color',
				'box-shadow',
				'background-color',
			]),
		};
	}
);

export default DropZone;
