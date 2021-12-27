//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var ansArray = [0, 0, 0, 0, 0, 0, 0, 0]; //E外向, I內向, S實感, N直覺, T思考, F情感, J判斷, P感知
var ansString = '';
var numTrans = ["E", "I", "S", "N", "T", "F", "J", "P"];
var colorTransMap = new Map([
    ["ESTJ", "仙人掌綠"],["ESTP", "薔薇粉"],["ESFJ", "香檳色"],["ESFP", "甜蜜粉"],
    ["ENTJ", "深牡丹藍"],["ENTP", "火焰紅"],["ENFJ", "藏青色"],["ENFP", "蒲公英色"],
    ["ISTJ", "青綠色"],["ISTP", "橘色"],["ISFJ", "香草色"],["ISFP", "嫩芽綠"],
    ["INTJ", "灰"],["INTP", "籃紫色"],["INFJ", "淺咖啡色"],["INFP", "海洋藍"]
]);
var description = new Map([
    ["ESTJ", "你腳踏實地而實事求是，是獨立、理性且令人信服的領導者，你拒絕讓主管的情緒影響自己的決策過程，以業務為重且雄心勃勃。可能被人視為是鐵石心腸和缺乏激情，但這樣冷酷的人們往往有卓越表現，成功且強大，堪稱叢林之王。"],
    ["ESTP", "你知道如何適應環境並影響他人，更甚至是操縱他人，你活躍、衝動和有趣。你是親身實踐的學習者，這些人引人注意且充滿魅力和影響力，總是尋找生活中中最美事物並希望與朋友分享。對各種情形開放，有能力通過臨場發揮得到滿意的結果。你是活躍的人，想要解決問題，而非僅僅是討論它。"],
    ["ESFJ", "你最大的特徵是人際關係上的洞察力，善於迅速察覺周圍人的感情變化。你都是真實可靠的人，這種類型的人總是把最好的給別人，非常關心身邊的人，尤其是對朋友和家人。通過真摯地關心他人，表達熱情。你善於發現別人的長處，也希望理解他人的主張。"],
    ["ESFP", "你想要盡可能享受生活經歷。你只喜歡「順其自然」，享受自己的時光。活在當下，把生活體驗到極致。你喜歡別人，也喜歡物質上的舒適。你總能找到創造性的方式或是體驗新事物來滿足自己的需求，很少讓傳統和習俗阻礙自己。"],
    ["ENTJ", "你坦率、果斷、隨時承擔領導職責。你實事求是，坦誠正直。努力完善社會並想要成為組織和政府的一部分，不願走出自己的舒適區去嘗試新事物，但善於交際，喜歡良好的溝通。也樂於擴展你的知識並且傳授給他人。在展示你的觀點時候非常有說服力。"],
    ["ENTP", "你是深刻的思想家，他們機智、聰明、應變能力強，你喜歡分析問題的各個方面。在做決定的時候，你通常更多地基於邏輯，而不是對人情世故的考慮。你也可能很健談，特別推崇智力和能力的人，富有創意。你會保留意見或推遲作出重要的決定，更傾向於「開放選擇權」，更能應對變化。"],
    ["ENFJ", "你非常善於交際，你往往很快就能和別人相處得很好。甚至有時順從周圍人的價值觀，你忠誠，希望別人也能忠誠。當你喜歡與周圍人同歡共樂，是朋友和家人的強有力支持者，你討厭欺凌並對他們所愛的人投入深情。這類型著眼未來, 著重可能性及預感, 從潛意識及事物間的關聯來理解世界。"],
    ["ENFP", "你溫暖熱情而富於想像力。視生活充滿著各種可能性。你有無限的能量，極其渴望學習新事物和結識新朋友。這些人具有創造力和有感染力的快樂，你給身邊的人帶來快樂並敏銳地意識到他們的需求，你熱情奔放有人緣，但也很容易感到厭煩。"],
    ["ISTJ", "你是忠誠、邏輯性、有組織、明智而真誠的傳統主義者。你是非常專心的工作者，將分心的事物關在門外，會盡一切努力將工作做到最佳。具有一切追求務實人們的良好聲譽，你值得信賴、縝密、理性和嚴肅，至於消極的一面，你有很好的意圖，但有時很難與他人的情感需求溝通。"],
    ["ISTP", "你很有競爭力，座右銘是「共生共榮」。你對於桎梏戒律不屑一顧，並希望他人不干涉他們的個人事務。這些人天生安靜且擅長分析，往往對於工程類的技術領域情有獨鍾，常規俗套很快讓他們不勝其煩，喜歡搞清楚事情的來龍去脈。"],
    ["ISFJ", "你喜歡將事物保持和諧有秩序，尊重別人的情感並且接受那些和自己不同的人。你在處理自己分內事情的時候腳踏實地、一絲不苟。雖然生性寧靜，你卻以人為本且觀察力敏銳。你安靜、信任並且體貼他人，有時候被描述為非常情緒化卻又值得信賴。"],
    ["ISFP", "你喜歡按照自己的節奏生活，傾向於活在當下，隨時隨地享受生活，儘管安靜內斂，你卻也討人喜歡、體貼、關懷，為你生命中的人獻身。你的價值觀對自己很重要，但你並非為了自己的價值觀而戰爭的人，你並不懶惰只是比一般人更隨興。"],
    ["INTJ", "你特立獨行、聰慧、極具創造性，而且傾向於比其它類型更不那麼社交性，對其他人的事又漠不關心。當你得到獨處的自由，最能發揮自己的最佳能力，你知道自己具有甚麼樣的聰明才智，通常對於複雜的思想和理論充滿激情。你通常以最佳的模式，安靜堅定地發展他們的想法、理論和原則。"],
    ["INTP", "你是安靜、有思想、善於解析的個體。你善於分析並且體貼他人，喜歡單獨工作，處於社交場所經常感到不舒服。儘管你不是很善於交際，但聰明又言語刻薄，聽到人們喜歡與他們為伴會感到驚訝。這些人不耐煩於層次結構和政治問題，寧願看到自己的主管以個人的才能來肯定自己，並非以魅力或影響力來展示自身價值。"],
    ["INFJ", "你是有責任心、受價值觀驅使的類型。你將直覺及清晰而充滿自信的洞察力運用在現實生活中，因而讓你擁有更好的人生目標。通常是一些極富創造性、鼓舞人心和敏感的人，相比之下，你不太透露個人信息，除非你完全信任對方。這些人是忠於自己的價值觀，往往被視為保護者以及天生的領導者。"],
    ["INFP", "你將你的精力主要集中於內在世界，這世界裡充滿了強烈的感情和堅定的倫理道德信念。你根據自己的價值觀去生活，這些人相信自己的價值觀，是理想主義者，你忠誠於家人和朋友。你絕不會接受任何威脅，你對自己周圍的一切充滿好奇心。"]
]);
var picture = new Map([
    ["ESTJ", "img/color-ESTJ.png"],
    ["ESTP", "img/color-ESTP.png"],
    ["ESFJ", "img/color-ESFJ.png"],
    ["ESFP", "img/color-ESFP.png"],
    ["ENTJ", "img/color-ENTJ.png"],
    ["ENTP", "img/color-ENTP.png"],
    ["ENFJ", "img/color-ENFJ.png"],
    ["ENFP", "img/color-ENFP.png"],
    ["ISTJ", "img/color-ISTJ.png"],
    ["ISTP", "img/color-ISTP.png"],
    ["ISFJ", "img/color-ISFJ.png"],
    ["ISFP", "img/color-ISFP.png"],
    ["INTJ", "img/color-INTJ.png"],
    ["INTP", "img/color-INTP.png"],
    ["INFJ", "img/color-INFJ.png"],
    ["INFP", "img/color-INFP.png"]
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
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");

var q10a1 = document.getElementById("q10a1");
var q10a2 = document.getElementById("q10a2");

var q11a1 = document.getElementById("q11a1");
var q11a2 = document.getElementById("q11a2");

var q12a1 = document.getElementById("q12a1");
var q12a2 = document.getElementById("q12a2");

// //#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", resultE);
q1a2.addEventListener("click", resultI);

q2a1.addEventListener("click", resultS);
q2a2.addEventListener("click", resultN);

q3a1.addEventListener("click", resultT);
q3a2.addEventListener("click", resultF);

q4a1.addEventListener("click", resultJ);
q4a2.addEventListener("click", resultP);

q5a1.addEventListener("click", resultE);
q5a2.addEventListener("click", resultI);

q6a1.addEventListener("click", resultS);
q6a2.addEventListener("click", resultN);

q7a1.addEventListener("click", resultT);
q7a2.addEventListener("click", resultF);

q8a1.addEventListener("click", resultJ);
q8a2.addEventListener("click", resultP);

q9a1.addEventListener("click", resultT);
q9a2.addEventListener("click", resultF);

q10a1.addEventListener("click", resultS);
q10a2.addEventListener("click", resultN);

q11a1.addEventListener("click", resultE);
q11a2.addEventListener("click", resultI);

q12a1.addEventListener("click", resultJ);
q12a2.addEventListener("click", resultP);


//#TODO: Define quiz functions here
function resultE() {
    ansArray[0]++;
    questionCount++;
    if (questionCount >= 12) {
        updateResult();
    }
}
function resultI() {
    ansArray[1]++;
    questionCount++;
    if (questionCount >= 12) {
        updateResult();
    }
}
function resultS() {
    ansArray[2]++;
    questionCount++;
    if (questionCount >= 12) {
        updateResult();
    }
}
function resultN() {
    ansArray[3]++;
    questionCount++;
    if (questionCount >= 12) {
        updateResult();
    }
}
function resultT() {
    ansArray[4]++;
    questionCount++;
    if (questionCount >= 12) {
        updateResult();
    }
}
function resultF() {
    ansArray[5]++;
    questionCount++;
    if (questionCount >= 12) {
        updateResult();
    }
}
function resultJ() {
    ansArray[6]++;
    questionCount++;
    if (questionCount >= 12) {
        updateResult();
    }
}
function resultP() {
    ansArray[7]++;
    questionCount++;
    if (questionCount >= 12) {
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
    resultTitle.innerHTML = colorTransMap.get(ansString);
    resultDescription.innerHTML = description.get(ansString);
    document.getElementById("resultPicture").src = picture.get(ansString);
    $("a").attr("href", "./" + ansString + ".html");
}