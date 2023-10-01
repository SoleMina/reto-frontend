import { useRouter } from 'next/router';
import React from 'react';
import items from '@/dogs.json';
import Image from 'next/image';

const PetPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const pet = items.find((pet: any) => pet.id === parseInt(id));
  console.log(pet);

  return (
    <div>
      <h1>{pet?.name}</h1>
      <p>{pet?.description}</p>
      <Image alt={pet?.name} height={200} width={200} src={pet?.url} />
    </div>
  );
};

export default PetPage;
