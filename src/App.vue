<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/count">Count</router-link>|
      <router-link to="/hello">Hello</router-link>|
      <router-link to="/component">Component</router-link>|
      <router-link to="/transition">Transition</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
}

#nav {
  padding: 30px;
  position: relative;
  text-align: center;
}

#app > #nav {
  position: relative;
}

#app > .msg {
  position: relative;
  display: none;
}

#app > .show {
  position: relative;
  /* display: inline-flex; */
}

.show {
  position: relative;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
