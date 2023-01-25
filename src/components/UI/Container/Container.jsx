import { styled } from '@mui/material';
import ContainerMui from '@mui/material/Container';

const Container = ({ children, isMinHeight, maxWidth }) => {
	return (
		<ContainerHeight isMinHeight={isMinHeight} maxWidth={maxWidth}>
			{children}
		</ContainerHeight>
	);
};

const ContainerHeight = styled(ContainerMui, {
	shouldForwardProp: prop => prop !== 'isMinHeight',
})(({ theme, isMinHeight }) => {
	const tablet = theme.breakpoints.up('sm');

	return {
		py: theme.spacing(2),
		position: 'relative',

		...(isMinHeight && {
			minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,

			[tablet]: {
				minHeight: `calc(100vh - ${theme.mixins.toolbar[tablet].minHeight}px)`,
			},
		}),
	};
});

Container.defaultProps = {
	isMinHeight: true,
	maxWidth: 'lg',
};

export default Container;
