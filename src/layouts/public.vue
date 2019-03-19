<template>
    <div id="layouts">
        <div id="navigation">
            <router-link to="/">Back to Home</router-link>
        </div>
        <div id="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PublicLayout',
    }
</script>