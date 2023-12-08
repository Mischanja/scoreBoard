

let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")
let resetCount = 0




// RESET

function reset() {
    
    homeScoreEl.textContent = resetCount
    guestScoreEl.textContent = resetCount    
    
    
}


// GUEST

function guestScoreOne() {
    
        guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 1;
    
}

function guestScoreTwo() {
    
        guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 2;
    
}

function guestScoreThree() {
    
        guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 3;
    
}


// HOME


function homeScoreOne() {
    
        homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 1;
    
}

function homeScoreTwo() {
    
        homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 2;
    
}

function homeScoreThree() {
    
        homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 3;
    
}

