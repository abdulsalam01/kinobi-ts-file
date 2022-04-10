<template>
  <div>
    <form-user :user="user" @get="getUser" @use="getFile(user.email)"/>
    <form-upload :data="data" @upload="trigger"/>

    <!-- hidden-file-input -->
    <input type="file" @change="upload($event, user.email)" style="display: none"/>
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
      data: [],
      file: {}
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
      this.data = files.data.file.map((n, i) => {
        n.no = i + 1
        return n
      });
    },

    trigger() {
      const input = document.querySelector('input[type="file"]')
      input.click()
    },

    async upload(e, mail) {
      const formData = new FormData();
      const files = e.target.files || e.dataTransfer.files;
      this.file = files[0];
      if (!this.file || !mail) return false;

      const header = {
        'Content-type': undefined
      }

      formData.append("data", this.file)
      formData.append("user", mail)

      const upload = await http.post('/api/files', formData, { headers: header });
      if (upload.status === 200) {
        this.getFile(mail)
      }
    },
  }
}
</script>
