<template>
    <table>
        <thead>
            <tr>
                <th v-for="(Head, index) in Header" v-bind:key="index">
                    {{ Head.name }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(Bd, index) in Body" v-bind:key="index">
                <td v-for="(Head, i) in Header" v-bind:key="i">
                    {{ Bd[Head.value] }} {{ Head.description }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: ['Header', 'Body']
    }
</script>

<style scoped>
table {
    width: 100%;
}
table thead {
    background-color: #e9deff;
}
table tbody tr td {
    border: solid 1px #e9deff;
}
table thead tr th, table tbody tr td{
    padding: 1em;
    text-align: left;
}
</style>