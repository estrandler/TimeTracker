<template lang="pug">
    .project-container
        .project-button
            h1 1
        .project-button
            h1 2
        .project-button
            h1 3
        .project-button
            h1 4
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .project-container {
        width: 100%;

        .project-button {
            padding: 10px;
            display: table-cell;
            height: auto;
            vertical-align: middle;
            
            h1 {
                font-size: 36px;
            }
        }
    }
</style>
