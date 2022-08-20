<template>
  <div class="container">
    <h1 class="title">Create a resistor</h1>
    <form @submit="createRegister">
      <InputForm 
        :type="`text`" 
        :placeholder="`Name`" 
        @change="e => nameValue=e.target.value"
      /> <br>
      <InputForm 
        :type="`date`" 
        :placeholder="`Date`"
        @change="e => birthValue=e.target.value"
      /> <br>
      <div class="controls rigth">
        <router-link to="/registers" class="btn danger">
          Cancel
        </router-link>
        <button type="submit" class="btn success">Save</button>
      </div>
    </form>
    <NotificationMessage v-if="activeMessage" :text="infoMessage.value" :type="infoMessage.type" />
  </div>
</template>

<script>
  import InputForm from '@/presentation/components/Form/InputForm.vue'
  import { AxiosHttpClient } from '@/infra/http-axios-client'
  import NotificationMessage from '@/presentation/components/Messages/NotificationMessage.vue'
  import { RegisterValidator } from '@/validations/register-save'
  export default {
    components: {
      InputForm,
      NotificationMessage
    },
    data() {
      return {
        nameValue: '',
        birthValue: '',
        activeMessage: false,
        infoMessage: {
          type: '',
          value: ''
        }
      }
    },
    
    methods: {
      async createRegister(e) {
        e.preventDefault()
        try{
          await RegisterValidator.Params({name: this.nameValue, birth: this.birthValue})
          new AxiosHttpClient().request({
            method: 'post',
            url: `${process.env.VUE_APP_URL_API}/registers`,
            body: {
              name: this.nameValue,
              birth: this.birthValue
            }
          })
          this.infoMessage = {
            type: 'ok',
            value: 'Record saved successfully'
          }
          this.messageOpenClosed()
        } catch (error){
          this.infoMessage = {
            type: 'error',
            value: error
          }
          this.messageOpenClosed()
        }
      },
      messageOpenClosed(){
        this.activeMessage = !this.activeMessage
        setTimeout(() => {
          this.activeMessage = !this.activeMessage
        }, 4000)
      }
    }
  }
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.controls a {
  margin: 0 5px;
}
</style>