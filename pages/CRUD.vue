<template>
  <v-card>
    <v-card-title class="primary pt-2 pb-2 accent-4">
      <span class="white--text"> <v-icon class="white--text">mdi-magnify</v-icon> ค้นหา</span>
    </v-card-title>
    <v-card-text class="mt-2">
      <v-form>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="ชื่อ" name="Name" outlined dense clearable></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="นามสกุล" name="Last" outlined dense clearable></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="อายุ" name="Age" outlined dense clearable></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary btn-f"><v-icon>mdi-magnify</v-icon>ค้นหา</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
