<script>
  import { NavBar } from '@components';
  import '../app.scss';
</script>

<div class="prose prose-zinc">
  <div class="w-screen h-screen flex flex-col">
    <NavBar />
    <slot />
  </div>
</div>
