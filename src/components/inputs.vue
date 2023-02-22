<template>
    <div class="pt-7 w-full flex flex-col items-center">
       <div class="w-full"> <p class="text-xs mb-2 font-semibold">{{ label }}</p>
        <input type="text" name="" id="" class="h-14 text-sm border border-opacity-60 indent-4 rounded border-black w-full" :placeholder="placeholder"></div>
    </div>
</template>

<script>
export default {
    props:{
        label: String,
        placeholder:String
    }
}
</script>