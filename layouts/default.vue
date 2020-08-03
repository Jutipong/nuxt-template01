<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list shaped dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center"></v-row>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="child.to"
            >
              <v-list-item-action v-if="child.icon" class="ml-2">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else :key="item.text" link :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      small
      :clipped-left="clipped"
      fixed
      app
      color="blue darken-3"
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
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
        // { index: 1, icon: 'mdi-content-copy', text: 'Welcome', to: '/' },
        {
          index: 2,
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Demo',
          model: false,
          children: [
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
        {
          index: 3,
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'UserGroup1',
          model: false,
          children: [
            {
              index_root: 3,
              icon: 'mdi-vuejs',
              text: 'Inspire',
              to: 'inspire',
            },
          ],
        },
      ],
      miniVariant: false,
      right: true,
      // rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  mounted() {
    this.items.forEach((r) => {
      console.log('1')
      if (r.children != null) {
        let obj = r.children.find((c) => {
          return c.to.toUpperCase() == $nuxt.$route.name.toUpperCase()
        })

        if (obj != undefined && obj != null) {
          let rootmenu = this.items.find((r) => {
            return r.index === obj.index_root
          })

          if (rootmenu != undefined && rootmenu != null) {
            rootmenu.model = true
          }
        }
      }
    })
  },
}
</script>

<style>
.btn-d {
  min-width: 120px;
}
</style>
