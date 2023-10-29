function learnJs(lang, callback) {
  console.log(`I learn : ${lang}`);
  callback();
}

function done() {
  console.log("I finished this classes");
}

learnJs("Javascript", done);

function anotherFunction() {}

function fnWith(callbackFn) {
  callbackFn();
}

function WriteText() {
  return console.log("text-text");
}

function Myfn(callback) {
  callback();
}

Myfn(WriteText);
