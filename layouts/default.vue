<template>
  <div>
    <TopNav />
    <nuxt
      class="flex flex-col p-8 items-center font-bold font-mono text-red-600"
    />
  </div>
</template>
<script>
import TopNav from '~/components/TopNav'
export default {
  components: {
    TopNav
  }
}
</script>
