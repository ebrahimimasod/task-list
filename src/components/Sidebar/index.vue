<script setup>
import { defineProps } from "vue";
import ArrowLeftIcon from "@/components/Icons/arrow-left.vue"
const props = defineProps({
    tasks: {
        type: Array,
        default: () => ([])
    }
});

</script>

<template>
    <div class="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg h-full">
        <ul>
            <RouterLink
                tag="li"
                v-for="task in props.tasks"
                :to="'task/' + task.id"
                :key="task.id"
                class="border-b border-gray-300 dark:border-gray-700 flex items-center justify-between py-2 cursor-pointer "
            >

                <span class="text-black dark:text-white">
                    {{ task.title }}
                </span>
                <ArrowLeftIcon class="fill-transparent stroke-gray-500 w-4 h-4" />
            </RouterLink>

        </ul>
    </div>
</template>