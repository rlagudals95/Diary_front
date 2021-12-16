<template>
  <div>다이어리 뷰!</div>
</template>

<script>
import axios from 'axios'
import { config } from '../config'

export default {
    name: 'DiaryView',
    methods : {
        getDiary (){
            axios.get(`${config.localUrl}/diary/list`).then((res)=> {
                console.log('다이어리 리스트 : ',res);
            }).catch((err)=> {
                console.log('diary_list_err',err)
            })
        }
    },
    created (){
        this.getDiary();
    }

}
</script>

<style>

</style>