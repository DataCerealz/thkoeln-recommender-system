<script lang="ts">
	import Header from "../components/Header.svelte";
	import SearchContainer from "../components/SearchContainer.svelte";
	import TopicContainer from "../components/TopicContainer.svelte";

</script>

<div class="wrapper">
	<Header/>
	<div class="space"></div>
	<SearchContainer/>
	<div class="space"></div>
	<TopicContainer/>
</div>

<style>
	.wrapper {
        height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		overflow-y: auto;
		border: 1px solid black;
	}

	.space {
		min-height: 20px;
	}

	@media (min-width: 640px) {

	}
</style>