<template>
  <v-form v-model="valid">
    <v-container>
      <h2 class="font-weight-medium">Upload your file!</h2>
      <v-row>
        <div class="d-flex col-8">
          <v-text-field v-model="user.email" label="Email" disabled></v-text-field>
        </div>

        <div class="d-flex col-4">
          <v-btn depressed elevation="7" large raised @click="$emit('get')"> Get User!</v-btn>

          <v-btn
            class="ml-3"
            color="primary"
            depressed
            elevation="7"
            large
            raised
            @click="$emit('use')"
          >
            Use it!
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: ['user', 'get', 'set'],
  data () {
    return {
      valid: true,
      email: ''
    }
  }
}
</script>
