<template>
    <nav class="flex justify-between items-center">
        <div class="logo w-20">
            <router-link to="/">
                <picture>
                    <source 
                        :srcset="responsiveLogo"
                        media="(max-width: 1000px)"
                        >
                    <img :src="logo" alt="" />
                </picture>
            </router-link>
        </div>
        <ul class="flex items-center">
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'login'}">Login</router-link>
            </li>
            <li>
                <router-link :to="{name: 'register'}">Register</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { logo, responsiveLogo } from './constants'
export default {
    data() {
        return {
            logo,
            responsiveLogo
        }
    },
}
</script>

<style scoped>
    nav{
        border-bottom: .5px solid rgba(0, 0, 0, .2);
    }
    ul li{
        margin-left: 2em;
    }
</style>