<template>
  <v-footer
    :color="color"
    :app="app"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        xs12
        md2
      >
        &copy; {{ copyrightYear }}
      </v-flex>
      <v-btn
        v-for="link in links"
        :key="link.text"
        :color="linkColor"
        :to="link.href"
        flat
      >
        {{ link.text }}
      </v-btn>
    </v-layout>

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

<style scoped>

</style>