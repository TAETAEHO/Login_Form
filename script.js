//아이디, 성공메시지, 실패메시지, 비밀번호, 비밀번호 확인, 비밀번호 확인 메시지를 가지고 온다.
const inputUsername = document.querySelector('#username');
const failureMessage = document.querySelector('.failure-message');
const failrueOtherMessage = document.querySelector('.failure-message2');
const successMessage = document.querySelector('.success-message');
const inputPassword = document.querySelector('#password');
const inputPasswordRetype = document.querySelector('#password-retype');
const missmatchMessage = document.querySelector('.missmatch-password');

inputUsername.onkeyup = () => {
    onlyNumberAndEnglish(inputUsername.value);
    isMorethan4Length(inputUsername.value);
}

inputPasswordRetype.onkeyup = () => {
    isMatched(inputPassword.value, inputPasswordRetype.value);
}

//아이디 길이가 4자리 이상이면 성공메시지, 그 외에는 실패 메시지
function isMorethan4Length(value) {
    if(value.length>=4) {
        failureMessage.classList.add('hide');
    } else {
        successMessage.classList.add('hide');
        failureMessage.classList.remove('hide');
    }
}

// 아이디가 영어 또는 영어+숫자의 조합으로 되어야한다.
function onlyNumberAndEnglish(str) {
    if(/^[A-Za-z][A-Za-z0-9]*$/.test(str)) {
        successMessage.classList.remove('hide');
        failrueOtherMessage.classList.add('hide');
    } else {
        successMessage.classList.add('hide');
        failrueOtherMessage.classList.remove('hide');
    }
  }

function isMatched(password1, password2) {
    if(password1 === password2) {
        missmatchMessage.classList.add('hide');
    } else {
        missmatchMessage.classList.remove('hide');
    }
}

