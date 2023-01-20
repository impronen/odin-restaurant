
function pageScrubber() {
    let content = document.querySelector('#mainContent')
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}


export {
    pageScrubber,
}