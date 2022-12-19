<script>
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
</script>

{#if $page.data.session}
  <button on:click={() => signOut('github')}>Sign Out</button>
{:else}
  <button on:click={() => signIn('github')}>Sign In with Github <Icon icon="mdi:github" /></button>
{/if}

<style lang="scss">
  button {
    color: white;

    &:hover {
      color: #f9a8d4;
    }
  }
</style>
