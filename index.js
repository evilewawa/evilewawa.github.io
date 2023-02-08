const body_div = document.getElementById("body")
const sorting_animation_div = document.getElementById("sorting_animation_div")
const path_animation_div = document.getElementById("path_animation_div")
const hex_animation_div = document.getElementById("hex_animation_div")

const sort_count = 5
const path_row_count = 5
const path_col_count = 5
function createAnimations(){
    console.log("walid")
    for (let i = 0; i < sort_count; i++){
        let sort_div = document.createElement("div")
        sort_div.setAttribute("id", "sort" + i)
        sort_div.classList.add("sort_div")
        sort_div.style.width = "35px"
        sort_div.style.height = 35*(i+1) + "px"
        sorting_animation_div.appendChild(sort_div)
    }
    for (let i = 0; i < path_row_count; i++){
        let row_div = document.createElement("div")
        row_div.setAttribute("id", "row"+i)
        row_div.classList.add("path_row")
        // row_div.style.flexDirection = "row"
        for (let j = 0; j < path_col_count; j++){
            let col_div = document.createElement("div")
            col_div.setAttribute("id", "path" +i+  "" +j)
            col_div.classList.add("path_node")
            row_div.appendChild(col_div)
        }
        path_animation_div.appendChild(row_div)
    }
    
}