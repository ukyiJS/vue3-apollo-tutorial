<template>
  <div id="nav" class="flex">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 0.5rem;
}
#nav a + a {
  margin-left: 0.5rem;
  margin-right: 0;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.flex {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.pokemon-img {
  width: 5rem;
}
.paging-button {
  width: 2rem;
  height: 2rem;
}
.paging-button + .paging-button {
  margin-left: 0.2rem;
}
.pokemon-autoComplete {
  width: 12rem;
  margin: 0 auto;
  cursor: pointer;
}
</style>
