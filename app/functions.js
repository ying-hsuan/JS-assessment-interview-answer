if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr)
    },

    speak : function(fn, obj) {
      return fn.call(obj)
    },

    functionFunction : function(str) {
      return function (newStr) {
        var arr = [];
        arr.push(str);
        arr.push(" " + newStr)
        var finStr = arr.join(",");
        return finStr;
      }

    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
      var sum = 0;
      for (let i in arguments) {
        sum += arguments[i]
      }
      return sum;
    },

    callIt : function(fn) {
      fn.apply()
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return fn(a,b,c);
          }
        }
      }
    }
  };
});
