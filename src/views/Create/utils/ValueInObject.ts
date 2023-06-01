interface Object {
  [key: string]: any;
}

const ValueInObject = (object: Object) => {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var value = object[key];

      if (typeof value === "string" && value.trim() !== "") {
        return true;
      }

      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value) && key === "dispute") {
          for (var i = 0; i < value.length; i++) {
            if (ValueInObject(value[i])) {
              return true;
            }
          }
        } else {
          if (ValueInObject(value)) {
            return true;
          }
        }
      }
    }
  }

  return false;
};

export default ValueInObject;
