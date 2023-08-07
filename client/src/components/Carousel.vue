<script>
export default {
  props: ['news', 'index']
}
</script>

<template>
  <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
    <a :href="news.url" target="_blank">
      <div class="imgBanner">
        <img
          :src="
            news.urlToImage
              ? news.urlToImage
              : 'https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-PNG-Transparent-Picture.png'
          "
          class="d-block w-100 p-1"
        />
      </div>
    </a>
    <div class="carousel-caption d-none d-md-block bg-dark" style="opacity: 0.8">
      <h5>{{ news.author }}</h5>
      <p>{{ news.title }}</p>
    </div>
  </div>
</template>

<style>
.imgBanner {
  height: 500px;
  object-fit: contain;
  opacity: 0.8;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>