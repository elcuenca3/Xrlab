import { useState } from 'react';
import Link from 'next/link';

const MyPage = () => {
  const [dato, setDato] = useState('');

  const handleButtonClick = (newDato:any) => {
    setDato(newDato);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('Dato 1')}>Botón 1</button>
      <button onClick={() => handleButtonClick('Dato 2')}>Botón 2</button>
      <button onClick={() => handleButtonClick('Dato 3')}>Botón 3</button>
      <p>Dato actual: {dato}</p>
      <Link href={`/pantalla?dato=${dato}`}>
        <p> ir </p>
      </Link>
    </div>
  );
};

export default MyPage;
