<template>
  <v-form
    v-model="isValidForm"
    lazy-validation
  >
    <slot name="hero-image">
      <v-img
        class="ml-auto mr-auto"
        :src="imageSrc"
        :width="imageWidth"
        :height="imageHeight"/>
    </slot>

    <slot>
      <h1 class="text-center">{{ formTitle }}</h1>
    </slot>

    <div
      class="my-2">
      <v-card
        color="error"
        light
        tile
        flat
        v-if="!isValidForm"
      >
        <v-card-text>
          This email address and/or password was not recognized. Please try again or check with your account
          administrator.
        </v-card-text>
      </v-card>
    </div>

    <v-text-field
      label="E-mail Address"
      color="secondary"
      background-color="white"
      :placeholder="emailPlaceholder"
      full-width
      outline
    />

    <v-text-field
      label="Password"
      color="secondary"
      background-color="white"
      :append-icon="showPassword ? 'visibility_off' : 'visibility'"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="passwordPlaceholder"
      password
      full-width
      outline
      @click:append="showPassword = !showPassword">
      <v-btn
        slot="append-outer"
        color="primary"
        flat
        block
        to="#">
        Forgot your password?
      </v-btn>
    </v-text-field>

    <v-btn
      color="primary"
      depressed
      round
      block
      dark
      @click="isValidForm = !isValidForm"
    >
      {{ loginButtonText }}
    </v-btn>


  </v-form>
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
        isValidForm: true,
        showPassword: false
      }
    }
  }
</script>

<style scoped>

</style>