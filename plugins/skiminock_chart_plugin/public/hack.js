import $ from 'jquery';

$(document.body).on('keypress', function (event) {
  if (event.which === 59) {
    alert('my chart plugin works!');
  }
});