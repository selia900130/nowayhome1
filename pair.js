$(function(){
    var isSelectShowed = false;
    $('#select').click(function(){
        if(isSelectShowed) {
            $('#sel-option').hide();
        } else {
            $('#sel-option').show();
        }
        isSelectShowed = !isSelectShowed;
    });
    
    $('#sel-option a').click(function(e){
        $('#select').text($(this).text());
        $('#sel-option').hide();
        $(this).addClass('current');
        e.preventDefault();
        isSelectShowed = false;
    })
    
    $("div").on("click", "delete", function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });
})

document.getElementById("demo3").addEventListener("click",function(){
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    });
  });