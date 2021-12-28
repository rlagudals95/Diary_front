<template>
  <div class="modal-container">
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">dd{{this.category_detail}}</p>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Modal',
     computed : {
    ...mapState({
        category_detail : state => state.category.category_detail
    })     
  },
}
</script>

<style lang="scss" scoped>
    .modal-container {
        z-index: 50001;
    }
</style>