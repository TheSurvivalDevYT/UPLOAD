const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification("Hi do you wonder why i started my youtube channel If you do! Check out the questions page And select why i started my youtube channel!", {
         })
        }
    })
})