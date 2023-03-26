import { action$, Form } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export const useAddUser = action$((user) => {
    const userID = (Math.random() + 1).toString(36).substring(7);
    return {
      success: true,
      userID,
    };

  });
  
  export default component$(() => {
    const action = useAddUser();
    return (
      <Form action={action}>
        <input name="name"/>
        <button
         onClick$={() => {
            console.log("You clicked me");
            console.log(action);
          }}
         type="submit">Add user</button>
        {action.value?.success && <div>User added successfully</div>}
      </Form>
    );
  });