<script>
    export let professorDetails;
</script>

<style>
    /* Add styles for the professor details component */
    div {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        margin-bottom: 10px;
    }
</style>

<div>
    {professorDetails.name}
</div>

{#each professorDetails.links as link}
<p>
    {link}
</p>
{/each}
