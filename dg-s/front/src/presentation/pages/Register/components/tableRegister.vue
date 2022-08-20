<template>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(Bd, index) in Body" v-bind:key="index">
                <td>{{Bd.name}}</td>
                <td v-if="(Bd.age) < 1">
                    {{ 
                        Bd.age * 10 === 1 ? (Bd.age*10)+' Month' : (Bd.age*10)+' Months'
                    }}
                </td>
                <td v-else>
                    {{
                        Bd.age === 1 ? Bd.age + ' Year' : Bd.age + ' Years old'
                    }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    export default {
        props: ['Body']
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