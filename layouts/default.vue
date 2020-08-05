<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list shaped dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center"></v-row>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon>
            <!-- Title -->
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <!-- Title Sub -->
            <v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.to" class="v-list-item">
              <!-- <v-list-item-action v-if="child.icon" class="ml-4">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action> -->
              <v-list-item-content class="ml-4">
                <v-list-item-title>
                  <v-icon class="pr-2">{{ child.icon }}</v-icon> {{ child.text }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <!-- Root menu -->
          <v-list-item v-else :key="item.text" link :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider dark class="my-4"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar small :clipped-left="clipped" fixed app color="primary" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn outlined color="primary" dark>text</v-btn>
    </v-app-bar>

    <v-content>
      <div class="ma-4" fluid>
        <nuxt />
      </div>
    </v-content>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        // { index: 1, icon: 'mdi-home', text: 'Home', to: '/' },
        {
          index: 3,
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Home',
          model: false,
          children: [
            {
              index_root: 3,
              icon: 'mdi-home',
              text: 'Home',
              to: '/',
            },
            {
              index_root: 3,
              icon: 'mdi-vuejs',
              text: 'Inspire',
              to: 'inspire',
            },
          ],
        },
        {
          index: 2,
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Demo',
          model: false,
          children: [
            {
              index_root: 2,
              icon: 'mdi-pencil',
              text: 'CRUD',
              to: 'CRUD',
              index: null,
            },
            {
              index_root: 2,
              icon: 'mdi-account',
              text: 'Form',
              to: 'user',
              index: null,
            },
            {
              index_root: 2,
              icon: 'mdi-waves',
              text: 'Demo VueX',
              to: 'DemoVuex',
              index: null,
            },
          ],
        },
      ],
      miniVariant: false,
      right: true,
      // rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
  mounted() {
    this.items.forEach((r) => {
      if (r.children != null) {
        let obj = r.children.find((c) => {
          return c.to.toUpperCase() == $nuxt.$route.name.toUpperCase();
        });

        if (obj != undefined && obj != null) {
          let rootmenu = this.items.find((r) => {
            return r.index === obj.index_root;
          });

          if (rootmenu != undefined && rootmenu != null) {
            rootmenu.model = true;
          }
        }
      }
    });
  },
};
</script>

<style>
.btn-f {
  width: 120px;
}
</style>
