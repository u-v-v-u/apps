<script>
  import { page } from '$app/stores';
  import { signIn, signOut } from '@auth/sveltekit/client';
  import Icon from '@iconify/svelte';
</script>

{#if $page.data.session}
  {#if $page.url.pathname != '/dash'}
    <a href="/dash" class="nav-button">Dashboard</a>
  {/if}
  <button on:click={() => signOut('github')}>Sign Out</button>
{:else}
  <button on:click={() => signIn('github')}>Sign In <Icon icon="mdi:github" /></button>
{/if}

<style lang="scss">
  button {
    color: white;

    &:hover {
      color: #f9a8d4;
    }
  }
</style>
