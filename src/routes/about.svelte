<script context="module">
  import { browser, dev } from '$app/env'
  import { Grid, Row } from 'carbon-components-svelte'

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<Grid>
  <Row>
    <h1>About this app</h1>
  </Row>
  <Row>
    <p>
      The page you're looking at is purely static HTML, with no client-side interactivity needed.
      Because of that, we don't need to load any JavaScript. Try viewing the page's source, or
      opening the devtools network panel and reloading.
    </p>
  </Row>
</Grid>
