<template>
    <div class="bg-[#1A1A1A] overflow-hidden">

        <table class="w-full text-white">

            <!-- Header -->
            <thead class="bg-[#131313] text-gray-400">
                <tr>
                    <th class="px-6 py-3 text-left">Image</th>
                    <th class="px-6 py-3 text-left">Name</th>
                    <th class="px-6 py-3 text-left">Data</th>
                    <th class="px-6 py-3 text-left">Category</th>
                    <th class="px-6 py-3 text-right">Action</th>
                </tr>
            </thead>

            <!-- Body -->
            <tbody>
                <tr v-for="item in contacts" :key="item._id" class="border-b border-gray-800">

                    <!-- Image -->
                    <td class="px-6 py-3">
                        <img v-if="item.Image" :src="item.Image" class="w-16 h-16 rounded object-cover" />
                    </td>

                    <!-- Name -->
                    <td class="px-6 py-3">
                        {{ item.SocialName }}
                    </td>

                    <!-- Data -->
                    <td class="px-6 py-3 max-w-[300px] truncate text-gray-400">
                        {{ item.SocialData }}
                    </td>

                    <!-- Category -->
                    <td class="px-6 py-3 text-gray-500">
                        -
                    </td>

                    <!-- Action -->
                    <td class="px-6 py-3">
                        <div class="flex justify-end gap-2">

                            <button @click="$emit('edit', item)"
                                class="bg-[#B388FF] flex items-center gap-2 h-[42px] px-3 rounded">
                                <img src="/icons/edit-02.png" class="w-5 h-5" />
                                <p class="text-black">Edit</p>
                            </button>

                            <button @click="handleDelete(item._id)"
                                class="bg-[#F1704D] flex items-center gap-2 h-[42px] px-3 rounded">
                                <img src="/icons/trash-02.png" class="w-5 h-5" />
                                <p class="text-black">Delete</p>
                            </button>

                        </div>
                    </td>

                </tr>
            </tbody>

        </table>

    </div>
</template>

<script setup>
const emit = defineEmits(['edit'])

const { getContacts, deleteContact } = useContact()

const contacts = ref([])

const fetchData = async () => {
    contacts.value = await getContacts()
}

onMounted(fetchData)

// 🔥 expose ให้ parent refresh ได้
defineExpose({ fetchData })

const handleDelete = async (id) => {
    await deleteContact(id)
    await fetchData()
}
</script>