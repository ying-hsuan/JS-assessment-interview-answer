if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item)
    },

    sum : function(arr) {
      return arr.reduce(function (a, b) {
        return a + b;
      });
    },

    remove : function(arr, item) {
      var newarr = [];
      for(let i = 0; i < arr.length; i++) {
          if(arr[i] != item) {
              newarr.push(arr[i]);
          }
      }

      return newarr;
    },
    
    removeWithoutCopy : function(arr, item) {
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] == item) {
          arr.splice(i,1);
          i--
        }
      }
      return arr;
      
    },

    append : function(arr, item) {
      var newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
      newArr.push(item);
      return newArr;
    },

    truncate : function(arr) {
      var newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
      newArr.splice(3,1);
      return newArr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      var newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
      newArr.splice(2,0,'z');
      return newArr;
    },

    count : function(arr, item) {
      var count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
          count ++
        }
      }
      return count;
    },

    duplicates : function(arr) {
      var repeat = arr.filter(function(el, i, arr){
        return arr.indexOf(el) !== i;
      });
      return repeat;
    },

    square : function(arr) {
      var newArr = arr.map(el => el * el)
      return newArr;
    },

    findAllOccurrences : function(arr, target) {
      var newIndexArr = [];
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] == target) {
          newIndexArr.push(i)
        }
      }
      return newIndexArr;
    }

  };
});
