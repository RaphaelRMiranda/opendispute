interface Object {
  [key: string]: any;
}

const RemoveEmptyFields = (obj: Object): Object => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var value = obj[key];

      if (typeof value === "string" && value.trim() === "") {
        delete obj[key];
      }

      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value) && key === "dispute") {
          value.forEach((dispute) => {
            RemoveEmptyFields(dispute);
          });
        } else {
          RemoveEmptyFields(value);
        }
      }
    }
  }

  return obj;
};

export default RemoveEmptyFields;
