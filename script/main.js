// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {

    // MenuHandlle
    document.querySelectorAll('.menuHandlle').forEach(element => {
        element.addEventListener('click', () => {
            document.querySelector('#menu').classList.toggle('show')
            document.querySelector('#open-menu').classList.toggle('show')
            document.querySelector('#open-menu').classList.toggle('hiden')
            document.querySelector('#close-menu').classList.toggle('show')
            document.querySelector('#close-menu').classList.toggle('hiden')
        })
    })
})