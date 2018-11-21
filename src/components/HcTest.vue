<template>
  <v-btn
     :color="color"
     flat
     >
    This is a test
  </v-btn>
</template>

<script>
export default {
  name: 'hc-test',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
