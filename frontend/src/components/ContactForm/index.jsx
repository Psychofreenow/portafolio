import styles from './styles.module.css';
import Input from '../Input';
import Textarea from '../Input/Textarea';
import PersonIcon from '../Icon/PersonIcon';
import EmailIcon from '../Icon/EmailIcon';
import NumberIcon from '../Icon/NumberIcon';
import ButtonGeneric from '../Button/ButtonGeneric';
import { useState } from 'react';
import fetchingData from '../../utils/fetchingData';

function ContactForm() {
	const [value, setValue] = useState({
		name: '',
		email: '',
		tel: '',
		message: '',
	});

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const handleChange = event => {
		const { name, value } = event.target;

		setValue(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleSubmit = async event => {
		event.preventDefault();

		loading(true);

		const res = await fetchingData({
			URL: `${import.meta.env.VITE_HOST}/api/contact-form/`,
			options: {
				method: 'POST',
				body: JSON.stringify(value),
				headers: {
					'Content-Type': 'application/json',
				},
			},
		});
		if (!res.ok) {
			setError(res);
			setLoading(false);
		} else {
			setData(res);
			setLoading(false);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Input
				type='text'
				placeholder='Nombre'
				icon={<PersonIcon typeIcon='sm' color='#738589' />}
				name='name'
				onChange={handleChange}
				value={value.name}
				required={true}
			/>
			<Input
				type='email'
				placeholder='Email'
				icon={<EmailIcon typeIcon='sm' color='#738589' />}
				name='email'
				onChange={handleChange}
				value={value.email}
				required={true}
			/>
			<Input
				type='number'
				placeholder='Teléfono'
				icon={<NumberIcon typeIcon='sm' color='#738589' />}
				name='tel'
				onChange={handleChange}
				value={value.tel}
				required={true}
			/>
			<Textarea
				placeholder='Mensaje'
				name='message'
				onChange={handleChange}
				value={value.message}
				required={true}
			/>
			<ButtonGeneric buttonText='ENVIAR' typeBtn='dark' required={true} />
		</form>
	);
}

export default ContactForm;
