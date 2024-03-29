const enemyBox = document.querySelector(".enemyBox")
const myBox = document.querySelector(".myBox")
const rock = document.querySelector(".rock")
const scissors = document.querySelector(".scissors")
const paper = document.querySelector(".paper")
const btn = document.querySelector(".btn")
const end = document.querySelector(".end")
const result = document.querySelector(".result")
const replay = document.querySelector(".replay")
const aiko = document.querySelector(".aiko")
const motion = document.querySelector(".motion")

const cards = ['./images/rock.png', './images/scissors.png', './images/paper.png']

rock.addEventListener('click', () => {
    scissors.classList.remove("chosen")
    paper.classList.remove("chosen")
    rock.classList.toggle("chosen")
    myBox.src = './images/rock.png'
})
scissors.addEventListener('click', () => {
    paper.classList.remove("chosen")
    rock.classList.remove("chosen")
    scissors.classList.toggle("chosen")
    myBox.src = './images/scissors.png'
})
paper.addEventListener('click', () => {
    scissors.classList.remove("chosen")
    rock.classList.remove("chosen")
    paper.classList.toggle("chosen")
    myBox.src = './images/paper.png'
})

btn.addEventListener('click', () => {
    if (rock.classList.contains("chosen") || scissors.classList.contains("chosen") || paper.classList.contains("chosen")) {
        motion.classList.remove("none")
        setTimeout(() => {
            motion.classList.add("none")
            num = Math.floor(Math.random() * cards.length);
            enemyBox.src = cards[num]
            scissors.classList.remove("chosen")
            rock.classList.remove("chosen")
            paper.classList.remove("chosen")
            if (myBox.src == enemyBox.src) {
                setTimeout(() => {
                    aiko.classList.remove("none")
                    setTimeout(() => {
                        aiko.classList.add("none")
                    }, 1000);
                }, 700);
            } else {
                if (myBox.src == './images/rock.png') {
                    if (enemyBox.src == './images/scissors.png') {
                        result.textContent = "勝ち"
                    }
                    if (enemyBox.src == './images/paper.png') {
                        result.textContent = "負け"
                    }
                }
                if (myBox.src == './images/scissors.png') {
                    if (enemyBox.src == './images/paper.png') {
                        result.textContent = "勝ち"
                    }
                    if (enemyBox.src == './images/rock.png') {
                        result.textContent = "負け"
                    }
                }
                if (myBox.src == './images/paper.png') {
                    if (enemyBox.src == './images/rock.png') {
                        result.textContent = "勝ち"
                    }
                    if (enemyBox.src == './images/scissors.png') {
                        result.textContent = "負け"
                    }
                }
                setTimeout(() => {
                    end.classList.remove("none")
                },800)
            }
        }, 1000);
    }
})

replay.addEventListener('click',()=>{
    window.location.reload()
})
