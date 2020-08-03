<template>
  <v-card class="mt-4 mb-4 pa-2" elevation="5">
    <v-form>
      <v-card-title class="pa-2">
        <v-icon large left>mdi-file-find</v-icon>
        <span class="title font-weight-light">Search</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.firstname"
              :rules="user.nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.lastname"
              :rules="user.nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="user.email" :rules="user.emailRules" label="E-mail" required></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="text-center">
        <v-spacer></v-spacer>
        <v-btn min-width="120px" class="btn-d text-capitalize" color="error">Reset form</v-btn>
        <v-btn min-width="120px" class="btn-d text-capitalize" color="primary">
          <v-icon>mdi-account-plus-outline</v-icon> Search
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
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
