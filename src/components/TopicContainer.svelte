<script lang="ts">
import TopicComponent from '../components/TopicComponent.svelte'

import th_data from '../data/data.json'

console.log(th_data)

const data = th_data

let open = false

function handleClick() {
    open = !open
}


</script>

<div class="container">
	<h1>Themengebiete</h1>
	<div class="topicContainer">
		{#each data as item }
			<TopicComponent 
            data={item}
            />
		{/each}
	</div>
</div>

<style>
	.container {
		text-align: center;
		padding: 2.5em;
        padding-top: 3em;
		width: 70%;
		display: flex;
        flex-direction: column;
        align-items: center;
		background-color: #FFFFFF;
		border-radius: 20px;
		-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */

	}

	.topicContainer {
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
	}

	h1 {
        align-self: flex-start;
        padding-bottom: 0;
    }


	@media only screen and (max-width: 992px) {
		.container {
			width: 100%;
		}
	}
</style>