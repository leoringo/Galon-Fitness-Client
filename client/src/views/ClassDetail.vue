<script>
import { mapState, mapActions } from 'pinia'
import { useGymStore } from '../stores/counter'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

export default {
  data() {
    return {
      zoom: 17
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  methods: {
    ...mapActions(useGymStore, ['getClassById', 'allClasses']),
    async getClassList(ClassId) {
      try {
        this.allClasses(ClassId)
        this.$router.push('/class/list/' + ClassId)
      } 
      catch (error) {
        console.log(object);  
      }
    }
  },
  computed: {
    ...mapState(useGymStore, ['classDetail', 'classList'])
  },
   created() {
     this.getClassById(this.$route.params.id)
  }
}
</script>

<template>
  <div class="text-white" style="font-family: 'Ysabeau Infant', sans-serif">
    <img :src="classDetail.imgUrl" alt="" style="object-fit: contain; height: 500px; width: 100%" />

    <div class="mt-5">
      <div class="my-2 ps-5">
        <h3 class="text-success">Class Name</h3>
        <p>{{ classDetail.name }}</p>
      </div>

      <div class="my-2 ps-5">
        <h3 class="text-success">Description</h3>
        <p style="width: 50%">{{ classDetail.description }}</p>
      </div>

      <div class="my-2 ps-5">
        <h3 class="text-success">Category</h3>
        <p>{{ classDetail.Category.category }}</p>
      </div>

      <div class="my-2 ps-5">
        <button @click.prevent="getClassList(classDetail.id)" class="btn btn-primary">See Class Schedule</button>
      </div>

      <h3 class="text-success d-flex justify-content-end pe-5">LOCATION</h3>
      <div class="my-3 d-flex justify-content-end pe-5 col">
        <div style="height: 400px; width: 600px">
          <l-map ref="map" :zoom="zoom" :center="[classDetail.lat, classDetail.lon]">
            <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker :lat-lng="[classDetail.lat, classDetail.lon]" ></l-marker>
          </l-map>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* #map {
  background-color: white;
  height: 50%;
  width: 50%;
} */
</style>