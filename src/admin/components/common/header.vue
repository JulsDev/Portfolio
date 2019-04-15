<template lang="pug">
  header.header
    .header-content
      .admin-info
        img(src="../../../images/content/user.jpg").admin-info__image
        .admin-info__name Юлия Асеева
        .admin-info__title Панель администрирования
      .admin-button
        button(type="button").exitButton Выйти
</template>



<style lang="postcss" scoped>

  @import "../../../styles/mixins.pcss";
  
  .header{
    display: flex;
    width: 100%;
    height: 80px;
    background-color: #3e3e59;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
    padding: 16px 60px;
  }

  .header-content{
    display: flex;
    width: 100%;
    color: #ffffff;
    font-family: "Open Sans - Semibold";
    line-height: 34px;
    font-weight: 500;
  }

  .admin-info{
    display: flex;
    align-items: center;
    width: 70%;

    @include tablets{
      width: 100%
    }
  }

  .admin-button{
    display: flex;
    justify-content: flex-end;
    width: 25%;
  }

  .admin-info__image{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .admin-info__name{
    font-size: 18px;
    line-height: 34px;
    margin-right: 28px;
  }

  .admin-info__title{
    display: block;
    opacity: 0.5;
    font-size: 14px;

    @include tablets{
      display: none;
    }
  }

  .exitButton{
    opacity: 0.7;
    font-size: 14px;
    color: #ffffff;
    text-decoration: underline;
    outline: none;
  }

</style>
