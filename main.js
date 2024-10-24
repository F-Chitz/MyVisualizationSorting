const $container = document.getElementById("container");
let arrAnimation = [];
let run = undefined;

function mergeSort(array) {
    arrAnimation = [];
    let sorted = [];
    for (let i = 0; i < array.length; i++) {
        let left, right = [];

        while (left.length < right.left) {
            left.append(...array[i]);
        }

        while (left.length > right.left) {
            right.append(...array[i]);
        }


    }

}


function shellSort(array){
let l = array.length;
arrAnimation = [];
for (let gap = Math.floor(l/2); gap > 0 ; gap = Math.floor(gap/2)) {
    for (let i = gap; i < l; i++){

        let swap = array[i];
        let j;
        for(j = i; j>= gap && Number(array[j-gap].style.height.replace("%","")) > Number(swap.style.height.replace("%","")); j -= gap){
            array[j] = array[j-gap];
        }
        array[j] = swap;
    }
    arrAnimation.push([...array]);    

}
}

function BubbleSort(array) {
    arrAnimation = []
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - 1; i++) {

            if (Number(array[i + 1].style.height.replace("%", "")) < Number(array[i].style.height.replace("%", ""))) {
                let swap = array[i];
                array[i] = array[i + 1];
                array[i + 1] = swap;
            }

        }
        arrAnimation.push([...array]);

    }
}

function insertionSort(array) {
    let i, j, swap
    arrAnimation = []

    for (i = 1; i < array.length; i++) {
        swap = array[i];
        for (j = i; j > 0 && Number(array[j - 1].style.height.replace("%", "")) > Number(swap.style.height.replace("%", "")); j--) {
            array[j] = array[j - 1];
        }
        array[j] = swap;
        arrAnimation.push([...array]);

    }

}
let iAnimation = 0;

function animation() {

    console.log("start");
    if (iAnimation < arrAnimation.length) {
        $container.innerHTML = "";
        $container.append(...arrAnimation[iAnimation++]);
    } else {
        clearInterval(run);
    console.log("end");
    iAnimation = 0;
        run = undefined;

    }
}

document.getElementById("setup").addEventListener("click", () => {
    $container.innerHTML = "";
    clearInterval(run);
    arrAnimation =[];
    run=undefined;
    let size = document.getElementById("size").value;


    for (let i = 0; i < size; i++) {
        const rect = document.createElement("div");
        rect.classList.add("rectangle");
        let rdn = parseInt(Math.random() * 100) + 1;
        rect.style.height = rdn + "%";
        rect.style.width = $container.clientWidth/size + "px";

        $container.appendChild(rect);

    }

    document.getElementById("insertionSort").disabled=false;
    document.getElementById("bubbleSort").disabled=false;
    document.getElementById("shellSort").disabled=false;

});

document.getElementById("insertionSort").addEventListener("click", () => {
    disableButtons()

    insertionSort([...$container.children]);
    run = setInterval(animation, document.getElementById("speed").value);

});

document.getElementById("bubbleSort").addEventListener("click", () => {
    disableButtons()

    BubbleSort([...$container.children]);
    run = setInterval(animation, document.getElementById("speed").value);

});
document.getElementById("shellSort").addEventListener("click", () => {
    disableButtons()

    shellSort([...$container.children]);
    run = setInterval(animation, document.getElementById("speed").value);

});

function disableButtons(){
    document.getElementById("insertionSort").disabled=true;
    document.getElementById("bubbleSort").disabled=true;
    document.getElementById("shellSort").disabled=true;
}