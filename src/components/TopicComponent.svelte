<script>
export let data;

console.log(data)
</script>

    <div class="topLevelContainer">
        <div class="topLevelTopic">
            <p>
                {data["themengebiet"]}
            </p>
            <p>
                Img
            </p>
        </div>
        {#if data["fächer"]}
            {#each data["fächer"] as fach}
            <div class="secondLevelContainer">
                <div class="topLevelTopic">
                    <p>
                        {fach["fach"]}
                    </p>
                    <p>
                        Img
                    </p>
                </div>
                {#if fach["professoren"]}
                    {#each fach["professoren"] as prof}
                        <div class="thirdLevelContainer">
                            <div class="topLevelTopic">
                                <p>
                                    {prof["name"]}
                                </p>
                                <p>
                                    Img
                                </p>
                            </div>
                            <div class="infoContainer">
                                <p>
                                    Fakultät für Informations- und Kommunikationswissenschaften Institut für Translation und Mehrsprachige Kommunikation (ITMK)
                                </p>
                                <p>
                                    Lehrgebiete
                                </p>
                                <p>
                                    Forschungsgebiete
                                </p>
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
            {/each}
        {/if}
    </div>

<style>

	.topLevelContainer {
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 20px;
        margin-bottom: 10px;
        background-color: #F8F8F8;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */
	}

    .secondLevelContainer {
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 20px;
        margin-bottom: 10px;
        background-color: #E7E7E7;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */
	}

    .thirdLevelContainer {
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 20px;
        margin-bottom: 10px;
        background-color: #C3C3C3;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */
	}

    .topLevelTopic {
        width: 100%;
		display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .infoContainer {
        width: 100%;
		display: flex;
        flex-direction: column;
        justify-content: flex-start;
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