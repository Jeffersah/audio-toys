<template>
    <div class="full-container">
        <div class="full-content">
            <slot name="content">
            </slot>
        </div>
        <div class="sidebar-content">
            <slot name="sidebar">
            </slot>
        </div>
    </div>
</template>

<style scoped>
.full-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.full-content {
    flex-grow: 1;
}


.sidebar-content {
    border: 0 solid black;
    border-left-width: 4px;
    padding: 4px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: start;
}
</style>