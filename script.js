
overlay1 = document.getElementById("overlay1");
overlay2 = document.getElementById("overlay2");
overlay3 = document.getElementById("overlay3");
overlay4 = document.getElementById("overlay4");
overlay5 = document.getElementById("overlay5");
overlay6 = document.getElementById("overlay6");
overlay7 = document.getElementById("overlay7");
overlay8 = document.getElementById("overlay8");
overlay9 = document.getElementById("overlay9");
overlay = document.getElementsByClassName("boxOverlay")
// circles -----
Circle1 = document.getElementById("circle1")
Circle2 = document.getElementById("circle2")
Circle3 = document.getElementById("circle3")
Circle4 = document.getElementById("circle4")
Circle5 = document.getElementById("circle5")
Circle6 = document.getElementById("circle6")
Circle7 = document.getElementById("circle7")
Circle8 = document.getElementById("circle8")
Circle9 = document.getElementById("circle9")
Circle10 = document.getElementById("circle10")
Circle11 = document.getElementById("circle11")
Circle12 = document.getElementById("circle12")
Circle13 = document.getElementById("circle13")
Circle14 = document.getElementById("circle14")
Circle15 = document.getElementById("circle15")
Circle16 = document.getElementById("circle16")
Circle17 = document.getElementById("circle17")
Circle18 = document.getElementById("circle18")
Circle19 = document.getElementById("circle19")
Circle20 = document.getElementById("circle20")
Circle21 = document.getElementById("circle21")
Circle22 = document.getElementById("circle22")
Circle23 = document.getElementById("circle23")
Circle24 = document.getElementById("circle24")
Circle25 = document.getElementById("circle25")
Circle26 = document.getElementById("circle26")
Circle27 = document.getElementById("circle27")
Circle28 = document.getElementById("circle28")
Circle29 = document.getElementById("circle29")
Circle30 = document.getElementById("circle30")
Circle31 = document.getElementById("circle31")
Circle32 = document.getElementById("circle32")
Circle33 = document.getElementById("circle33")
Circle34 = document.getElementById("circle34")
Circle35 = document.getElementById("circle35")
Circle36 = document.getElementById("circle36")
Circle37 = document.getElementById("circle37")
Circle38 = document.getElementById("circle38")
Circle39 = document.getElementById("circle39")
Circle40 = document.getElementById("circle40")
Circle41 = document.getElementById("circle41")
Circle42 = document.getElementById("circle42")
Circle43 = document.getElementById("circle43")
Circle44 = document.getElementById("circle44")
Circle45 = document.getElementById("circle45")
Circle46 = document.getElementById("circle46")
Circle47 = document.getElementById("circle47")
Circle48 = document.getElementById("circle48")
Circle49 = document.getElementById("circle49")
Circle50 = document.getElementById("circle50")
Circle51 = document.getElementById("circle51")
Circle52 = document.getElementById("circle52")
Circle53 = document.getElementById("circle53")
Circle54 = document.getElementById("circle54")
Circle55 = document.getElementById("circle55")
Circle56 = document.getElementById("circle56")
Circle57 = document.getElementById("circle57")
Circle58 = document.getElementById("circle58")
Circle59 = document.getElementById("circle59")
Circle60 = document.getElementById("circle60")
Circle61 = document.getElementById("circle61")
Circle62 = document.getElementById("circle62")
Circle63 = document.getElementById("circle63")
Circle64 = document.getElementById("circle64")
Circle65 = document.getElementById("circle65")
Circle66 = document.getElementById("circle66")
Circle67 = document.getElementById("circle67")
Circle68 = document.getElementById("circle68")
Circle69 = document.getElementById("circle69")
Circle70 = document.getElementById("circle70")
Circle71 = document.getElementById("circle71")
Circle72 = document.getElementById("circle72")
Circle73 = document.getElementById("circle73")
Circle74 = document.getElementById("circle74")
Circle75 = document.getElementById("circle75")
Circle76 = document.getElementById("circle76")
Circle77 = document.getElementById("circle77")
Circle78 = document.getElementById("circle78")
Circle79 = document.getElementById("circle79")
Circle80 = document.getElementById("circle80")
Circle81 = document.getElementById("circle81")


var x = 0; // ------------------ ultimate decider
//when even -> green (Player A)
//when odd -> yellow (Player B)

var counter = 0;
var ig = 0;
var iy= 0;

// cross and circle interchange
function counter1() {
    x += 1;
}



// prompt
const addQues = ["./ques/addition/addition-1.png","./ques/addition/addition-2.png","./ques/addition/addition-3.png","./ques/addition/addition-4.png","./ques/addition/addition-5.png","./ques/addition/addition-6.png","./ques/addition/addition-7.png","./ques/addition/addition-8.png","./ques/addition/addition-9.png"]
const addAns = ["30","125","99","-20","6","31/6","80x","1000z","40x^3"]

