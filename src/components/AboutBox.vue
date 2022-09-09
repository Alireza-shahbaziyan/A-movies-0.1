<template>
    <div class="flex flex-col justify-around w-full ">
        <div class="my-2">
            <div class="btn btn-warning mx-4">Trailer</div>
        </div>
        <div class="font-serif text-slate-100 p-4 text-lg"> 
            {{$store.state.description}}...
        </div>
    </div>
</template>
<script>
    export default{
        name:'aboutBox'
    }
</script>