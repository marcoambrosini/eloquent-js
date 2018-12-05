/* A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}; */
let examplelist = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


function arrayToList(arr) {
  let list = null;
  for(n=arr.length; n > 0; n--) {
    list = {'value' : arr[n], rest : list};
  }
  return list;
}



let newarr = [];
function listToarray(list) {
  newarr.push(list.value);
  if (list.rest != null) {
  listToarray(list.rest);
  } else return newarr;
}

listToarray(examplelist);


function prepend(list, element) {
  let newlist = {value: element, rest:list};
  return newlist;
}

prepend(examplelist, 7);

function nth(list, num) {
  for (let node = list; node; node = node.rest) {
    if (num === 0) {
      return node;
    } else {
      num -= 1;
      nth (node, num);
  }
  }
}

nth(examplelist, 2);
