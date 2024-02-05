export const selectedRadioHandler = (
	selectedRadio,
	text,
	resultRef,
	buttons
) => {
	switch (selectedRadio) {
		case buttons.biha.id: {
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
		case buttons.horozua.id: {
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

		case buttons.fivewatt.id: {
			const result = text
				.trim()
				.split('\n')
				.map((item) => {
					return item;
				})
				.join('');

			resultRef.current.value = 'Характеристики\n\n' + result;
			break;
		}

		case buttons.addSpaces.id: {
			const result =
				text
					.match(/[А-ЯA-Z][А-Яа-я\w\d\s]*:\s?[А-ЯA-Z]?[а-я\w\d\s]*[а-я\w\d]/gm)
					?.join('\n')
					.replace('Характеристики', '')
					.trim() || '';

			resultRef.current.value =
				'Характеристики\n\n' + result + '\n\n* Продаємо планками по два метри';
			break;
		}
	}
};
