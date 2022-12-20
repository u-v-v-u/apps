<script lang="ts">
  import { invalidate } from '$app/navigation';
  import { supabaseClient } from '$lib/supabaseClient';
  import { onMount } from 'svelte';
  import '../app.scss';
  import NavBar from '../components/NavBar.svelte';

  onMount(() => {
    const {
      data: { subscription }
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidate('supabase:auth');
    });

    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<div class="prose prose-zinc">
  <div class="w-screen h-screen flex flex-col">
    <NavBar />
    <slot />
  </div>
</div>
