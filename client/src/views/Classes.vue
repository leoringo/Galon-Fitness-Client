<script>
import ClassesCard from '../components/ClassesCard.vue'
import { mapState, mapActions } from 'pinia'
import { useGymStore } from '../stores/counter'

export default {
    components: {
        ClassesCard
    },
    computed: {
        ...mapState(useGymStore, ['classes'])
    },
    methods: {
        ...mapActions(useGymStore, ['getClasses'])
    },
    created() {
        this.getClasses()
    }
}
</script>

<template>
    <div class="text-white row" style="font-family: 'Ysabeau Infant', sans-serif">
        <ClassesCard v-for="perClass in classes" :key="perClass.id" :perClass="perClass"/>
    </div>
</template>