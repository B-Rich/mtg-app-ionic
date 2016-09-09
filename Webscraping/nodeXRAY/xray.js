var Xray = require('x-ray');
var x = Xray({
    filters: {
        trim: function (value) {
            return typeof value === 'string' ? value.trim() : value
        },
        reverse: function (value) {
            return typeof value === 'string' ? value.split('').reverse().join('') : value
        },
        getTitle: function (value) {
            return typeof value === 'string' ? value.split("(")[0].trim() : value
        },
        getCode: function (value) {
            return typeof value === 'string' ? value.split("(")[1].replace(/\(|\)/g,'') : value
        },
        slice: function (value, start , end) {
            return typeof value === 'string' ? value.slice(start, end) : value
        }
    }
});

x('https://andrewgioia.github.io/Keyrune/icons.html', '.icon', [{
    // setTitle: '$(".icon span").innerText.split(" ")[1]',
    // setCode: '$(".icon span").innerText.split(" ")[2].slice(1,-1)',
    // setTitle: '.icon span.innerText.split(" ")[1]',
    // setCode: '.icon span.innerText.split(" ")[2].slice(1,-1)',
    // setTitle: '.icon span | getTitle',
    // setCode: '.icon span | getCode',
    setTitle: '.icon span | getTitle',
    setCode: '.icon span | getCode',
}])(console.log)
    // .paginate('.next_page@href')
    // .limit(3)
    .write('mtg-sets.json')

// $(".icon span").innerText.split(" ")[1]
// $(".icon span").innerText.split(" ")[2].slice(1,-1);