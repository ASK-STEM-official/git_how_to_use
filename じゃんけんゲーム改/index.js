const choices=document.querySelector(".choices") //選択肢要素
const btn=document.querySelector(".btn") //ボタン要素の取得
const enemy=document.querySelector(".enemy") //敵の選択を表示する要素の取得
const result=document.querySelector(".result") //結果表示の要素の取得

//グーチョキパーの配列
const arry=["グー","チョキ","パー"]

//ボタン要素が押されたらイベントを開始
btn.addEventListener('click',()=>{
    enemy.value=arry[Math.floor(Math.random()*arry.length)]//敵の選択をarryからランダムに選ぶ
    //プレイヤーの選択肢と敵の選択肢の比較
    if(choices.value==enemy.value){
        result.textContent="あいこ"
    }else{
        if(choices.value=="グー"){
            if(enemy.value=="チョキ"){
                result.textContent="勝ち"
            }
            if(enemy.value=="パー"){
                result.textContent="負け"
            }
        }
        if(choices.value=="チョキ"){
            if(enemy.value=="パー"){
                result.textContent="勝ち"
            }
            if(enemy.value=="グー"){
                result.textContent="負け"
            }
        }
        if(choices.value=="パー"){
            if(enemy.value=="グー"){
                result.textContent="勝ち"
            }
            if(enemy.value=="チョキ"){
                result.textContent="負け"
            }
        }
    }
})
