import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  return (

    <Counter />

  );
});

export const Counter = component$(() => {

  const addOne = useStore({ count: 0 });
  return (
    <>
      I am a dynamic component. Qwik will download me only when it is time to re-render me after the
      user clicks on the <tt>+1</tt> button.
      <br />
      Current count: {addOne.count}

      <br />
      <button onClick$={() => (addOne.count++)}>+1</button>
    </>
  );
});
