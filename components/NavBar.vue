<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand to="/">
      PTTR
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/post/create">
          Post your Pet
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>

</style>
