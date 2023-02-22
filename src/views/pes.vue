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
                        <li :class="styleNav">
                            <RouterLink to="/" class="flex gap-x-4 items-center">                
                            <home_o />
                            <span class="text-sm font-bold">Início</span>
                            </RouterLink>
                        </li>
                        <li class="navActive hover:text-white cursor-pointer flex gap-x-4 py-2 items-center">
                            <search />
                            <span class="text-sm font-bold">Buscar</span>
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
                        <a href=""
                            class="font-semibold hover:transform hover:scale-105 w-44 border py-1 text-white text-sm text-center border-white rounded-full">Portugês
                            do Brasil</a>
                    </div>


                </div>

            </nav>

            <div class="w-full">
                <nav
                    class="bg-black nav2 navNActive top-0 fixed font-semibold flex items-center justify-between px-7 h-16">
                    <div class="gap-x-4 flex items-center">
                        <button aria-label="Voltar" disabled="" class="bg-black cursor-pointer p-2 bkfor rounded-full">
                            <svg role="img" height="16" fill="currentColor" width="16" aria-hidden="true" class=""
                                viewBox="0 0 16 16" data-encore-id="icon">
                                <path
                                    d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z">
                                </path>
                            </svg>
                        </button>
                        <button aria-label="Avançar" disabled="" class="bg-black cursor-pointer p-2 bkfor rounded-full">
                            <svg role="img" height="16" fill="currentColor" width="16" aria-hidden="true" class=""
                                viewBox="0 0 16 16" data-encore-id="icon">
                                <path
                                    d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z">
                                </path>
                            </svg>
                        </button>
                        <form>
                            <input type="text" class="bg-white rounded-full text-xs placeholder:text-black placeholder:text-opacity-50 leading-4 outline-none font-medium text-black indent-12 h-9 py-5 w-80" placeholder="O que você quer ouvir?">
                            <svg role="img" height="24" width="24" aria-hidden="true" class="absolute -mt-8 ml-3" viewBox="0 0 24 24" data-encore-id="icon"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
                        </form>
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
                <div class="overflow-y-scroll pt-32 px-7 h-screen">
                    <div class=" border-b pb-24 mb-44 border-gray-800">
                        <div class="flex justify-between items-end">
                            <h1 class="text-2xl font-bold text-gray-100">Navegar por todas as seções</h1>
                         
                        </div>
                        <div class="flex flex-wrap gap-6 mt-5">
                            <category categImage="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5" style="position:relative; z-index:-1;background-color: rgb(39, 133, 106);" categTitle="Podcasts"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(30, 50, 100);" categTitle="Feito para você"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(141, 103, 171);" categTitle="Paradas"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(232, 17, 91);" categTitle="Novos lançamentos"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(141, 103, 171);" categTitle="Descobrir"/>
                           
                           
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(115, 88, 255);" categTitle="Eventos ao vivo"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(175, 40, 150);" categTitle="Afro"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(180, 155, 200);" categTitle="Pop"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(240, 55, 165);" categTitle="Dance/Eletrônica"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(156, 240, 225);" categTitle="Frequency"/>
                           
                           
                           
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(215, 242, 125);" categTitle="Hip hop"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(141, 103, 171);" categTitle="Seu astral"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(115, 88, 255);" categTitle="Relax"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(220, 20, 140);" categTitle="R&B"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(175, 40, 150);" categTitle="Indie"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(20, 138, 8);" categTitle="EQUAL"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(220, 20, 140);" categTitle="Soul"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(235, 30, 50);" categTitle="Rock"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(119, 119, 119);" categTitle="Para treinar"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(232, 17, 91);" categTitle="Jogos"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(13, 115, 236);" categTitle="Alternativa"/>
                            
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(141, 103, 171);" categTitle="Crianças e família"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(225, 17, 139);" categTitle="Música latina"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(80, 155, 245);" categTitle="Em casa"/>
                            <category categImage="img.png" style="position:relative; z-index:-1;background-color: rgb(30, 50, 100);" categTitle="Para dormir"/>


                        </div>
                    </div>
                  
                   
                </div>
            </div>
        </div>
        <div class="w-full h-16 fixed bottom-0 flex justify-between items-center px-6 text-white fixedBottomBar">
            <div>
                <p class="uppercase text-sm">Amostra do Spotify</p>
                <p class="text-sm">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <button class="h-12 ml-3 hover:transform hover:scale-105 py-1 w-48 font-semibold bg-white text-black rounded-full">Inscreva-se grátis</button>
        </div>
    </div>
</template>

<style>
.bgfav {
    background: linear-gradient(135deg, #450af5, #c4efd9);
}

.nav2 {
    width: 80%;
}

.w-45 {
    width: 11.75rem !important;
}

.bkfor {
    height: 36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
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

.fixedBottomBar{
    background:linear-gradient(26deg, #cc16a0, #af50ff, #15a7e4);
}
</style>

<script>
import logoSpt from '../components/logo.vue';
import home_o from '../components/home_o.vue';
import search from '../components/search.vue';
import library from '../components/library_o.vue';
import playlist from '../components/playlist_o.vue';
import favs from '../components/favs.vue';
import category from '../components/cards/category.vue';

export default {
    name: 'pes',
    data() {
        return {
            styleNav: 'navNActive hover:text-white cursor-pointer flex gap-x-4 py-2 items-center',
            styleNav2: 'hover:text-white hover:scale-105 cursor-pointer font-semibold tracking-wider'
        }
    },
    components: {
        logoSpt,
        home_o,
        search,
        library,
        playlist,
        favs,
        category
    }
}
</script>