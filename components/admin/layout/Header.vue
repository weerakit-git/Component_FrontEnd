<template>
    <header class="h-16 bg-[#131313] border-b flex items-center justify-between px-6">
        <h2 class="font-medium text-white">Admin Panel</h2>
        <button class=" bg-[#95FF63] flex items-center justify-center gap-2 cursor-pointer w-[125px] h-[42px]"
            @click="logout">
            <img src="/public/icons/plus-02.png" alt="">
            <p class="text-black">Add Data</p>
        </button>

    </header>
</template>

<script setup>
const logout = () => {
    console.log('logout')
    // ใส่ logic logout ได้ตรงนี้
}
</script>