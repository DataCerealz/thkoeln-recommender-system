<script>
    import {expert_people} from "../data/ExpertPeopleData";
    import {expert_areas} from "../data/ExpertAreaData";
    import AutocompleteItem from './AutocompleteItem.svelte';

    export let searchTerm = '';

    let filteredExperts = [];
    let rawResultExperts = [];
    let experts = expert_areas.concat(expert_people)

    let searchInput;
    let inputValue = "";
    $: if (!inputValue) {
        filteredExperts = [];
        highlightedItemIndex = null;
    } else {
        // this is optional and updates the displayed results list (not autocomplete list) constantly while typing
        filterExperts()
    }

    const filterExperts = () => {
        let matchArr = []
        let exportArr = []
        if (inputValue) {
            experts.forEach(expert => {
                if (expert.toLowerCase().includes(inputValue.toLowerCase())) {
                    matchArr = [...matchArr, makeMatchingCharsBold(expert)];
                    exportArr = [...exportArr, expert];
                }
            });
        }
        filteredExperts = matchArr;
        rawResultExperts = exportArr;
        searchTerm = rawResultExperts;
    }

    function clearSearch() {
        highlightedItemIndex = null;
        inputValue = "";
        searchInput.focus();
    }

    const setInputAndSubmit = (expert) => {
        inputValue = removeBoldTags(expert)
        submitSearch()
    }

    const submitSearch = () => {
        if (inputValue) {
            filterExperts()
            clearSearch();
        } else {
            alert("Keine Eingabe in der Suchmaske.")
        }
    }

    const makeMatchingCharsBold = (str) => {
        let re = new RegExp(inputValue, 'gi');
        let matched = str.match(re); // return type array
        // -> the matched array if len = 1 works but len > 1 breaks -> see comment below
        let boldWrappedMatch = `<strong>${matched}</strong>`;
        // todo: if there are multiple matches in a list item they don't get printed bold
        return str.replaceAll(matched, boldWrappedMatch);
    }

    const removeBoldTags = (str) => {
        return str.replace(/<(.)*?>/g, "");
    }

    let highlightedItemIndex = null;

    const navigateWithArrowKeys = (event) => {
        if (event.key === "ArrowDown" && highlightedItemIndex <= filteredExperts.length - 1) {
            highlightedItemIndex === null ? highlightedItemIndex = 0 : highlightedItemIndex += 1
        } else if (event.key === "ArrowUp" && highlightedItemIndex !== null) {
            highlightedItemIndex === 0 ? highlightedItemIndex = filteredExperts.length - 1 : highlightedItemIndex -= 1
        } else if (event.key === "Enter") {
            if (highlightedItemIndex) {
                inputValue = removeBoldTags(filteredExperts[highlightedItemIndex]);
            }
        }
    }
</script>

<svelte:window on:keydown={navigateWithArrowKeys}/>

<form autocomplete="off" on:submit|preventDefault={submitSearch}>
    <div class="autocomplete">
        <input type="submit" value="">
        <input id="search-input"
               type="text"
               placeholder="Suche nach Experten oder Fachgebieten"
               bind:this={searchInput}
               bind:value={inputValue}
               on:input={filterExperts}>
    </div>
    {#if filteredExperts.length > 0}
        <ul id="autocomplete-items-list">
            {#each filteredExperts as expert, i} <!-- todo evaluate: limit amount of results (maybe scrollable div?) -->
                <AutocompleteItem itemLabel={expert} selected={i === highlightedItemIndex}
                                  on:click={() => {setInputAndSubmit(expert)}}/>
            {/each}
        </ul>
    {/if}
</form>


<style>
    form {
        width: 100%;
        position: relative;
    }

    div.autocomplete {
        position: relative;
        display: flex;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 10px;
        font-size: 16px;
        margin: 0;
    }

    input {
        padding: 0;
        margin: 0;
    }

    input:focus {
        outline: none;
    }

    input[type=text] {
        width: 100%;
        border: none;
        float: right;
        padding-left: 0.5em;
    }

    input[type=submit] {
        float: left;
        border: none;
        width: 20px;
        padding-inline: 1em;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 512 512' fill-rule='evenodd'%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
    }

    #autocomplete-items-list {
        position: absolute;
        z-index: 99;
        padding: 0;
        margin: 0;
        margin-inline: 20px;
        width: calc(100% - 40px);
        border: 1px solid #ddd;
        background-color: #ddd;
    }
</style>