export class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.model.addObserver(this.view);

    view.bindStop(this.onStop, this.model);
    view.bindStart(this.onStart, this.model);
    view.bindReset(this.onReset, this.model);
  }

  onStop(model) {
    model.stop();
  }

  onStart(model) {
    model.run();
  }

  onReset(model) {
    model.reset();
  }
}
