// the first part of our parser converts a string into an array (or stream) of tokens that are recognized by our language. These tokens don't have any relation to each other (except being all in the same array).


function Calculator (inputString) {

}

Calculator.prototype.lexer = function(inputString) {
  //function that breaks input string into tokens
  var tokenTypes = [
    ["NUMBER",    /^\d+/ ],
    ["ADD",       /^\+/  ],
    ["SUB",       /^\-/  ],
    ["MUL",       /^\*/  ],
    ["DIV",       /^\//  ],
    ["LPAREN",    /^\(/  ],
    ["RPAREN",    /^\)/  ]
  ];
  var matched = true;
  var tokens = [];
    for (let i = 0; i < inputString.length; i++) {
      for(let j = 0; j < tokenTypes.length; j++) {
        if(tokenTypes[j][1].test(inputString(i))) {
          matched = true;
          tokens.push({name: tokenTypes[j][0], value: inputString[i]});
        } else {
          matched = false;
        }
      } if(!matched) {
        throw new Error('Found unparseable token: ' + inputString(i));
      }
    }
    console.log(tokens);
    return tokens;
}



Calculator.prototype.peek = function() {
  let i = 0;
  var lexerIterator = function () {
    return this.lexer[i];
  };
 i++;

  return lexerIterator;
}

Calculator.prototype.get = function() {
  let i = 0;
  return this.lexer.splice(0,1);
}

const calc = new Calculator(1+2);



Calculator.prototype.parseExpression = function() {

}

Calculator.prototype.parseExpression = function() {

}

Calculator.prototype.parseA = function() {

}

Calculator.prototype.parseTerm = function() {

}

Calculator.prototype.parseB = function() {

}

Calculator.prototype.parseFactor = function() {

}

function TreeNode(name, ...children) {

}
