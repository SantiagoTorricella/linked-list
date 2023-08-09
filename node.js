// factory function that create node object
function nodeFactory(value) {
  return {
    value,
    nextNode: null,
  };
}

export default nodeFactory;
