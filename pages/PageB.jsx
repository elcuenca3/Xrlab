import { useRouter } from 'next/router';

const PageB = () => {
  const router = useRouter();
  const dato = router.query.dato;

  return (
    <div>
      <h1>Valor recibido: {dato}</h1>
    </div>
  );
};

export default PageB;
