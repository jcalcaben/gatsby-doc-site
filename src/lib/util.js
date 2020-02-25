export const contains = (array, value) => {
  return array.some(element => {
        return element === value;
      
  });
  
};

export const remove = (array, value) => {
  return array.filter(element => {
        return element !== value;
      
  });
  
};

