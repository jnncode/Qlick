<script setp>
    // Link username information (First and Last Name) to Greetings
</script>

<template>
    <div class="dashboard-container">
        <div class="user-account">
            <h3>Greetings {user}!</h3>
        </div>
        <div class="financial-status">
            <div class="sales">
                <p>Sales</p>
            </div>
            <div class="revenue">
                <p>Revenue</p>
            </div>
            <div class="leads">
                <p>Leads</p>
            </div>
            <div class="ratio">
                <p>Ratio</p>
            </div>
        </div>
        <div class="pipeline">
            <p>Graph</p>
        </div>
        <div class="minimized-calendar">
            Calendar (7 columns and 2 rows for the day of week)
        </div>
        <div class="upcoming-events">

        </div>
    </div>
</template>

<style scoped>
    .financial-status {
        display: grid;
        grid-template-columns: 1fr, 1fr, 1fr;
        grid-template-rows: 1fr, 1fr, 1fr;
        gap: 0.5rem;
    }
    .sales {
        border-radius: 0.25rem;
        outline-color: #000000;
        outline-style: solid;
        outline-width: 0.075rem;
        grid-column-start: 0;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .revenue {
        border-radius: 0.25rem;
        outline-color: #000000;
        outline-style: solid;
        outline-width: 0.075rem;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .leads {
        border-radius: 0.25rem;
        outline-color: #000000;
        outline-style: solid;
        outline-width: 0.075rem;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .ratio {
        border-radius: 0.25rem;
        outline-color: #000000;
        outline-style: solid;
        outline-width: 0.075rem;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .pipeline {
        border-radius: 0.25rem;
        outline-color: #000000;
        outline-style: solid;
        outline-width: 0.075rem;
    }

</style>