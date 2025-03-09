<script lang="ts">

defineProps<{
    title: string
    titleKind: 'header' | 'prefix' | 'postfix' | 'none'
}>()

const model = defineModel(); 

</script>

<template>
    <div class="input-container">
        <div v-if="titleKind === 'header'" class="input-header">
            {{ title }}
        </div>
    </div>
</template>