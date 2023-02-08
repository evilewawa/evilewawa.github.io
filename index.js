const body_div = document.getElementById("body")
const sorting_animation_div = document.getElementById("sorting_animation_div")
const path_animation_div = document.getElementById("path_animation_div")
const hex_animation_div = document.getElementById("hex_animation_div")
const hex_animation_svg = document.getElementById("hex_svg")


const sort_count = 5
const path_row_count = 5
const path_col_count = 5
function createAnimations(){
    // boiler plate creating divs for the animations as soon as the page loads

    //for sorting animation
    for (let i = 0; i < sort_count; i++){
        let sort_div = document.createElement("div")
        sort_div.setAttribute("id", "sort" + i)
        sort_div.classList.add("sort_div")
        sort_div.style.width = "35px"
        sort_div.style.height = 35*(i+1) + "px"
        sorting_animation_div.appendChild(sort_div)
    }

    // for pathfinding animation
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

    // for hexagon tessalation
    let counts = [3,4,5,4,3]
    for (let i = 0; i < counts.length; i++){
        for (let j =0; j < counts[i]; j++){
            let poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon")
            let hex_coords = getHexCoords(i, j)
            for (let k = 0; k < hex_coords.length; k++){
                hex_coords[k][0] += 50
                // bad solution below
                if (counts[i] == 5){
                    let side_length = 25
                    let width = Math.cos(Math.PI/6)*side_length
                    hex_coords[k][0] -= width*2
                }
            }
            poly.setAttribute("points", turnCoordsToString(hex_coords))
            poly.setAttribute("id",i + " " + j)
            poly.classList.add("hex")
            hex_animation_svg.appendChild(poly)

        }
    }
    hex_animation_div.style.height = "fit-content"

    
}

// straight from hexagon repository
function turnCoordsToString(coords){   
    // changes coords into strings (opposite of string to array function)
    let out = ""
    for (let coor_i = 0; coor_i < coords.length; coor_i++){
        let coord = coords[coor_i]
        out += coord[0]+ " " +coord[1]
        if (!(coor_i == coords.length -1)){
            out+= ", "
        }
    }
    return out
}

function getHexCoords(i ,j){
    // function for baseline hexagon coordinates 
    // returns overall hex coordinates (each indivdual is changed based on changedHexCoords fucntion)
    let side_length = 25
    let height = Math.sqrt((side_length**2 + (side_length/2)**2))
    let width = Math.cos(Math.PI/6)*side_length

    let hex_coords = []
    if (i%2 == 1){
        hex_coords = [
            [width,0 ],
            [width*2 , side_length/2 ],
            [width*2 , side_length/2 + side_length],
            [width, side_length*2],
            [0, side_length*Math.cos(Math.PI/3) + side_length],
            [0,side_length*Math.cos(Math.PI/3)]] 
    }
    else{
        hex_coords = [
            // all x coords have an extra width
            [ width + width,0 ],
            [width*2+  width, side_length/2 ],
            [width*2+ width, side_length/2 + side_length],
            [width + width, side_length*2],
            [0 + width, side_length*Math.cos(Math.PI/3) + side_length],
            [0+  width,side_length*Math.cos(Math.PI/3)]] 
    }
    hex_coords = changeHexCoords(i,j, hex_coords)
    for (let i = 0; i < hex_coords.length ; i++){
        let coord = hex_coords[i]
        coord[0] = parseInt(coord[0])
        coord[1] = parseInt(coord[1])
        hex_coords[i] = coord
    }
    return hex_coords
}
function changeHexCoords(i,j,hex_coords){
    let side_length = 25
    let height = Math.sqrt((side_length**2 + (side_length/2)**2))
    let width = Math.cos(Math.PI/6)*side_length
    let shiftx = width*2*j
    let shifty = side_length/2*3*i
    for (let i = 0; i < hex_coords.length; i++){
        hex_coords[i][0] += shiftx
        hex_coords[i][1] += shifty
    }
    return hex_coords
}
