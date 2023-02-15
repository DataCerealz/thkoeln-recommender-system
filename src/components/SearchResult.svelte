<script>
    export let professorDetails;
    console.log(professorDetails)
</script>

<style>
    /* Add styles for the professor details component */
    .infoContainer {
        width: 100%;
		display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
</style>

<div>
    <div class="infoContainer">
        <div style="text-align:left;">
            Name
        </div>
        <p style="text-align: left; margin: 10px;">
            {professorDetails["name"]}
        </p>
        <div style="text-align:left;">
            Email:
        </div>
        <p style="text-align: left; margin: 10px;">
            {professorDetails["Email"]}
        </p>
        <div style="text-align:left;">
            Personenseite:
        </div>
        <li style="text-align: left; margin: 10px;">
            <a href={professorDetails["Kontaktseite"]}>
                {professorDetails["Kontaktseite"]}
            </a>
        </li>
        <div style="text-align:left;">
            Relevante Links:
        </div>
        <ul style="overflow-x:auto">
            {#each professorDetails["Links"] as link}
            <li style="text-align: left; margin: 10px;">
                <a href={link}>
                    {link}
                </a>
            </li>
            {/each}
        </ul>
        <div style="text-align:left;">
            Relevante Links:
        </div>
        <ul style="overflow-x:auto">
            {#each professorDetails["schlagworte"] as wort}
            <li style="text-align: left; margin: 10px;">
                <p>
                    {wort}
                </p>
            </li>
            {/each}
        </ul>
    </div>
</div>

{#each professorDetails.links as link}
<p>
    {link}
</p>
{/each}
