<template>
  <v-form
    class="text-center"
    v-model="isValidForm"
  >
    <v-img
      :src="imageSrc"
      :width="imageWidth"
      :height="imageHeight"/>

    <h1>{{ formTitle }}</h1>

    <v-card
      color="error"
      light
      tile
      flat
      ma-2
      v-if="isValidForm !== null && !isValidForm"
    >
      <v-card-text>
        This email address and/or password was not recognized. Please try again or check with your account
        administrator.
      </v-card-text>
    </v-card>

    <v-text-field
      label="E-mail Address"
      background-color="white"
      :placeholder="emailPlaceholder"
      :error="isValidForm !== null && !isValidForm"
      full-width
      outline
    />

    <v-text-field
      label="Password"
      background-color="white"
      :append-icon="showPassword ? 'visibility_off' : 'visibility'"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="passwordPlaceholder"
      :error="isValidForm !== null && !isValidForm"
      password
      full-width
      outline
      @click:append="showPassword = !showPassword"
    />

    <v-btn
      color="primary"
      depressed
      round
      block
      dark
      @click=""
    >
      {{ loginButtonText }}
    </v-btn>
  </v-form
    class="text-center">
</template>

<script>
  export default {
    name: 'UtkLoginForm',
    props: {
      imageUrl: {
        type: String,
        default: 'https://via.placeholder.com/{width}x{height}'
      },
      imageWidth: {
        type: Number,
        default: 350
      },
      imageHeight: {
        type: Number,
        default: 150
      },
      formTitle: {
        type: String,
        default: 'Branded Product Catalog Fulfillment Center'
      },
      errorMessage: {
        type: String,
        default: 'This email address and/or password was not recognized. Please try again or check with your account administrator.'
      },
      emailPlaceholder: {
        type: String,
        default: 'example@companyStore.com'
      },
      passwordPlaceholder: {
        type: String,
        default: 'password'
      },
      loginButtonText: {
        type: String,
        default: 'login'
      }
    },
    computed: {
      imageSrc () {
        const isDefaultUrl = this.imageUrl.toLowerCase() === 'https://via.placeholder.com/{width}x{height}'
        if (isDefaultUrl) return this.imageUrl.toLowerCase().replace(/\{width\}/, this.imageWidth).replace(/\{height\}/, this.imageHeight)
        else return this.imageUrl
      }
    },
    data () {
      return {
        isValidForm: null,
        showPassword: false
      }
    }
  }
</script>

<style scoped>

</style>