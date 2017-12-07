<template>
    <el-button type="primary" :loading="true">
        <slot></slot>
    </el-button>
</template>

<script type="text/ecmascript-6">
    import { Button } from 'element-ui';

    export default {
        components: {
            ElButton: Button
        }
    }
</script>


