<script>
export default {
    props: ['recipe','index']
}
</script>

<template>
  
    <div :class="index == 0 ? 'carousel-item active' : 'carousel-item' ">
      <img
        :src="recipe.image"
        class="d-block w-100"
        alt=""
      />
    </div>
  
</template>