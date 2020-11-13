// jsを記述する際はここに記載していく

// 0==グー、1==チョキ、3==パー

$(function () {
    $(".gu").on("click", function () {
        $(".reset").show('slow');
        var random = Math.floor(Math.random() * 3);
        　if(random == 0){
            console.log("引き分け！")
            $('.dealer').html('<img src="img/グー.png">');
            $(".result").html("引き分け！")
            }

            else if(random == 1){
                console.log("勝ち！おめでとう！")
                $('.dealer').html('<img src="img/チョキ.png">');
                $(".result").html("勝ち！おめでとう！");               
            }
            
            else if(random == 2){
                console.log("負け！残念")
                $('.dealer').html('<img src="img/パー.png">');
                $(".result").html("負け！残念！");
            }
      });

      $(".choki").on("click", function () {
        $(".reset").show('slow');
        var random = Math.floor(Math.random() * 3);
        　if(random == 0){
            console.log("負け！残念")
            $('.dealer').html('<img src="img/グー.png">');
            $(".result").html("負け！残念")
            }

            else if(random == 1){
                console.log("引き分け！")
                $('.dealer').html('<img src="img/チョキ.png">');
                $(".result").html("引き分け！");               
            }
            
            else if(random == 2){
                console.log("勝ち！おめでとう！")
                $('.dealer').html('<img src="img/パー.png">');
                $(".result").html("勝ち！おめでとう！");
            }
      });

      $(".par").on("click", function () {
        $(".reset").show('slow');
        var random = Math.floor(Math.random() * 3);
        　if(random == 0){
            console.log("勝ち！おめでとう！")
            $('.dealer').html('<img src="img/グー.png">');
            $(".result").html("勝ち！おめでとう！")
            }

            else if(random == 1){
                console.log("負け！残念")
                $('.dealer').html('<img src="img/チョキ.png">');
                $(".result").html("負け！残念");            
            }
            
            else if(random == 2){
                console.log("引き分け！")
                $('.dealer').html('<img src="img/パー.png">');
                $(".result").html("引き分け！");
    
            }
      });



    });

$(function () {
        $(".resetButton").on("click", function () {
            $('.dealer').empty();
            $('.result').empty();
            $('.reset').hide();
            $('.dealer').html("好きな手を選んでください↓"); 

        });

    });

    

