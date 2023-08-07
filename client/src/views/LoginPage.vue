<script>
import { mapActions, mapState } from 'pinia'
import { useGymStore } from '../stores/counter'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useGymStore, ['login', 'googleLogin']),
    submitLogin() {
      let value = {
        email: this.email,
        password: this.password
      }
      this.login(value)
    },

    googleHandle(response) {
      console.log(response, `ISI RESPONSE`)
      this.googleLogin(response.credential)
    }
  }
}
</script>

<template>
  <div>
    <div class="d-flex justify-content-center">
      <h1>Login Form</h1>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="row p-2 bg-dark">
        <div class="col card m-3 p-2">
          <section id="register-section">
            <form class="container" @submit.prevent="submitLogin">
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
              <!-- Submit button -->
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
            <div class="d-flex justify-content-center">
              <p>Not registered yet?</p>
              <router-link to="/register"> click here </router-link>
            </div>
            <p class="d-flex justify-content-center">Or sign in with</p>
            <div class="d-flex justify-content-center">
              <GoogleLogin :callback="googleHandle" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>