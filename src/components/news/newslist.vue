<template>
    <div>
        <ul class="mui-table-view" >
            <li class="mui-table-view-cell mui-media" v-for="item in newslist":key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id ">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <!--标签的src属性要用v-bind绑定-->
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
   export default {
       data(){
           return {
               newslist:[]
           }
       },
       created(){
         this.getnewslist();
       },
       methods:{
           getnewslist(){  // 获取新闻列表请求
             this.$http.get('api/getnewslist').then(result=>{
                 if(result.body.status===0){
                  this.newslist = result.body.message;
                 }else {
                     console.log('success');
                 }
             });
           }
       }
   }
</script>

<style scoped>

</style>