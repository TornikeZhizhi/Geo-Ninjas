<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
export default {
  name: "GMap",
  data() {
    return {};
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.817967, lng: 42.989937 },
        zoom: 2,
        maxZoom: 15,
        minZoom: 3,
        streeViewControl: false
      });
    }
  },
  mounted() {
    this.renderMap();
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 90vh;
}
</style>
