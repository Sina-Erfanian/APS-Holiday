const id = new URLSearchParams(window.location.search).get("id")
console.log(window.location.search);
const container = document.querySelector(".details");
const btn = document.querySelector(".btn");

const renderPosts = async ()=> {
    const res = await fetch("http://localhost:3000/posts/" + id);
    const post = await res.json()

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `

    container.innerHTML = template
}




window.addEventListener("DOMContentLoaded", () => renderPosts());
btn.addEventListener("click",async ()=> {
    const res = await fetch("http://localhost:3000/posts/" + id, {
        method : "DELETE"
    });
    window.location.replace("index.html")
})