let count = 0;

function updateCounter() {
    document.getElementById("counter").textContent = count;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("increase").addEventListener("click", () => {
        count++;
        updateCounter();
    });
    
    document.getElementById("decrease").addEventListener("click", () => {
        count--;
        updateCounter();
    });
    
    document.getElementById("reset").addEventListener("click", () => {
        count = 0;
        updateCounter();
    });
    
    updateCounter(); // Initialize counter display
});
