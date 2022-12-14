var config={
        disabled: true, 
        icon: false,
        classes: {"ui-checkboxradio": "highlight"}
        };
      $("input").checkboxradio(config);      
      $("#ok").button();
      $("#usable").button();
      $("#usable").click(function(e) {
        var isDisabled=$("input").checkboxradio("option", "disabled");
        if (isDisabled) { //現在是不可用狀態
          $("input").checkboxradio("enable");
          $("#usable").html("Disable");
          }
        else {  //現在是可用狀態
          $("input").checkboxradio("disable");
          $("#usable").html("Enable");
          }
        });
      $("#icon").button();
      $("#icon").click(function(e) {
        var haveIcon=$("input").checkboxradio("option", "icon");
        if (haveIcon) { //現在有圖樣
          $("input").checkboxradio("option", "icon", false);
          $("#icon").html("Show icon");
          }
        else {  //現在無圖樣
          $("input").checkboxradio("option", "icon", true);
          $("#icon").html("Hide icon");
          }
        });
      $("#ok").button();
      $("#ok").click(function(e) {
        var ownerchoose_condtion=$("[name=ownerchoose_condtion]:radio:checked").val();
        var arr=[];
        $("[name=straydogchoose_condtion]:checkbox:checked").each(function(){
          arr.push($(this).val());
          });
        var straydogchoose_condtion=arr.join();
        var msg="您最討厭的水果是 : " + ownerchoose_condtion + "\n" +
                "您最常吃的水果是 : " + straydogchoose_condtion;
        alert(msg); 
        });