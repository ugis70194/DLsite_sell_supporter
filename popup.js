function send() {
    const lower = document.getElementById("lower").value
    const higher = document.getElementById("higher").value
    chrome.storage.local.set(
        {
            lower: lower,
            higher: higher
        }
    )
    //console.log({lower, higher})
}
document.getElementById("sendbutton").addEventListener('click', send)

