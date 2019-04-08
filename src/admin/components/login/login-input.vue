<template lang="pug">
  .login-input
    label.login-input__block
      .login-input__title {{title}}
      .login-input__row(:class="{'input-error' : errorText}")
        .login-input__icon(:class="this.$attrs.name") 
        input(
          v-bind="$attrs"
          :value="value"
          @input="$emit('input', $event.target.value)"
          ).login-input__input
      .login-input__error
        ErrorsTooltip(:errorText="errorText")
    
</template>


<script>
  export default {
    name: "LoginInput",
    inheritAttrs: false,
    
    props: {
      title: String,
      errorText: String,
      value: String | Number
    },
    
    components: {
      ErrorsTooltip: () => import('../common/errors-tooltip.vue'),
    },
  }

</script>


<style lang="postcss" scoped>
  
  @import "../../../styles/mixins.pcss";

  .login-input{
    display: flex;
    flex-direction: column;
    width: 100%;

    &__block{
      display: flex;
      flex-direction: column;
      max-height: 85px;
    }
  }

  .login-input__title{
    margin-bottom: 20px;
    opacity: 0.3;
    font-size: 16px;
    font-weight: 600;
    padding-left: 45px;

    @include phones{
      margin-left: 45px;
    }
  }

  .login-input__row{
    display: inline-flex;
    width: 100%;
    position: relative;
    border-bottom: 1px solid $text-color;
  }

  .login-input__icon{
    width: 27px;
    height: 30px;
    margin-right: 20px;
  }

  .login-input__icon.login{
    background: svg-load("user.svg", fill=rgba($text-color, 0.3), width=100%, height=100%) no-repeat;
  }
  .login-input__icon.login.error{
    background: svg-load("user.svg", fill=rgba($errors-color, 0.7), width=100%, height=100%) no-repeat;
  }

  .login-input__icon.password{
    background: svg-load("key.svg", fill=rgba($text-color, 0.3), width=100%, height=100%) no-repeat;
  }
  .login-input__icon.password.error{
    background: svg-load("key.svg", fill=rgba($errors-color, 0.7), width=100%, height=100%) no-repeat;
  }

  .login-input__input{
    display: flex;
    width: 100%;
    position: relative;
    outline: none;
    border: none;
  }
 
  .login-input__error{
    display: block;
  }

  .input-error {
    border: 1px solid $errors-color;
    color: $errors-color;
    padding-top: 10px;
  }


</style>