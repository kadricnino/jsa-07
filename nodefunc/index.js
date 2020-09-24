const { match } = require('assert');
const fs = require('fs');
var file = 'document.txt';

const readDoc = (doc) => {
    return new Promise((resolve, reject) => {
        fs.readFile(doc, "utf8", (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    });
};

readDoc("document.txt")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });

fs.readFile(file, "utf8", function (err, data) {
    if (err) {
        return err;
    }
    wordText = countWords(data);
    function countWords(words) {
        wordText = words.replace(/(^\s*)|(\s*$)/gi, "");
        wordText = words.replace(/[ ]{2,}/gi, " ");
        wordText = words.replace(/\n /, "\n");
        return wordText.split(' ').filter(String).length;
    };
    console.log(wordText);
});


fs.readFile(file, "utf8", function (err, data) {
    if (err) {
        return err;
    }
    sentencesText = countSentence(data);
    function countSentence(sentences) {
        sentencesText = sentences.match(/[\w|\)][.?!](\s|$)/g).length;
        return sentencesText;
    };
    console.log(sentencesText);
});


fs.readFile(file, "utf8", function (err, data) {
    if (err) {
        return err;
    }
    charText = countChar(data);
    function countChar(char) {
        charText = char.length;
        return charText;
    };
    console.log(charText);
});
