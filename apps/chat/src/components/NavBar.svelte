<script>
  import LoginNavButton from './LoginNavButton.svelte';
</script>

<div class="flex justify-start items-start nav-container">
  <nav class="text-[1.3rem] flex justify-start items-start pt-3 pl-4 m-0">
    <a href="/" class="nav-title">UvvU Chat</a>
    <LoginNavButton />
  </nav>
</div>

<style>
  .nav-container {
    border: 2px solid;
    border-color: white;
    padding-bottom: 10px;
  }

  a {
    color: white;
  }

  .nav-title {
    @apply text-2xl;

    margin-right: 1rem;
    text-decoration: none;
  }
</style>
