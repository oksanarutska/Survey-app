class LoginPage {
    render(container) {
        container.innerHTML = `
<div class="container-main container-main-login">
<div class="container-main__img">
        <img src="img/heart_blue.png" alt="heart picture">
      </div>
<div class="login">
        <div class="action">
          <p class="action__tittle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consequuntur et!</p>
          <div class="action__login">
              <form>
                <div class="action__login_user">
              <p class="action__login_user__text">Я ищу:</p>
              <div class="action__login_user__button">
                <label class="button_choice sex  container_label">
                <img class="button_choice__icon" src="img/icon_man.png" alt="icon_man">
                <p class="button_choice__name">Вариант А</p>
                <input required type="radio" name="sex">
                  <span class="button_choice__name"></span>
                </label>

                <label class="button_choice sex  container_label container_label--woman">
                 <img class="button_choice__icon" src="img/icon_woman.png" alt="icon_woman">
                <p class="button_choice__name">Вариант А</p>
                <input required type="radio" name="sex">
                  <span class="button_choice__name"></span>
                </label>
              </div>
            </div>
               <div class="action__login_user">
              <p class="action__login_user__text">Ваше имя:</p>
              <div class="action__login_user__form">

                <input id="name" type="text" required class="action__login_user__form_input">


              </div>
            </div>
            <div class="action__login_user">
              <p class="action__login_user__text">Email:</p>
              <div class="action__login_user__form">
                <input id="email" type="email" required class="action__login_user__form_input">
              </div>
            </div>
            <div class="action__login_user">
              <p class="action__login_user__text">Придумайте пароль:</p>
              <div class="action__login_user__form">
                <input  id="password" type="password" required class="action__login_user__form_input">
               </div>
            </div>
            <div class="action__login_user__age">
              <input type="checkbox" id="terms" required>
              <p class="action__login_user__age-description" id="terms_text">Регистрируясь, вы подтверждаете, что вам уже исполнилось 18
               </p>
            </div>
            <div class="action__login_user">
              <button type="submit" id="submit" class="button button_login">
           <span class="button_name button_login-name">
             Продолжить
           </span>
              </button>
            </div>
</form>
         
          </div>
        </div>

      </div>
</div>
    `;

        this.button = [...document.querySelectorAll('.container_label')];
        this.button.forEach(b => {
            b.addEventListener("click", (e) => {
                this.button.forEach(x => x.classList.remove('button_choice--selected'))
                b.classList.add('button_choice--selected');
            })
        });


        document.querySelector('.container-main')
            .style
            .setProperty('--main-color', '#1da7c0');


        let formFields = [
            new Formfield(document.querySelector('#name'), {require: true}, 'Введите свое имя'),
            new Formfield(document.querySelector('#email'), {require: true, email: true}, 'Неверный формат email'),
            new Formfield(document.querySelector('#password'), {require: true}, 'Придумайте новый пароль'),
            new Formfield(document.querySelector('#terms'), {require: true}),
            new Formfield(document.querySelector('*[name="sex"]'), {require: true}),
        ];

        let form = new Form(formFields);

        document.querySelector('#submit').addEventListener('click', function (e) {
            if (!form.isValid()) {
                alert('Поля не заполнены!');
                e.preventDefault();
                return
            }

            alert('Спасибо за регистрацию!')
        })


    }


}