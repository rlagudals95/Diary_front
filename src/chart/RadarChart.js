import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: ['data', 'options'],
  data () {
    return {
      
    }
  },
  mounted () {
    this.renderChart( this.data, this.options)
  },

}