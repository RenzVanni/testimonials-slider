
async function jsonData() {
  const response = await fetch("../data.json");
  const data = await response.json();

  const prevEl = document.querySelector("#prev")
  const nextEl = document.querySelector("#next")

  const imageEl = document.querySelector("#image")
  const descriptionEl = document.querySelector("#description")
  const nameEl = document.querySelector("#name")
  const positionEl = document.querySelector("#position")

  let num = 0

  prevEl.addEventListener("click", () => {
    if(num < 1) {
    num = data.length - 1
    imageEl.src = data[num].image
    descriptionEl.textContent = `"${data[num].description}"`
    nameEl.textContent = `${data[num].name}`
    positionEl.textContent = `${data[num].position}`
    console.log(num, "prev if")
    }
    else {
      num -= 1
      imageEl.src = data[num].image
      descriptionEl.textContent = `"${data[num].description}"`
      nameEl.textContent = `${data[num].name}`
      positionEl.textContent = `${data[num].position}`
      console.log(num, "prev else")
    }
  })

  nextEl.addEventListener("click", () => {
    num += 1

    if(num <= data.length - 1 ) {
    imageEl.src = data[num].image
    descriptionEl.textContent = `"${data[num].description}"`
    nameEl.textContent = `${data[num].name}`
    positionEl.textContent = `${data[num].position}`
    console.log(num, "next else")
    }
    else {
      num = 0
      imageEl.src = data[num].image
      descriptionEl.textContent = `"${data[num].description}"`
      nameEl.textContent = `${data[num].name}`
      positionEl.textContent = `${data[num].position}`
      console.log(num, "next else")
    }
  })
  
  
}

jsonData()