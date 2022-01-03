<template>
    <div class="ele-area" @dragstart.stop="dragstart">
        <el-button 
        v-for="item in componentList" 
        :key="item.id"
        :data-index="item.id"
        draggable
        >{{item.babelValue}}</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            componentList: [{
                id: '1',
                component: 'EButton',
                babelValue: '按钮',
                value: '按钮',
                isEditValue: false,

            }, {
                id: '2',
                component: 'Etext',
                babelValue: '文字',
                value: '文字',
            }, {
                id: '3',
                component: 'Epicture',
                babelValue: '图片',
                value: '图片',
            }]
        }
    },

    computed:{
        selectComponent:{
            set(val){
                this.$store.commit('data/changeState', {
                    prop: 'selectComponent',
                    value: val,
                })
            },
            get(){
                return this.$store.state.data.selectComponent;
            }
        }
    },

    methods: {
        dragstart(e){
            const target = e.target;
            this.selectComponent = this.componentList.find(item => item.id === target.dataset.index);
        },
    }
}
</script>

<style lang="scss" scoped>
    .ele-area{
        width: 300px;
        height: 100%;
        padding: 10px 14px;
    }
</style>