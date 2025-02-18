document.getElementById('playNow-btn').addEventListener('click', function(){
    let playNowSection = document.getElementById('playNow')
    playNowSection.classList.add('hidden')

    let playGroundSection = document.getElementById('playGround');
    playGroundSection.classList.remove('hidden')
})