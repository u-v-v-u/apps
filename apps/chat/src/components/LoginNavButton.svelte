<script>
  import { page } from '$app/stores';
  import { supabaseClient } from '$lib/supabaseClient';
  import Icon from '@iconify/svelte';

  const signIn = () => {
    supabaseClient.auth.signInWithOAuth({ provider: 'github' })
  }
</script>

{#if $page.data.session}
  <button on:click={() => supabaseClient.auth.signOut()}>Sign Out</button>
{:else}
  <button
    on:click={() => signIn()}
    >Sign In <Icon icon="mdi:github" /></button
  >
{/if}

<style lang="scss">
  button {
    color: white;

    &:hover {
      color: #f9a8d4;
    }
  }
</style>
