<script lang="ts">
import TopicComponent from '../components/TopicComponent.svelte'

const data = [
	{
        "themengebiet": "Ingenieurwissenschaften", 
        "fächer": [ //Zweite Ebene sollen die Fächer der Themengebiete werden
            {
                "fach": "Software Entwicklung",
                "professoren": [ //Dritte Ebene sind die zugehörigen Professoren zu den Fächern
                    {
                        "name": "w3school",
                        "example": "example" // Hier können noch weitere sinnvolle Felder hinzugefügt werden bsp: Beschreibung falls machbar oder ähnliches
                    }
                ]
            },
            {
                "fach": "Mathe",
                "professoren": [ //Dritte Ebene sind die zugehörigen Professoren zu den Fächern
                    {
                        "name": "w3school",
                        "example": "example" // Hier können noch weitere sinnvolle Felder hinzugefügt werden bsp: Beschreibung falls machbar oder ähnliches
                    }
                ]
            }
        ]
    },
    {
        "themengebiet": "Naturwissenschaften", 
        "fächer": [
            {
                "fach": "Chemie",
                "professoren": [
                    {
                        "name": "w3school",
                        "example": "example"
                    }
                ]
            },
            {
                "fach": "Biologie",
                "professoren": [
                    {
                        "name": "w3school",
                        "example": "example"
                    }
                ]
            }
        ]
    }
]

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


	@media (min-width: 640px) {
		.container {
			max-width: none;
		}
	}
</style>