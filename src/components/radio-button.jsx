// eslint-disable-next-line react/prop-types
const RadioButton = ({ id, title, onClick }) => {
	return (
		<>
			<div className='radio-button'>
				<input
					className='radio'
					type='radio'
					id={id}
					name='siteName'
					value={id}
					onChange={onClick}
				/>
				<label onClick={onClick} className='label' htmlFor={id}>
					{title}
				</label>
			</div>
		</>
	);
};

export default RadioButton;
