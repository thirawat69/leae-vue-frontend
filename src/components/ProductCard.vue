<template>
    <div class="product-card" @click="$emit('click')">
        <p>{{ name}}</p>
        <p>{{ price }}</p>
    </div>
</template>

<style scoped>
.product-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    width: 240px ;
    height: 300px;
    background-color:whitesmoke;
    box-shadow: 0px 3px 3px gray ;
    cursor: pointer;
    
}
</style>

<script>
export default {
    props: ["name","price"],
}
</script>