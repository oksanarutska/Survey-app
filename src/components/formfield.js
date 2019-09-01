class Formfield {
    constructor(inputElement, options, message) {
        this.inputElement = inputElement;
        this.options = options;
        this.message = message

    }

    isValid() {
        let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let isCheckBox = this.inputElement.type === 'checkbox';
        let isRadio = this.inputElement.type === 'radio';
        let radioButtons = [...document.querySelectorAll(`input[name="${this.inputElement.name}"]`)];

        let value = isCheckBox || isRadio
            ? this.inputElement.checked
            : this.inputElement.value;

        if (this.options.require) {
            if (isCheckBox && !value) {
                this.inputElement.nextElementSibling.style.color = 'red';
                return false
            }

            if (isRadio && radioButtons.every(r => !r.checked)) {
                radioButtons.forEach(rb => rb.parentElement.classList.add('form_input--error'));
                return false
            }

            if (!isRadio && !value) {
                this.inputElement.classList.add('form_input--error');
                this.inputElement.placeholder = this.message;

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

}