let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')
let reset = document.getElementById('reset')
let store = document.getElementById('store')
let saved_counts = document.getElementById('saved_counts')
let countEl = document.getElementById('count')
let count = 0
let dailyCounts = []; // Array to store daily counts


// Function to update the table with daily counts
function updateTable() {
    let tableBody = document.querySelector('#countTable tbody');
    tableBody.innerHTML = ''; // Clear the table body

    dailyCounts.forEach((dailyCount, index) => {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.textContent = `Day ${index + 1}`;
        cell2.textContent = dailyCount;
    });
}



increment.addEventListener('click', function(event){
    count += 1
    countEl.innerText = count
})

decrement.addEventListener('click', function(event){
    if(count > 0) {
         count -= 1
    countEl.innerText = count
    }
})

reset.addEventListener('click', function(event){

    
    count = 0
    countEl.innerText = count
})

store.addEventListener('click', function(event){
    if (count > 0) {
        dailyCounts.push(count); // Add the daily count to the array
        count = 0;
        countEl.innerText = count;
        updateTable(); // Update the table with the new count
    }
})

