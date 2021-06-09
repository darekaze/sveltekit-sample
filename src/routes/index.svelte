<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Counter from '$lib/components/Counter/index.svelte'
  import { Button } from 'carbon-components-svelte'
</script>

<!-- This page loads the analyzer in the first place -->

<section>
  <h1>
    <div class="welcome">
      <picture>
        <source srcset="svelte-welcome.webp" type="image/webp" />
        <img src="svelte-welcome.png" alt="Welcome" />
      </picture>
    </div>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/index</strong>
  </h2>

  <Button kind="ghost">Ghost button</Button>

  <Counter />
</section>

<style>
  .welcome {
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
