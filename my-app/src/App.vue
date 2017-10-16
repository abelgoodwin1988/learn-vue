<template>
  <div id="app">
    <message>
      Hello There
    </message>
  </div>
</template>

<script>
  import Message from './component/Message.vue';

  export default {
    name: 'app',
    components: { Message },
    date() {
      return {

      }
    }
  }
</script>

<style>

</style>
