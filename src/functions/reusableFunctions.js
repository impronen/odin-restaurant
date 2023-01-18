
function pageScrubber() {
    let content = document.getElementById('mainContent')
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}


export {
    pageScrubber,
}