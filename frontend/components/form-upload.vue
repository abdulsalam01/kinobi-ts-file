<template>
  <v-container>
    <v-btn
      :loading="loading"
      :disabled="loading"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading'"
    >
      Upload
      <v-icon right dark> mdi-cloud-upload </v-icon>
    </v-btn>

    <!-- table layout -->
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-1 mt-3"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
        loader: null,
        loading: false,
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: false,
            value: 'no',
          },
          { text: 'Name', value: 'name' },
          { text: 'Path', value: 'path' },
          { text: 'Display', value: 'display' },
        ],
        data: [],
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
    },
  }
</script>
