<template>
  <v-footer
    :color="color"
    :app="app"
  >

    <slot name="copyright">
      <span>&copy; {{ copyrightYear }}</span>
    </slot>

    <v-spacer/>

    <div class="ml-auto">
      <v-btn
        v-for="link in links"
        :key="link.text"
        :color="linkColor"
        :to="link.href"
        flat
      >
        {{ link.text }}
      </v-btn>
    </div>

  </v-footer>
</template>

<script>
  export default {
    name: 'UtkFooter',
    props: {
      app: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: null
      },
      copyrightYear: {
        type: Number,
        default: () => (new Date()).getFullYear()
      },
      links: {
        type: Array,
        default: () => []
      },
      linkColor: {
        type: String,
        default: 'white'
      }
    },
    data: () => ({})
  }
</script>

<style lang="stylus" scoped>
  .v-btn
    text-transform: none
</style>