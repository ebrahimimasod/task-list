<script setup>

import MainLayout from "@/layouts/Main/index.vue"
import { useTaskStore } from "@/stores/taskStore.js"
import { useRoute, useRouter } from "vue-router"
import Button from "@/components/Button/index.vue"

const taskStore = useTaskStore();

const route = useRoute();
const router = useRouter();

console.log({ taskId: route.params.id });

const task = taskStore.tasks.find(item => item.id === route.params.id)


function removeTask() {
    const confirm = window.confirm("آیا مطمئن هستید؟>");
    if (!confirm) {
        return;
    }
    const taskIndex = taskStore.tasks.findIndex(item => item.id === route.params.id)
    taskStore.tasks.splice(taskIndex, 1);
    router.go(-1);
}



</script>

<template>
    <MainLayout>
        <div class="h-screen w-screen flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-md w-[600px] min-h-[500px] relative">
                <div class="text-lg">
                    <span>
                        عنوان :
                    </span>
                    <span>
                        {{ task.title }}
                    </span>
                </div>
                <div class="text-lg">
                    <span>
                        توضیحات :
                    </span>
                    <span>
                        {{ task.description }}
                    </span>
                </div>
                <div class="text-lg">
                    <span>
                        تاریخ :
                    </span>
                    <span>
                        {{ task.date }}
                    </span>
                </div>
                <div class="text-lg">
                    <span>
                        وضعیت انجام :
                    </span>
                    <span>
                        {{ task.isDone ? "انجام شده" : "انجام نشده" }}
                    </span>
                </div>


                <div class="grid grid-cols-2 gap-4 absolute bottom-5">
                    <Button>
                        ویرایش
                    </Button>
                    <Button
                        class="bg-red"
                        @click="removeTask"
                    >
                        حذف
                    </Button>
                </div>
            </div>
        </div>
    </MainLayout>
</template>