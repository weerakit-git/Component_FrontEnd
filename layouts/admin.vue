<template>
    <div class="flex min-h-screen bg-[#0E0E0E]">

        <!-- Sidebar -->
        <Sidebar />

        <!-- Main -->
        <div class="flex-1 flex flex-col p-2">

            <!-- Header -->
            <!-- <Header /> -->
            <!-- Content -->
            <main class="mt-2">
                <slot />
            </main>

        </div>

    </div>
</template>

<script setup>
import Sidebar from '~/components/admin/layout/Sidebar.vue'
import Header from '~/components/admin/layout/Header.vue';
</script>