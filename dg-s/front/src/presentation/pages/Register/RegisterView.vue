<template>
  <div class="container">
    <h1 class="title">All resistors</h1>
    <div class="controls rigth">
      <router-link to="/register-create" class="btn primary">
        <i class="fa-solid fa-plus"></i>
        Add
      </router-link>
    </div>
    <div action="" class="table">
      <TableElement :Body="Body" />
      <p v-if="Body.length === 0">
        No resistance found
      </p>
      <br> <br>
    </div>
  </div>
</template>

<script>
  import TableElement from '@/presentation/pages/Register/components/tableRegister.vue'
  import { AxiosHttpClient } from '@/infra/http-axios-client'
  export default {
    components: {
      TableElement
    },
    data(){
      return {
        Body: []
      }
    },
    created(){
      new AxiosHttpClient().request({
        method: 'get',
        url: `${process.env.VUE_APP_URL_API}/registers`
      }).then(res => {
        this.Body = res.body
      })
    }
  }
</script>

<style scoped>
.table p {
  text-align: center;
  padding: .5em 0;
}
</style>
