(function(){
    const form = document.querySelector('.form__content');
    const formButton = document.querySelector(".form__button");
    const overlayForm = document.querySelector(".popup-overlay__form");

    formButton.addEventListener('click', function(event){
      event.preventDefault();

      // Если введенные данные валидны, отправляем запрос
      if(validateForm(form)){
        const formData = new FormData();
        formData.append("name", form.elements.name);
        formData.append("email", form.elements.email);
        formData.append("comment", form.elements.message);

        const xhr = new XMLHttpRequest();

        if(xhr.status >= 400){
          sendModalWindow("Произошла ошибка!");
        } else {
          //xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
          //xhr.send(formData);
          sendModalWindow("Сообщение отправлено!");
        }
      }
    });

    // Проверка валидности данных
    function validateForm(form){ 
      // Доступ к полям формы
      var name = form.elements.name;
      var email = form.elements.email;
      let isCheck = true;
      
      // Удаляем, если на ком-то уже висели ошибки
      // и проверяем, не остались ли пустые поля
      [...form.elements].forEach((elem) => {
        deleteErrorMessage(elem);

        if(elem.value === ""){
          addErrorMessage(elem, "Поле не может быть пустым");
          isCheck = false;
        }
      });

      // Проверка корректности введенного имени
      validateName(name);
      // Проверка корректности введенного email
      validateEmail(email);

      if(isCheck){
        return true;
      }else
        return false;
 
    };

    function validateName(name){
      if(name.value === "####"){
        addErrorMessage(name, "Некорректное имя");
        isCheck == false;
      }
    };
   
    function validateEmail(email) {
      if(email.value === "#####"){
        addErrorMessage(email, "Некорректный адрес");
        isCheck == false;
      }
      // Из документации по Vue
      //var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //return re.test(email);
    };

    [...form.elements].forEach((elem) => {
      elem.addEventListener('focus', e =>{
        deleteErrorMessage(elem);
      });
    });

    function addErrorMessage(elem, message){
      let parrent = elem.parentElement.parentElement;
      let messagContainer = document.createElement('div');
      
      messagContainer.classList.add('form-error__item');
      messagContainer.innerHTML = message;
      
      parrent.appendChild(messagContainer);
      parrent.classList.add('form-error');
    };

    function deleteErrorMessage(elem){
      let parent = elem.parentElement.parentElement;
      let error = parent.querySelector('.form-error__item');
      if(error){
        parent.removeChild(error);
      }
      parent.classList.remove('form-error');
      isCheck = true;
    }
    


    // Навешиваем модальное окно
    // Меняем сообщение в зависимости от результата отправки
    function sendModalWindow(message){
      const popupContent = document.querySelector(".popup-content__form");
      overlayForm.classList.add('opened__form');
      popupContent.textContent = message;
    }

    // Закрываем модальное окно по клику на кнопку
    const popupCloseBtn = document.querySelector(".popup-close__form");
    popupCloseBtn.addEventListener('click', e => {
      overlayForm.classList.remove('opened__form');
    });

    // Закрываем окно, если нажали по overlay
    overlayForm.addEventListener('click', function(event){
      if(event.target == overlayForm){
        popupCloseBtn.click();
      }
    });
})();