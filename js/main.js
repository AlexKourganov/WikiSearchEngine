import {setSearchFocus,showClearTextButton,clearPushListener,clearSearchText} from "./searchBar.js";
import {buildSearchResults,clearStatsLine,setStatsLine,deleteSearchResults} from "./searchResults.js";
import {getSearchTerm,retrieveSearchResults} from "./dataFunctions.js";

document.addEventListener("readystatechange", (e)=>{
    // If page loaded we are ready to go
    if(e.target.readyState === "complete"){
        initApp();
    }
});

const initApp =()=>{
// set focus to input
setSearchFocus();
// create listeners for text

const search = document.getElementById("search");
search.addEventListener("input",showClearTextButton);

const clear = document.getElementById("clear");
clear.addEventListener("click", clearSearchText);
clear.addEventListener("keydown",clearPushListener);


const form  = document.getElementById("searchBar");
form.addEventListener("submit", submitTheSearch);

}


// Procedural function
const submitTheSearch=(e)=>{
e.preventDefault();
deleteSearchResults();
processTheSearch();
setSearchFocus();
}
// Procedural function
const processTheSearch = async()=>{
    // clear stat line
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if(searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if(resultArray.length){
      //build search results  
      buildSearchResults(resultArray);
    }

    //set stats
    setStatsLine(resultArray.length);
}