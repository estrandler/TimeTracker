<template lang="pug">
    .project-container
        a.project-button.button
            h1 Hej hej hej hej hej hej hej
        a.project-button.button
            h1 2
        a.project-button.button
            h1 3
        a.project-button.button
            h1 4
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .project-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        

        .project-button {
            display: flex;
            border-radius: 10px;
            height: 200px;
            width: 200px;
            text-align: center;
            margin: auto;
            padding: 20px;
            
            h1 {
                color: #cccccc;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: auto;
                font-size: 36px;
            }
        }
    }
</style>
