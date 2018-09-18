"use strict";
    function randomDiap(n,m) {
            return Math.floor(Math.random()*(m-n+1))+n;
    }

    function mood(colorsCount) {
        var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ],
            storage = {};
        console.log( 'цветов: ' + colorsCount );
        
        for ( var i=1; i<=colorsCount; i++ ) {
            var n=randomDiap(1,7);

            if(n in storage){
                n=randomDiap(1,7);
                i = i - 1;
            } else {
                storage[n] = colors[n];
                var colorName=colors[n];
                console.log( colorName );
            }
        }
    }

    mood(7);