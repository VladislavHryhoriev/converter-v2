// eslint-disable-next-line react/prop-types
const RadioButton = ({ id, title, setSelectedRadio }) => {
	return (
		<>
			<div className='radio-button'>
				<input
					className='radio'
					type='radio'
					id={id}
					name='siteName'
					value={id}
					onChange={({ target }) => setSelectedRadio(target.value)}
				/>
				<label
					onClick={({ target }) => setSelectedRadio(target.value)}
					className='label'
					htmlFor={id}>
					{title}
				</label>
			</div>
		</>
	);
};

export default RadioButton;
