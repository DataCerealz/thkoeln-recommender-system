<script lang="ts">
	import Router from 'svelte-spa-router'

	import Main from './routes/main.svelte'

	const routes = {
		// Exact path
		'/': Main,

		// Using named parameters, with last being optional
		//'/author/:first/:last?': Author,

		// Wildcard parameter
		//'/book/*': Book,

		// Catch-all
		// This is optional, but if present it must be the last
		//'*': NotFound,
	}
</script>

<body>
	<Router {routes}/>
</body>

<style>
	body {
		position: absolute;
    	top: 0; 
		right: 0; 
		bottom: 0; 
		left: 0;
		background-color: #E5E5E5;
		margin: 0;
		padding: 0;
	}


	@media (min-width: 640px) {

	}
</style>