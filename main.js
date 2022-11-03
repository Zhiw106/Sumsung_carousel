const arrImgs = [
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/buying_carousel_kv_01_gb2-pro-360_01_darkred_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_02_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_04_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/buying_carousel_kv_02_gb2-pro_01_darkgray_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_05_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_07_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_01_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_08_pc.jpg?imwidth=1536'
]

const carouselImg = 'carouselImg'
const eleDivImg = document.getElementById(carouselImg)

const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const pauseBtn = document.getElementById('pause')
const playBtn = document.getElementById('play')

let arrEleImg = []
let arrEleDot = []

document.getElementById('')

let indexImg = 0

let timer

//dynamically create elements based on image arrays
function createElements() {
    for (let i = 0; i < arrImgs.length; i++) {
        let eleImg = document.createElement('img')
        arrEleImg.push(eleImg)
        eleImg.src = arrImgs[i]


        eleDivImg.appendChild(eleImg)
    }
}

createElements()

//hide all images
function hideAllElements(arrElement) {
    for (let i = 0; i < arrElement.length; i++) {
        arrElement[i].style = 'display:none'
    }

}

//show the current image
const funSwitchImage = function () {
    hideAllElements(arrEleImg)
    arrEleImg[indexImg].style = 'display:block'
    indexImg++
    if (indexImg === arrEleImg.length) {
        indexImg = 0
    }
}

//automatic carousel
timer = setInterval(funSwitchImage, 1000)

//previous image
prevBtn.addEventListener('click', () => {
    clearInterval(timer)
    const imgTag = document.querySelector('img')
    let newIndex = indexImg--
    console.log('prev', newIndex)
    if (indexImg < 0) {
        indexImg = arrImgs.length - 1
    }
    imgTag.src = arrImgs[newIndex]
    imgTag.style.display = 'block'
})

//how to display previous image, how to get the current image index

//next image
nextBtn.addEventListener('click', () => {
    clearInterval(timer)
    const imgTag = document.querySelector('img')
    let newIndex = indexImg++
    if (indexImg === arrEleImg.length) {
        indexImg = 0
    }

    console.log('next', newIndex)

    imgTag.src = arrImgs[newIndex]
    // imgTag.style='display:block'   this way doesn't work
    imgTag.style.display = 'block'
})

//play button
playBtn.addEventListener('click', () => {
    clearInterval(timer)
    playBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
    timer = setInterval(funSwitchImage, 1000)
})

//pause button
pauseBtn.addEventListener('click', () => {
    pauseBtn.style.display = 'none'
    playBtn.style.display = 'block'
    clearInterval(timer)
})

//previous button, next button, mouseover, mouseout effect
const mouseover = function () {
    clearInterval(timer)
}

const mouseout = function () {
    if (playBtn.style.display === 'block') {
        clearInterval(timer)
    }else{
        timer = setInterval(funSwitchImage, 1000)
    }
}

nextBtn.addEventListener('mouseover', mouseover)
nextBtn.addEventListener('mouseout', mouseout)
prevBtn.addEventListener('mouseover', mouseover)
prevBtn.addEventListener('mouseout', mouseout)
