import styles from './styles.module.css';
import Input from '../Input';
import PersonICon from '../Icon/PersonIcon';
import LockIcon from '../Icon/LockIcon';
import loginbg from '../../assets/images/login-bg.webp';
import ButtonGeneric from '../Button/ButtonGeneric';

function LoginForm() {
	return (
		<section className={styles.loginContainer}>
			<form className={styles.form}>
				<Input
					type='text'
					placeholder='Usuario'
					icon={<PersonICon typeIcon='sm' color='#738589' />}
				/>
				<Input
					type='password'
					placeholder='Contraseña'
					icon={<LockIcon typeIcon='sm' color='#738589' />}
				/>
				<ButtonGeneric buttonText='ENTRAR' typeBtn='dark' />
			</form>
			<figure className={styles.loginForm__img}>
				<img src={loginbg} />
			</figure>
		</section>
	);
}

export default LoginForm;
