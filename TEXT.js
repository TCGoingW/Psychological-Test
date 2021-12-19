// function range(start, stop, step) {
//     if (typeof stop == 'undefined') {
//         // one param defined
//         stop = start;
//         start = 0;
//     }

//     if (typeof step == 'undefined') {
//         step = 1;
//     }

//     if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
//         return [];
//     }

//     var result = [];
//     for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
//         result.push(i);
//     }

//     return result;
// };

// var TESTS = [
//     {
//         info : {
//             mainTitle:"颜色心理测试性格篇",
//             subTitle:"最适合我的颜色是什么？ K测试 你的颜色是？",
//             mainUrl:"personalColorCN",
//             scoreType:"typeCountingMBTI",
//             mainImage:"https://images.ktestone.com/introImages/personalColorCN-intro.png",
//             thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorCN-thumb.png"
//         },
//         questions:[
//             {
//                 which:"EI",
//                 question: '初次结识的朋友面前我是？',
//                 answers:[
//                     {
//                         type: "E",
//                         score: 2,
//                         content: '通常我先说话。'
//                     },
//                     {
//                         type: "I",
//                         score: 5,
//                         content: '通常对方先说话。'
//                     },
//                 ],
//             },
//             {
//                 which:"EI",
//                 question: "周末我会？",
//                 answers:[
//                     {
//                         type: "E",
//                         score: 2,
//                         content: "喜欢和其他人见面。"
//                     },
//                     {
//                         type: "I",
//                         score: 5,
//                         content: "并不介意独自度过。"
//                     },
//                 ]
//             },
//             {
//                 which:"EI",
//                 question: "和朋友们出行时我是？",
//                 answers:[
//                     {
//                         type: "E",
//                         score: 2,
//                         content: "喜欢喧嚣热闹的气氛。"
//                     },
//                     {
//                         type: "I",
//                         score: 5,
//                         content: "喜欢和少数朋友们一起聊天。"
//                     },
//                 ]
//             },
//             {
//                 which:"SN",
//                 question: "我认为更重要的是？",
//                 answers:[
//                     {
//                         type: "S",
//                         score: 2,
//                         content: "没有现在就意味着没有未来。"
//                     },
//                     {
//                         type: "N",
//                         score: 5,
//                         content: "不考虑未来的话就不会有进步。"
//                     },
//                 ]
//             },
//             {
//                 which:"SN",
//                 question: "工作时的我是？",
//                 answers:[
//                     {
//                         type: "S",
//                         score: 2,
//                         content: "更偏向跟随别人的脚步。"
//                     },
//                     {
//                         type: "N",
//                         score: 5,
//                         content: "更偏向采取自己的方式。"
//                     },
//                 ]
//             },
//             {
//                 which:"SN",
//                 question: "周围的人认为我是？",
//                 answers:[
//                     {
//                         type: "S",
//                         score: 2,
//                         content: "经常说我很有耐心和恒心。"
//                     },
//                     {
//                         type: "N",
//                         score: 5,
//                         content: "经常说我很有自己独创的思维。"
//                     },
//                 ]
//             },
//             {
//                 which:"TF",
//                 question: "遇到必须拒绝的情况时，我会？",
//                 answers:[
//                     {
//                         type: "T",
//                         score: 2,
//                         content: "直接了当地拒绝。"
//                     },
//                     {
//                         type: "F",
//                         score: 5,
//                         content: "深思熟虑后也往往会顺从。"
//                     },
//                 ]
//             },
//             {
//                 which:"TF",
//                 question: "我生气的时候会？",
//                 answers:[
//                     {
//                         type: "T",
//                         score: 2,
//                         content: "说得很有道理，同时也很计较。"
//                     },
//                     {
//                         type: "F",
//                         score: 5,
//                         content: "想说的话很多，但因为太生气，往往眼泪先流出来。"
//                     },
//                 ]
//             },
//             {
//                 which:"TF",
//                 question: "朋友向我诉说烦恼，我却觉得是朋友的错时，我会？",
//                 answers:[
//                     {
//                         type: "T",
//                         score: 2,
//                         content: "告诉他错的原因。"
//                     },
//                     {
//                         type: "F",
//                         score: 5,
//                         content: "直接了当地说的话担心朋友会伤心，所以故意绕着弯子说。"
//                     },
//                 ]
//             },
//             {
//                 which:"JP",
//                 question: "做准备工作时的我会？",
//                 answers:[
//                     {
//                         type: "J",
//                         score: 2,
//                         content: "提前一天做好准备。"
//                     },
//                     {
//                         type: "P",
//                         score: 5,
//                         content: "总想着‘明天再说明天再说’，经常忘记。"
//                     },
//                 ]
//             },
//             {
//                 which:"JP",
//                 question: "结束了一天的日程回家后准备学习，结果朋友们突然叫我出去玩，这时我会？",
//                 answers:[
//                     {
//                         type: "J",
//                         score: 2,
//                         content: "不在我的计划范围内…很纠结。"
//                     },
//                     {
//                         type: "P",
//                         score: 5,
//                         content: "OK！果然人生不会按计划走！玩起！！！"
//                     },
//                 ]
//             },
//             {
//                 which:"JP",
//                 question: "总体上我是？",
//                 answers:[
//                     {
//                         type: "J",
//                         score: 2,
//                         content: "按我的计划进行！更偏向按计划的顺序进行！"
//                     },
//                     {
//                         type: "P",
//                         score: 5,
//                         content: "想起什么就先做什么！更偏向灵活处理！"
//                     },
//                 ]
//             },
//         ],
//         results:[
//             {
//                 type: "ESTJ",
//                 desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
//                 `,
//                 query: "ESTJ",
//                 score_range:range(26),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ESTJ.png'
//             },
//             {
//                 type: "ESTP",
//                 desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
//                 query: "ESTP",
//                 score_range:range(26, 51),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ESTP.png'
//             },
//             {
//                 type: "ESFJ",
//                 desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
//                 query: "ESFJ",
//                 score_range:range(51, 75),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ESFJ.png'
//             },
//             {
//                 type: "ESFP",
//                 desc: `친숙한 댕댕이 , 리트리버\n`,
//                 query: "ESFP",
//                 score_range:range(76, 101),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ESFP.png'
//             },
//             {
//                 type: "ENTJ",
//                 desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
//                 query: "ENTJ",
//                 score_range:range(76, 101),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ENTJ.png'
//             },
//             {
//                 type: "ENTP",
//                 desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
//                 `,
//                 query: "ENTP",
//                 score_range:range(26),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ENTP.png'
//             },
//             {
//                 type: "ENFJ",
//                 desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
//                 query: "ENFJ",
//                 score_range:range(26, 51),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ENFJ.png'
//             },
//             {
//                 type: "ENFP",
//                 desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
//                 query: "ENFP",
//                 score_range:range(51, 75),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ENFP.png'
//             },
//             {
//                 type: "ISTJ",
//                 desc: `친숙한 댕댕이 , 리트리버\n`,
//                 query: "ISTJ",
//                 score_range:range(76, 101),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ISTJ.png'
//             },
//             {
//                 type: "ISTP",
//                 desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
//                 query: "ISTP",
//                 score_range:range(76, 101),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ISTP.png'
//             },
//             {
//                 type: "ISFJ",
//                 desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
//                 query: "ISFJ",
//                 score_range:range(76, 101),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ISFJ.png'
//             },
//             {
//                 type: "ISFP",
//                 desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
//                 `,
//                 query: "ISFP",
//                 score_range:range(26),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/ISFP.png'
//             },
//             {
//                 type: "INTJ",
//                 desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
//                 query: "INTJ",
//                 score_range:range(26, 51),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/INTJ.png'
//             },
//             {
//                 type: "INTP",
//                 desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
//                 query: "INTP",
//                 score_range:range(51, 75),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/INTP.png'
//             },
//             {
//                 type: "INFJ",
//                 desc: `친숙한 댕댕이 , 리트리버\n`,
//                 query: "INFJ",
//                 score_range:range(76, 101),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/INFJ.png'
//             },
//             {
//                 type: "INFP",
//                 desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
//                 query: "INFP",
//                 score_range:range(76, 101),
//                 img_src:'https://images.ktestone.com/resultImages/personalColorCN/INFP.png'
//             },
//         ]
//     }
// ]
//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
//first question
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
// var q1a3 = document.getElementById("q1a3");
// var q1a4 = document.getElementById("q1a4");
// //second question
// var q2a1 = document.getElementById("q2a1");
// var q2a2 = document.getElementById("q2a2");
// var q2a3 = document.getElementById("q2a3");
// var q2a4 = document.getElementById("q2a4");
// //third question
// var q3a1 = document.getElementById("q3a1");
// var q3a2 = document.getElementById("q3a2");
// var q3a3 = document.getElementById("q3a3");
// var q3a4 = document.getElementById("q3a4");
// //fourth question
// var q4a1 = document.getElementById("q4a1");
// var q4a2 = document.getElementById("q4a2");
// var q4a3 = document.getElementById("q4a3");
// var q4a4 = document.getElementById("q4a4");
// //fifty question
// var q5a1 = document.getElementById("q5a1");
// var q5a2 = document.getElementById("q5a2");
// var q5a3 = document.getElementById("q5a3");
// var q5a4 = document.getElementById("q5a4");
// var result = document.getElementById("result");

