export const ADD_FEATURES = "ADD_FEATURES";
export const addFeatures = feature => {
  console.log(`this is feature from action`, feature);

  return {
    type: ADD_FEATURES,
    payload: feature
  };
};

export const REMOVE_FEATURES = "REMOVE_FEATURES";
export const removeItem = feature => {
  console.log("this is feature from action", feature);
  return {
    type: REMOVE_FEATURES,
    payload: feature
  };
};
