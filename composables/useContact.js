export const useContact = () => {
    const config = useRuntimeConfig()

    // GET
    const getContacts = async () => {
        return await $fetch(`${config.public.apiBase}/contact`)
    }

    // CREATE
    const createContact = async (formData) => {
        return await $fetch(`${config.public.apiBase}/contact`, {
            method: "POST",
            body: formData
        })
    }

    // DELETE
    const deleteContact = async (id) => {
        return await $fetch(`${config.public.apiBase}/contact/${id}`, {
            method: "DELETE"
        })
    }

    // UPDATE
    const updateContact = async (id, formData) => {
        return await $fetch(`${config.public.apiBase}/contact/${id}`, {
            method: "PUT",
            body: formData
        })
    }

    return {
        getContacts,
        createContact,
        deleteContact,
        updateContact
    }
}