$(document).ready(function () {
    
    var matchCounter = 0;
    var victoryCounterUser = 0;
    var victoryCounterAi = 0;
    const audioIncomming = new Audio('../assets/song/starcraft_incoming.mp3');
    const audioVictory = new Audio('../assets/song/ukepss03.wav' );
    const audioDefeat = new Audio('../assets/song/defeat.wav');
    
$('#buttonRules').click(function(){
    audioIncomming.play();
    $('#popUpStart').show();
    $('#containerRules').hide();
})
    
    // var randomImg = Math.floor(Math.random() * (3) + 1);
    //     console.log(randomImg);
        // Au passage du curseur sur l'image, elle s'agrandira de 600px
            $('#rules').mouseenter(function(){    
            $('#rules').css('width', '500px');
            $('#rules').css('margin-top','-5%');
            $("#rules").css('background-color','#70c2e1');

            $('#rules').mouseleave(function(){
                $('#rules').css('width','83px');
                $("#rules").css('background','none');
                $('#rules').css('margin','0');
            })
    });

    $('.button').click(function () {
        var img = $(this).attr('id');
        var user = $(this).attr('id');
        
        var randomImg = Math.floor(Math.random($(this).attr('id')) * (3) + 1);
        console.log(randomImg);
        // Changement de 10 a 9 ( sinon le round 11 est pris en compte )
        if (matchCounter <= 9) {
            // Choix utilisateur
            if (user == 'NovaUser') {
                var choiceUser = 1;
                
                $('#switch-img-1').attr('src', 'assets/img/' + img + '.png');
                $('#switch-img-1').css('width','160%');
                $('#switch-img-1').css('margin-left','50%');
                // $('#loadSound').attr('src', 'assets/song/starcraft_incoming.mp3');
                // $('#loadSound').play();
            }
            else if (user == 'SelendisUser') {
                var choiceUser = 2;
                $('#switch-img-1').attr('src', 'assets/img/' + img + '.png');
                $('#switch-img-1').css('width','160%');
                $('#switch-img-1').css('margin-left','50%');
            }
            else if (user == 'KerriganUser') {
                var choiceUser = 3;
                $('#switch-img-1').attr('src', 'assets/img/' + img + '.png');
                $('#switch-img-1').css('width','160%');
                $('#switch-img-1').css('margin-left','48%');
            }
            if (randomImg == 1) {
                $('#switch-img-2').attr('src', 'assets/img/NovaIa.png');
                $('#switch-img-2').css('width','160%');
                $('#switch-img-2').css('margin-right','50%');
            }
            else if (randomImg == 2) {
                $('#switch-img-2').attr('src', 'assets/img/SelendisIa.png');
                $('#switch-img-2').css('width','160%');
                $('#switch-img-2').css('margin-right','50%');
            }
            else if (randomImg == 3) {
                $('#switch-img-2').attr('src', 'assets/img/KerriganIa.png');
                $('#switch-img-2').css('width','160%');
                $('#switch-img-2').css('margin-right','48%');
            }
            // 
            // Egalité
            if (choiceUser === randomImg) {
                $('.box-3').text('Draw');
                $('.box-3').css('color', '#ff6d00')
                $('.box-3').css('text-shadow', '-2px 0 #d4e1f0, 0 2px #d4e1f0, 2px 0 #d4e1f0, 0 -2px #d4e1f0')
                $('#line-js-1').attr('src', 'assets/img/orange-gauche.png');
                $('#line-js-2').attr('src', 'assets/img/orange-droite.png');
            }
            // Egalité donc manche nulle donc pas d'incrementation de matchCounter

            else if (choiceUser == 1 && randomImg == 2 || choiceUser == 2 && randomImg == 3 || choiceUser == 3 && randomImg == 1) {
                console.log(choiceUser);
                console.log(randomImg);
                matchCounter++;
                $('.round').text('Round : ' + matchCounter + ' / 10');
                $('.box-3').text('you Loose');
                $('.box-3').css('text-shadow', '-2px 0 #D4E1F0, 0 2px #D4E1F0, 2px 0 #D4E1F0, 0 -2px #D4E1F0')
                $('.box-3').css('color', '#a10713')
                // Ajout ligne rouge
                $('#line-js-1').attr('src', 'assets/img/rouge-gauche.png');
                $('#line-js-2').attr('src', 'assets/img/rouge-droite.png');
                $
                // 
                victoryCounterAi++;
                $('.scoreAi').text('Ia score : ' + victoryCounterAi);
            }

            else {
                console.log(choiceUser);
                console.log(randomImg);
                matchCounter++;
                $('.round').text('Round : ' + matchCounter + ' / 10');
                $('.box-3').text('you Win');
                $('.box-3').css('text-shadow', '-2px 0 #D4E1F0, 0 2px #D4E1F0, 2px 0 #D4E1F0, 0 -2px #D4E1F0')
                $('.box-3').css('color', '#2d74cc')
                // 
                $('#line-js-1').attr('src', 'assets/img/bleu-gauche.png');
                $('#line-js-2').attr('src', 'assets/img/bleu-droite.png');
                victoryCounterUser++;
                $('.scorePlayer').text('My score : ' + victoryCounterUser);
            }
            // pop-up victoire / défaite
        }
        if (victoryCounterUser < victoryCounterAi && matchCounter == 10) {
            var victoryPercent = (victoryCounterUser) / (matchCounter) * 100;
            
            // Pop up ctn defeat
            audioDefeat.play();
            $('#ctn-gray').css('visibility', 'visible');
            $('#ctn-gray').css('z-index', '99999999');
            $('.ctn-defeat').css('visibility', 'visible');
            $('.ctn-defeat').css('background-image', 'url(assets/img/Deafeat.jpg')
            $('.ctn-defeat').css('box-shadow', '0 0 5px 5px #FF6D00');
            // Style du bouton
            $('.btn-style-defeat').css('visibility', 'visible');
            $('.btn-style-defeat').css('background', 'linear-gradient(#850611 ,#1a0103)');
            $('.btn-style-victory').mouseover(function () {
                $('.btn-style-defeat:hover').css('background', 'linear-gradient(#ee5b03, #b7230e)');
            });
            $('.btn-style-victory').mouseout(function () {
                $('.btn-style-defeat').css('background', 'linear-gradient(#850611 ,#1a0103)');
            });
            $('.btn-style-defeat').css('box-shadow', '0 0 2px 2px #ee5b03');
            // % victoire
            $('.victoryPercent').text('Average win : ' + victoryPercent + '%')
            $('.victoryPercent').css('color', '#8D0C19')
            $('.victoryPercent').css('text-shadow', '-1.5px 0 #da7c35, 0 1.5px #da7c35, 1.5px 0 #da7c35, 0 -1.5px #da7c35')
            // Score
            $('.victory-count').text('My score : ' + victoryCounterUser + ' /  Ia score : ' + victoryCounterAi)
            $('.victory-count').css('color', '#8D0C19')
            $('.victory-count').css('text-shadow', '-1.5px 0 #da7c35, 0 1.5px #da7c35, 1.5px 0 #da7c35, 0 -1.5px #da7c35')
            $('.victory-separate').css('background-color', '#FF6B05')
            $('.victory-separate').css('border-color', '#FF6B05')
            $('.victory-separate').css('border-radius', '50%')
        }
        if (victoryCounterUser >= victoryCounterAi && matchCounter == 10) {
            var victoryPercent = (victoryCounterUser) / (matchCounter) * 100;
            // Pop up ctn victory
            audioVictory.play();
            $('#ctn-gray').css('visibility', 'visible');
            $('#ctn-gray').css('z-index', '99999999');
            $('.ctn-victory').css('visibility', 'visible');
            $('.ctn-victory').css('background-image', 'url(assets/img/Victory_v2_win.jpg)')
            $('.ctn-victory').css('box-shadow', '0 0 5px 5px #02C5FE');
            // Style du bouton
            $('.btn-style-victory').css('visibility', 'visible');
            $('.btn-style-victory').css('background', 'linear-gradient(#0C2E54 ,#091829)');
            $('.btn-style-victory').css('box-shadow', '0 0 2px 2px #01aee4');
            // fonction mouse over
            $('.btn-style-victory').mouseover(function () {
                $('.btn-style-victory:hover').css('background', 'linear-gradient(#094e78 ,#01aee4)');
            });
            $('.btn-style-victory').mouseout(function () {
                $('.btn-style-victory').css('background', 'linear-gradient(#0C2E54 ,#091829)');
            });
            // % victoire
            $('.victoryPercent').text('Average win : ' + victoryPercent + '%')
            $('.victoryPercent').css('color', '#172974')
            $('.victoryPercent').css('text-shadow', '-2px 0 #166DB7, 0 2px #166DB7, 2px 0 #166DB7, 0 -2px #166DB7')
            // Score
            $('.victory-count').text('My score : ' + victoryCounterUser + ' /  Ia score : ' + victoryCounterAi)
            $('.victory-count').css('color', '#172974')
            $('.victory-count').css('text-shadow', '-2px 0 #166DB7, 0 2px #166DB7, 2px 0 #166DB7, 0 -2px #166DB7')
            //  HR de séparation
            $('.victory-separate').css('background-color', '#00c2ff')
            $('.victory-separate').css('border-color', '#00c2ff')
            $('.victory-separate').css('border-radius', '50%')
        }
        // fonction rezet
        $('.button-defeat-or-win').click(function () {
            location.reload(true);
        });

    });
    
        
        

});