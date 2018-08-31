var recipe = {
  bread: "2 slices",
  peanutbutter: "big spoonfull",
  jelly : "little bit less than peanutbutter"
};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj);
  newObj[key]=value;
  return obj;
}

