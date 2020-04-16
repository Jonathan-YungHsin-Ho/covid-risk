import React, { useState } from 'react';

export default function Card({ data }) {
	const [cardInfo, setCardInfo] = useState(data.a);

	const handleNo = () => setCardInfo(data[cardInfo.no]);

	const handleYes = () => setCardInfo(data[cardInfo.yes]);

	const handleRestart = () => setCardInfo(data.a);

	const style = {
		backgroundColor:
			cardInfo.predict === 'admission'
				? '#E89A9A'
				: cardInfo.predict === 'no admission'
				? '#B6D5A9'
				: '',
	};

	return (
		<div className='card' style={style}>
			<p>
				Sample = {cardInfo.sample}, Adm: {cardInfo.adm * 100}%
			</p>
			<h2>{cardInfo.question}</h2>
			{cardInfo.predict && <h2>Predict: {cardInfo.predict}</h2>}
			{cardInfo.question && (
				<div>
					<button onClick={handleNo}>No</button>
					<button onClick={handleYes}>Yes</button>
				</div>
			)}
			{cardInfo.sample !== data.a.sample && (
				<button className='restart-button' onClick={handleRestart}>
					Restart
				</button>
			)}
		</div>
	);
}
