class ChoiceSexPage {
    render(container) {
        container.innerHTML = `
<div class="container-main container-main-choice-sex">
<div class="container-main__img">
        <img src="img/heart_yellow.png" alt="heart picture">
      </div>
      <div class="choice-sex">
        <div class="action">
          <p class="action__tittle">Lorem ipsum</p>
          <div class="action__button">

            <div class="button_choice" data-sex ='A' data-number = '40'>
           
               <img class="button_choice__icon show"  src="img/icon_man.png" alt="icon_man">

           
             
             
              <span class="button_choice__name">Вариант А</span>
            </div>

            <div class="button_choice" data-sex ='Б' data-number = '60'>
              <img class="button_choice__icon"  src="img/icon_woman.png" alt="icon_woman">
              <span class="button_choice__name">Вариант Б</span>
            </div>


          </div>
           <div style="display: none" class="button" id="button_next__sex">
           <span class="button_name" >
             Продолжить
           </span>
          </div>
        </div>

      </div>
 </div>
    `;
        this.buttons = [...document.querySelectorAll('.button_choice')];
        this.buttons.forEach(e => {
            e.addEventListener('click', this.onChoiceClick.bind(this))
        });
        this.buttonNext = document.querySelector('#button_next__sex');

        this.buttonNext.addEventListener('click', function (e) {
            screenSlide.nextSlide();
            overlay.hide()
        });


        document.querySelector('.container-main')
            .style
            .setProperty('--main-color', '#fcc150')
    }

    onChoiceClick(e) {
        this.buttons.forEach(b => {
            b.classList.remove('button_choice--selected')
        });
        e.currentTarget.classList.add('button_choice--selected');

        this.buttonNext.style.display = 'block';
        overlay.show('#fcc150', `
            <p class="overlay__message_tittle">
              ${e.currentTarget.dataset.number}%
            </p>
            <p class="overlay__message_text">пользователей - вариант ${e.currentTarget.dataset.sex}</p>

          `)

    }


}