const subQues = ["./ques/subtraction/subtraction-1.png","./ques/subtraction/subtraction-2.png","./ques/subtraction/subtraction-3.png","./ques/subtraction/subtraction-4.png","./ques/subtraction/subtraction-5.png","./ques/subtraction/subtraction-6.png","./ques/subtraction/subtraction-7.png","./ques/subtraction/subtraction-8.png","./ques/subtraction/subtraction-9.png"]
const subAns = ["1000","115","40.5","80","3/3","1/2","558a","-1x","100"]

const mulQues = ["./ques/multiplication/multiplication-1.png",
"./ques/multiplication/multiplication-2.png",
"./ques/multiplication/multiplication-3.png",
"./ques/multiplication/multiplication-4.png",
"./ques/multiplication/multiplication-5.png",
"./ques/multiplication/multiplication-6.png",
"./ques/multiplication/multiplication-7.png",
"./ques/multiplication/multiplication-8.png",
"./ques/multiplication/multiplication-9.png"]
const mulAns = ["71","90a^2","0.25","90x^2","70","70","10x^2","89^99","7^10"]

const divQues = ["./ques/division/division-1.png",
"./ques/division/division-2.png",
"./ques/division/division-3.png",
"./ques/division/division-4.png",
"./ques/division/division-5.png",
"./ques/division/division-6.png",
"./ques/division/division-7.png",
"./ques/division/division-8.png",
"./ques/division/division-9.png"]
const divAns = ["50","0.105","0.7","111","5/10","5/21","8^2","4","45^6"]

const addMulQues = ["./ques/addmul/addmul-1.png",
"./ques/addmul/addmul-2.png",
"./ques/addmul/addmul-3.png",
"./ques/addmul/addmul-4.png",
"./ques/addmul/addmul-5.png",
"./ques/addmul/addmul-6.png",
"./ques/addmul/addmul-7.png",
"./ques/addmul/addmul-8.png",
"./ques/addmul/addmul-9.png"]
const addMulAns = ["50","34","23.5","12z^4","3/2","18","1","8a^6+7a","7^5+7^2"]

const addSubQues = ["./ques/addsub/addsub-1.png",
"./ques/addsub/addsub-2.png",
"./ques/addsub/addsub-3.png",
"./ques/addsub/addsub-4.png",
"./ques/addsub/addsub-5.png",
"./ques/addsub/addsub-6.png",
"./ques/addsub/addsub-7.png",
"./ques/addsub/addsub-8.png",
"./ques/addsub/addsub-9.png"]
const addSubAns = ["673","342","40","3x^2","-3/5","28","1/2","6x^3","8^2"]

const divMulQues = ["./ques/divmul/divmul-1.png",
"./ques/divmul/divmul-2.png",
"./ques/divmul/divmul-3.png",
"./ques/divmul/divmul-4.png",
"./ques/divmul/divmul-5.png",
"./ques/divmul/divmul-6.png",
"./ques/divmul/divmul-7.png",
"./ques/divmul/divmul-8.png",
"./ques/divmul/divmul-9.png"]
const divMulAns = ["526","50","44.4","35","4","88.4","2","6a^5","5^9"]

const divSubQues = ["./ques/divsub/divsub-1.png",
"./ques/divsub/divsub-2.png",
"./ques/divsub/divsub-3.png",
"./ques/divsub/divsub-4.png",
"./ques/divsub/divsub-5.png",
"./ques/divsub/divsub-6.png",
"./ques/divsub/divsub-7.png",
"./ques/divsub/divsub-8.png",
"./ques/divsub/divsub-9.png"]
const divSubAns = ["13","0","1/3","41.5","1","x","-4","-60","4.5"]

const allQues = ["./ques/allop/allop-1.png",
"./ques/allop/allop-2.png",
"./ques/allop/allop-3.png",
"./ques/allop/allop-4.png",
"./ques/allop/allop-5.png",
"./ques/allop/allop-6.png",
"./ques/allop/allop-7.png",
"./ques/allop/allop-8.png",
"./ques/allop/allop-9.png"]
const allAns = ["18","4.2","0","50","1/18","a^2","-15","35","13"]

//prompt-functioning
// function addPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = addQues[rand]
//     quesSpace.src = ques
//     var submit = document.querySelector(".prompt>#answer")
//     var input = document.getElementById("promptInput")
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = addAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
            
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)  
// }

// function subPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = subQues[rand]
//     quesSpace.src = ques
//     var input = document.getElementById("promptInput")
//     var submit = document.querySelector(".prompt>#answer")
    
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = subAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)
        
// }

// function mulPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = mulQues[rand]
//     quesSpace.src = ques
//     var input = document.getElementById("promptInput")
//     var submit = document.querySelector(".prompt>#answer")
    
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = mulAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)
      
// }
// function divPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = divQues[rand]
//     quesSpace.src = ques
//     var input = document.getElementById("promptInput")
//     var submit = document.querySelector(".prompt>#answer")
    
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = divAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)
      
// }
// function addSubPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = addSubQues[rand]
//     quesSpace.src = ques
//     var input = document.getElementById("promptInput")
//     var submit = document.querySelector(".prompt>#answer")
    
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = addSubAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)
      
// }
// function addMulPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = addMulQues[rand]
//     quesSpace.src = ques
//     var input = document.getElementById("promptInput")
//     var submit = document.querySelector(".prompt>#answer")
    
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = addMulAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)
      
