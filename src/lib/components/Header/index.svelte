<script lang="ts">
  import {
    Header,
    HeaderAction,
    HeaderNav,
    HeaderNavItem,
    HeaderPanelDivider,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderUtilities,
    SkipToContent,
  } from 'carbon-components-svelte'
  import type { IHeaderNavLink } from '$lib/types'

  export let navLinks: IHeaderNavLink[] = []
  let isOpen = false
</script>

<Header platformName="Uma Trainer" expandedByDefault={false} href="/">
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
  <HeaderNav>
    {#each navLinks as navLink (navLink.path)}
      <HeaderNavItem href={navLink.path} text={navLink.label} />
    {/each}
  </HeaderNav>
  <HeaderUtilities>
    <HeaderAction bind:isOpen>
      <HeaderPanelLinks>
        <HeaderPanelDivider>All Navigation</HeaderPanelDivider>
        {#each navLinks as navLink (navLink.path)}
          <HeaderPanelLink href={navLink.path}>{navLink.label}</HeaderPanelLink>
        {/each}
        <!-- Extra item and divider... -->
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>
</Header>
