<template>
    <div class="pic-edit">
        <nav>
            <Header></Header>
        </nav>
        <section>
            <ele-area/>
            <editor-area/>
            <ele-tool-panel/>
        </section>
    </div>
</template>

<script>
import Header from './Header.vue'
import EleArea from './EleArea.vue'
import EditorArea from './EditorArea.vue'
import EleToolPanel from './EleToolPanel.vue'

export default {
    data(){
        return{

        }
    },
    components: {
        Header,
        EleArea,
        EditorArea,
        EleToolPanel,
    }
}
</script>

<style lang="scss" scoped>
    .pic-edit{
        height: 100%;
        &>section{
            height: calc(100% - 56px);
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>