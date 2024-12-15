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
            <li id="dashboard"><RouterLink to="/Dashboard">Dashboard</RouterLink></li>
            <li id="contact"><RouterLink to="/Contact">Contact</RouterLink></li>
            <li id="lead"><RouterLink to="/Lead">Lead</RouterLink></li>
            <li id="activity"><RouterLink to="/Activity">Activity</RouterLink></li>
            <li id="report"><RouterLink to="/Report">Report</RouterLink></li>
            <li id="profile"><RouterLink to="/Profile"><img src="../assets/images/avatar.png" class="user" alt="user" /></RouterLink></li>
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

    .user {
        width: 2rem;
        height: 2rem;
    }
</style>