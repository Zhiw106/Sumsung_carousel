// const arrImgs = [
//     'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/buying_carousel_kv_01_gb2-pro-360_01_darkred_pc.jpg?imwidth=1536',
//     'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_02_pc.jpg?imwidth=1536',
//     'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_04_pc.jpg?imwidth=1536',
//     'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/buying_carousel_kv_02_gb2-pro_01_darkgray_pc.jpg?imwidth=1536',
//     'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_05_pc.jpg?imwidth=1536',
//     'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_07_pc.jpg?imwidth=1536',
//     'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_01_pc.jpg?imwidth=1536',
//     'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_08_pc.jpg?imwidth=1536'
// ]
const arrImgs = [
    './images/1.webp',
    './images/2.webp',
    './images/3.webp',
    './images/4.webp',
    './images/5.webp',
    './images/6.webp',
    './images/7.webp',
    './images/8.webp',


]

const carouselImg = 'carouselImg'
const eleDivImg = document.getElementById(carouselImg)
const eleDivDot = document.getElementById('carouselDot')

const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const pauseBtn = document.getElementById('pause')
const playBtn = document.getElementById('play')

let arrEleImg = []
let arrSpanDot = []
let arrEleDot = []
let eleImg
let indexImg = -1
let timer

//previous button, next button, mouseover, mouseout effect
const mouseenter = function () {
    clearInterval(timer)
}

const mouseleave = function () {
    if (playBtn.style.display === 'block') {
        clearInterval(timer)
    } else {
        timer = setInterval(funSwitchImage, 1000)
    }
}

//dynamically create elements based on image arrays,dot arrays and add event listener while creating them
function createElements() {
    for (let i = 0; i < arrImgs.length; i++) {
        eleImg = document.createElement('img')
        arrEleImg.push(eleImg)
        eleImg.src = arrImgs[i]
        eleDivImg.appendChild(eleImg)

        console.log('arrEleImg', arrEleImg)
        console.log('eleDivImg', eleDivImg)
        eleImg.addEventListener('mouseenter', mouseenter)
        eleImg.addEventListener('mouseleave', mouseleave)

        let eleSpan = document.createElement('span')
        let eleDot = document.createElement('i')
        eleDot.classList.add("fa", "fa-regular", "fa-circle")
        eleDot.classList.add('indexDot', `${i}`)

        arrSpanDot.push(eleSpan)
        eleDivDot.appendChild(eleSpan)
        eleSpan.appendChild(eleDot)
        arrEleDot.push(eleDot)

        console.log('eleDivDot', eleDivDot)
        console.log(arrEleDot)
        // arrEleDot[i].addEventListener('mouseover', mouseover)
        // arrEleDot[i].addEventListener('mouseout', mouseout)

        eleDot.addEventListener('click', () => {
            console.log('i', i)
            hideAllElements(arrEleImg, arrEleDot)

            arrEleImg[i].style = 'display:block'
            arrEleDot[i].style = 'font-weight:600'
            indexImg = i
            clearInterval(timer)
            timer = setInterval(funSwitchImage, 1000)
        })
    }
}

createElements()


//hide all images
function hideAllElements(arrElement1, arrElement2) {
    for (let i = 0; i < arrElement1.length; i++) {
        arrElement1[i].style = 'display:none'
        arrElement2[i].style = 'color:black'
        // arrElement2[i].setAttribute('class', 'noChange')
        // arrElement2[i].classList.add('class','noChange')
    }
}

//show the current image
const funSwitchImage = function () {
    hideAllElements(arrEleImg, arrEleDot)
    let indexDot = indexImg

    if (indexImg === arrEleImg.length - 1) {
        indexImg = 0
    } else
        indexImg++

    arrEleImg[indexImg].style = 'display:block'
    arrEleDot[indexImg].style = 'font-weight:600'


}

//automatic carousel
timer = setInterval(funSwitchImage, 1000)

//previous image
prevBtn.addEventListener('click', () => {

    // console.log('newIndex', newIndex)
    if (indexImg === 0) {
        indexImg = arrEleImg.length - 1
    } else
        indexImg = indexImg - 1

    console.log('indexImg', indexImg)
    clearInterval(timer)
    hideAllElements(arrEleImg, arrEleDot)
    arrEleImg[indexImg].style.display = 'block'
    arrEleDot[indexImg].style = 'font-weight:600'

})

//how to display previous image, how to get the current image index

//next image
nextBtn.addEventListener('click', () => {
    clearInterval(timer)
    indexImg++
    if (indexImg === arrEleImg.length) {
        indexImg = 0
    }

    hideAllElements(arrEleImg, arrEleDot)
    // imgTag.style='display:block'   this way doesn't work
    arrEleImg[indexImg].style.display = 'block'
    arrEleDot[indexImg].style = 'font-weight:600'
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


nextBtn.addEventListener('mouseenter', mouseenter)
nextBtn.addEventListener('mouseleave', mouseleave)
prevBtn.addEventListener('mouseenter', mouseenter)
prevBtn.addEventListener('mouseleave', mouseleave)

funSwitchImage()