// }
// function divMulPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = divMulQues[rand]
//     quesSpace.src = ques
//     var input = document.getElementById("promptInput")
//     var submit = document.querySelector(".prompt>#answer")
    
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = divMulAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)
      
// }

// function divSubPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = divSubQues[rand]
//     quesSpace.src = ques
//     var input = document.getElementById("promptInput")
//     var submit = document.querySelector(".prompt>#answer")
    
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = divSubAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)
      
// }

// function allOpPrompt(){
//     var prompt = document.querySelector(".prompt")
//     var quesSpace = document.querySelector(".prompt img")
//     prompt.classList.add("active")
//     let rand = Math.floor(Math.random()*9)
//     let ques = allQues[rand]
//     quesSpace.src = ques
//     var input = document.getElementById("promptInput")
//     var submit = document.querySelector(".prompt>#answer")
    
//     function submission(e){
//         e.preventDefault()
//         console.log("clicked")
//         let ansCheck = allAns[rand]
//         var answer = input.value
//         if (answer===ansCheck) {
//             prompt.classList.remove("active")
//             submit.removeEventListener("submit",submission)
//         }else{
//             input.value = ""
//         }
    
//     }  
//     submit.addEventListener("submit",submission)
      
// }

//start-prompt
function isPrime(a){
    if (a<2) {
        return false
    }else{
        for (let index = 2; index < a; index++) {
            if (a%index === 0) {
                return false
            }
        }
        return true
    }
}

//class -> .<classname>
//id -> #<id_name>


const startPrompt = document.querySelector(".start")
const numberA = document.querySelector(".player-a h2")
const numberB = document.querySelector(".player-b h2")
const getButton = document.querySelector(".start-button .get-btn")
const startButton = document.querySelector(".start-button .beg-btn")
const playerA = document.querySelector(".player-a")
const playerB = document.querySelector(".player-b")
const msgA = document.querySelector(".message-a")
const msgB = document.querySelector(".message-b")

startButton.disabled = true

startButton.addEventListener("click",()=>{
    startPrompt.classList.add("unactive")
})

getButton.addEventListener("click",()=>{
    let ranA = Math.floor(1 + Math.random()*6)
    let ranB = Math.floor(1 + Math.random()*6)
    numberA.textContent = ranA
    numberB.textContent = ranB
    if (isPrime(ranA) && !isPrime(ranB)) {
        playerA.classList.toggle("green")
        msgA.textContent = "Wins The first Chance"
        playerB.classList.toggle("yellow")
        getButton.disabled = true
        startButton.disabled = false
    }else if (!isPrime(ranA) && isPrime(ranB)) {
        playerB.classList.toggle("green")
        msgB.textContent = "Wins The First Chance"
        playerA.classList.toggle("yellow")
        getButton.disabled = true
        startButton.disabled = false
    }
})
function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("res").textContent = "Player 1 Score : " + ig;
    document.getElementById("res2").textContent = "Player 2 Score : " + iy;
    if(ig>iy){
        document.getElementById("res3").textContent="Player 1 scored better than Player 2 and Player 2 needs improvement"
    }
    else{
        document.getElementById("res3").textContent="Player 2 scored better than Player 1 and Player 1 needs improvement"
    }
}

