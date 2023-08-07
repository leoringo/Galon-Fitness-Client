<script>
import { mapActions, mapState } from 'pinia'
import { useGymStore } from '../stores/counter'

export default {
  methods: {
    ...mapActions(useGymStore, ['allClasses', 'payment'])
  },
  computed: {
    ...mapState(useGymStore, ['classList'])
  },
  created() {
    this.allClasses(this.$route.params.ClassId)
  }
}
</script>

<template>
  <div class="text-white" style="font-family: 'Ysabeau Infant', sans-serif">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Class Name</th>
          <th scope="col">Category</th>
          <th scope="col">Date</th>
          <th scope="col">Instructor</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="(perClass, index) in classList" :key="perClass.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ perClass.Class.name }}</td>
          <td>{{ perClass.Class.Category.category }}</td>
          <td>{{ new Date(perClass.date).toLocaleDateString() }}</td>
          <td>{{ perClass.Trainer.name }}</td>
          <td><button @click.prevent="payment(perClass.id)" class="btn btn-dark">BOOK CLASS</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>