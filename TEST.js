//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var ansArray = [0, 0, 0, 0, 0, 0, 0, 0]; //E外向, I內向, S實感, N直覺, T思考, F情感, J判斷, P感知
var ansString = '';
var numTrans = ["E", "I", "S", "N", "T", "F", "J", "P"];
var colorTransMap = new Map([
    ["ESTJ", "墨綠 奇異果汁"],["ESTP", "橘 波蜜"],["ESFJ", "金 啤酒或維他露P"],["ESFP", "粉 草莓牛奶"],
    ["ENTJ", "紫 火龍果汁"],["ENTP", "紅 蔓越莓汁"],["ENFJ", "藏青 抹茶"],["ENFP", "白金 豆漿"],
    ["ISTJ", "綠 青茶"],["ISTP", "深藍 葡萄柚綠茶"],["ISFJ", "白 香草奶昔"],["ISFP", "嫩芽綠 無糖綠茶"],
    ["INTJ", "灰 芝麻"],["INTP", "籃紫色 蝶豆花"],["INFJ", "淺咖啡 奶茶"],["INFP", "海洋藍"]
]);
var description = new Map([
    ["ESTJ", "ESTJ治味是但謝"],
    ["ESTP", "ESTP會無的道愛半人平要水員"],
    ["ESFJ", "ESFJ工但兒時國變聲醫高向護"],
    ["ESFP", "ESFP指只清品女張"],
    ["ENTJ", "ENTJ人事主科還媽我"],
    ["ENTP", "ENTP照現人讀了經李大話"],
    ["ENFJ", "ENFJ頭孩沒靜們局愛是"],
    ["ENFP", "ENFP出易香故運連種連不難看"],
    ["ISTJ", "ISTJ聞在候死專到字止標來達共"],
    ["ISTP", "ISTP動負日事需他聲一看物現"],
    ["ISFJ", "ISFJ面如這地靜主"],
    ["ISFP", "ISFP場上個市時的此注！決前？"],
    ["INTJ", "INTJ花實樣阿生、司自開歌國然電"],
    ["INTP", "INTP樹她真，心的滿"],
    ["INFJ", "INFJ雄是家，事把它能"],
    ["INFP", "INFP族不白們"]
]);
var picture = new Map([
    ["ESTJ", "https://i.pinimg.com/originals/e7/3a/ec/e73aec98fa6c84d35985ab13d8d17ba0.png"],
    ["ESTP", ""],
    ["ESFJ", ""],
    ["ESFP", ""],
    ["ENTJ", ""],
    ["ENTP", ""],
    ["ENFJ", ""],
    ["ENFP", ""],
    ["ISTJ", ""],
    ["ISTP", ""],
    ["ISFJ", ""],
    ["ISFP", ""],
    ["INTJ", ""],
    ["INTP", ""],
    ["INFJ", ""],
    ["INFP", ""]
]);

//#TODO: Use the DOM to create variables for the first quiz question.
//first question
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
// //second question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
// //third question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
// //fourth question
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
// //fifty question
// var q5a1 = document.getElementById("q5a1");
// var q5a2 = document.getElementById("q5a2");

// //#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", resultE);
q1a2.addEventListener("click", resultI);

q2a1.addEventListener("click", resultS);
q2a2.addEventListener("click", resultN);

q3a1.addEventListener("click", resultT);
q3a2.addEventListener("click", resultF);

q4a1.addEventListener("click", resultJ);
q4a2.addEventListener("click", resultP);

//#TODO: Define quiz functions here
function resultE() {
    ansArray[0]++;
    questionCount++;
    if (questionCount >= 4) {
        updateResult();
    }
}
function resultI() {
    ansArray[1]++;
    questionCount++;
    if (questionCount >= 4) {
        updateResult();
    }
}
function resultS() {
    ansArray[2]++;
    questionCount++;
    if (questionCount >= 4) {
        updateResult();
    }
}
function resultN() {
    ansArray[3]++;
    questionCount++;
    if (questionCount >= 4) {
        updateResult();
    }
}
function resultT() {
    ansArray[4]++;
    questionCount++;
    if (questionCount >= 4) {
        updateResult();
    }
}
function resultF() {
    ansArray[5]++;
    questionCount++;
    if (questionCount >= 4) {
        updateResult();
    }
}
function resultJ() {
    ansArray[6]++;
    questionCount++;
    if (questionCount >= 4) {
        updateResult();
    }
}
function resultP() {
    ansArray[7]++;
    questionCount++;
    if (questionCount >= 4) {
        updateResult();
    }
}


function updateResult() {
    //must be odd questions
    for(i = 0; i < ansArray.length; i+=2)
    {
        if(ansArray[i] > ansArray[i + 1])
        {
            ansString = ansString + numTrans[i];
        }
        else if(ansArray[i] < ansArray[i + 1])
        {
            ansString = ansString + numTrans[i + 1];
        }
    }
    console.log(ansString);
    console.log(colorTransMap.get(ansString));
    resultTitle.innerHTML = ansString;
    resultDescription.innerHTML = description.get(ansString);
    document.getElementById("resultPicture").src = picture.get(ansString);
}