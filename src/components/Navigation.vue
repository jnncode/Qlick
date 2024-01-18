<script setup>
function returnHome() {
    window.location.href = "/"; // Dashboard Page
}
</script>

<template>
    <div class="header-container">
        <div class="logo-container">
            <img @click="returnHome()" src="../assets/images/qlick.png" id="logo" class="logo-action" alt="logo-icon" draggable="false" /> <!--Navigate back to Home.-->
        </div>
        <div class="menu-container">
            <li><RouterLink to="/">Dashboard</RouterLink></li>
            <li><RouterLink to="/Contact">Contact</RouterLink></li>
            <li><RouterLink to="/Lead">Lead</RouterLink></li>
            <li><RouterLink to="/Activity">Activity</RouterLink></li>
            <li><RouterLink to="/Report">Report</RouterLink></li>
            <li><RouterLink to="/Support">Support</RouterLink></li>
            <li><RouterLink to="/Profile">Profile</RouterLink></li>
        </div>
    </div>
</template>

<style scoped>
    #logo {
        position: relative;
        left: 0.75rem;
        height: 4rem;
    }
    .logo-action:hover {
        cursor: pointer;
    }
</style>