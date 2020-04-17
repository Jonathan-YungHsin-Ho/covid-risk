import React from 'react';
import './App.css';
import Card from './components/Card';
import { data } from './tree';

function App() {
	return (
		<div className='App'>
			<h1>Covid-19 Hospitalization Risk</h1>
			<p>
				Likelihood of hospitalization for patients with laboratory-confirmed
				Covid-19
			</p>
			<Card data={data} />
			<a
				href='https://www.medrxiv.org/content/10.1101/2020.04.08.20057794v1.full.pdf'
				target='_blank'
				rel='noopener noreferrer'>
				Source data
			</a>{' '}
			|{' '}
			<a
				href='https://www.jonathan-ho.dev'
				target='_blank'
				rel='noopener noreferrer'>
				jonathan-ho.dev
			</a>
		</div>
	);
}

export default App;
