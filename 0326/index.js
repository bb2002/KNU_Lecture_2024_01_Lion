const [head, body] = [
    document.getElementsByTagName('head')[0],
    document.getElementsByTagName('body')[0],
]

let idx = 0;

head.append("<title>Ballbot TODO</title>");

const ul = document.createElement("ul");
ul.id = "ul"
body.append(ul);

const button = document.createElement("button");
button.innerText = "추가";
button.id = "add"
body.append(button);

const input = document.createElement("input");

const div = document.createElement("div")
div.append(input)
div.append(button);
body.append(div);

const handler = () => {
    if (!input.value) {
        return;
    }

    const checked = document.createElement("input")
    checked.setAttribute("type", "checkbox");
    checked.setAttribute("style", "display: inline");

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.setAttribute("style", "display: inline")
    p.innerText = input.value;
    li.append(checked);
    li.append(p);
    ul.append(li);

    li.setAttribute("style", "background-color: blue; margin-top: 8px; margin-bottom: 8px;color: white; height: 48px");

    checked.addEventListener("change", () => {
        if (checked.checked) {
            p.setAttribute("style", "text-decoration: line-through;display: inline")
        } else {
            p.setAttribute("style", "text-decoration: none;display: inline")
        }
    })
    input.value = "";
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handler();
        input.value = "";
    }
})

button.addEventListener("click", handler)

body.setAttribute("style", "background-color: black;")
button.setAttribute("style", "width: 20%;height: 64px;background-color: red;color: white")
input.setAttribute("style", "height: 64px; width: 70%;padding-left: 16px; background-color: black; border: 10px solid white; color: red");
document.getElementById("title").setAttribute("style", "color: green")
