const inputNumbersNodeList = document.querySelectorAll('.mixer__input-number');
const inputRangeNodeList = document.querySelectorAll('.mixer__input-range');

inputNumbersNodeList.forEach(node => {
  node.addEventListener('change', function(e) {
    const mixedColor = makeMixedColorFromInputNodeList(inputNumbersNodeList);

    document.querySelector(`.mixer__input-range[data-color='${this.dataset.color}']`).value = e.target.value;
    document.querySelector('.mixer-example').style.backgroundColor = `rgba(${mixedColor})`;
  });
});
inputRangeNodeList.forEach(node => {
  node.addEventListener('change', function(e) {
    const mixedColor = makeMixedColorFromInputNodeList(inputRangeNodeList);

    document.querySelector(`.mixer__input-number[data-color='${this.dataset.color}']`).value = e.target.value;
    document.querySelector('.mixer-example').style.backgroundColor = `rgba(${mixedColor})`;
  });
});

function makeMixedColorFromInputNodeList(nodeList) {
  return [].reduce.call(nodeList, (result, node, index) => {
    result += node.value;

    if (index < nodeList.length - 1) {
      result += ',';
    }

    return result;
  }, '');
}
