<script>
export default {
    name:'AppHeader'
            
}
</script>
<template lang="">
    <header>
        <div class="container-full">
            <div class="row justify-content-between align-items-center">
                <div class="col">
                    <h1 class="m-4">Boolflix</h1>
                </div>
                <div class="col d-flex justify-content-end m-4">
                    <input type="text">
                    <button class="btn btn-danger mx-2">Search</button>
                </div>
            </div>
        </div>
        
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
    header{
        background-color: black;
        height: 100px;
        
        h1{
                color: red;
                font-size: 50px;

            }
    }

</style>