import styles from './styles.module.css';
import InstagramIcon from '../../components/Icon/InstagramIcon';
import GithubIcon from '../../components/Icon/githubIcon';
import Linkedin from '../../components/Icon/LinkedinIcon';
import ButtonAnchor from '../../components/Button/ButtonAnchor';

function Footer() {
	const LINKS = {
		instagram:
			'https://www.instagram.com/franklinfreenow?igsh=a3p3cDQweW1yNWZz',
		github: 'https://github.com/Psychofreenow',
		linkedin: 'https://www.linkedin.com/in/franklin-m%C3%A1rquez-b95314261/',
	};
	return (
		<footer className={styles.footer}>
			<div className={styles.socialContainer}>
				<div className={styles.social}>
					<a href='/home' className={styles.logo}>
						Portafolio
					</a>
					<div className={styles.socialLinks}>
						<ButtonAnchor typeBtn='transparent' href={LINKS.instagram}>
							<InstagramIcon typeIcon='sm' color='#ffffff' />
						</ButtonAnchor>
						<ButtonAnchor typeBtn='transparent' href={LINKS.github}>
							<GithubIcon typeIcon='sm' color='#ffffff' />
						</ButtonAnchor>
						<ButtonAnchor typeBtn='transparent' href={LINKS.linkedin}>
							<Linkedin typeIcon='sm' color='#ffffff' />
						</ButtonAnchor>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
