<template>
  <div class="container">

    <div class="component-container">
      <h2> Get Started with your current account </h2>
      
      <br>

      <div class="row">
        <button class="btn btn-primary"  type='submit' name='action'>Create</button>
        
        <button class="btn btn-primary" margin="auto" type='submit' name='action' @click>Back to Home</button>
        
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
.component-container {
      margin: 0 10px 20px 10px;
      padding: 20px;
      background: lightblue;
      border-radius: 4px;
      border: 1px solid #EBEBEB;
      min-width: 300px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      flex: 1 0 48%;

    }
</style>