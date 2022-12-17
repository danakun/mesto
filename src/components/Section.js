export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    //попадает готовая разметка
    //публичный метод принимает элемент и добавляет его в разметку
    this._container.prepend(element);
  }

  renderItems(items) {
    //публичный метод проходит циклом forEach по всем (initial) items и рендерит элементы
    // использует renderer
    items.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }
}
