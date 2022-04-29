<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="primary">
        <router-link to="/">
          <v-row>
            <v-icon x-large color="white">mdi-alpha-c-box</v-icon>
            <span class="white--text ml-2 display-1">Customers Vue</span>
          </v-row>
        </router-link>
        <!-- <router-link class="text-light" to="/">Início</router-link> |
        <router-link to="/create">Novo Cliente</router-link> |
        <router-link to="/update/1">Alterar Cliente</router-link> -->
      </v-app-bar>
      <v-main>
        <v-container>
          <router-view/>
        </v-container>
      </v-main>
    </v-app>
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
