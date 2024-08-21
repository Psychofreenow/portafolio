import { NODE_ENV } from './env.js';
import sequelize from './sequelize.js';
import Users from '../database/models/Users.js';
import Roles from '../database/models/Roles.js';
import Categories from '../database/models/Categories.js';
import Articles from '../database/models/Articles.js';
import Article_categories from '../database/models/Article_categories.js';
import Projects from '../database/models/Projects.js';
import Technologies from '../database/models/technologies.js';
import Project_technologies from '../database/models/Project_technologies.js';
import preCreateData from '../utils/preCreateData.js';
import encryptedPassword from '../utils/encryptedPassword.js';

const updateTables = async () => {
	const newPassword = await encryptedPassword({ input: '123456789', salt: 10 });

	if (NODE_ENV !== 'PRODUCTION') {
		try {
			await sequelize.sync({ force: true });
			console.log('Synchronized tables');

			//Default Technologies
			await preCreateData(Technologies, [
				{ technology: 'Javascript' },
				{ technology: 'Reactjs' },
				{ technology: 'CSS' },
				{ technology: 'Vuejs' },
				{ technology: 'Angularjs' },
				{ technology: 'SQL' },
			]);

			//Default projects
			await preCreateData(Projects, [
				{
					name: 'hola1',
					repository: 'https://github.com/Psychofreenow/portafolio',
					images:
						'https://pcfcdn.kommo.com/static/assets/images/integrations/en/paypal-logo-promo.png',
					client: 'Franklinfreenow',
					client_src: 'https://github.com/Psychofreenow/portafolio',
				},
				{
					name: 'hola2',
					repository: 'https://github.com/Psychofreenow/portafolio',
					images:
						'https://pcfcdn.kommo.com/static/assets/images/integrations/en/paypal-logo-promo.png',
					client: 'Franklinfreenow',
					client_src: 'https://github.com/Psychofreenow/portafolio',
				},
				{
					name: 'hola3',
					repository: 'https://github.com/Psychofreenow/portafolio',
					images:
						'https://pcfcdn.kommo.com/static/assets/images/integrations/en/paypal-logo-promo.png',
					client: 'Franklinfreenow',
					client_src: 'https://github.com/Psychofreenow/portafolio',
				},
			]);

			// Default project_technologies
			await preCreateData(Project_technologies, [
				{
					technology_id: 1,
					project_id: 1,
				},
				{
					technology_id: 2,
					project_id: 2,
				},
				{
					technology_id: 3,
					project_id: 3,
				},
				{
					technology_id: 1,
					project_id: 2,
				},
			]);

			// Default roles
			await preCreateData(Roles, [
				{ rol: 'admin' },
				{ rol: 'userRegister' },
				{ rol: 'editor' },
			]);

			// Default categories
			await preCreateData(Categories, [
				{ category: 'Programacion' },
				{ category: 'Frontend' },
				{ category: 'Backend' },
				{ category: 'React' },
				{ category: 'NodeJS' },
				{ category: 'Orientacion al trabajo' },
			]);

			// Test data for users
			await preCreateData(Users, [
				{
					user_id: '8a444ade-d185-4335-9584-0e6a1e6fe8eb',
					first_name: 'jose',
					last_name: 'martinez',
					username: 'joma',
					email: 'jose@gmail.com',
					password: newPassword,
					rol_id: 2,
				},
				{
					user_id: '8a444ade-d285-4335-9584-0e6a1e6fe8eb',
					first_name: 'josea',
					last_name: 'martineza',
					username: 'jomaa',
					email: 'josea@gmail.com',
					password: newPassword,
					rol_id: 1,
				},
			]);

			// Test data for articles
			await preCreateData(Articles, [
				{
					title: 'hola1',
					post: '¡Estoy emocionado por el nuevo proyecto que estamos comenzando en la oficina! 🎉 #TrabajoEnEquipo #NuevosRetos',
					user_id: '8a444ade-d185-4335-9584-0e6a1e6fe8eb',
				},
				{
					title: 'hola2',
					post: 'El clima está perfecto hoy para un paseo por el parque. 🌞🚶‍♂️ #Naturaleza #Relajación',
					user_id: '8a444ade-d185-4335-9584-0e6a1e6fe8eb',
				},
				{
					title: 'hola3',
					post: 'Recomiendo el nuevo libro de Jane Doe, ¡es una lectura fascinante! 📚 #LecturaRecomendada #TiempoDeLectura',
					user_id: '8a444ade-d185-4335-9584-0e6a1e6fe8eb',
				},
				{
					title: 'hola4',
					post: 'Cocinando mi receta favorita de pasta esta noche. ¡Espero que salga deliciosa! 🍝 #AmorPorLaCocina #RecetasCaseras',
					user_id: '8a444ade-d185-4335-9584-0e6a1e6fe8eb',
				},
				{
					title: 'hola5',
					post: 'Día de limpieza y organización en casa. ¡Es increíble cómo se siente el ambiente después! 🧹🏠 #HogarLimpio #Organización',
					user_id: '8a444ade-d185-4335-9584-0e6a1e6fe8eb',
				},
			]);

			//Test data for articles_categories
			await preCreateData(Article_categories, [
				{
					article_id: 1,
					category_id: 1,
				},
				{
					article_id: 2,
					category_id: 1,
				},
				{
					article_id: 3,
					category_id: 1,
				},
				{
					article_id: 4,
					category_id: 1,
				},
				{
					article_id: 5,
					category_id: 1,
				},
				{
					article_id: 2,
					category_id: 2,
				},
				{
					article_id: 3,
					category_id: 3,
				},
				{
					article_id: 4,
					category_id: 4,
				},
				{
					article_id: 5,
					category_id: 5,
				},
			]);
		} catch (error) {
			console.error('Error during synchronization', error);
		}
	}
};

export default updateTables;
