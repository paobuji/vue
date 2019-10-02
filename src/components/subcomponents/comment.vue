<template>
    <div>
        <h3>发表评论</h3>
        <textarea placeholder="请输入要输入的内容(最多吐槽一百二十字)"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>


        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments":key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:
                    {{item.add_time}}
                </div>
                <div class="cmt-body">
                   {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>

        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageindex :1, // 默认展示第一页数据
            comments:[]    // 所有的评论数据
        }
    },
    created(){
      this.getcomments();
    },
    methods:{
        getcomments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+ this.pageindex).then(result=>{
                if (result.body.status === 0 ){
                this.comments = result.body.message;
                }
                else {
                    console.log('error');
                }
            })
        },
    },
    props:["id"]
}
</script>

<style>

</style>