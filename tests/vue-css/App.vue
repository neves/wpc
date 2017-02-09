<template lang="html">
<div>
  <h1>Teste</h1>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
h1 {
  color: fuchsia;
}
</style>

<style lang="less">
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header {
  color: @light-blue;
}
</style>

<style lang="stylus">
body
  background-color gray
</style>

<style lang="scss">
h1 {
  color: fuchsia;
}
</style>

<style lang="sass">
  body
    border: none
</style>
