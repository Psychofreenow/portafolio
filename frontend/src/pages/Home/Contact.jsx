import styles from './styles.module.css';
import ContactForm from '../../components/ContactForm';

function Contact() {
	return (
		<section className={styles.contact} id='contact'>
			<p className={styles.contact__title}>Contáctame</p>
			<ContactForm />
		</section>
	);
}

export default Contact;
