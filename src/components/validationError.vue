<template>
    <h3>Validation Errors</h3>
    <ul class="bg-red-400 p-6 rounded-xl">
        <li v-for="error in errorMessages" :key="error" class="text-gray-100 mb-4 border-b">
            {{error}}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        validationErrors: {
            type: Object,
            required: true
        }
    },
    computed: {
        errorMessages(){
            return Object.keys(this.validationErrors).map(name => {
                const msg = this.validationErrors[name].join(', ')
                return `${name} ${msg}`
            })
        }
    }
}
</script>

<style scoped>
    
</style>