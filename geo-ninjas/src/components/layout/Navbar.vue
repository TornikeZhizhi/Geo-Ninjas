<template>
  <div class="navbar nav">
    <div class="deep-purple darken-1">
      <div class="container">
        <a href="" class="brand-logo left">GeoNinjas</a>
        <ul class="right">
          <li><a href="">SignUp</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
.deep-purple {
  height: 80px;
}
.nav a {
  color: #fff;
}
.container {
  width: 85%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul.right {
  display: flex;
}
ul.right li {
  margin-right: 15px;
}
</style>
