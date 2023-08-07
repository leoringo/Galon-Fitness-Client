<script>
import { mapActions, mapState } from 'pinia'
import { useGymStore } from '../stores/counter'

export default {
  methods: {
    ...mapActions(useGymStore, ['getTrainerDetail'])
  },
  computed: {
    ...mapState(useGymStore, ['trainerDetail'])
  },
  created() {
    this.getTrainerDetail(this.$route.params.TrainerId)
  }
}
</script>

<template>
  <div class="text-white" style="font-family: 'Ysabeau Infant', sans-serif">
    <img
      :src="trainerDetail.imgUrl"
      alt=""
      style="object-fit: contain; height: 500px; width: 100%"
    />

    <div class="mt-5">
      <div class="my-2 ps-5">
        <h3 class="text-success">Trainer Name</h3>
        <p>{{ trainerDetail.name }}</p>
      </div>

      <div class="my-2 ps-5">
        <h3 class="text-success">Class Schedule</h3>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody v-for="(schedule, index) in trainerDetail.Schedules" :key="schedule.id">
            <tr style="cursor: pointer" @click.prevent="$router.push(`/class/${schedule.ClassId}`)">
              <th>{{ index + 1 }}</th>
              <th>{{ schedule.Class.name }}</th>
              <th>{{ new Date(schedule.date).toLocaleDateString() }}</th>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-2 ps-5">
        <h3 class="text-success">Experience</h3>
        <h2>{{ trainerDetail.exp }} Year(s)</h2>
      </div>
    </div>
  </div>
</template>