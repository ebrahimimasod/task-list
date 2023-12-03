<script setup>

import MainLayout from "@/layouts/Main/index.vue"
import { useTaskStore } from "@/stores/taskStore.js"
import {useRoute} from "vue-router"


const taskStore = useTaskStore();

const route = useRoute();

console.log({taskId : route.params.id});

const task = taskStore.tasks.find(item=>item.id === route.params.id)

</script>

<template>
    <MainLayout>
        <pre>{{ task }}</pre>
    </MainLayout>
</template>