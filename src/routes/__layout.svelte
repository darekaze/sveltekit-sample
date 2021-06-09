<script lang="ts">
  import { page } from '$app/stores'
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
  import { Content } from 'carbon-components-svelte'
  import Header from '$lib/components/Header/index.svelte'
  import type { IHeaderNavLink } from '$lib/types'

  const navLinks: IHeaderNavLink[] = [
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/settings',
      label: 'Settings',
    },
    {
      path: '/users',
      label: 'Users',
    },
  ]
  const queryClient = new QueryClient()

  $: pageTitle = navLinks.find((el) => el.path === $page.path)?.label
</script>

<svelte:head>
  <title>{pageTitle ? `${pageTitle} - Uma Trainer` : 'Uma Trainer - blablabla'}</title>
</svelte:head>

<Header {navLinks} />

<QueryClientProvider client={queryClient}>
  <Content>
    <slot />
    <!-- Footer here? -->
  </Content>
</QueryClientProvider>

<style global>
  @import 'carbon-components-svelte/css/g10';
</style>
