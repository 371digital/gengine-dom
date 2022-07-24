import elements from "./elements/index.js";

const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

const addIdForElements = (vNode) => {
  let lastIndex = 0;
  const addId = (element) => {
    element.index = lastIndex;
    lastIndex += 1;

    element.id = uuidv4();
    element.children = element.children.map((item) => {
      item.parentId = element.id;
      return item;
    })
    return element.children.map(addId);
  };
  addId(vNode);
};

const flatAndSortElements = (vNode) => {
  const flattenArray = [];

  const recursive = ({ tagName, attributes, parentId, id, index, children }) => {
    flattenArray.push({ tagName, attributes, parentId, id, index });
    children.map(recursive);
  };

  recursive(vNode);
  return flattenArray.sort(function (a, b) {
    return b.index - a.index;
  });
}

const renderElements = (renderData) => {
  for (let index = 0; index < renderData.length; index++) {
    const renderItem = renderData[index];
    const element = elements[renderItem.tagName];
    renderItem.attributes.id = renderItem.id;
    renderItem.attributes.getMyChilds = () => {
      return renderData.filter((item) => item.parentId === renderItem.id);
    };
    renderItem.attributes.getElementByRefId = (id) => {
      return renderData.find((item) => item.attributes.refId === id);
    }
    const createdComponent = element.component(renderItem.attributes);
    renderData[index].threeElement = createdComponent;
  }
};

const render = (vNode) => {
  if (typeof vNode === "function") {
    vNode = vNode();
  }
  addIdForElements(vNode);
  const renderData = flatAndSortElements(vNode);
  renderElements(renderData);
  return vNode;
};

export default render;