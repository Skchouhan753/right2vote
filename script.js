document.addEventListener('DOMContentLoaded', function() {
    function maxScientificValue() {
        const instruments = [
            { weight: 3, volume: 2, value: 10, name: 'Instrument 1' },
            { weight: 4, volume: 3, value: 15, name: 'Instrument 2' },
            { weight: 2, volume: 1, value: 8, name: 'Instrument 3' },
            { weight: 5, volume: 4, value: 20, name: 'Instrument 4' }
        ];

        const maxWeight = 10;
        const maxVolume = 7;

        let maxScientificValue = 0;
        let bestCombinationArr = [];

        
        const totalInstruments = instruments.length;

    
        let instrumentIndices = [];
        for (let i = 0; i < totalInstruments; i++) {
            instrumentIndices.push(i);
        }

     
        function generateCombinations(arr) {
            let result = [];
            let f = function(prefix, arr) {
                for (let i = 0; i < arr.length; i++) {
                    result.push(prefix.concat(arr[i]));
                    f(prefix.concat(arr[i]), arr.slice(i + 1));
                }
            }
            f([], arr);
            return result;
        }

        const allCombinations = generateCombinations(instrumentIndices);

        for (let combination of allCombinations) {
            let currentWeight = 0;
            let currentVolume = 0;
            let currentValue = 0;

            for (let index of combination) {
                currentWeight += instruments[index].weight;
                currentVolume += instruments[index].volume;
                currentValue += instruments[index].value;
            }

          
            if (currentWeight <= maxWeight && currentVolume <= maxVolume && currentValue > maxScientificValue) {
                maxScientificValue = currentValue;
                bestCombinationArr = combination;
            }
        }

        let totalWeight = 0;
        let totalVolume = 0;
        let selectedInstrumentDetails = bestCombinationArr.map(index => {
            totalWeight += instruments[index].weight;
            totalVolume += instruments[index].volume;
            return instruments[index].name;
        });

      
        console.log(totalWeight);
        console.log(totalVolume);
        console.log(maxScientificValue);
    }

   
    maxScientificValue();
});
