import { useEffect, useRef, useState } from 'react';
import './App.css';
import RadioButton from './components/radio-button';
import copyText from './lib/copy-text';
import { selectedRadioHandler } from './lib/selectedRadioHandler';

const buttons = {
	biha: {
		id: 'biom-intertool-horozelectric-akfix',
		text: 'Biom.ua / Intertool / Horozelectric / Akfix',
	},
	horozua: {
		id: 'horozua',
		text: 'Horozua',
	},
	fivewatt: {
		id: 'fivewatt',
		text: '5watt',
	},
	addSpaces: {
		id: 'addSpaces',
		text: 'Формат по характеристикам',
	},
};

function App() {
	const [text, setText] = useState('');
	const [selectedRadio, setSelectedRadio] = useState('');
	const resultRef = useRef();

	const compilate = ({ target }) => {
		setText(target.value);
	};

	useEffect(() => {
		selectedRadioHandler(selectedRadio, text, resultRef, buttons);
	}, [text, selectedRadio]);

	return (
		<>
			<div className='buttons'>
				<RadioButton
					setSelectedRadio={setSelectedRadio}
					id={buttons.biha.id}
					title={buttons.biha.text}
				/>
				<RadioButton
					setSelectedRadio={setSelectedRadio}
					id={buttons.horozua.id}
					title={buttons.horozua.text}
				/>
				<RadioButton
					setSelectedRadio={setSelectedRadio}
					id={buttons.fivewatt.id}
					title={buttons.fivewatt.text}
				/>
				<RadioButton
					setSelectedRadio={setSelectedRadio}
					id={buttons.addSpaces.id}
					title={buttons.addSpaces.text}
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
