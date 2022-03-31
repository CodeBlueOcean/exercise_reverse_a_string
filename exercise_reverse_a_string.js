//Create a function that reverse a string:
//'Hi My name is Andrei' should be:
//'ierdna si eman vM iH'

function reverse(str){
// check input 
    if (!str || str.length < 2 || typeof str !=='string') {
        return 'hmm that is not good';
    }

    const backwards = [];
    const totalItems = str.length -1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
        
    console.log(backwards);


    return backwards.join('');
}

reverse('Hi My name is Andrei');

function reverse2(str) {
    return str.split('').reverse().join('')

}

reverse2('Hi My name is Andrei');

const reverse3 = str => [...str].reverse().join('');