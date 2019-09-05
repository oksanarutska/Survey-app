function FormValidate() {
    var labelButtons = document.querySelectorAll('.container_label');

    document.querySelector('.container-main-login.container-main')
        .style
        .setProperty('--main-color', '#1da7c0');

    for (var i = 0; i < labelButtons.length; i++) {

        labelButtons[i].addEventListener('click', function (e) {
            for (var j = 0; j < labelButtons.length; j++) {
                labelButtons[j].classList.remove('button_choice--selected');
            }
            e.currentTarget.classList.add('button_choice--selected')
        })
    }

    function validateSex(){
        var radioButtons = [];
        for (var j = 0; j < document.querySelectorAll('input[name="sex"]').length; j++) {
            radioButtons.push(document.querySelectorAll('input[name="sex"]')[j])
        }
        var isSexSelected = radioButtons.some(function (e) {
            return e.checked
        });
        if (!isSexSelected) {
            for (var i = 0; i < labelButtons.length; i++) {
                labelButtons[i].classList.add('isError')
            }
            labelButtons[0].parentElement.nextElementSibling.classList.add('show');
            return false
        }
        else {
            for (var i = 0; i < labelButtons.length; i++) {
                labelButtons[i].classList.remove('isError');

            }
            labelButtons[0].parentElement.nextElementSibling.classList.remove('show');
        }
        return true

    }
    function validateName(nameInput) {
        var nameInputValue = nameInput.value.trim();
        var nameRegExp = /^[-а-яА-ЯёЁa-zA-Z]+$/;
        if (nameInputValue.length === 0) {
            nameInput.classList.add('isError');
            nameInput.nextElementSibling.innerHTML = 'Введите свое имя';
            nameInput.nextElementSibling.classList.add('show');
            return false
        }

        else if (!nameRegExp.test(nameInputValue)) {
            nameInput.classList.add('isError');
            nameInput.nextElementSibling.innerHTML = 'Пожалуйста, используйте только буквы';
            nameInput.nextElementSibling.classList.add('show');
            return false
        }
        else if (nameInputValue.length < 2) {
            nameInput.classList.add('isError');
            nameInput.nextElementSibling.innerHTML = 'Имя должно содержать не менее 2 букв';
            nameInput.nextElementSibling.classList.add('show');
            return false
        }
        else {
            nameInput.classList.remove('isError');
            nameInput.nextElementSibling.classList.remove('show');
        }
        return true
    }
    function validateEmail(emailInput){
        var emailInputValue = emailInput.value.trim();
        var emailRegExpChar = /^[@.a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
        var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailInputValue.length === 0) {
            emailInput.classList.add('isError');
            emailInput.nextElementSibling.classList.add('show');
            emailInput.nextElementSibling.innerHTML = 'Укажите свой email';
            return false
        }
        else if (!emailRegExp.test(emailInputValue)) {
            emailInput.classList.add('isError');
            emailInput.nextElementSibling.classList.add('show');
            emailInput.nextElementSibling.innerHTML = 'Неверный формат email';
            return false
        }
        else if (!emailRegExpChar.test(emailInputValue)) {
            emailInput.classList.add('isError');
            emailInput.nextElementSibling.classList.add('show');
            emailInput.nextElementSibling.innerHTML = 'Ваш email не валидный. Используйте только буквы (aA–zZ)';
            return false
        }
        else {
            emailInput.classList.remove('isError');
            emailInput.nextElementSibling.classList.remove('show');
        }
        return true
    }
    function validatePassword(passwordInput){
        var passwordInputValue = passwordInput.value.trim();
        if (passwordInputValue.length === 0) {
            passwordInput.classList.add('isError');
            passwordInput.nextElementSibling.classList.add('show');
            passwordInput.nextElementSibling.innerHTML = 'Придумайте новый пароль';
            return false
        }
        else {
            passwordInput.classList.remove('isError');
            passwordInput.nextElementSibling.classList.remove('show');
        }
        return true
    }
    function validateAge(checkBox) {
        if (!checkBox.checked) {
            checkBox.nextElementSibling.style.color = 'red';
            return false
        }
        else {
            checkBox.nextElementSibling.style.color = '#3b3b3b';
        }
        return true

    }

    for (var j = 0; j < document.querySelectorAll('input[name="sex"]').length; j++) {
        document.querySelectorAll('input[name="sex"]')[j].addEventListener('change', function (e) {
            validateSex(e.target);
        })
    }

    document.querySelector('#name').addEventListener('input', function (e) {
        validateName(e.target);
    });
    document.querySelector('#email').addEventListener('input',function (e) {
        validateEmail(e.target)
    });

    document.querySelector('#password').addEventListener('input', function (e) {
        validatePassword(e.target)
    });
    document.querySelector('#terms').addEventListener('change', function (e){
        validateAge(e.target)
    });


    document.querySelector('#submit').addEventListener('click', function (e) {
        var isError = false;

        if (!validateSex()) {
            isError = true
        }

        if (!validateName(document.querySelector('#name'))) {
            isError = true
        }
        if(!validateEmail(document.querySelector('#email'))){
            isError = true
        }
        if(!validatePassword(document.querySelector('#password'))){
            isError = true
        }
        if(!validateAge(document.querySelector('#terms'))){
            isError = true
        }


        if (isError) {
            e.preventDefault();
            document.querySelector('#submit').classList.add('isError')

        }
        else {
            document.querySelector('#submit').classList.remove('isError');
            alert('Поздравляю! Вы зарегистрировались!')
        }


    });
}
