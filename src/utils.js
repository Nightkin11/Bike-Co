import { useLayoutEffect, useState } from 'react';

export const dateToIsoString = (stringDate) => {
	const date = new Date(stringDate)
	return date.toISOString()
}

export const formatDate = (stringDate) => {
	const date = new Date(stringDate)
	return date.toLocaleDateString('ru-RU')
}

export const formatDateTime = (stringDate) => {
	const date = new Date(stringDate)
	const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', };
	return date.toLocaleString('ru-RU', options)
}

export const DateWithoutTime = (stringDate) => {
	if(!stringDate) {
		return
	}
	return stringDate.substring(0, 10)
}

export const DateWithTime = (stringDate) => {
	if(!stringDate) {
		return
	}
	return stringDate.substring(0, 16)
}


export function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
		setSize([window.innerWidth]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}