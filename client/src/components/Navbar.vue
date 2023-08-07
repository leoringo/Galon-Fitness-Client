<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useGymStore } from '../stores/counter'

export default {
  computed: {
    ...mapWritableState(useGymStore, ['isLogged', 'email']),
    ...mapState(useGymStore, ['trainers'])
  },
  methods: {
    ...mapActions(useGymStore, ['readTrainers']),
    logout() {
      localStorage.clear()
      this.isLogged = false
      this.email = null
      this.$router.push('/')
    },
    async toTrainers() {
      try {
        this.readTrainers()
        this.$router.push('/trainers')
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    if (localStorage.access_token) {
      this.isLogged = true
      this.email = localStorage.email
    }
  }
}
</script>

<template>
  <div class="shadow mb-4 p-3 bg-body rounded d-flex justify-content-between align-items-center ">
    <div class="mx-5">
      <img
        src="https://www.logodesign.net/logo/dumbell-gym-in-shape-of-triangle-3373ld.png"
        width="120"
      />
    </div>
    <div class="d-flex">
      <div class="me-3">
        <button @click.prevent="toTrainers" class="btn btn-danger text-white" style="font-family: 'Ysabeau Infant', sans-serif">
          Meet Our StarMaker
        </button>
      </div>
      <div class="me-3">
        <router-link class="text-dark" to="/">Home</router-link>
      </div>
      <div class="me-3">
        <a class="text-dark">My Class</a>
      </div>
      <div class="me-3" v-if="isLogged === false">
        <router-link class="text-dark" to="/login">Sign In</router-link>
      </div>
      <div class="me-3" v-if="isLogged === true">
        <div class="dropdown pb-4">
          <a
            href="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhEj59PK6H-QC18NYBcRstm4HDuTE1akp9w&usqp=CAU"
              alt="hugenerd"
              width="30"
              height="30"
              class="rounded-circle"
            />
            <span class="d-none d-sm-inline mx-1 text-dark">Hi, {{ email }}!</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a class="dropdown-item text-light" href="" @click.prevent="logout">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>