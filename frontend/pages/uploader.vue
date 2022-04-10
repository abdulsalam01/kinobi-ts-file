<template>
  <div>
    <form-user :user="user" @get="getUser" @use="getFile(user.email)"/>
    <form-upload :data="data"/>
  </div>
</template>

<script>
import http from '../utils/http';
export default {
  name: 'UploaderPage',
  data() {
    return {
      user: {
        id: -1,
        name: '',
        email: ''
      },
      data: []
    }
  },

  methods: {
    async getUser() {
      const user = await http.get(`/api/users`);
      this.user = user.data.randomUser;
    },

    async getFile(mail) {
      if (!mail) return false;

      const files = await http.get(`/api/files/${mail}`);
      this.data = files.data.file;
    }
  }
}
</script>
