<script setup>
import LightIcon from "@/components/Icons/light.vue"
import DarkIcon from "@/components/Icons/dark.vue"

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>

<template>
    <div id="main-layout">
        <Transition name="fade" mode="out-in">
            <LightIcon
                class="!stroke-white cursor-pointer"
                @click="toggleDark()"
                v-if="isDark"
            />
            <DarkIcon
                class="cursor-pointer"
                @click="toggleDark()"
                v-else
            />
        </Transition>
        <slot />
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>