<script>

</script>
<template>
    <h1>This is Detail PAge {{$route.params.id}}</h1>
    <router-link :to="{name:'personal',params:{id:$route.params.id}}">Personal</router-link>
    <router-link :to="{name:'education',params:{id:$route.params.id}}">Education</router-link>
    <RouterView></RouterView>
</template>
<style></style>