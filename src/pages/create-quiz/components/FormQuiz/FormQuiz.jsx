import { useParams } from 'react-router-dom';

const initialValues = {
	id: '',
	nombre: '',
	titulo: '',
	recursos: [],
	iconografia: [],
	status: false,
	tiempoS: 0,
	tipoEjercicioID: '6385111b8dcf69484d6c2033',
	instruccion: [],

	cuerpo: [],
};

const FormQuiz = () => {
	const params = useParams();

	const { quiz, call } = useGetQuiz();

	useEffect(() => {
		document.title = 'Creación de Quiz - Ktdra';
		params.id && call({ variables: { id: params.id } });
	}, []);

	const data = Object.keys(quiz).length ? quiz : initialValues;

	return <div>FormQuiz</div>;
};

export default FormQuiz;
