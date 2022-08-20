<template>
    <input 
        :type="type" 
        :placeholder="placeholder">
</template>

<script>
    export default {
        props: ['type', 'placeholder']
    }
</script>

<style scoped>
input {
    padding: .3em;
    border-radius: 5px;
    border: solid 1px black;
}
</style>