// //#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
// q1a3.addEventListener("click", result3);
// q1a4.addEventListener("click", result4);

// q2a1.addEventListener("click", result1);
// q2a2.addEventListener("click", result2);
// q2a3.addEventListener("click", result3);
// q2a4.addEventListener("click", result4);

// q3a1.addEventListener("click", result1);
// q3a2.addEventListener("click", result2);
// q3a3.addEventListener("click", result3);
// q3a4.addEventListener("click", result4);

// q4a1.addEventListener("click", result1);
// q4a2.addEventListener("click", result2);
// q4a3.addEventListener("click", result3);
// q4a4.addEventListener("click", result4);

// q5a1.addEventListener("click", result1);
// q5a2.addEventListener("click", result2);
// q5a3.addEventListener("click", result3);
// q5a4.addEventListener("click", result4);

//#TODO: Define quiz functions here
function result1() {
    result1Score++, questionCount++;
    //alert("One Point to Gryffindor!");
    if (questionCount >= 2) {
        updateResult();
    }
}
function result2() {
    result2Score++, questionCount++;
    if (questionCount >= 5) {
        updateResult();
    }
}
function result3() {
    result3Score++, questionCount++;
    if (questionCount >= 5) {
        updateResult();
    }
}
function result4() {
    result4Score++, questionCount++;
    if (questionCount >= 5) {
        updateResult();
    }
}
function updateResult() {
    if (result1Score == 2) {
        result.innerHTML = "🚀You’ll go to Mars with X Æ A-Xii.";
    }
    else
    {
        result.innerHTML ="B";
    }
}