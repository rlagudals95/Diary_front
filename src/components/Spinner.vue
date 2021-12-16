<template>
  <div class="spinner">
    <b-spinner label="Loading..."></b-spinner>
  </div>
</template>

<script>
export default {
    name: 'Spinner'
}
</script>

<style>
    .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
</style>