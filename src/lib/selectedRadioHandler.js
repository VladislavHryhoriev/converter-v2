export const selectedRadioHandler = (selectedRadio, text, resultRef) => {
	switch (selectedRadio) {
		case 'biom-intertool-horozelectric-akfix': {
			const result = text
				.trim()
				.replace(/[\n]+/gi, '\n')
				.split('\n')
				.map((item) => {
					if (!item.includes(':')) {
						item = item.replace(/[\s]+\t|\t/gi, ': ');
					} else {
						item = item.replace(/[\s]+\t|\t/gi, ' ');
					}
					if (item.includes('Подробнее')) {
						item = item.split(' ').slice(0, -2).join(' ');
					}
					return item;
				})
				.filter(
					(word) =>
						word.toLowerCase() !== 'пользовательские характеристики' &&
						word.toLowerCase() !== 'основные' &&
						word.toLowerCase() !== 'характеристики'
				)
				.join('\n');

			resultRef.current.value = 'Характеристики\n\n' + result;
			break;
		}
		case 'horozua': {
			const result = text
				.trim()
				.split('\n')
				.map((item) => {
					if (item == '') return item.replace('', '\n');
					if (item != '') return item.replace(':', ': ');
					return item;
				})
				.join('');

			resultRef.current.value = 'Характеристики\n\n' + result;
			break;
		}

		case '5watt': {
			const result = text
				.trim()
				.split('\n')
				.map((item) => {
					if (item == '') return item.replace('', '\n');
					if (item != '') return item.replace(':', ': ');
					return item;
				})
				.join('');

			resultRef.current.value = 'Характеристики\n\n' + result;
			break;
		}

		default:
			resultRef.current.value = 'Ошибка';
			break;
	}
};
