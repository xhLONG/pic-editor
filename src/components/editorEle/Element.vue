<template>
    <div @click="clickComponent" class="element-wrap">
        <component :is="ele.component" :element="ele"/>
        <input type="text" class="input" v-if="ele.isEditValue" @click.stop/>
    </div>
</template>

<script>
export default {
    props:{
        ele: {
            type: Object,
            default: ()=> {},
        }
    },

    data(){
        return {
            isFirstClick: false,
            isSecondClick: false,
        }
    },

    methods: {
        clickComponent(e){
            this.isSecondClick = this.isFirstClick;
            this.isFirstClick = true;
            setTimeout(() => {
                if(this.isSecondClick){
                    this.ele.isEditValue = true;
                    document.addEventListener('click', this.closeEdit)
                }
                this.isFirstClick = false;
            }, 200);
        },

        closeEdit(){
            this.ele.isEditValue = false;
            document.removeEventListener('click', this.closeEdit);
        }
    }
}
</script>

<style lang="scss" scoped>
    .element-wrap{
        position: relative;
        .input{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
</style>