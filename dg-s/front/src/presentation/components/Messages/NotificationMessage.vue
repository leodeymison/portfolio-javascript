<template>
    <div :class="'message '+ type">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: 'NotificationMessage',
        props: ['text', 'type']
    }
</script>

<style scoped>
.message {
    padding: 1em 1.5em;
    border-radius: 5px;
    background-color: rgb(227, 226, 226);
    color: black;
    position: fixed;
    top: 10px;
    right: 10px;
}
.message.ok{
    background-color: rgb(21, 255, 0);
    color: rgb(0, 0, 0);
}
.message.error{
    background-color: rgb(255, 51, 0);
    color: rgb(255, 255, 255);
}
</style>