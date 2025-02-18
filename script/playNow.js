document.getElementById('playNow-btn').addEventListener('click', function(){
    let playNowSection = document.getElementById('playNow')
    playNowSection.classList.add('hidden')

    let playGroundSection = document.getElementById('playGround');
    playGroundSection.classList.remove('hidden')

    let alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabets = alphabetString.split('');
    
    let randomNumber = Math.random()*25;
    let index= Math.round(randomNumber);
    let alphabet = alphabets[index];
    console.log(alphabet);
})