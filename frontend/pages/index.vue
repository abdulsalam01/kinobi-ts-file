<template>
  <v-row justify="center" align="center" class="my-12">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center" elevation="7">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card elevation="7" class="my-4">
        <v-card-title class="headline">
          Welcome to Kinobi-frontfloader
        </v-card-title>
        <v-card-subtitle>
          Simple application to simulate uploading your files to our system!
        </v-card-subtitle>
        <v-card-actions class="d-flex flex-row-reverse">
          <nuxt-link to="/uploader">
            <v-btn
              class="px-5 mr-3"
              color="primary"
              depressed
              elevation="7"
              large
              raised
            >
              Continue
            </v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
