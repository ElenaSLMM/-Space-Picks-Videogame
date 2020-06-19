window.onload = () => {
    document.addEventListener('keydown', e =>{
        if (e.keyCode == 13){
            if (Game.gameOff){
                const canvas = document.querySelector('canvas')
                const div = document.querySelector('div')
                div.style.display = 'none'
                canvas.style.display = 'block'
                Game.init('geometrydash')
            }
        }
    })
}