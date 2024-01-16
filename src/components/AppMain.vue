<script>
import { store } from '../store';
export default {
    name:'AppMain',
    components:{
        
    }, 
    data() {
        return {
            store
        }
    },       
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <SingleMovie />
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    
</style>