<template>
    <div class="rounded-lg h-48 overflow-hidden">
        <div class="w-45 bg-gray-400 bg-opacity-5 px-4 pt-4 rounded-md">
           <h3 class="text-white font-semibold text-xl">{{ categTitle }}</h3>
            <img src="https://t.scdn.co/media/derived/icon-274x274_5ce6e0f681f0a76f9dcf9270dfd18489_0_0_274_274.jpg" class="w-28 ml-20 transform rotate-45 mt-16 rounded-md h-28 shadow-md shadow-black mb-4" alt="">
        </div>
    </div>
</template>


<script>
export default {
    name:'category',
    props:{
        categImage : String,
        categTitle : String,
    }
}
</script>