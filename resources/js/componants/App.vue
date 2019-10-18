<template>
    <div class="nav1">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>

</template>

<script>
import Navbar from './navbar.vue'
export default {
components:{
    Navbar
}
}
</script>

<style>

</style>
