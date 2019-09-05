function Formfield() {

        var inputElement = document.querySelector('.action__login_user__form_input');


        var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var isCheckBox = inputElement.type === 'checkbox';
        var isRadio = inputElement.type === 'radio';
        var radioButtons = [...document.querySelectorAll(`input[name="${inputElement.name}"]`)];

        var value = isCheckBox || isRadio
            ? inputElement.checked
            : inputElement.value;

        if (inputElement.require) {
            if (isCheckBox && !value) {
                inputElement.nextElementSibling.style.color = 'red';
                return false
            }

            if (isRadio && radioButtons.every(r => !r.checked)) {
                radioButtons.forEach(rb => rb.parentElement.classList.add('form_input--error'));
                return false
            }

            if (!isRadio && !value) {
                this.inputElement.classList.add('form_input--error');
                this.inputElement.nextElementSibling.style.display = 'block';
                return false
            }
        }

        if (this.options.email && !emailRegExp.test(value)) {
            this.inputElement.classList.add('form_input--error');
            return false
        }

        if (isCheckBox) {
            this.inputElement.nextElementSibling.style.color = 'black'

        } else if (isRadio) {
            radioButtons.forEach(rb => rb.parentElement.classList.remove('form_input--error'))
        }else {
            this.inputElement.classList.remove('form_input--error');
        }

        return true

}