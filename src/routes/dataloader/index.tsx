import { component$, useStore } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';


export const useGetProduct = loader$(() => {
    return {
      id: '42',
      name: 'Valentines Teddy-Bear',
      description: 'Handmade and Guaranteed For Life.'
    };
  });
  
  export default component$(() => {
    const product = useGetProduct();
    // Type of product: {id: string, name: string, description: string}
    return (
        <>
      <div>{product.value.name}</div>

      <div>{product.value.description}</div>


      </>
      
    )
  })