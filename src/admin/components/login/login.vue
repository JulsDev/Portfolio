<template lang="pug">
  .login
    .login-window
      .login-form__btn-close
      .login-form__title Авторизация
      form.login-form(@submit.prevent="login")
        .login-form__row
          LoginInput(
            title="Логин"
            v-model="user.name"
            type="text"
            name="login"
            class="user-login__input"
            placeholder="Введите логин"
            maxlength="30"
            autofocus
            :errorText="validation.firstError('user.name')" 
            )
        .login-form__row
          LoginInput(
            title="Пароль"
            v-model="user.password"
            type="password"
            name="password"
            class="user-password__input"
            placeholder="Введите пароль"
            maxlength="30"
            autofocus
            :errorText="validation.firstError('user.password')"
            )
      .login-form__btn-submit
        button(type="submit" :disabled="disableSubmit").loginButton Отправить
</template>


<script>

  // данный пакет используется как примесь для компонентов
  import {Validator} from "simple-vue-validator";
  import $axios from "@/requests";

  console.log("Мы в login - script");

  export default {
    // используем только миксины из пакета
    mixins: [require('simple-vue-validator').mixin],
    // укажем поля, которые хотим провалидировать
    validators:{
      "user.name": (value) => {
        // вызываем валидатор, чтобы обработать полученные данные
        console.log("Валидация");

        return Validator.value(value).required('Поле не может быть пустым');
      },
      "user.password": (value) => {
        return Validator.value(value).required('Поле не может быть пустым');
      } 
    },
    name: "Login",
    data(){
      return{
        disableSubmit: false,
        user: {
          name: "",
          password: ""
        }  
      };
    },
    components: {
      LoginInput: () => import('./login-input.vue'),
    },
    methods:{
      async login(){

        console.log("До валидации");

        // ждем, пока выполнится валидация
        if((await this.$validate()) === false) return;
        this.disableSubmit = true;
        
        console.log("После валидации");

        try {
          // отправление данных на сервер
          const response = await $axios.post('/login',{
            name: this.user.name,
            password: this.user.password
          });

          console.log("Отправили запрос");

          localStorage.setItem("token", response.data.token);
          $axios.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
          this.$router.replace("/");
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>


<style lang="postcss" scoped>

  @import "../../../styles/mixins.pcss";

  .login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 1172px;
    background: url('../../../images/content/admin/Mountain_Baloon.jpg') center no-repeat;
    background-size: cover;

    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #2d3c4e;
      opacity: 0.6;
    }
  }

  .login-window{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 58px 75px;
    position: relative;
    background-color: #ffffff;

    @include phones{
      width: 100%;
      height: 100%;
      padding: 30px;
      padding-top: 174px;
    }
  }

  .login-form__btn-close{
    display: block;
    position: absolute;
    top: 10px;
    right: -10px;
    width: 20px;
    height: 20px;
    z-index: 10;
    cursor: pointer;
    
    &:after{
      position: absolute;
      top: 50%;
      right: 50%;
      content: "+";
      font-size: 35px;
      font-weight: 400;
      transform: translate(-50%, -50%) rotate(45deg);
      color: $text-color;
    }

    @include phones{
      margin-top: 30px;
      margin-right: 30px;
    }
  }

  .login-form__title{
    font-size: 36px;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 34px;

    @include phones{
      font-size: 30px;
      font-weight: 400;
    }
  }
 
  .login-form{
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 100%;
    max-height: 206px;

    @include phones{
      margin-bottom: 60px;
    }
  }

  .login-form__row{
    display: block;
    align-items: center;
    margin-bottom: 40px;
    &:last-child{
      margin-bottom: 0;
    }
  }

 .login-form__btn-submit{
    display: flex;
    max-width: 347px;
    max-height: 80px;
    padding: 34px 120px;
    border-radius: 40px 5px;
    background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);

    &:hover {
      background-image: linear-gradient(to right, #bb00ff 0%, #5900ff 100%);
    }
    @include phones{
      padding: 22px 90px;
    }
  }

  .loginButton{
    background: transparent;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

</style>