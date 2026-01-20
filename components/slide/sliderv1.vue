<template>
    <div class="bg-red-200 h-[400px]">
        <!-- prevview -->
        <div class="overflow-hidden w-[600px]">
            <div class="flex transition-transform duration-300"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(item, index) in data" :key="item.id" class="min-w-full">
                    <img :src="item.Image" class="w-full h-[250px] object-cover" @click="OpenImage(index)" />
                </div>
            </div>
        </div>

        <!-- indicator -->
        <div class="flex gap-3">
            <div v-for="(item, index) in data" :key="item.id" class="w-4 h-4 rounded-full"
                :class="index === currentIndex ? 'bg-black' : 'bg-gray-400'" @click="goToCurrentIndex(index)"></div>
        </div>

        <!-- big image -->
        <div v-if="isFullImageOpen" class="fixed inset-0 bg-black/70 flex items-center justify-center">
            <span class="absolute top-4 right-6 cursor-pointer text-[30px] text-white" @click="closeFullImage">
                x
            </span>

            <img :src="data[currentIndex].Image" alt="full image" class="w-[500px] h-auto" />
        </div>


        <!-- controls -->
        <div class="flex gap-2 mt-2">
            <span class="cursor-pointer px-3 py-1 hover:bg-amber-300" @click="prev">
                Previous
            </span>
            <span class="cursor-pointer px-3 py-1 hover:bg-amber-300" @click="next">
                Next
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const data = [
    { id: 1, Image: 'https://images.unsplash.com/photo-1761839256545-4268b03606c0?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, Image: 'https://images.unsplash.com/photo-1764377724194-c4b7356a4851?q=80&w=987&auto=format&fit=crop' },
    { id: 3, Image: 'https://images.unsplash.com/photo-1765202663071-87c1fd022ede?q=80&w=1065&auto=format&fit=crop' },
    { id: 4, Image: 'https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?q=80&w=2069&auto=format&fit=crop' },
    { id: 5, Image: 'https://images.unsplash.com/photo-1761839257287-3030c9300ece?q=80&w=2070&auto=format&fit=crop' }
]
const currentIndex = ref(0)

const next = () => {
    currentIndex.value =
        currentIndex.value === data.length - 1 ? 0 : currentIndex.value + 1
}

const prev = () => {
    currentIndex.value =
        currentIndex.value === 0 ? data.length - 1 : currentIndex.value - 1
}


const goToCurrentIndex = (index) => {
    currentIndex.value = index
    console.log(index)
}
const isFullImageOpen = ref(false)

const OpenImage = (index) => {
    currentIndex.value = index
    isFullImageOpen.value =  !isFullImageOpen.value
}

const closeFullImage = () => {
    isFullImageOpen.value = false
}





</script>
