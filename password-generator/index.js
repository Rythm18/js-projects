const generate = document.getElementById('gen');
const password = document.getElementById('password');
const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const copy = document.getElementById('copy');
const copied = document.getElementById('copied');
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbersLetters = '0123456789';
const symbolsLetters = '!@#$%^&*()_+{}:"<>?|[];\',./';

generate.addEventListener('click', () => {
    const lengthValue = +length.value;
    const upperCaseChecked = uppercase.checked;
    const lowerCaseChecked = lowercase.checked;
    const numbersChecked = numbers.checked;
    const symbolsChecked = symbols.checked;
    console.log(lengthValue, upperCaseChecked, lowerCaseChecked, numbersChecked, symbolsChecked);
    password.value = generatePassword(
        lengthValue,
        upperCaseChecked,
        lowerCaseChecked,
        numbersChecked,
        symbolsChecked
    );
});

function generatePassword(length, upperCase, lowerCase, numbers, symbols) {
    let password = '';
    let characters = '';
    
    if (upperCase) {
        characters += upperCaseLetters;
    }
    if (lowerCase) {
        characters += lowerCaseLetters;
    }
    if (numbers) {
        characters += numbersLetters;
    }
    if (symbols) {
        characters += symbolsLetters;
    }

    if(!characters) {
        return '';
    }
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}

copy.addEventListener('click', () => {
    password.select();
    document.execCommand('copy');
    copied.classList.remove('hidden');
    setTimeout(() => {
        copied.classList.add('hidden');
    }, 2000);
});

