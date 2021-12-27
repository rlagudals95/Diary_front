<template>
  <div class="modal-container">
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">{{this.edit_category}}</p>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Modal',
     computed : {
    ...mapState({
        edit_category : state => state.category.edit_category
    })     
  },
}
</script>

<style lang="scss" scoped>
    .modal-container {
        z-index: 50001;
    }
</style>