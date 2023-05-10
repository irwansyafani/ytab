const brackerChecker = (args: string) => {
  let stack: string[] = [];
  for (let i = 0; i < args.length; i++) {
    let x: string = args[i];
    if (x == "(" || x == "[" || x == "{") {
      stack.push(x);
    }
    if (stack.length == 0) return false;
    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return stack.length == 0;
};

const result: boolean = brackerChecker("()");
// brackerChecker("()()");
// brackerChecker(")(");
// brackerChecker("");
// brackerChecker("((()))");
// brackerChecker("((()");

console.log(result);
