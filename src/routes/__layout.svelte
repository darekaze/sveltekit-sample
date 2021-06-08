<script lang="ts">
  import 'carbon-components-svelte/css/g10.css'
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
  import { Content } from 'carbon-components-svelte'
  import Header from '$lib/components/Header/index.svelte'

  const queryClient = new QueryClient()

</script>

<Header />

<QueryClientProvider client={queryClient}>
  <Content>
    <slot />
    <!-- Footer here? -->
  </Content>
</QueryClientProvider>
