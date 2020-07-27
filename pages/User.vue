<template >
  <!-- <v-container> -->
  <div>
    <Inquiry />
  </div>
  <!-- </v-container> -->
</template>

<script>
import Inquiry from '@/components/user/inquiery'
export default {
  components: {
    Inquiry,
  },
  data() {
    return {
      user: {
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
      },
    }
  },
}
</script>
