AniJS.run();
var MyApp = {};

MyApp.SecurityNotifier = AniJS.getNotifier('Security');

MyApp.processError = function(message){
  $(MyApp.SecurityNotifier).trigger('answerError');
  document.getElementById('loadajax').innerHTML = message;
}

MyApp.processSuccess = function(message){
  $(MyApp.SecurityNotifier).trigger('answerSuccess');
  document.getElementById('loadajax').innerHTML = message;
}

formButton = document.getElementById("questionButton");
questionButton.addEventListener('click', function(e){
  var request = document.getElementById('answerfield').value;
  document.getElementById('loadajax').innerHTML = 'Processing...';

  MyApp.someAjaxModule.getResponse(request, function(response){
    if(response.error){
      MyApp.processError(response.error);
    } else{
      MyApp.processSuccess(response.success);
    }
  })
}, false);

MyApp.someAjaxModule = {
  getResponse: function(data, callback){
    var response = {};
    if( data === '26'){
      response.success = 'Registration successful :)';
    } else {
      response.error = 'Registration failed :(';
    }
    setTimeout(function(){
      callback(response);
    }, 1300)
  }
}
