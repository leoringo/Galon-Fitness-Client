<script>
import { mapActions, mapState } from 'pinia'
import { useGymStore } from '../stores/counter'


export default {
  props: ['perClass'],
  methods: {
    async classById(id) {
      try {
        this.$router.push('/class/' + id)
      } 
      catch (error) {
      console.log(error);  
      }
    }
  }
}
</script>

<template>
  <div class="col">
    <div @click.prevent="classById(perClass.id)" class="card m-2" style="width: 18rem; background-color: #D5B77A">
      <img class="card-img-top" :src="perClass.imgUrl" alt="Card image cap" style="height: 150px"/>
      <div class="card-body">
        <h2 class="card-text" style="text-align: center;">
          {{perClass.name}}
        </h2>
      </div>
    </div>
  </div>
</template>