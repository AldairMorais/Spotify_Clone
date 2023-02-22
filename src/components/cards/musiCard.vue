<template>
    <div id="card">
        <div class="w-45 relative hover:bg-opacity-10 transition-all cursor-pointer bg-gray-400 bg-opacity-5 p-4 rounded-md">
            <div src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" class="w-full relative rounded-md h-40 shadow-md shadow-black mb-4">
             
                    <button id="btn" class="bg-green-500 shadow-xl transition-all hidden hover:scale-105 rounded-full p-3 relative float-right mt-24 mr-2">
                        <span class="relative">
                            <span aria-hidden="true" class="relative">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </span>
                        </span>
                    </button>
           
            </div>
           <h4 class="text-white font-semibold mb-2">{{ musicTitle }}</h4>
           <p class="text-white text-opacity-50 leading-5 textdescmusic">{{ musicDescription }}</p>
           
        </div>
    </div>
</template>
<!-- @mouseover="show = !show" @mouseleave="show = !show"  -->
<style>
#card:hover #btn{
display: block !important;
transition: .2s;
animation: anime .6s;
}

@keyframes anime {
    0%{
        margin-top: 105px;

    }
    50% {
        margin-top: 95px;

    }
    100%{
        margin-top: 95px;

    }
}
</style>


<script>
export default {
    name:'musiCard',
    data(){
        return {
            show: false
        }
    },
    props:{
        musicImage : String,
        musicTitle : String,
        musicDescription : String
    }
}
</script>