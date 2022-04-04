
//direct approach

let questions_list = document.querySelectorAll(".question");

//console.log(questions_list);

questions_list.forEach(function (question) {

    let question_button = question.querySelector(".question-button");
    // console.log(question_button);

    question_button.addEventListener("click", function () {


        questions_list.forEach(function (item) {

            if (item !== question) {
                item.classList.remove("show-text");
            }
            question.classList.toggle("show-text");

        });

    });
});



// //documenting searching approach

// let btns = document.querySelectorAll(".question-button");

// //console.log("one");
// btns.forEach(function (button)
// {
//     button.addEventListener("click", function (event)
//     {
//         // console.log("three");
//         // console.log(event.currentTarget.parentElement.parentElement);
//         let myChoice=event.currentTarget.parentElement.parentElement;
//         myChoice.classList.toggle("show-text");

//         console.log("Done");
//     });
// });