import { gql } from '@apollo/client';

export const GET_QUIZ_BY_ID = gql`
	query ($id: ID!) {
		getQuiz(_id: $id) {
			_id
			nombre
			titulo
			tipoEjercicioID
			status
			iconografia
			recursos {
				_id
				url
				nombre
			}
			tiempoS
			instruccion {
				type
				value
			}
			cuerpo {
				_id
				pregunta {
					type
					value
					recurso {
						nombre
						url
						tipo
					}
				}
				respuestas {
					_id
					correcta
					respuesta {
						type
						value
						recurso {
							nombre
							url
							tipo
						}
					}
				}
			}
		}
	}
`;
