<template>
    <div>
        <el-button>{{element.value}}</el-button>
    </div>
</template>

<script>
export default {
    props:{
        element: {
            type: Object,
            default: () => {},
        }
    },

    data(){
        return {

        }
    }
}
</script>