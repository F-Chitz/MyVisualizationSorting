const $container = document.getElementById("container");
let arrAnimation = [];
let run = undefined;



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
            arrAnimation.push([...array]);

        }
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
    let size = document.getElementById("size").value;


    for (let i = 0; i < size; i++) {
        const rect = document.createElement("div");
        rect.classList.add("rectangle");
        let rdn = parseInt(Math.random() * 100) + 1;
        rect.style.height = rdn + "%";
        rect.style.width = Math.floor($container.clientWidth/size) + "px";

        $container.appendChild(rect);

    }

});

document.getElementById("insertionSort").addEventListener("click", () => {

    insertionSort([...$container.children]);
    run = setInterval(animation, 60);

});

document.getElementById("bubbleSort").addEventListener("click", () => {

    BubbleSort([...$container.children]);
    run = setInterval(animation, 60);

});
document.getElementById("shellSort").addEventListener("click", () => {

    shellSort([...$container.children]);
    run = setInterval(animation, document.getElementById("speed").value);

});