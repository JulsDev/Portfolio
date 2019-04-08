<template lang="pug">
  .input__error-tooltip {{errorText}}
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: "Что-то пошло не так!"
    }
  }
};
</script>


<style lang="postcss" scoped>
  
  .input__error-tooltip {
    border-color: $errors-color;
    color: $errors-color;
    padding: 12px 20px;
    font-size: 14px;
  }
  
</style>