function showGraph() {
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Player 1', 'Player 2'],
            datasets: [{
                label: 'Scores',
                data: [ig, iy],
                backgroundColor: ['#4CAF50', '#2196F3'],
                borderColor: ['#388E3C', '#1976D2'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    

}


    


// Chat ---
function hide() {
    chat = document.getElementById("chat");
    header = document.getElementById("header");
    cbox = document.getElementById("cbox");
    send = document.getElementById("send");
    console.log()
    counter += 1;
    if (counter % 2 != 0) {
        cbox.classList.add("sendCboxClick");
        send.classList.add("sendCboxClick");
        chat.classList.add("chatClick")
        header.classList.add("headerClick")
    } else {
        header.classList.remove("headerClick")
        cbox.classList.remove("sendCboxClick");
        send.classList.remove("sendCboxClick");
        chat.classList.remove("chatClick")
    }
}

// win box ---

function win1() {
    circle = document.getElementById("circleOverlay1")
    cross = document.getElementById("crossOverlay1")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle1.classList.contains("circleFix") && Circle5.classList.contains("circleFix") && Circle9.classList.contains("circleFix") || Circle3.classList.contains("circleFix") && Circle5.classList.contains("circleFix") && Circle7.classList.contains("circleFix") || Circle1.classList.contains("circleFix") && Circle4.classList.contains("circleFix") && Circle7.classList.contains("circleFix") || Circle2.classList.contains("circleFix") && Circle5.classList.contains("circleFix") && Circle8.classList.contains("circleFix") || Circle3.classList.contains("circleFix") && Circle6.classList.contains("circleFix") && Circle9.classList.contains("circleFix") || Circle1.classList.contains("circleFix") && Circle2.classList.contains("circleFix") && Circle3.classList.contains("circleFix") || Circle4.classList.contains("circleFix") && Circle5.classList.contains("circleFix") && Circle6.classList.contains("circleFix") || Circle7.classList.contains("circleFix") && Circle8.classList.contains("circleFix") && Circle9.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup() //green wins
    }
    if (cross1.classList.contains("crossFix") && cross5.classList.contains("crossFix") && cross9.classList.contains("crossFix") || cross3.classList.contains("crossFix") && cross5.classList.contains("crossFix") && cross7.classList.contains("crossFix") || cross1.classList.contains("crossFix") && cross4.classList.contains("crossFix") && cross7.classList.contains("crossFix") || cross2.classList.contains("crossFix") && cross5.classList.contains("crossFix") && cross8.classList.contains("crossFix") || cross3.classList.contains("crossFix") && cross6.classList.contains("crossFix") && cross9.classList.contains("crossFix") || cross1.classList.contains("crossFix") && cross2.classList.contains("crossFix") && cross3.classList.contains("crossFix") || cross4.classList.contains("crossFix") && cross5.classList.contains("crossFix") && cross6.classList.contains("crossFix") || cross7.classList.contains("crossFix") && cross8.classList.contains("crossFix") && cross9.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup() //yellow wins
    }
    //circleFix -> green mark (player A)
    //crossfix -> yellow mark (player B)
}
function win2() {
    circle = document.getElementById("circleOverlay2")
    cross = document.getElementById("crossOverlay2")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle10.classList.contains("circleFix") && Circle14.classList.contains("circleFix") && Circle18.classList.contains("circleFix") || Circle12.classList.contains("circleFix") && Circle14.classList.contains("circleFix") && Circle16.classList.contains("circleFix") || Circle10.classList.contains("circleFix") && Circle13.classList.contains("circleFix") && Circle16.classList.contains("circleFix") || Circle11.classList.contains("circleFix") && Circle14.classList.contains("circleFix") && Circle17.classList.contains("circleFix") || Circle12.classList.contains("circleFix") && Circle15.classList.contains("circleFix") && Circle18.classList.contains("circleFix") || Circle10.classList.contains("circleFix") && Circle11.classList.contains("circleFix") && Circle12.classList.contains("circleFix") || Circle13.classList.contains("circleFix") && Circle14.classList.contains("circleFix") && Circle15.classList.contains("circleFix") || Circle16.classList.contains("circleFix") && Circle17.classList.contains("circleFix") && Circle18.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup()
    }
    if (cross10.classList.contains("crossFix") && cross14.classList.contains("crossFix") && cross18.classList.contains("crossFix") || cross12.classList.contains("crossFix") && cross14.classList.contains("crossFix") && cross16.classList.contains("crossFix") || cross10.classList.contains("crossFix") && cross13.classList.contains("crossFix") && cross16.classList.contains("crossFix") || cross11.classList.contains("crossFix") && cross14.classList.contains("crossFix") && cross17.classList.contains("crossFix") || cross12.classList.contains("crossFix") && cross15.classList.contains("crossFix") && cross18.classList.contains("crossFix") || cross10.classList.contains("crossFix") && cross11.classList.contains("crossFix") && cross12.classList.contains("crossFix") || cross13.classList.contains("crossFix") && cross14.classList.contains("crossFix") && cross15.classList.contains("crossFix") || cross16.classList.contains("crossFix") && cross17.classList.contains("crossFix") && cross18.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup()
    }
}
function win3() {
    circle = document.getElementById("circleOverlay3")
    cross = document.getElementById("crossOverlay3")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle19.classList.contains("circleFix") && Circle23.classList.contains("circleFix") && Circle27.classList.contains("circleFix") || Circle21.classList.contains("circleFix") && Circle23.classList.contains("circleFix") && Circle25.classList.contains("circleFix") || Circle19.classList.contains("circleFix") && Circle22.classList.contains("circleFix") && Circle25.classList.contains("circleFix") || Circle20.classList.contains("circleFix") && Circle23.classList.contains("circleFix") && Circle26.classList.contains("circleFix") || Circle21.classList.contains("circleFix") && Circle24.classList.contains("circleFix") && Circle27.classList.contains("circleFix") || Circle19.classList.contains("circleFix") && Circle20.classList.contains("circleFix") && Circle21.classList.contains("circleFix") || Circle22.classList.contains("circleFix") && Circle23.classList.contains("circleFix") && Circle24.classList.contains("circleFix") || Circle25.classList.contains("circleFix") && Circle26.classList.contains("circleFix") && Circle27.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup()

    }    
    if (cross19.classList.contains("crossFix") && cross23.classList.contains("crossFix") && cross27.classList.contains("crossFix") || cross21.classList.contains("crossFix") && cross23.classList.contains("crossFix") && cross25.classList.contains("crossFix") || cross19.classList.contains("crossFix") && cross22.classList.contains("crossFix") && cross25.classList.contains("crossFix") || cross20.classList.contains("crossFix") && cross23.classList.contains("crossFix") && cross26.classList.contains("crossFix") || cross21.classList.contains("crossFix") && cross24.classList.contains("crossFix") && cross27.classList.contains("crossFix") || cross19.classList.contains("crossFix") && cross20.classList.contains("crossFix") && cross21.classList.contains("crossFix") || cross22.classList.contains("crossFix") && cross23.classList.contains("crossFix") && cross24.classList.contains("crossFix") || cross25.classList.contains("crossFix") && cross26.classList.contains("crossFix") && cross27.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup()

    }
}
function win4() {    circle = document.getElementById("circleOverlay4")
    cross = document.getElementById("crossOverlay4")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle28.classList.contains("circleFix") && Circle32.classList.contains("circleFix") && Circle36.classList.contains("circleFix") || Circle30.classList.contains("circleFix") && Circle32.classList.contains("circleFix") && Circle34.classList.contains("circleFix") || Circle28.classList.contains("circleFix") && Circle31.classList.contains("circleFix") && Circle34.classList.contains("circleFix") || Circle29.classList.contains("circleFix") && Circle32.classList.contains("circleFix") && Circle35.classList.contains("circleFix") || Circle30.classList.contains("circleFix") && Circle33.classList.contains("circleFix") && Circle36.classList.contains("circleFix") || Circle28.classList.contains("circleFix") && Circle29.classList.contains("circleFix") && Circle30.classList.contains("circleFix") || Circle31.classList.contains("circleFix") && Circle32.classList.contains("circleFix") && Circle33.classList.contains("circleFix") || Circle34.classList.contains("circleFix") && Circle35.classList.contains("circleFix") && Circle36.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup()

    }
    if (cross28.classList.contains("crossFix") && cross32.classList.contains("crossFix") && cross36.classList.contains("crossFix") || cross30.classList.contains("crossFix") && cross32.classList.contains("crossFix") && cross34.classList.contains("crossFix") || cross28.classList.contains("crossFix") && cross31.classList.contains("crossFix") && cross34.classList.contains("crossFix") || cross29.classList.contains("crossFix") && cross32.classList.contains("crossFix") && cross35.classList.contains("crossFix") || cross30.classList.contains("crossFix") && cross33.classList.contains("crossFix") && cross36.classList.contains("crossFix") || cross28.classList.contains("crossFix") && cross29.classList.contains("crossFix") && cross30.classList.contains("crossFix") || cross31.classList.contains("crossFix") && cross32.classList.contains("crossFix") && cross33.classList.contains("crossFix") || cross34.classList.contains("crossFix") && cross35.classList.contains("crossFix") && cross36.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup()
    }
}
function win5() {
    circle = document.getElementById("circleOverlay5")
    cross = document.getElementById("crossOverlay5")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle37.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle45.classList.contains("circleFix") || Circle39.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle43.classList.contains("circleFix") || Circle37.classList.contains("circleFix") && Circle40.classList.contains("circleFix") && Circle43.classList.contains("circleFix") || Circle38.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle44.classList.contains("circleFix") || Circle39.classList.contains("circleFix") && Circle42.classList.contains("circleFix") && Circle45.classList.contains("circleFix") || Circle37.classList.contains("circleFix") && Circle38.classList.contains("circleFix") && Circle39.classList.contains("circleFix") || Circle40.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle42.classList.contains("circleFix") || Circle43.classList.contains("circleFix") && Circle44.classList.contains("circleFix") && Circle45.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup()
    }
    if (cross37.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross45.classList.contains("crossFix") || cross39.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross43.classList.contains("crossFix") || cross37.classList.contains("crossFix") && cross40.classList.contains("crossFix") && cross43.classList.contains("crossFix") || cross38.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross44.classList.contains("crossFix") || cross39.classList.contains("crossFix") && cross42.classList.contains("crossFix") && cross45.classList.contains("crossFix") || cross37.classList.contains("crossFix") && cross38.classList.contains("crossFix") && cross39.classList.contains("crossFix") || cross40.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross42.classList.contains("crossFix") || cross43.classList.contains("crossFix") && cross44.classList.contains("crossFix") && cross45.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup()

    }
}
function win6() {
    circle = document.getElementById("circleOverlay6")    
    cross = document.getElementById("crossOverlay6")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle37.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle45.classList.contains("circleFix") || Circle39.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle43.classList.contains("circleFix") || Circle37.classList.contains("circleFix") && Circle40.classList.contains("circleFix") && Circle43.classList.contains("circleFix") || Circle38.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle44.classList.contains("circleFix") || Circle39.classList.contains("circleFix") && Circle42.classList.contains("circleFix") && Circle45.classList.contains("circleFix") || Circle37.classList.contains("circleFix") && Circle38.classList.contains("circleFix") && Circle39.classList.contains("circleFix") || Circle40.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle42.classList.contains("circleFix") || Circle43.classList.contains("circleFix") && Circle44.classList.contains("circleFix") && Circle45.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup()

    }
    if (cross37.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross45.classList.contains("crossFix") || cross39.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross43.classList.contains("crossFix") || cross37.classList.contains("crossFix") && cross40.classList.contains("crossFix") && cross43.classList.contains("crossFix") || cross38.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross44.classList.contains("crossFix") || cross39.classList.contains("crossFix") && cross42.classList.contains("crossFix") && cross45.classList.contains("crossFix") || cross37.classList.contains("crossFix") && cross38.classList.contains("crossFix") && cross39.classList.contains("crossFix") || cross40.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross42.classList.contains("crossFix") || cross43.classList.contains("crossFix") && cross44.classList.contains("crossFix") && cross45.classList.contains("crossFix")) {        overlay6.classList.add("displayIMP");
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup()

    }
}
function win7() {
    circle = document.getElementById("circleOverlay7")    
    cross = document.getElementById("crossOverlay7")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle55.classList.contains("circleFix") && Circle59.classList.contains("circleFix") && Circle63.classList.contains("circleFix") || Circle57.classList.contains("circleFix") && Circle59.classList.contains("circleFix") && Circle61.classList.contains("circleFix") || Circle55.classList.contains("circleFix") && Circle58.classList.contains("circleFix") && Circle61.classList.contains("circleFix") || Circle56.classList.contains("circleFix") && Circle59.classList.contains("circleFix") && Circle62.classList.contains("circleFix") || Circle57.classList.contains("circleFix") && Circle60.classList.contains("circleFix") && Circle63.classList.contains("circleFix") || Circle55.classList.contains("circleFix") && Circle56.classList.contains("circleFix") && Circle57.classList.contains("circleFix") || Circle58.classList.contains("circleFix") && Circle59.classList.contains("circleFix") && Circle60.classList.contains("circleFix") || Circle61.classList.contains("circleFix") && Circle62.classList.contains("circleFix") && Circle63.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup()

    }
    if (cross55.classList.contains("crossFix") && cross59.classList.contains("crossFix") && cross63.classList.contains("crossFix") || cross57.classList.contains("crossFix") && cross59.classList.contains("crossFix") && cross61.classList.contains("crossFix") || cross55.classList.contains("crossFix") && cross58.classList.contains("crossFix") && cross61.classList.contains("crossFix") || cross56.classList.contains("crossFix") && cross59.classList.contains("crossFix") && cross62.classList.contains("crossFix") || cross57.classList.contains("crossFix") && cross60.classList.contains("crossFix") && cross63.classList.contains("crossFix") || cross55.classList.contains("crossFix") && cross56.classList.contains("crossFix") && cross57.classList.contains("crossFix") || cross58.classList.contains("crossFix") && cross59.classList.contains("crossFix") && cross60.classList.contains("crossFix") || cross61.classList.contains("crossFix") && cross62.classList.contains("crossFix") && cross63.classList.contains("crossFix")) {        overlay7.classList.add("displayIMP");
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup()

    }
}
function win8() {
    circle = document.getElementById("circleOverlay6")    
    cross = document.getElementById("crossOverlay6")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle64.classList.contains("circleFix") && Circle68.classList.contains("circleFix") && Circle72classList.contains("circleFix") || Circle66.classList.contains("circleFix") && Circle68.classList.contains("circleFix") && Circle70.classList.contains("circleFix") || Circle64.classList.contains("circleFix") && Circle67.classList.contains("circleFix") && Circle70.classList.contains("circleFix") || Circle65.classList.contains("circleFix") && Circle68.classList.contains("circleFix") && Circle71.classList.contains("circleFix") || Circle66.classList.contains("circleFix") && Circle69.classList.contains("circleFix") && Circle72.classList.contains("circleFix") || Circle64.classList.contains("circleFix") && Circle65.classList.contains("circleFix") && Circle66.classList.contains("circleFix") || Circle67.classList.contains("circleFix") && Circle68.classList.contains("circleFix") && Circle69.classList.contains("circleFix") || Circle70.classList.contains("circleFix") && Circle71.classList.contains("circleFix") && Circle72.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup()

    }
    if (cross64.classList.contains("crossFix") && cross68.classList.contains("crossFix") && cross71.classList.contains("crossFix") || cross66.classList.contains("crossFix") && cross68.classList.contains("crossFix") && cross70.classList.contains("crossFix") || cross64.classList.contains("crossFix") && cross67.classList.contains("crossFix") && cross70.classList.contains("crossFix") || cross65.classList.contains("crossFix") && cross68.classList.contains("crossFix") && cross71.classList.contains("crossFix") || cross66.classList.contains("crossFix") && cross69.classList.contains("crossFix") && cross72.classList.contains("crossFix") || cross64.classList.contains("crossFix") && cross65.classList.contains("crossFix") && cross66.classList.contains("crossFix") || cross67.classList.contains("crossFix") && cross68.classList.contains("crossFix") && cross69.classList.contains("crossFix") || cross70.classList.contains("crossFix") && cross71.classList.contains("crossFix") && cross72.classList.contains("crossFix")) {        overlay8.classList.add("displayIMP");
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup()

    }
}
function win9() {
    circle = document.getElementById("circleOverlay6")    
    cross = document.getElementById("crossOverlay6")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle73.classList.contains("circleFix") && Circle77.classList.contains("circleFix") && Circle81.classList.contains("circleFix") || Circle75.classList.contains("circleFix") && Circle77.classList.contains("circleFix") && Circle79.classList.contains("circleFix") || Circle73.classList.contains("circleFix") && Circle76.classList.contains("circleFix") && Circle79.classList.contains("circleFix") || Circle74.classList.contains("circleFix") && Circle77.classList.contains("circleFix") && Circle80.classList.contains("circleFix") || Circle75.classList.contains("circleFix") && Circle78.classList.contains("circleFix") && Circle81.classList.contains("circleFix") || Circle73.classList.contains("circleFix") && Circle74.classList.contains("circleFix") && Circle75.classList.contains("circleFix") || Circle76.classList.contains("circleFix") && Circle77.classList.contains("circleFix") && Circle78.classList.contains("circleFix") || Circle79.classList.contains("circleFix") && Circle80.classList.contains("circleFix") && Circle81.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin") //yellow wins
        showPopup()

    }
    if (cross73.classList.contains("crossFix") && cross77.classList.contains("crossFix") && cross81.classList.contains("crossFix") || cross75.classList.contains("crossFix") && cross77.classList.contains("crossFix") && cross79.classList.contains("crossFix") || cross73.classList.contains("crossFix") && cross76.classList.contains("crossFix") && cross79.classList.contains("crossFix") || cross74.classList.contains("crossFix") && cross77.classList.contains("crossFix") && cross80.classList.contains("crossFix") || cross75.classList.contains("crossFix") && cross78.classList.contains("crossFix") && cross81.classList.contains("crossFix") || cross73.classList.contains("crossFix") && cross74.classList.contains("crossFix") && cross75.classList.contains("crossFix") || cross76.classList.contains("crossFix") && cross77.classList.contains("crossFix") && cross78.classList.contains("crossFix") || cross79.classList.contains("crossFix") && cross80.classList.contains("crossFix") && cross81.classList.contains("crossFix")) {        overlay9.classList.add("displayIMP");
        ansOverlay.classList.add("Ywin") //yellow wins
        showPopup()

    }
}

