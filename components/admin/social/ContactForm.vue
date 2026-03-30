<template>
    <div class="text-white space-y-6">

        <!-- Header -->
        <div class="flex justify-between items-center border-b border-gray-800 pb-4">
            <h2 class="text-lg">
                {{ initialData ? 'Edit Contact' : 'Add Contact' }}
            </h2>

            <div class="flex justify-end mb-4">
                <button @click="$emit('close')" class="text-white text-xl">✕</button>
            </div>
        </div>

        <!-- Lang -->
        <div class="flex gap-4 text-sm">
            <span class="text-[#95FF63]">English</span>
            <span class="text-gray-400">|</span>
            <span class="text-gray-400">Thai</span>
        </div>

        <!-- Category -->
        <div>
            <label class="text-sm text-gray-400">Category</label>
            <input v-model="category" class="w-full mt-1 p-2 bg-[#1A1A1A] border border-gray-700 rounded" />
        </div>

        <!-- Title -->
        <div>
            <label class="text-sm text-gray-400">Title</label>
            <input v-model="name" class="w-full mt-1 p-2 bg-[#1A1A1A] border border-gray-700 rounded" />
        </div>

        <!-- Link -->
        <div>
            <label class="text-sm text-gray-400">Link</label>
            <input v-model="data" class="w-full mt-1 p-2 bg-[#1A1A1A] border border-gray-700 rounded" />
        </div>

        <!-- Image -->
        <div>
            <label class="text-sm text-gray-400">Image</label>

            <div class="mt-2">
                <input type="file" @change="handleFile" />

                <!-- preview -->
                <img v-if="preview" :src="preview" class="w-32 mt-3 rounded" />
            </div>
        </div>

        <!-- Submit -->
        <div class="flex justify-end">
            <button @click="submit" class="bg-[#95FF63] text-black px-4 py-2 rounded">
                ✓ Submit
            </button>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    initialData: Object
})

const emit = defineEmits(['saved', 'close'])

const { createContact, updateContact } = useContact()

const name = ref('')
const data = ref('')
const category = ref('')
const file = ref(null)
const preview = ref(null)

onMounted(() => {
    if (props.initialData) {
        name.value = props.initialData.SocialName
        data.value = props.initialData.SocialData
        preview.value = props.initialData.Image
    }
})

const handleFile = (e) => {
    const f = e.target.files[0]
    file.value = f

    if (f) {
        preview.value = URL.createObjectURL(f)
    }
}

const submit = async () => {
    const formData = new FormData()

    formData.append('SocialName', name.value)
    formData.append('SocialData', data.value)

    // ใส่รูปเฉพาะตอนมีใหม่
    if (file.value) {
        formData.append('Image', file.value)
    }

    if (props.initialData) {
        // 🔥 EDIT
        await updateContact(props.initialData._id, formData)
    } else {
        // 🔥 CREATE
        await createContact(formData)
    }

    emit('saved')
}
</script>