// the first part of our parser converts a string into an array (or stream) of tokens that are recognized by our language. These tokens don't have any relation to each other (except being all in the same array).


function Calculator (inputString) {
  this.inputString = inputString;
  this.tokenStream = this.lexer();
}

Calculator.prototype.lexer = function() {
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
  var matched = false;
  var tokens = [];
    for (let i = 0; i < this.inputString.length; i++) {
      for (let j = 0; j < tokenTypes.length; j++) {
        var token = tokenTypes[j][1]
        if (token.test(this.inputString[i])) {
          matched = true;
          tokens.push({name: tokenTypes[j][0], value: this.inputString[i]});
          break
        } else {
          matched = false;
        }
      }
    }
      if (!matched) {
        throw new Error('Found unparseable token: ' + this.inputString[i]);
    }
    return tokens;
}



Calculator.prototype.peek = function() {
  return this.tokenStream[0] || null;
}

Calculator.prototype.get = function() {
  var lex = this.lexer()
  var result = lex.shift();
  return result
}

const calc = new Calculator('3 * 5');


console.log('calling peek' , calc.peek())


function TreeNode(name, ...children) {
  this.name = name
  this.children = children;
}


Calculator.prototype.parseExpression = function() {
    let term = this.perseTerm();
    let a = this.parseA();

  return new TreeNode(inputString, term, a);
}

Calculator.prototype.parseA = function() {
  //use peek to see what the nex
  var nextToken = this.peek();
  if (nextToken.name === 'ADD') {
    this.get();
    return new TreeNode("aNode" + nextToken.name, this.parseTerm(), this.parseA());
  } else if (nextToken.name === 'SUB') {
      this.get();
      return new TreeNode("aNode" + nextToken.name, this.parseTerm(), this.parseA());
  } else {
    return new TreeNode ('aEpsilon')
  }

}

Calculator.prototype.parseTerm = function() {
  //input string === something at parse term
  var b = this.parseB()
  var factor = this.parseFactor()
  return new TreeNode('Term', b, factor);
}

Calculator.prototype.parseB = function() {
var nextToken = this.peek();
  if (nextToken.name === 'MUL') {
    this.get();
    return new TreeNode("bNode" + nextToken.name, this.parseTerm(), this.parseA());
  } else if (nextToken.name === 'DIV') {
      this.get();
      return new TreeNode("bNode" + nextToken.name, this.parseTerm(), this.parseA());
  } else {
    return new TreeNode ('aEpsilon')
  }

}

Calculator.prototype.parseFactor = function() {
 //if obj.name is equal to a number then we use parsefactor
var nextToken = this.peek();
if (nextToken.name === 'NUMBER') {
  this.get();
  return new TreeNode ('Number' + nextToken.value)
} else {
    return new TreeNode('Expression' + nextToken.name, this.parseTerm(), this.parseA());
}

}


