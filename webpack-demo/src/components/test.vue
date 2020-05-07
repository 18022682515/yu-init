<template>
<div class="test">
    <img :src="img" alt="" width=100%>
</div>
</template>

<script>
export default {
    name: 'test',
    data () {
        return {
            img: require('@/public/img/aa.jpg')
        }
    },
    mounted () {
        console.log(this.img);
    }
}
</script>

<style scoped lang="less">
@width:100px;
@height:200px;
.test{
    width:@width;
    height:@height;
    border:1px solid #000;
}
</style>