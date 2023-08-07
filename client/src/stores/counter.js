import { ref, computed, nextTick } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useGymStore = defineStore('gym', {
  state: () => ({
    url: 'https://galonfitness.ringo.my.id',
    news: [],
    recipes: [],
    classes: [],
    classList: [],
    trainers: [],
    trainerDetail: {},
    classDetail: {},
    email: '',
    isLoading: false,
    isLogged: false
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    swalError(error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      })
    },

    async getNews() {
      try {
        this.isLoading = true
        const { data } = await axios({
          url: 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=7325ecff50c84e36b9c84547ccd226a0',
          method: 'get'
        })

        for (let i = 0; i < 5; i++) {
          this.news.push(data.articles[i])
        }
        console.log(this.news);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        this.isLoading = false
      }
    },

    async getRecipes() {
      try {
        const { data } = await axios({
          url: 'https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429',
          method: 'get',
          headers: {
            "x-api-key": "049f74420f56424798accdeec9921698"
          }
        })

        for (let i = 0; i < data.length; i++) {
          this.recipes.push(data[i])
        }
        console.log(this.recipes);
      }
      catch (error) {
        console.log(error);
      }
    },

    async getClasses() {
      try {
        const { data } = await axios({
          url: this.url + '/classes',
          method: 'get'
        })

        this.classes = data
        console.log(this.classes);
      }
      catch (error) {
        console.log(error);
      }
    },

    async getClassById(id) {
      try {
        const { data } = await axios({
          url: this.url + "/classes/detail/" + id,
          method: 'get'
        })

        this.classDetail = data
        console.log(this.classDetail);
      }
      catch (error) {
        console.log(error);
      }
    },

    async login(value) {
      try {
        const { data } = await axios({
          url: this.url + '/users/login',
          method: 'post',
          data: value 
        })

        console.log(data);
        this.email = value.email
        this.isLogged = true
        localStorage.email = value.email
        localStorage.access_token = data.access_token
        this.router.push('/')
      }
      catch (error) {
        this.swalError(error);
        console.log(error);
      }
    },

    async register(value) {
      try {
        const {data} = await axios({
          url: this.url + '/users/register',
          method: 'post',
          data: value
        })
        console.log(data);
        this.router.push('/login')
      } 
      catch (error) {
        this.swalError(error)
        console.log(error);  
      }
    },

    async allClasses(ClassId) {
      try {
        const {data} = await axios({
          url: this.url + '/schedules/class/' + ClassId,
          method: 'get'
        })

        this.classList = data
        console.log(this.classList);
      } 
      catch (error) {
        console.log(error);
      }
    },

    async addClassFromList(ClassId){
      try {
        const {data} = await axios({
          url: this.url + '/users/add/' + ClassId,
          method: 'post',
          headers: {
            access_token: localStorage.access_token
          }
        })

        console.log(data);
      } 
      catch (error) {
        this.swalError(error)
        console.log(error);
      }
    },

    async patchStatus() {
      try {
        const {data} = await axios({
          url: this.url + '/users/subscribe',
          method: 'patch',
          headers: {
            access_token: localStorage.access_token
          }
        })
      } catch (error) {
        this.swalError(error)
      }
    },

    async payment(ClassId){
      try {
        const {data} = await axios({
          url: this.url + '/users/payment',
          method: 'post',
          headers: {
            access_token: localStorage.access_token
          }
        })
        const cbClass = this.addClassFromList
        const cbPatchStatus = this.patchStatus

        window.snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            cbClass(ClassId)
            // cbPatchStatus() //@@@@@@@@@@@
            alert("payment success!"); console.log(result);
          }
        })
      } 
      catch (error) {
       this.swalError(error)
       console.log(error);  
      }
    },

    async checkClass(){
      //1. axios ke server yang check class 
      //2. cek balikan apakah ada apa gak di kelas itu membernya?
      //3. kalau gak ada this.payment()      
    },

    async readTrainers() {
      try {
        const {data} = await axios({
          url: this.url + '/trainers',
          method: 'get',
        })

        this.trainers = data
        console.log(this.trainers);
      } catch (error) {
        console.log(error);
      }
    },

    async getTrainerDetail(TrainerId){
      try {
        const { data } = await axios({
          url: this.url + '/trainers/detail/' + TrainerId,
          method: 'get'
        })

        this.trainerDetail = data
        console.log(this.trainerDetail);
      } 
      catch (error) {
        console.log(error);  
      }
    },

    async googleLogin(credential) {
      try {
        const { data } = await axios({
          url: this.url + '/users/google-sign-in',
          method: 'post',
          headers: {
            google_token: credential
          }
        })
        localStorage.access_token = data.access_token
        localStorage.email = data.email
        this.isLogged = true
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    }

  },
})
