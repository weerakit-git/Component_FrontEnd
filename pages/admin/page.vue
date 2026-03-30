<template>
    <div>
        <PageNavigation @saved="refresh" />
    </div>
</template>
<script setup>
import PageNavigation from '~/components/admin/navigation/Page.vue'
const refresh = () => {
    console.log('refresh list')
}
</script>