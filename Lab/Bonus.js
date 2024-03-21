exports.removePropertyFromObject = (obj, propertyName) => {
    if (!(propertyName in obj)) {
      throw new Error('Property/key is not defined in the object');
    }
    
    const newObj = { ...obj };
    delete newObj[propertyName];
    return newObj;
  };
  