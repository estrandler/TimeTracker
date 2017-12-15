<template lang="pug">
    .project-container
        a.project-button.button.is-info.is-outlined
            h1 1
        a.project-button.button.is-info.is-outlined
            h1 2
        a.project-button.button.is-info.is-outlined
            h1 3
        a.project-button.button.is-info.is-outlined
            h1 4
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .project-container {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        list-style: none;
        align-items: center;
        justify-content: center;
        

        .project-button {
            display: flex;
            border-radius: 10px;
            height: 200px;
            width: 200px;
            text-align: center;
            margin: 10px;
            padding: 20px;
            
            h1 {
                text-transform: uppercase;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: auto;
                font-size: 36px;
            }
        }
    }
</style>
