let play = {
    array: ['cat', 'dog', 'pig', 'fish', 'monkey', 'crocodile'],
    text: document.querySelector('#text'),

    start: function () {
        this.randomString();//получаем рандомное слово-стринга
    },

    randomString: function () {//получаем рандомное слово-стринга+переводим стрингу в массив
        let word = this.array[parseInt(Math.random() * this.array.length)];
        let arrayWord = word.split('')
        let scoreMinus = arrayWord.length * 3;//переменная для счета ходов
        let letters = [];// выводим все введенные буквы на экран
        this.stiksArray(word, arrayWord, scoreMinus, letters);//получаем новый массив для черточек
    },

    stiksArray: function (word, arrayWord, scoreMinus, letters) {//получаем новый массив для черточек
        let array = []
        console.log(word);//показывает слово
        for (let index = 0; index < word.length; index++) {
            array.push('_')
        }
        document.querySelector('#guessWord h2').innerHTML = array.join(' ');
        this.textValue(arrayWord, array, scoreMinus, letters);//если ввели больше одной буквы...
    },

    textValue: function (arrayWord, array, scoreMinus, letters) {//если ввели больше одной буквы...
        let currentThis = this;
        document.querySelector('#button').addEventListener('click', function () {

            if (currentThis.text.value.length > 1) {
                document.querySelector('#mistake').innerHTML = 'Please, type one letter';
            } else {
                scoreMinus = scoreMinus - 1;// минусуем кол-во ходов
                console.log(scoreMinus);
                if (scoreMinus === 0) {
                    button.disabled = true;
                    document.querySelector('#win h1').innerHTML = 'You are lose.Try again'
                }

                letters.push(currentThis.text.value.toLowerCase())//выводим использованные буквы
                console.log(letters)
                document.querySelector('#letters h1').innerHTML = 'Your letters: ' + letters.join(' ');

                let textValue = currentThis.text.value.toLowerCase();
                currentThis.resultArray(array, arrayWord, textValue);//набиваем массив с черточками буквами
                document.querySelector('#mistake').innerHTML = '';

            }
            currentThis.text.value = '';
        })
    },

    resultArray: function (array, arrayWord, textValue) {// массив с черточками набиваем буквами
        for (let index = 0; index < arrayWord.length; index++) {
            if (textValue === arrayWord[index]) {
                array[index] = textValue;
                //если значение поля===ячейке массива рандомного слова, то ячейка массива из черточек=  значению поля
            }
        }

        document.querySelector('#guessWord h2').innerHTML = array.join(' ');//если в массиве нет _ , то выйграл
        if (array.indexOf('_') === -1) {
            document.querySelector('#win h1').innerHTML = 'You are win!'
            console.log('You are win!')
        }
    },

}
//массив букв