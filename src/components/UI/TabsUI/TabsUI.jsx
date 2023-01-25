import { styled, Tabs as MuiTabs, Tab as MuiTab, Skeleton } from '@mui/material';

const TabsUI = ({ data, loading, handleChange, value, defaultValue }) => {
	return (
		<Tabs value={value} onChange={handleChange} variant='scrollable'>
			{defaultValue && <Tab label={defaultValue} value='' />}

			{loading
				? Array.from({ length: 5 }).map((_, index) => (
						<Tab
							label={<Skeleton variant='text' width={100} />}
							disabled
							value={index}
							key={index}
						/>
				  ))
				: data.map(category => (
						<Tab label={category.nombre} value={category._id} key={category._id} />
				  ))}
		</Tabs>
	);
};

const Tabs = styled(MuiTabs)(({ theme }) => ({
	padding: theme.spacing(2),
	backgroundColor: theme.palette.background.paper,
	borderRadius: '100px',

	'& .MuiTabs-indicator': {
		height: '100%',
		borderRadius: '100px',
		backgroundColor: theme.palette.primary.main,
	},
	'& .MuiTabs-flexContainer .Mui-selected': {
		color: theme.palette.background.paper,
	},
}));

const Tab = styled(MuiTab)(({}) => ({
	minWidth: 'unset',
	textTransform: 'capitalize',
	zIndex: 1,
	minHeight: 'unset',
}));

export default TabsUI;
