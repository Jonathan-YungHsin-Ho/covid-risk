import React from 'react';
import './App.css';
import Card from './components/Card';
import { data } from './tree';

function App() {
	return (
		<div className='App'>
			<h1>Likelihood of Covid-19 Hospitalization</h1>
			<Card data={data} />
			<a
				href='https://www.medrxiv.org/content/10.1101/2020.04.08.20057794v1.full.pdf'
				target='_blank'
				rel='noopener noreferrer'>
				Source data
			</a>
		</div>
	);
}

export default App;
