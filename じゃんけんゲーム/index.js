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
//相手の選択肢
const cards = ['./images/rock.png', './images/scissors.png', './images/paper.png']
//グーを選択したとき
rock.addEventListener('click', () => {
    scissors.classList.remove("chosen")
    paper.classList.remove("chosen")
    rock.classList.toggle("chosen")
    myBox.src = './images/rock.png'
})
//チョキを選択したとき
scissors.addEventListener('click', () => {
    paper.classList.remove("chosen")
    rock.classList.remove("chosen")
    scissors.classList.toggle("chosen")
    myBox.src = './images/scissors.png'
})
//パーを選択したとき
paper.addEventListener('click', () => {
    scissors.classList.remove("chosen")
    rock.classList.remove("chosen")
    paper.classList.toggle("chosen")
    myBox.src = './images/paper.png'
})
//決定ボタンを押したときの処理
btn.addEventListener('click', () => {
    //何かしらは選択されているかの判定（されてなかったら動かない）
    if (rock.classList.contains("chosen") || scissors.classList.contains("chosen") || paper.classList.contains("chosen")) {
        motion.classList.remove("none")//「じゃんけん…」のカットがはさまる
        setTimeout(() => {
            motion.classList.add("none")//カットを消す
            num = Math.floor(Math.random() * cards.length);//相手のをランダムで選ぶ
            enemyBox.src = cards[num]//ランダム選んだものを画像として相手ボックスに表示
            //選択状態をすべて解除
            scissors.classList.remove("chosen")
            rock.classList.remove("chosen")
            paper.classList.remove("chosen")
            if (myBox.src == enemyBox.src) {//あいこの処理
                setTimeout(() => {
                    aiko.classList.remove("none")
                    setTimeout(() => {
                        aiko.classList.add("none")
                    }, 700);
                }, 700);
            } else {//勝ちor負けの処理
                if (myBox.src.includes('rock')) {//自分がグー出したとき
                    if (enemyBox.src.includes('scissors')) {
                        result.textContent = "勝ち"
                    }
                    if (enemyBox.src.includes('paper')) {
                        result.textContent = "負け"
                    }
                }
                if (myBox.src.includes('scissors')) {//自分がチョキ出したとき
                    if (enemyBox.src.includes('paper')) {
                        result.textContent = "勝ち"
                    }
                    if (enemyBox.src.includes('rock')) {
                        result.textContent = "負け"
                    }
                }
                if (myBox.src.includes('paper')) {//自分がパー出したとき
                    if (enemyBox.src.includes('rock')) {
                        result.textContent = "勝ち"
                    }
                    if (enemyBox.src.includes('scissors')) {
                        result.textContent = "負け"
                    }
                }
                setTimeout(() => {
                    end.classList.remove("none")//リザルト画面表示
                },800)
            }
        }, 1000);
    }
})
//「もう一度遊ぶ」ボタンを押したときの処理
replay.addEventListener('click',()=>{
    window.location.reload()
})
