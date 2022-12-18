<script lang="ts">
import SearchMask from "./SearchMask.svelte";
import SearchResult from "./SearchResult.svelte";
let searchFor = ''
</script>

<div class="container">
    <span>Willkommen zur</span>
    <h1>Expertinnen - und Expertensuche</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci fugiat id maiores natus nihil nulla
        perspiciatis rerum veniam. Asperiores deserunt doloribus enim impedit ipsam maxime minus quaerat
        repudiandae totam veniam?
    </p>
    <SearchMask bind:searchTerm={searchFor}/>
    <ul>
        <!-- Todo: @Giacomo hier die each loop durch das Ergebnislisten-Component ersetzen;
        die Loop zeigt beispielhaft wie das Ergebnisarray aus Themen und Personen in
        das Ergebniscomponent kommen kann -->
        {#each searchFor as expert, i}
            <SearchResult searchResult={searchFor[i]} />
        {/each}
    </ul>
</div>

<style>
	.container {
		padding: 2.5em;
        padding-top: 3em;
        display: flex;
        flex-direction: column;
        align-items: center;
		width: 70%;
		background-color: #FFFFFF;
		border-radius: 20px;

	}

    span, h1 {
        align-self: flex-start;
        margin: 0;
        padding-bottom: 0;
    }

    span {
        font-size: small;
        padding-bottom: 0.25em;
    }

    p {
        padding-top: 1em;
        padding-bottom: 1em;
    }


	@media (min-width: 640px) {
		.container {
			max-width: none;
		}
	}
</style>