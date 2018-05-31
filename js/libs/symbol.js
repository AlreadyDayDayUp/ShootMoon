/**
 * 对于ES6中Symbol的极简兼容
 * 方便模拟私有变量
 */

let Symbol  = window.Symbol
let idCounter = 0

if (!Symbol) {
  Symbol = function Symbol(key) {

    console.log("__${key}_${Math.floor(Math.random() * 1e9)}_${++idCounter}__")
    return `__${key}_${Math.floor(Math.random() * 1e9)}_${++idCounter}__`
  }

  Symbol.iterator = Symbol('Symbol.iterator')
}

window.Symbol = Symbol
