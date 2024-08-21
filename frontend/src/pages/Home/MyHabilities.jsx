import styles from './styles.module.css';
import HTMLIcon from '../../components/Icon/HTMLIcon';
import CSSIcon from '../../components/Icon/CSSIcon';
import JavascriptIcon from '../../components/Icon/JavascriptIcon';
import ReactIcon from '../../components/Icon/ReactIcon';
import NodeIcon from '../../components/Icon/NodeIcon';
import ExpressIcon from '../../components/Icon/ExpressIcon';
import MySqlIcon from '../../components/Icon/MySqlIcon';
import ButtonLink from '../../components/Button/ButtonLink';

function MyHabilities() {
	return (
		<section className={styles.myHabilities}>
			<h3 className={styles.myHabilitiesTitle}>Mis Habilidades</h3>
			<div className={styles.allHabilities}>
				<h4>Frontend</h4>
				<div>
					<HTMLIcon title='HTML' />
					<CSSIcon title='CSS' />
					<JavascriptIcon title='Javascript' />
					<ReactIcon title='ReactJS' />
				</div>
			</div>
			<div className={styles.allHabilities}>
				<h4>Backend</h4>
				<div>
					<NodeIcon title='NodeJS' />
					<ExpressIcon title='ExpressJS' />
					<MySqlIcon title='MySql' />
				</div>
			</div>
			<ButtonLink buttonText='Contáctame' typeBtn='red' center />
		</section>
	);
}

export default MyHabilities;
