<script>

    export let professorDetails;

</script>

<div>
    {professorDetails.name}
</div>

{#each professorDetails.links as link}
<p>
    {link}
</p>
{/each}

<style>
</style>