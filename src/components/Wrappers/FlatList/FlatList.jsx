import StackMUI from '@mui/material/Stack';
import { Fragment } from 'react';

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
		<StackMUI {...props}>
			{data.map((item, index) => (
				<Fragment key={keyExtractor(item, index)}>
					{renderItem(item, index)}
					{index < data.length - 1 && ItemSeparatorComponent}
				</Fragment>
			))}
		</StackMUI>
	);
};

FlatList.defaultProps = {
	data: [],
	renderItem: () => null,
	keyExtractor: (_, index) => index,
	ItemSeparatorComponent: null,
	ListEmptyComponent: null,
};

export default FlatList;
