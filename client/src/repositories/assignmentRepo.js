import {action, decorate, observable} from "mobx";

export class AssignmentRepo {
  create() {
    // TODO implement
  }

  delete() {
    // TODO implement
  }

  update() {
    // TODO implement
  }

  getByLesson() {
    // TODO implement
  }

  getAll() {
    // TODO implement
  }

  getByUser() {
    // TODO implement
  }

}

decorate(AssignmentRepo, {
  create: action,
  update: action,
  delete: action,
  getAll: observable,
  getByUser: observable,
  getByLesson: observable
});
