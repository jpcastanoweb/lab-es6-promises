// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

const table = document.getElementById("table")

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                const newImg = document.createElement("img")
                newImg.src = "./../public/images/steak.jpg"
                table.appendChild(newImg)
              })
            })
          })
        })
      })
    })
  })
})

// Iteration 2 using `.then()`

addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          const newImg = document.createElement("img")
          newImg.src = "./../public/images/mashPotatoes.jpg"
          table.appendChild(newImg)
        })
      })
    })
  })
})

// Iteration 3 using async/await

async function makeFood() {
  for (let i = 0; i < brusselSprouts.length; i++) {
    await addFood(brusselSprouts[i], "#brusselSprouts")
  }

  const newImg = document.createElement("img")
  newImg.src = "./../public/images/brusselSprouts.jpg"
  table.appendChild(newImg)
}

makeFood()
