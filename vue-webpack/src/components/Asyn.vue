<template>
    <div>
        <button @click="getData">按我加载</button>
        <ul>
            <li :key="key" v-for="(item, key) in list"><a target="_blank" :href="item.url">跳转</a><img :src="item.image" :alt="item.title"></li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            list: [],
            error: ""
        }
    },

    methods: {
        getData(){
            this.$ajax("https://api.coindesk.com/v1/bpi/currentprice.json").then(result => {
                this.list = result.data;
            }).catch(error => {
                this.error = error
            })
        },
    }
};
</script>
<style>
    img{
        height: 50px;
    }
</style>
