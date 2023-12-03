
<script setup>
import { defineProps, computed, defineEmits } from "vue";

const props = defineProps(['type', 'placeholder', 'label', 'modelValue']);
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
    <div class="w-full flex flex-col">
        <label class="font-bold text-sm mb-2 flex">
            {{ label }}
        </label>
        <textarea
            v-model="model"
            class="bg-gray-200 rounded-md ring-1 ring-blue-400 h-[75px] w-full px-3"
            :type="type"
            :placeholder="placeholder"
        ></textarea>
    </div>
</template>