// onclick circle and cross ---

function circle1() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross1");
            circle = document.getElementById("circle1");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)

}

function circle2() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross2");
            circle = document.getElementById("circle2");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
                
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle3() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross3");
            circle = document.getElementById("circle3");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"

            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle4() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross4");
            circle = document.getElementById("circle4");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
                
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle5() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross5");
            circle = document.getElementById("circle5");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
                
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle6() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross6");
            circle = document.getElementById("circle6");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
                
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle7() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross7");
            circle = document.getElementById("circle7");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
                
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle8() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross8");
            circle = document.getElementById("circle8");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
                
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle9() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addQues[rand]
    quesSpace.src = ques
    var submit = document.querySelector(".prompt>#answer")
    var input = document.getElementById("promptInput")
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross9");
            circle = document.getElementById("circle9");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
                
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win1()
            counter1()
            submit.removeEventListener("submit",submission)
            
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle10() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross10");
            circle = document.getElementById("circle10");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"

                    if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
      
    
    
}
function circle11() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross11");
            circle = document.getElementById("circle11");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"

            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
      
}
function circle12() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross11");
            circle = document.getElementById("circle11");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"

            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
      
}
function circle13() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross13");
            circle = document.getElementById("circle13");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
      
}
function circle14() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross14");
            circle = document.getElementById("circle14");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
      
}
function circle15() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross15");
            circle = document.getElementById("circle15");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle16() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross16");
            circle = document.getElementById("circle16");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle17() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross17");
            circle = document.getElementById("circle17");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle18() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross18");
            circle = document.getElementById("circle18");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win2()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle19() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross19");
            circle = document.getElementById("circle19");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                if (overlay1.classList.contains("displayIMP")) {
                    for (var i = 0, max = overlay.length; i < max; i++) {
                        overlay[i].style.display = "none";
                    }
                    overlay1.style.display = "flex";
                    console.log("doneeeeeee")
                } else {
                    overlay1.style.display = "none";
                }

            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                if (overlay1.classList.contains("displayIMP")) {
                    for (var i = 0, max = overlay.length; i < max; i++) {
                        overlay[i].style.display = "none";
                    }
                    overlay1.style.display = "flex";
                    console.log("doneeeeeee")
                } else {
                    overlay1.style.display = "none";
                }
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle20() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross20");
            circle = document.getElementById("circle20");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle21() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross21");
            circle = document.getElementById("circle21");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle22() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross22");
            circle = document.getElementById("circle22");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle23() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross23");
            circle = document.getElementById("circle23");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle24() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross24");
            circle = document.getElementById("circle24");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle25() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross25");
            circle = document.getElementById("circle25");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle26() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross26");
            circle = document.getElementById("circle26");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle27() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = subQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = subAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross27");
            circle = document.getElementById("circle27");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win3()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)

        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle28() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross28");
            circle = document.getElementById("circle28");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"

                    if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
    
    
}
function circle29() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross29");
            circle = document.getElementById("circle29");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle30() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross30");
            circle = document.getElementById("circle30");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle31() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross32");
            circle = document.getElementById("circle32");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle32() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross32");
            circle = document.getElementById("circle32");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle33() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross33");
            circle = document.getElementById("circle33");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle34() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross34");
            circle = document.getElementById("circle34");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle35() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross35");
            circle = document.getElementById("circle35");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle36() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = addMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = addMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross36");
            circle = document.getElementById("circle36");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win4()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle37() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross37");
            circle = document.getElementById("circle37");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"

                    if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
    
}
function circle38() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross38");
            circle = document.getElementById("circle38");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle39() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross39");
            circle = document.getElementById("circle39");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle40() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross40");
            circle = document.getElementById("circle40");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle41() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross41");
            circle = document.getElementById("circle41");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle42() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross42");
            circle = document.getElementById("circle42");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle43() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross43");
            circle = document.getElementById("circle43");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle44() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross44");
            circle = document.getElementById("circle44");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle45() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = allQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = allAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross45");
            circle = document.getElementById("circle45");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win5()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle46() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross46");
            circle = document.getElementById("circle46");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"

                    if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
    
}
function circle47() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross47");
            circle = document.getElementById("circle47");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle48() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross48");
            circle = document.getElementById("circle48");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle49() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross49");
            circle = document.getElementById("circle49");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle50() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross50");
            circle = document.getElementById("circle50");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle51() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross51");
            circle = document.getElementById("circle51");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle52() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross52");
            circle = document.getElementById("circle52");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle53() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross53");
            circle = document.getElementById("circle53");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle54() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divSubQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divSubAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross54");
            circle = document.getElementById("circle54");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win6()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle55() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross55");
            circle = document.getElementById("circle55");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
        
                    if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle56() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross56");
            circle = document.getElementById("circle56");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle57() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross57");
            circle = document.getElementById("circle57");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle58() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross58");
            circle = document.getElementById("circle58");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle59() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross59");
            circle = document.getElementById("circle59");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle60() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross60");
            circle = document.getElementById("circle60");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle61() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross61");
            circle = document.getElementById("circle61");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle62() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross62");
            circle = document.getElementById("circle62");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle63() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = mulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = mulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross63");
            circle = document.getElementById("circle63");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win7()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle64() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross64");
            circle = document.getElementById("circle64");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
        
                    if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay1.style.display = "none"
                if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle65() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross65");
            circle = document.getElementById("circle65");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle66() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross66");
            circle = document.getElementById("circle66");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle67() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross67");
            circle = document.getElementById("circle67");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle68() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross68");
            circle = document.getElementById("circle68");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle69() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross69");
            circle = document.getElementById("circle69");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle70() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross70");
            circle = document.getElementById("circle70");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle71() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross71");
            circle = document.getElementById("circle71");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle72() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divMulQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divMulAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross72");
            circle = document.getElementById("circle72");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win8()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle73() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("circle73");
            circle = document.getElementById("circle73");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                if (overlay1.classList.contains("displayIMP")) {
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.display = "none";
                }
                overlay1.style.display = "flex";
                console.log("doneeeeeee")
            } else {
                overlay1.style.display = "none";
            }
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
    
}
function circle74() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross74");
            circle = document.getElementById("circle74");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay2.style.display = "none"
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle75() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross75");
            circle = document.getElementById("circle75");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay3.style.display = "none"
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle76() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross76");
            circle = document.getElementById("circle76");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay4.style.display = "none"
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle77() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross77");
            circle = document.getElementById("circle77");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay5.style.display = "none"
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle78() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross78");
            circle = document.getElementById("circle78");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay6.style.display = "none"
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle79() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross79");
            circle = document.getElementById("circle79");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay7.style.display = "none"
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle80() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross80");
            circle = document.getElementById("circle80");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay8.style.display = "none"
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
function circle81() {
    var prompt = document.querySelector(".prompt")
    var quesSpace = document.querySelector(".prompt img")
    prompt.classList.add("active")
    let rand = Math.floor(Math.random()*9)
    let ques = divQues[rand]
    quesSpace.src = ques
    var input = document.getElementById("promptInput")
    var submit = document.querySelector(".prompt>#answer")
    
    function submission(e){
        e.preventDefault()
        console.log("clicked")
        let ansCheck = divAns[rand]
        var answer = input.value
        if (answer===ansCheck) {
            prompt.classList.remove("active")
            cross = document.getElementById("cross81");
            circle = document.getElementById("circle81");
            if (x % 2 == 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("circleFix")
                circle.classList.add("clicked")
                ig+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
        
            } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
                circle.classList.add("clicked")
                cross.classList.add("crossFix");
                iy+=1;
                for (var i = 0, max = overlay.length; i < max; i++) {
                    overlay[i].style.animation = "visible forwards 400ms ease running"
                    overlay[i].style.display = "flex";
                }
                overlay9.style.display = "none"
            }
            win9()
            counter1()
            submit.removeEventListener("submit",submission)
        }else{
            input.value = ""
            x+=1
            prompt.classList.remove("active")
            submit.removeEventListener("submit",submission)
        }
    
    }  
    submit.addEventListener("submit",submission)
}
        