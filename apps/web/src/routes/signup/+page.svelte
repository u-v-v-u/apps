<script lang="ts">
  import { SignupForm } from '@components'
</script>

<div class="flex h-screen justify-center items-center">
  <div class="container flex justify-center items-center">
    <SignupForm />
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
</style>
