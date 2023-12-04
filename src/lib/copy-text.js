const copyText = ({ target }) => {
	navigator.clipboard.writeText(target.value);
	const temp = target.value;
	const tempColor = target.style.color;
	target.style.color = 'lightgreen';
	target.value = 'СКОПИРОВАНО';

	setTimeout(() => {
		target.style.color = tempColor;
		target.value = temp;
	}, 500);
};

export default copyText;
