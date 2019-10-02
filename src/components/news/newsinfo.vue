<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>{{newsinfo.add_time}}</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>

        <comment :id="this.id"></comment>
    </div>
</template>

<script>
    // 导入评论子组件
    import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
      this.getnewsinfo();
    },
    methods:{
        getnewsinfo(){
            // 获取新闻详情
            this.$http.get('api/getnew/' + this.id).then(result=>{
                if(result.body.status ===0){
                 this.newsinfo = result.body.message[0];
                }else {
                    console.log('error');
                }
            })
        }
    },
    components:{
        comment
    }
}
</script>


<style scoped>
.newsinfo-container{

}
.subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
.title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
}
</style>