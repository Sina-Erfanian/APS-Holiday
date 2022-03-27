const image = document.querySelector(".img");
const box = document.querySelectorAll(".box");



box.forEach(ele => {
    ele.addEventListener("dragover",(e)=> {
        e.preventDefault()
    })
    ele.addEventListener("drop",()=> {
        ele.append(image)
    })
})
