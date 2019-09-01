class ChoicePage {
    render(container) {
        container.innerHTML = `
<div class="container-main container-main-choice" >
<div class="container-main__img">
        <img src="img/heart_orange.png" alt="heart picture">
      </div>
     <div class="choice">
        <div class="action">
          <p class="action__tittle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, repudiandae, sit!</p>
          <div class="action__button">
            <div class="button_choice" data-value="A" data-number = '30'>
              <span class="button_choice__name">Вариант А</span>
            </div>

            <div class="button_choice" data-value="Б" data-number = '20'>
              <span class="button_choice__name">Вариант Б</span>
            </div>

            <div class="button_choice" data-value="В" data-number = '50'>
              <span class="button_choice__name">Вариант В</span>
            </div>
          </div>
          
          <div style="display: none" class="button" id="button_next">
           <span class="button_name" >
             Продолжить
           </span>
          </div>
        </div>

      </div>
     </div>
    `;
        this.buttonNext = document.querySelector('#button_next');
        this.buttons = [...document.querySelectorAll('.button_choice')];
        this.buttons.forEach(e => {
            e.addEventListener('click', this.onChoiceClick.bind(this));
        });

        this.buttonNext.addEventListener('click', function (e) {
            screenSlide.nextSlide();
            overlay.hide()

        });

        document.querySelector('.container-main')
            .style
            .setProperty('--main-color', '#fc8950')
    }

    onChoiceClick(e) {
        this.buttons.forEach(b => {
            b.classList.remove('button_choice--selected')
        });
        e.currentTarget.classList.add('button_choice--selected');

        this.buttonNext.style.display = 'block';

        overlay.show('#fc8950',`
            <p class="overlay__message_tittle">
              ${e.currentTarget.dataset.number}%
            </p>
            <p class="overlay__message_text">люди обращают внимание на ${e.currentTarget.dataset.value}</p>

          `)
    }


}

