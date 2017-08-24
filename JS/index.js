/**
 * Created by deepspace on 17-7-20.
 */
window.onload = function () {
    let txt = document.getElementById("txt"),
        btn = document.getElementById("btn"),
        show = document.getElementById("showList");

    btn.addEventListener("click", addList, false);

    /* 添加到list */
    function addList() {
        if (txt.value.trim() !== "") {
            let list = document.createElement("div"),
                item = new Date().toLocaleString(),
                time = new Date();
            list.setAttribute("class", "lists");
            list.innerHTML = `${time.getHours()}:${time.getMinutes()} :${time.getSeconds()} ：${txt.value}`;
            localStorage.setItem(item, txt.value);
            list.addEventListener("click", function cx() {
                if (confirm("这项任务已经完成 ? ")) {
                    document.getElementById("overList").appendChild(this);
                    this.setAttribute("class", "overLists");
                    localStorage.removeItem(item);
                    this.removeEventListener("click", cx, false);
                }
            }, false);
            show.insertBefore(list, show.childNodes[0]);
            txt.value = "";
        } else {
            alert("你还没添加任务呢 !!! ");
        }
    }

    // 读取到本地存储的List
    for (let i = 0, len = localStorage.length; i < len; i++) {
        let list = document.createElement("div"),
            key = localStorage.key(i),
            val = localStorage[key];
        console.log(val);
        list.setAttribute("class", "lists");
        list.innerHTML = `${key} : ${val}`;
        list.addEventListener("click", function wyh() {
            if (confirm("这项任务已经完成 ? ")) {
                this.parentNode.removeChild(this);
                document.getElementById("overList").appendChild(this);
                this.setAttribute("class", "overLists");
                localStorage.removeItem(key);
                this.removeEventListener("click", wyh, false);
            }
        }, false);
        show.insertBefore(list, show.childNodes[0]);
    }

};
