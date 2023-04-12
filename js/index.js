var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('confirm_password').style.borderWidth = '4px';
      document.getElementById('confirm_password').style.borderColor = 'green';
      document.getElementById('confirm_password').style.borderStyle = 'solid';
      document.getElementById('password').style.borderWidth = '4px';
      document.getElementById('password').style.borderColor = 'green';
      document.getElementById('password').style.borderStyle = 'solid';


    } else {
        document.getElementById('confirm_password').style.borderWidth = '4px';
        document.getElementById('confirm_password').style.borderColor = 'red';
        document.getElementById('confirm_password').style.borderStyle = 'solid';
        document.getElementById('password').style.borderWidth = '4px';
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('password').style.borderStyle = 'solid';
  
    //   document.getElementById('message').style.color = 'red';
    //   document.getElementById('message').innerHTML = 'not matching';
    }
  }

var Reservation = function(){
  document.getElementById('tieuDe').value = 'Reservation'

}