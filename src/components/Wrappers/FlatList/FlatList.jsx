import { Stack } from '@mui/material';
import { Fragment, memo } from 'react';

const ComponentMemo = memo(
	({ children }) => children,
	(prevProps, nextProps) => prevProps.item === nextProps.item
);

const FlatList = ({
	data,
	renderItem,
	keyExtractor,
	ItemSeparatorComponent,
	ListEmptyComponent,
	...props
}) => {
	if (!data.length) return ListEmptyComponent;

	return (
		<Stack {...props}>
			{data.map((item, index) => (
				<Fragment key={keyExtractor(item, index)}>
					<Fragment children={renderItem(item, index)} />
					{index < data.length - 1 && ItemSeparatorComponent}
				</Fragment>
			))}
		</Stack>
	);
};

FlatList.defaultProps = {
	data: [],
	renderItem: () => null,
	keyExtractor: (item, index) => index,
	ItemSeparatorComponent: null,
	ListEmptyComponent: null,
	gap: 0,
};

export default FlatList;
