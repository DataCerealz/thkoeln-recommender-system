<script>

//imports
let arrow_down = "./images/arrow_down.png";
let arrow_up = "./images/arrow_up.png";

export let data;

//variables needed for open and close
let themengebiet_open = false
let fach_list = []
let prof_list = []

//function to open "themengebiete"
function onClickThemen () {
    themengebiet_open = !themengebiet_open
    console.log(data)
    console.log(fach_list)
}

//function to open "fach"
function onClickFach(fach) {

    if (fach_list.includes(fach)) {
        var index = fach_list.indexOf(fach)
        fach_list.splice(index, 1);
    } else if (!fach_list.includes(fach)) {
        fach_list.push(fach)
    }
    
    fach_list = fach_list
}

//function to open "prof"
function onClickProf (prof) {

    if (prof_list.includes(prof)) {
        var index = prof_list.indexOf(prof)
        prof_list.splice(index, 1);
    } else if (!prof_list.includes(prof)) {
        prof_list.push(prof)
    }
    
    prof_list = prof_list

}


//links in data are partly without domain
//function to ad domain to links if needed
function checkLink(link) {

    const pattern = 'http'
    const domain = 'https://www.th-koeln.de'

    if (!link.includes(pattern)) {
        console.log(link)
        const full_link = domain + link
        return full_link
    }

    return link
}

//The array of the links is converted as a string und the seperator is "\n" instead of ","
//So this function is converting the link arrays into valid arrays
function convertStringtoArray(str) {
    const splitLinks = str.split('\n')
    const newLinksArray = []

    for (let i = 0; i < splitLinks.length; i++) {
        const  clean_link = splitLinks[i].replace(/'|\[|\]|\s/g,'')
        const validate_link = checkLink(clean_link)
        newLinksArray.push(validate_link)
    }
    console.log(newLinksArray)
    return newLinksArray
}

</script>

    <div 
    class="topLevelContainer"
    >
        <div class="topLevelTopic">
            <p class="type_title">
                {data["themengebiet"]}
            </p>
            <button 
            class="image_container"
            on:click={onClickThemen}
            >
                <img 
                src={!themengebiet_open? arrow_down:arrow_up} 
                alt="arrow_down" class="image" />
            </button>
        </div>
        {#if data["faecher"] && themengebiet_open}
            {#each data["faecher"] as fach}
            <div class="secondLevelContainer">
                <div class="topLevelTopic">
                    <p class="fachTitle">
                        {fach["fach"]}
                    </p>
                    <button 
                    class="image_container"
                    on:click={() => onClickFach(fach["fach"])}
                    >
                        <img 
                        src={!fach_list.includes(fach["fach"])? arrow_down:arrow_up} 
                        alt="arrow_down" class="image" />
                    </button>
                </div>
                {#if fach["professoren"] && fach_list.includes(fach["fach"])}
                    {#each fach["professoren"] as prof}
                        <div class="thirdLevelContainer">
                            <div class="topLevelTopic">
                                <p class="type_title">
                                    {prof["name"]}
                                </p>
                                <button 
                                class="image_container"
                                on:click={onClickProf(prof["name"]+fach["fach"])}
                                >
                                    <img 
                                    src={!prof_list.includes(prof["name"]+fach["fach"])? arrow_down:arrow_up} 
                                    alt="arrow_down" class="image" />
                                </button>
                            </div>
                            {#if prof_list.includes(prof["name"]+fach["fach"])}
                            <div class="infoContainer">
                                <div style="text-align:left;">
                                    Relevante Links:
                                </div>
                                <ul style="overflow-x:auto">
                                    {#each prof["links"] as link}
                                    <li style="text-align: left; margin: 10px;">
                                        <a href={link}>
                                            {link}
                                        </a>
                                    </li>
                                    {/each}
                                </ul>
                            </div>
                            {/if}
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
        margin-bottom: 10px;
        background-color: #C3C3C3;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */
	}

    .topLevelTopic {
        width: 100%;
        height:100%;
		display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .fachTitle {
        width: 80%;
        text-align: left;
        overflow-x: auto;
        font-size: 20px;
    }

    .infoContainer {
        width: 100%;
		display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .image_container {
        max-width: 45px;
        height: 45px;
        border: none;
        background-color: transparent;
        margin: 0;
    }

    .image {
        width: 100%;
    }

    .type_title{
        font-size: 20px;
    }


	@media (min-width: 640px) {
		.container {
			max-width: none;
		}
	}
</style>