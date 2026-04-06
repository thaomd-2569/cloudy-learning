<template>
    <div>
        <header>
            <h1>Admin Dashboard</h1>
            <nav>
                <router-link to="/">Dashboard</router-link>
                <router-link to="/users">Users</router-link>
            </nav>
        </header>

        <!-- nơi Vue Router hiển thị các page con -->
        <router-view />
    </div>
</template>

<script setup lang="ts">
// import các composables, store, hoặc props nếu cần
</script>

<style scoped>
header {
    background-color: #1f2937;
    color: white;
    padding: 1rem;
}

nav a {
    margin-right: 1rem;
    color: white;
}
</style>
