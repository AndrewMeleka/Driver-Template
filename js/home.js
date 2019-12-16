const myLi = document.getElementsByClassName("nav-item");

function removeAllClassExcept(exceptObj){
    var myTextObj = exceptObj.innerText;
    for (var i = 0; i < myLi.length; i++){
        if (myLi[i].innerText != myTextObj){
            myLi[i].classList.remove("active");
        }
    }
}
function changeMe(myObject){
    myObject.classList.add("active");
    removeAllClassExcept(myObject);
}
myLi[0].onclick = function () {
    changeMe(myLi[0]);
};
myLi[1].onclick = function () {
    changeMe(myLi[1]);
};
myLi[2].onclick = function () {
    changeMe(myLi[2]);
};
