import image from './assets/empty.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from "./classes/blocks"

export const model = [
	new TitleBlock('Конструктор сайтов на JavaScript', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#FFFFFF',
			'text-align': 'center',
			padding: '1rem'
		}
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			width: '500px',
			height: 'auto'
		},
		alt: 'картинка'
	}),
	new ColumnsBlock([
		'Приложение на чистом JavaScript, без использования библиотек',
		'Изучаю принципы SOLID и ООП в JavaScript',
		'JavaScript - это просто, интересно',
	], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold'
		}
	}),
	new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, reiciendis!', {
			styles: {
				background: 'linear-gradient(to left, #f2994a, #f2c94c)',
				padding: '1rem',
				'font-weight': 'bold'
			}
		}
	),
]