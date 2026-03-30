<template>
    <div class="space-y-2">

        <!-- Header -->
        <header class="h-16 bg-[#131313] flex justify-between px-6 items-center">
            <h2 class="text-white">Admin Panel</h2>

            <button @click="addData" class="bg-[#95FF63] px-4 py-2">
                + Add Data
            </button>
        </header>

        <!-- Table -->
        <ContactTable ref="tableRef" @edit="handleEdit" />

        <!-- ✅ Modal อยู่ตรงนี้ -->
        <div v-if="showModal" class="fixed inset-0 bg-[#0F0F0F] z-50 flex flex-col">
            <div class="flex-1 p-6 overflow-y-auto">

                <ContactForm :initialData="editingData" @saved="() => {
                    closeModal()
                    tableRef.fetchData()
                }" @close="closeModal" />

            </div>
        </div>

    </div>
</template>

<script setup>
import ContactTable from '~/components/admin/social/ContactTable.vue'
import ContactForm from '~/components/admin/social/ContactForm.vue'


const tableRef = ref(null)
const showModal = ref(false)
const editingData = ref(null) // ✅ เพิ่มตัวนี้

const addData = () => {
    editingData.value = null // ✅ reset ตอน create
    showModal.value = true
}

const handleEdit = (item) => {
    editingData.value = item // ✅ set data ตอน edit
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
}





const refresh = () => {
    console.log('refresh table')
}
</script>