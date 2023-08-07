<script>
import { mapState, mapActions } from 'pinia'
import { useGymStore } from '../stores/counter'
import Carousel from '../components/Carousel.vue'
import CarouselRecipes from '../components/CarouselRecipes.vue'

export default {
  components: {
    Carousel,
    CarouselRecipes
  },
  methods: {
    ...mapActions(useGymStore, ['getNews', 'getRecipes']),
    async toClasses() {
      try {
        this.$router.push('/classes')
      } 
      catch (error) {
        console.log(error);  
      }
      
    }
  },
  computed: {
    ...mapState(useGymStore, ['news', 'isLoading', 'recipes'])
  },
  created() {
    this.getNews()
    this.getRecipes()
  }
}
</script>

<template>
  <div>
    <div v-if="isLoading" class="loader"></div>
    <div v-else>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner rounded-3 border border-1 bg-white">
          <!-- CAROUSEL ITEMS -->
          <Carousel
            v-for="(perNews, index) in news"
            :key="perNews.id"
            :news="perNews"
            :index="index"
          />
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="text-white" style="font-family: 'Ysabeau Infant', sans-serif">
        <br /><br />
        <div class="d-flex justify-content-evenly">
          <div>
            <router-link to="/recipes">
              <img
                src="https://www.theroastedroot.net/wp-content/uploads/2022/09/healthy-weekly-meal-plan-30.jpg"
                alt="https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-PNG-Transparent-Picture.png"
                style="width: 70%"
              />
            </router-link>
          </div>
          <div class="container-info">
            <h1 style="text-align: center;">About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus voluptatibus similique? Eius tempora autem veniam! Non ut velit accusamus id aut, itaque blanditiis, voluptatibus iure mollitia dolor quidem aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente distinctio odio repudiandae quod, facilis exercitationem labore. Odit aspernatur quam ipsum facere voluptate quasi nam ea aliquam, maiores earum ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur libero rerum impedit est unde fugit odit ab, tenetur itaque non dolores quam nihil voluptates labore expedita illo delectus. Nesciunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas expedita officiis ipsam suscipit, explicabo fugiat animi optio corrupti! Eaque quaerat voluptatibus distinctio laboriosam exercitationem assumenda, pariatur iure officiis aperiam?</p>
                <img src="https://i0.wp.com/harga.web.id/wp-content/uploads/golds-gym-3.jpg?fit=680%2C300&ssl=1" alt="https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-PNG-Transparent-Picture.png" style="width: 50%">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam expedita placeat eum ex tempora officiis sunt, voluptatum voluptas quasi modi quos accusantium debitis numquam, laudantium ea iste nulla qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore, iusto harum sit cumque pariatur reprehenderit optio officiis sunt incidunt eos voluptatum omnis ipsam? Modi provident pariatur doloremque facilis voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat rerum error illo eius eveniet, est quibusdam. Enim rem impedit deserunt quibusdam eum provident nostrum a omnis, officia ducimus doloribus reiciendis.</p>
                <button class="btn btn-primary" @click.prevent="toClasses">BROWSE OUR CLASS NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  /* Light gray /
    border-top: 16px solid #3498db;
    / Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
  margin-top: 50px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.container-info {
    background-color: ;
    padding: 25px;
    width: 45%;
}
</style>