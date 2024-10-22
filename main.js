const $container = document.getElementById("container");
let arrAnimation = [];
let run = undefined;
let iAnimation = 0;



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

function animation() {
    if (iAnimation < arrAnimation.length) {
        $container.innerHTML = "";
        $container.append(...arrAnimation[iAnimation++]);
    } else {
        clearInterval(run);
        run = undefined;

    }
}

document.getElementById("setup").addEventListener("click", () => {
    $container.innerHTML = "";
    clearInterval(run);


    for (let i = 0; i < 30; i++) {
        const rect = document.createElement("div");
        rect.classList.add("rectangle");
        let rdn = parseInt(Math.random() * 100) + 1;
        rect.style.height = rdn + "%";

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