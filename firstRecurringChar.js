//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(arr) {

    let map = {};

    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return arr[i];
        } else {
            map[arr[i]] = arr[i];
        }
    }



}