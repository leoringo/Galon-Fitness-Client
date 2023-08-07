<script>
import { useGymStore } from '../stores/counter'
import { mapActions, mapState } from 'pinia'

export default {
  methods: {
    ...mapActions(useGymStore, ['readTrainers']),

    async toTrainerDetail(TrainerId) {
        try {
            this.$router.push('/trainer/' + TrainerId)
        } 
        catch (error) {
            console.log(error);    
        }
    }
  },
  computed: {
    ...mapState(useGymStore, ['trainers'])
  },
  created() {
    this.readTrainers()
  }
}
</script>

<template>
  <div class="text-white" style="font-family: 'Ysabeau Infant', sans-serif">
    <h1 style="text-align: center">OUR TRAINERS</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Experience</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody v-for="(trainer, index) in trainers" :key="trainer.id">
        <tr>
          <th>{{ index + 1 }}</th>
          <th style="cursor:pointer" @click.prevent="toTrainerDetail(trainer.id)">{{ trainer.name }}</th>
          <th>{{ trainer.exp }}</th>
          <th>{{ trainer.gender }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>