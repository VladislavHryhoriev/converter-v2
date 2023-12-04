import { useEffect, useRef, useState } from 'react';
import copyText from './lib/copy-text';
import './App.css';
import RadioButton from './components/radio-button';

function App() {
	const [text, setText] = useState('');
	const resultRef = useRef();

	const buttons = {
		bih: {
			id: 'biom-intertool-horozelectric',
			text: 'Biom.ua / Intertool / Horozelectric',
		},
		horozua: {
			id: 'horozua',
			text: 'Horoz.ua',
		},
	};

	const compilateInput = ({ target }) => {
		// targets.text.oninput = null;

		//

		// 	targets.text.oninput = handler;
		// 	target.onclick = handler;
		// }

		// if (target.value === 'horozua') {
		// 	const handler = () => {
		// 		text = targets.text.value;
		// 		const result = text
		// 			.trim()
		// 			.split('\n')
		// 			.map((item) => {
		// 				if (item == '') return item.replace('', '\n');
		// 				if (item != '') return item.replace(':', ': ');
		// 				return item;
		// 			})
		// 			.join('');

		// 		targets.result.value = 'Характеристики\n\n' + result;
		// 	};
		// 	targets.text.oninput = handler;
		// 	target.onclick = handler;
		// }

		setText(target.value);
	};

	const compilate = ({ target }) => {
		let newText = '';
		console.log(text);
		if (target.value === 'biom-intertool-horozelectric') {
			newText
				.trim()
				.split('\n')
				.map((item) => {
					if (item.includes(':')) return item.replace('\t', '').trim();
					return item.replace('\t', ': ').trim();
				})
				.filter((item) => item.toLowerCase() !== 'характеристики')
				.join('\n');

			resultRef.value = 'Характеристики\n\n' + newText;
		}

		setText(target.value);
	};

	// useEffect(() => {}, [text]);

	return (
		<>
			<div className='buttons'>
				<RadioButton
					onClick={compilate}
					id={buttons.bih.id}
					title={buttons.bih.text}
				/>
				<RadioButton
					onClick={compilate}
					id={buttons.horozua.id}
					title={buttons.horozua.text}
				/>
			</div>
			<div className='textareas'>
				<textarea id='text' value={text} onChange={compilate} />
				<textarea ref={resultRef} id='result' onClick={copyText} />
			</div>
		</>
	);
}

export default App;
