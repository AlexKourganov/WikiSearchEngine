export const setSearchFocus=()=>{
    document.getElementById("search").focus();
    console.log('focus');
}
export const showClearTextButton =()=>{
    const search = document.getElementById("search");
    const clear = document.getElementById("clear");
    if(search.value.length > 0){
        clear.classList.remove("none");
        clear.classList.add("flex");
    }else{
        clear.classList.remove("flex");
        clear.classList.add("none");
    }
}

export const clearSearchText=(e)=>{
    e.preventDefault();
    document.getElementById("search").value="";
    const clear = document.getElementById("clear");
    clear.classList.add("none");
    clear.classList.remove("flex");
    setSearchFocus();
}
export const clearPushListener=(e)=>{
    if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        document.getElementById("clear").click();
    }
}