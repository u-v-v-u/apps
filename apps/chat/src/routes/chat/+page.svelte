<script lang="ts">
  import { supabaseClient } from '$lib/supabaseClient';
  import { onDestroy, onMount } from 'svelte';

  type Message = { user: string; content: string; id: Date };

  const channel = supabaseClient.channel('global-messages');
  let messages: Array<Message> = [];
  let failed = false;
  let userId: string;
  let currentMessage: string;

  const getCurrentUser = async () => {
    const { data } = await supabaseClient.auth.getUser();
    userId = data.user?.id!;
  };

  const sendMessage = async () => {
    const { data } = await supabaseClient.from('messages').insert({
      user: userId,
      content: currentMessage
    });

    currentMessage = '';
  };

  onMount(async () => {
    await getCurrentUser();

    const { error, data: preMessages } = await supabaseClient.from('messages').select().order('id', { ascending: false }).limit(20);

    if (error) {
      console.error(error);
      return (failed = true);
    }

    console.debug(preMessages);

    messages = [...preMessages];

    channel.on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'messages', filter: '' },
      (payload) => {
        console.log(payload)
        messages = [...messages, payload as unknown as Message];
      }
    );

    channel.subscribe(async (status, err) => {
      if (err) {
        console.error(err);
        return (failed = true);
      }

      if (status === 'SUBSCRIBED') {
        console.debug('Connected to channel');
      }
    });
  });

  onDestroy(() => {
    channel.unsubscribe();
  });
</script>

<div class="grid grid-row">
  <div class="messages-container justify-start items-start">
    {#if messages.length > 0}
    {#each messages as message}
      <p class="message">{message.user} | {message.content}</p>
    {/each}
    {:else}
      <p class="messages">No messages were sent!</p>
    {/if}
  </div>

  <div class="justify-center items-center">
    <form
      on:submit|preventDefault={sendMessage}
      class="message-input flex justify-start items-center"
    >
      <input type="text" placeholder="Message" bind:value={currentMessage} />
      <button type="submit">Send</button>
    </form>
  </div>
</div>

<style lang="scss">
  .messages-container {
    width: 100vw;
    height: 40vw;
    border: 2px solid white;
  }

  .message-input {
    // position: absolute;
    // bottom: 0;
    // left: 0;
    width: 100vw;
  }

  .message {
    color: white;
    margin: 10px;
  }

  button {
    @apply text-white;
    height: 5vw;

    margin-top: 1rem;
    margin-left: 5px;
    padding: 1rem;
    transition: background-color 1s ease;

    &:hover {
      background-color: grey;
    }
  }

  input {
    width: 95vw;
    height: 5vw;
    font-size: 2rem;
    margin-top: 1rem;
  }
</style>
