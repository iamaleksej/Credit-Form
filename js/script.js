
    var slider = document.querySelector('.scale-slider_slider'),
        filling = document.querySelector('.scale-slider_filling'),
        pointer = document.querySelector('.scale-slider_pointer'),
        slider2 = document.querySelector('.scale-slider_slider2'),
        filling2 = document.querySelector('.scale-slider_filling2'),
        pointer2 = document.querySelector('.scale-slider_pointer2');


pointer.innerHTML = slider.value;
pointer2.innerHTML = slider2.value;


// создадим функцию позиционирования бэйджика
function setBagePosition(curentSlider, curentPointer, curentFilling){

  const radius = curentSlider.scrollHeight;
  const dxPixels = radius/2 + (curentSlider.valueAsNumber-parseInt(curentSlider.min))*(curentSlider.scrollWidth-radius)/(parseInt(curentSlider.max)-parseInt(curentSlider.min));

  // выставляем бэйджик в новую позицию
  curentPointer.style.left = dxPixels - (curentPointer.offsetWidth / 2) + 'px';
  curentFilling.style.width = dxPixels - (curentPointer.offsetWidth / 2) + 25 + 'px';
  
}

// вызываем setBagePosition() для первичного позиционирования бейджика
setBagePosition(slider, pointer, filling);

slider.oninput = function(){
  pointer.innerHTML = slider.value;

  // вызываем setBagePosition() для позиционирования бейджика при изменении заначения слайдера
  setBagePosition(slider, pointer, filling);
  
}

function setBagePosition2(curentSlider2, curentPointer2, curentFilling2){
  const radius2 = curentSlider2.scrollHeight;
  const dxPixels2 = radius2/2 + (curentSlider2.valueAsNumber-parseInt(curentSlider2.min))*(curentSlider2.scrollWidth-radius2)/(parseInt(curentSlider2.max)-parseInt(curentSlider2.min));

  curentPointer2.style.left = dxPixels2 - (curentPointer2.offsetWidth / 2) + 'px';
  curentFilling2.style.width = dxPixels2 - (curentPointer2.offsetWidth / 2) + 25 + 'px';  
}

setBagePosition2(slider2, pointer2, filling2);

slider2.oninput = function(){
  pointer2.innerHTML = slider2.value;
  setBagePosition2(slider2, pointer2, filling2);
}


$(document).ready(function(){

    //  show form

let $banner = $('.box-left'),
    $close = $('.close'),
    $year = $('.year__input'),
    $button = $('.button');

$year.on('focusout', function() {
    if ( $year.val() < 18 || $year.val() > 60 )
      $('.year_error').addClass('dis-block');
    else 
      $('.year_error').removeClass('dis-block');
});      

$banner.on('mousemove', function() {
    $('.wrap').addClass('show');
});

$close.on('click', function() {
    $('.wrap').removeClass('show');
});


$button.on('click', function() {
    let $thisSection = $('.section.show-section'),
        thisData = $thisSection.data('section');
        if ( thisData < 4 ) {
            getSectionElementByDataId(thisData).removeClass('show-section');
            getSectionElementByDataId(++thisData).addClass('show-section');
        }
});   
   
function getSectionElementByDataId(dataSectionId) {
    return $('.section'+dataSectionId);
}
});