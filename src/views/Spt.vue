<template>
    <div>
        <div class="h-screen flex">
            <nav>
                <div class="w-64 bg-black h-screen px-6 pt-6">

                    <div>
                        <a href="">
                            
                            <logoSpt />
                        </a>
                    </div>

                    <ul class="py-6">
                        <li class="navActive hover:text-white cursor-pointer flex gap-x-4 py-2 items-center">
                            <home />
                            <span class="text-sm font-bold">Início</span>
                        </li>
                        <li :class="styleNav">
                                <RouterLink to="/pes"  class="flex gap-x-4 items-center">
                                    <search_o />
                                    <span class="text-sm font-bold">Buscar</span>
                                </RouterLink>
                        </li>
                        <li :class="styleNav">
                            <library />
                            <span class="text-sm font-bold">Sua Biblioteca</span>
                        </li>

                    </ul>
                    <ul class="pb-8">
                        <li :class="styleNav">
                            <playlist />
                            <span class="text-sm font-bold">Criar playlist</span>
                        </li>
                        <li :class="styleNav">

                            <favs />
                            <span class="text-sm font-bold">Mais Curtidas</span>
                        </li>
                    </ul>


                    <div class="flex pt-36 flex-col">
                        <a href="" class="hover:underline text-white text-opacity-50 pb-9 text-xs">Cookies</a>
                        <button id="show-modal"
                            class="font-semibold hover:transform hover:scale-105 w-44 border py-1 text-white text-sm text-center border-white rounded-full"
                            @click="showModal = true">Portugês
                            do Brasil</button>

                        <Teleport to="body">
                            <!-- use the modal component, pass in the prop -->
                            <modal :show="showModal" @close="showModal = false">
                                <template #header>
                                    <h3>custom header</h3>
                                </template>
                            </modal>
                        </Teleport>

                    </div>


                </div>

            </nav>

            <div class="w-full">
                <nav
                    class="bg-black nav2 navNActive top-0 fixed font-semibold bg-opacity-30 flex items-center justify-between px-7 h-16">
                    <div class="gap-x-4 flex">
                        <button aria-label="Voltar" disabled="" class="bg-black cursor-pointer p-2 rounded-full">
                            <svg role="img" height="16" fill="currentColor" width="16" aria-hidden="true" class=""
                                viewBox="0 0 16 16" data-encore-id="icon">
                                <path
                                    d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z">
                                </path>
                            </svg>
                        </button>
                        <button aria-label="Avançar" disabled="" class="bg-black cursor-pointer p-2 rounded-full">
                            <svg role="img" height="16" fill="currentColor" width="16" aria-hidden="true" class=""
                                viewBox="0 0 16 16" data-encore-id="icon">
                                <path
                                    d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul class="flex scndlist items-center gap-x-5">
                            <li :class="styleNav2">Premium</li>
                            <li :class="styleNav2">Suporte</li>
                            <li :class="styleNav2">Baixar</li>
                            <li :class="styleNav2">Inscrever-se</li>
                            <li>
                                <RouterLink to="/login">
                                    <button
                                        class="h-12 ml-3 py-1 w-28 hover:transform hover:scale-105 font-semibold bg-white text-black rounded-full">Entrar</button>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>

                </nav>

                <!-- flex items-center justify-center -->
                <div class="overflow-y-scroll pt-20  pb-32 px-7 h-screen">
                    <div class="mb-9">
                        <div class="flex justify-between items-end">
                            <h1 class="text-2xl font-bold text-gray-100 hover:border-b-2 cursor-pointer">Foco</h1>
                            <a href=""
                                class="hover:underline font-semibold text-white text-opacity-50 text-xs  tracking-wider pr-2">MOSTRAR
                                TUDO</a>
                        </div>
                        <div class="flex flex-wrap gap-6 mt-5">
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano1"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano2"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano3"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano4"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano5"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                        </div>
                    </div>
                    <div class="mb-9">
                        <div class="flex justify-between items-end">
                            <h1 class="text-2xl font-bold text-gray-100 hover:border-b-2 cursor-pointer">Spotify Playlists
                            </h1>
                            <a href=""
                                class="hover:underline font-semibold text-white text-opacity-50 text-xs  tracking-wider pr-2">MOSTRAR
                                TUDO</a>
                        </div>
                        <div class="flex flex-wrap gap-6 mt-5">
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano1"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano2"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano3"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano4"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                            <musiCard style="position:relative;" musicImage="img.png" musicTitle="Peaceful piano5"
                                musicDescription="Relax and indulge with beautiful piano pieces" />
                        </div>
                    </div>

                    <div class="flex flex-col items-center border-t border-opacity-20 pt-16 mt-28 border-white">
                        <p class="text-white text-opacity-50 mb-3 text-center">Por: Aldair António</p>
                        <div class="flex gap-x-4">
                            <a href="https://www.facebook.com/aldairmoraiss" target="_blank"
                                class="py-2 px-5 hover:bg-opacity-60 transition-all rounded-full text-sm bg-white bg-opacity-50"
                                rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.linkedin.com/in/aldair-ant%C3%B3nio-7b2844234/" target="_blank"
                                class="py-2 px-5 hover:bg-opacity-60 transition-all rounded-full text-sm bg-white bg-opacity-50"
                                rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-16 fixed bottom-0 flex justify-between items-center px-6 text-white fixedBottomBar">
            <div>
                <p class="uppercase text-sm">Amostra do Spotify</p>
                <p class="text-sm">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa
                    de cartão de crédito.</p>
            </div>
            <button
                class="h-12 ml-3 py-1 w-48 font-semibold bg-white text-black rounded-full hover:transform hover:scale-105">Inscreva-se
                grátis</button>
        </div>
    </div>
</template>

<style>
.bgfav {
    background: linear-gradient(135deg, #450af5, #c4efd9);
}

.nav2 {
    width: 80%;
    z-index: 1;
}

.w-45 {
    width: 11.75rem !important;
}

.navActive {
    color: #fff;
}

.textdescmusic {
    font-size: .85em;
}

.navNActive {
    color: #9ca3af;
}

.scndlist li:nth-child(3) {
    border-right: 1px solid #fff !important;
    height: 30px;
    padding-top: 3px !important;
    padding-right: 30px;
    margin-right: 15px !important;
}

.fixedBottomBar {
    background: linear-gradient(26deg, #cc16a0, #af50ff, #15a7e4);
}
</style>

<script>
import logoSpt from '../components/logo.vue';
import home from '../components/home.vue';
import search_o from '../components/search_o.vue';
import library from '../components/library_o.vue';
import playlist from '../components/playlist_o.vue';
import favs from '../components/favs.vue';
import musiCard from '../components/cards/musiCard.vue';
import Modal from '../components/Modal.vue'

export default {
    name: 'Spt',
    data() {
        return {
            styleNav: 'navNActive hover:text-white cursor-pointer flex gap-x-4 py-2 items-center',
            styleNav2: 'hover:text-white hover:transform hover:scale-105 cursor-pointer font-semibold tracking-wider',
            showModal: false
        }
    },
    components: {
        logoSpt,
        home,
        search_o,
        library,
        playlist,
        favs,
        musiCard,
        Modal
    }
}
</script>