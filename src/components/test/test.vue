<template>
    <t-button>
        <slot></slot>
    </t-button>
</template>

<script type="text/ecmascript-6">
    import { Button } from 'element-ui';

    export default {
        components: {
            TButton: Button
        }
    }
</script>