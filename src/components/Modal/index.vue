<script setup>
import { defineProps, computed, defineEmits } from "vue";

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);


const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits('update:modelValue', value);
    }
});

</script>

<template>
    <div
        class="modal-container"
        v-if="model"
    >
        <div class="modal">
            <div class="modal-header">
                <button
                    class="text-red ml-2"
                    @click="model = false"
                >
                    close
                </button>
                <span>
                    افزودن تسک جدید
                </span>
            </div>

            <div class="modal-body">
                <slot />
            </div>
        </div>
    </div>
</template>

<style>
.modal-container {
    @apply fixed top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center;
    background-color: rgba(0, 0, 0, 0.7);
}

.modal {
    @apply bg-white min-w-[500px] h-auto rounded-lg shadow-lg p-6;
}

.modal-header {
    @apply border-b border-gray-300
}
</style>