class WelcomPage {
    render(container) {
        container.innerHTML = `
<div class="container-main">
    <div class="container-main__img">
        <img src="img/heart.png" alt="heart picture">
      </div>


     <div class="welcome">

        <div class="content">
          <h1 class="content__tittle">Lorem ipsum</h1>
          <p class="content__description">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>

        <div class="action">
          <p class="action__tittle">Lorem ipsum?</p>
          <div class="button" id="button_start">
           <span class="button_name" >
             Начать
           </span>
          </div>
        </div>

      </div>
      </div>
    `;
        document.querySelector('#button_start').addEventListener('click', function (e) {
            screenSlide.nextSlide();
        });
    }


}