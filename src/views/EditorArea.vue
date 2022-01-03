<template>
    <div class="editor-area">
        <div class="edit-center">
            <div class="edit-center-canvas" @dragover="dragover" @drop="dropHandler">
                <Element v-for="(ele, idx) in elementList" :key="ele.babelValue+idx" :ele="ele"/>
            </div>
        </div>
    </div>
</template>

<script>
import Element from '../components/editorEle/Element.vue'

export default {
    components: {
        Element,
    },

    data(){
        return {
        }
    },

    computed:{
        elementList:{
            set(val){
                this.$store.commit('data/changeState', {
                    prop: 'elementList',
                    value: val,
                })
            },
            get(){
                return this.$store.state.data.elementList;
            }
        },

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

    created(){
        this.addElement({
            id: '1',
            component: 'EButton',
            babelValue: '按钮',
            value: '这是一个按钮',
            isEditValue: false,
        }),
        this.addElement({
            id: '2',
            component: 'EButton',
            babelValue: '按钮',
            value: '这还是一个按钮',
            isEditValue: false,

        })
    },

    methods:{
        // 增加元素
        addElement(ele){
            this.$store.commit('data/addElement', ele)
        },

        dragover(e){
            e.stopPropagation();
            e.preventDefault();
        },
        dropHandler(e){
            e.stopPropagation();
            e.preventDefault();
            this.addElement(this.selectComponent);
            this.selectComponent = null;
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .editor-area{
        flex: 1;
        height: 100%;
        background-color: #dcdcdc;
    }
    .edit-center{
        height: 100%;
    }
    .edit-center-canvas{
        height: 100%;
    }
</style>