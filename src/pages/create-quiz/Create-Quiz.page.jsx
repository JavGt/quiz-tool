import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
	const [search, setSearch] = useState('');
	const { pathname } = useLocation();
	const history = useNavigate();

	useEffect(() => {
		const url = new URLSearchParams(window.location.search);
		const search = url.get('search');
		if (search) setSearch(search);
	}, []);

	const handleSearch = e => {
		history(pathname + '?search=' + e.target.value, { replace: true });

		setSearch(e.target.value);
		if (e.target.value === '') history(pathname, { replace: true });
	};

	const handleReplace = () => {
		history(pathname + '?search=' + search, { replace: true });
	};

	return (
		<div>
			<TextField placeholder='Search' value={search} onChange={handleSearch} />
			<Button onClick={handleReplace}>Replace</Button>
		</div>
	);
};

export default CreateQuiz;
