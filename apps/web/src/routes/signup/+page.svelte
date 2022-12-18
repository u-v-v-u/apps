<script lang="ts">
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import * as zod from 'zod';

  const formSchema = zod.object({
    email: zod.string().email().nonempty(),
    password: zod.string().nonempty()
  });

  const { form } = createForm({
    onSubmit: (values) => {
      console.log(values);
    },
    validate: validator({ formSchema }),
    extend: reporter
  });
</script>

<div class="flex h-screen justify-center items-center">
  <div class="container flex justify-center items-center">
    <form use:form class="flex flex-col justify-center items-center">
      <input type="email" name="email" placeholder="Email" />

      <ValidationMessage for="email" let:messages={message}>
        <span class="form-input-title">{message || ''}</span>
        <!-- <span slot="placeholder">Enter a Valid Email</span> -->
      </ValidationMessage>

      <input type="password" name="password" placeholder="Password" />

      <ValidationMessage for="password" let:messages={message}>
        <span class="form-input-title">{message || ''}</span>
      </ValidationMessage>

      <button type="submit" id="formButton">Sign Up</button>
    </form>
  </div>
</div>

<style lang="scss">
  .container {
    border: 3px solid;
    border-color: white;
    height: 50vh;
    width: 50vh;

    @apply rounded;
  }

  span {
    font-weight: bold;
    font-size: 1rem;
    color: white;
  }

  input {
    margin: 1rem;
    width: 250px;
    height: 50px;
    padding: 1rem;

    @apply rounded;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    border: 1px solid;
    border-color: white;
    transition: background-color 0.3s;

    color: white;

    @apply rounded;

    &:hover {
      color: black;
      background-color: white;
    }
  }
</style>
