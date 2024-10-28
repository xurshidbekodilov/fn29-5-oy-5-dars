// 1. **Foydalanuvchining ismi va familiyasidan iborat string kiriting. Har bir so'z bosh harf bilan boshlanadigan qilib qaytaruvchi funksiyani yozing.**
// function capitalizeName(fullName) {
//     let words = fullName.split(" ");
//     let capitalizedWords = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });
//     let res = capitalizedWords.join(" ");
//     return res;
//   }
// console.log(capitalizeName("javohir toshpulatov"));
  
// 2. **Berilgan stringni aylantiruvchi funksiyani yozing. Stringni teskari shaklida qaytaring.**
// function reverseString(string) {
//     let newString = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//     }
//     return newString;
// }
// console.log(reverseString("hello"));

// 3. **Massivdagi sonlarning o'rtacha qiymatini qaytaruvchi funksiyani yozing.**
// function middleValue(arr) {
//     if (arr.length === 0) return 0;
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum / arr.length;
// }
// console.log(middleValue([1, 2, 3, 4, 5]));

// 4. **Massivdagi har bir elementning uzunligini qaytaruvchi funksiyani yozing. 
// Funksiya qabul qilgan massiv ichidagi so'zlarning uzunligini qaytarishi kerak.**
// function returnElementLength(array){
//     let result = array.map(function(element){
//         return element.length;
//     })
//     return result;
// }

//5. **Berilgan massivdagi barcha toq sonlarni chiqaruvchi funksiyani yozing.**
// function findOddNumber(array) {
//     let res = array.filter(function(element) {
//         return element % 2 === 1;
//     });
//     return res;
// }
// console.log(findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 6. **Ikki obyektni qabul qilib, ularni birlashtiruvchi funksiyani yozing.**
// function mergeObjects(obj1, obj2) {
//     return Object.assign({}, obj1, obj2);
// }
// const object1 = { a: 1, b: 2 };
// const object2 = { b: 3, c: 4 };
// const mergedObject = mergeObjects(object1, object2);
// console.log(mergedObject); // Natija: { a: 1, b: 3, c: 4 }

// 7. **Foydalanuvchidan string qabul qilib, undagi bo‘sh joylarni olib tashlaydigan funksiyani yozing.**
// function trimWhitespace(string) {
//     let newString = '';
//     for (let char of string) {
//         if (char !== " ") {
//             newString += char;
//         }
//     }
//     return newString;
// }
// console.log(trimWhitespace(" Hello World "));

// 8. **Obyektdagi barcha qiymatlarni massivga o‘tkazuvchi funksiyani yozing.**
// function objectValuesToArray(obj) {
//     return Object.values(obj);
// }
// const obj = { a: 1, b: 2, c: 3 };
// console.log(objectValuesToArray(obj));

// 9. **Berilgan massivdagi sonlarning eng kichigi va eng kattasini aniqlab, 
// obyekt sifatida qaytaruvchi funksiyani yozing (masalan, `{min: 2, max: 10}`).**
// function findMinMax(array) {
//     let min = array[0];
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return { min: min, max: max };
// }
// const numbers = [5, 2, 10, 4, 8];
// console.log(findMinMax(numbers));

// 10. **Berilgan stringda nechta unli harf borligini hisoblovchi funksiyani yozing.**
// function countVowels(string) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Hello World"));

// 11. **Massivni qabul qilib, har bir elementiga 2 qo‘shadigan va qaytadigan funksiyani yozing.**
// let addTwoEachElement = (array) => array.map(Element => Element +2); 
// console.log(addTwoEachElement([1, 2, 3, 4]));

// 12. **Massiv ichida eng uzun so'zni aniqlab qaytaruvchi funksiyani yozing.**
// function findMaxLengthWord(array) {
//     let maxWord = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i].length > maxWord.length) {
//             maxWord = array[i];
//         }
//     }
//     return maxWord;
// }
// console.log(findMaxLengthWord(["apple", "banana", "strawberry", "kiwi"]));

// 13. **Foydalanuvchidan massiv qabul qilib, uning ichidagi raqamlarni o‘rtacha qiymatidan katta bo‘lgan elementlarni ajratib qaytaruvchi funksiyani yozing.**
// function filterAboveAvarage(arr){
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     let avarage = sum / arr.length;
//     let result = arr.filter(function(element){
//         return element > avarage;
//     })
//     return result;
// }

// 14. **Stringni qabul qilib, u bilan boshlanadigan va tugaydigan belgini olib tashlaydigan funksiyani yozing.**
// function trimChar(string) {
//     if (string.length === 0){
//         return string;
//     }
//     return string.slice(1, string.length - 1);
// }
// console.log(trimChar("hello"));

// 15. **Berilgan massivdagi barcha raqamlarning kvadratlari yig'indisini hisoblaydigan funksiyani yozing.**
// function sumOfSquares(array){
//     let sum = 0;
//     array.forEach(element => {
//         sum += element**2;
//     });
//     return sum;
// }

// 16. **Massivni teskari qilib qaytaruvchi funksiyani yozing (bunda massiv ichidagi elementlar teskari tartibda joylashadi).**
// function reverseArray(array) {
//     return array.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

// 17. **Stringni qabul qilib, uni har bir so‘zini katta harflarda yozib qaytaradigan funksiyani yozing.**
// function capitalizeWords(string) {
//     const wordsArray = string.split(' ');
//     const capitalizedWords = wordsArray.map(function(word) {
//         return word.toUpperCase();
//     });
//     const result = capitalizedWords.join(' ');
//     return result;
// }
// console.log(capitalizeWords("salom dunyo"));

// 18. **Obyektlar massividan berilgan yoshdan kattalarni ajratib qaytaradigan funksiyani yozing.**
// function filterByAge(objectsArray, age) {
//     return objectsArray.filter(function(person) {
//         return person.age > age;
//     });
// }
// let people = [
//     { name: "Ali", age: 20 },
//     { name: "Oydina", age: 25 },
//     { name: "Javohir", age: 18 },
//     { name: "Dilshoda", age: 30 }
// ];
// console.log(filterByAge(people, 21));

// // 19. **Massiv ichida nechta marta berilgan element uchrashganini aniqlovchi funksiyani yozing.**
// function countOccurrences(array, element) {
//     let count = 0;
//     array.forEach(function(item) {
//         if (item === element) { 
//             count++;
//         }
//     });
//     return count;
// }
// const numbers = [1, 2, 3, 1, 4, 1, 5];
// console.log(countOccurrences(numbers, 1));

// 20. **Ikki string qabul qilib, ularning umumiy harflarini ajratib qaytaradigan funksiyani yozing.**
// function commonCharacters(string1, string2) {
//     let commonChars = [];
//     for (let char of string1) {
//         if (string2.includes(char) && !commonChars.includes(char)) {
//             commonChars.push(char);
//         }
//     }
//     return commonChars.join('');
// }
// console.log(commonCharacters("hello", "world"));
