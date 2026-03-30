<template>
    <aside class="w-60 bg-[#131313] text-white p-4">
        <h1 class="text-xl font-bold mb-6">CMS DashBoard</h1>
        <nav class="space-y-2">

            <!-- Contact -->
            <NuxtLink to="/admin/contact" class="flex items-center gap-2"
                :class="isActive('/admin/contact') ? 'text-[#95FF63]' : 'text-white'">
                <img :src="isActive('/admin/contact')
                    ? '/icons/message-chat-01-active.png'
                    : '/icons/message-chat-01.png'" class="w-7 h-7" />
                <p>Contact</p>
            </NuxtLink>

            <!-- Page -->
            <NuxtLink to="/admin/page" class="flex items-center gap-2"
                :class="isActive('/admin/page') ? 'text-[#95FF63]' : 'text-white'">
                <img :src="isActive('/admin/page')
                    ? '/icons/layout-01-active.png'
                    : '/icons/layout-01.png'" class="w-7 h-7" />
                <p>Page</p>
            </NuxtLink>

        </nav>
    </aside>
</template>

<script setup>
const route = useRoute()

const isActive = (path) => {
    return route.path.startsWith(path)
}
</script>