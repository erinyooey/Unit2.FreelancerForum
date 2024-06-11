// Initial array of freelancers
const initialFreelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" },
]

// Possible names and occupations
const possibleFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "Gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
    { name: "Prof. Prism", price: 81, occupation: "Teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
    { name: "Prof. Spark", price: 76, occupation: "Programmer" },
    { name: "Dr. Wire", price: 47, occupation: "Teacher" },
    { name: "Prof. Goose", price: 72, occupation: "Driver" },
]

let freelancers = [...initialFreelancers] // shallow copy of the initial array

// function to render the initial freelancer data
function renderFreelancer(freelancer){
    const table = document.querySelector("#table")
    let row = table.insertRow(-1)
    row.innerHTML = `
        <td>${freelancer.name}</td>
        <td>${freelancer.price}</td>
        <td>${freelancer.occupation}</td>
    `
}

function calculateAndDisplay(freelancers){
    const totalCost = freelancers.reduce((sum, freelancer)=> sum+freelancer.price, 0)
    const average = totalCost/freelancers.length
    console.log(`The average is $${Math.floor(average)}`)
    document.getElementById("average").textContent = `The average is $${Math.floor(average)}`
}


// function that selects a random freelancer from the provided array
function getRandomFreelancer(freelancers){
    const randomIdx = Math.floor(Math.random() * freelancers.length)
    return freelancers[randomIdx] // get the value through our random chosen index
}


function initialize(){
    freelancers.forEach(renderFreelancer)
    calculateAndDisplay(freelancers)

    // Add Freelancers by invoking existing functions
    const intervalId = setInterval(()=>{
        if (freelancers.length >= 10){
            clearInterval(intervalId)
            return
        }
        const newFreelancer = getRandomFreelancer(possibleFreelancers) 
        freelancers.push(newFreelancer)
        renderFreelancer(newFreelancer)
        calculateAndDisplay(freelancers)
    }, 1000)
}

initialize()