//아이디, 성공메시지, 실패메시지, 비밀번호, 비밀번호 확인, 비밀번호 확인 메시지를 가지고 온다.
const inputUsername = document.querySelector('#username');
const failureMessage = document.querySelector('.failure-message');
const successMessage = document.querySelector('.success-message');
const checkValidId = document.querySelector('.id-button');
const inputPassword = document.querySelector('#password');
const inputPasswordRetype = document.querySelector('#password-retype');
const missmatchMessage = document.querySelector('.missmatch-password');

//아이디 길이가 4자리 이상이면 성공메시지, 그 외에는 실패 메시지
function isMorethan4Length(value) {
    if(value.length>=4) {
        alert('사용 가능한 ID입니다.');
        // successMessage.classList.remove('hide');
        // failureMessage.classList.add('hide');
    } else {
        alert('ID는 4자리 이상으로 만들어주세요.');
        // successMessage.classList.add('hide');
        // failureMessage.classList.remove('hide');
    }
}

function isMatched(password1, password2) {
    if(password1 === password2) {
        missmatchMessage.classList.add('hide');
    } else {
        missmatchMessage.classList.remove('hide');
    }
}

checkValidId.onclick = () => {
    isMorethan4Length(inputUsername.value);
}

inputPasswordRetype.onkeyup = () => {
    isMatched(inputPassword.value, inputPasswordRetype.value);
}