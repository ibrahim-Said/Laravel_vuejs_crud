<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-primary">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
