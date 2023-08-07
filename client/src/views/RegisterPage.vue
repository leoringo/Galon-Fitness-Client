<script>
import { mapActions, mapState } from 'pinia'
import { useGymStore } from '../stores/counter'

export default {
  data() {
    return {
      name: '',
      address: '',
      email: '',
      password: '',
      phoneNumber: '',
      gender: ''
    }
  },
  methods: {
    ...mapActions(useGymStore, ['register']),
    async submitRegister() {
      try {
        let value = {
          name: this.name,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          address: this.address,
          gender: this.gender
        }
        this.register(value)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="d-flex justify-content-center">
      <h1>Register Form</h1>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="row p-2 bg-dark">
        <div class="col card m-3 p-2">
          <section id="register-section">
            <form class="container" @submit.prevent="submitRegister">
              <!-- Full Name input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example2">Full Name:</label>
                <input type="text" id="form1Example2" v-model="name" class="form-control" />
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example1">Email:</label>
                <input type="email" id="form1Example1" v-model="email" class="form-control" />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example2">Password:</label>
                <input type="password" id="form1Example2" v-model="password" class="form-control" />
              </div>

              <!-- phoneNumber input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example2">Phone Number:</label>
                <input type="text" id="form1Example2" v-model="phoneNumber" class="form-control" />
              </div>

              <!-- Address input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example2">Address:</label>
                <input type="text" id="form1Example2" v-model="address" class="form-control" />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="">Select your gender:</label>
                <input type="radio" v-model="gender" value="M"/>M
                <input type="radio" v-model="gender" value="F"/>F
              </div>

              <!-- Submit button -->
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit">Register</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>