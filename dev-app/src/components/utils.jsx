import { useLayoutEffect, useState } from 'react';


const formatDate = (stringDate) => {
	const date = new Date(stringDate)
	return date.toLocaleString('ru-RU')
}

export { formatDate }


function useWindowSize() {
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

export { useWindowSize }