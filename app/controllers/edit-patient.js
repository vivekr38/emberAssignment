import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class EditPatientController extends Controller {
  @service("patient") patient;
  @tracked patients;

  constructor() {
    super(...arguments);
    this.patients = this.patient.getAll();
  }
  @action
  updatePatient(updatedPatient, previousPatientId) {
    this.patients = this.patient.remove(previousPatientId);
    var i,
      q = [];

    var myForm = document.getElementById("editform");
    for (i = myForm.elements.length - 1; i >= 0; i = i - 1) {
      if (myForm.elements[i].name === "") {
        continue;
      }
      switch (myForm.elements[i].nodeName) {
        case "INPUT":
          switch (myForm.elements[i].type) {
            case "text":
            case "hidden":
            case "password":
            case "button":
            case "reset":
            case "submit":
              var key = myForm.elements[i].name;
              var obj = {};
              obj[key] = myForm.elements[i].value;
              q.push(obj);
              this.updatedPatient = Object.assign({}, ...q);
              var totalPatients = this.patients.length;
              q.forEach((item, i) => {
                item.id = totalPatients + 1;
                item.creds = {
                  email: "patient" + item.id + "@patient.com",
                  password: "patient",
                  role: "patient",
                };
              });
              break;
          }
      }
    }
    this.patients = this.patient.update(this.updatedPatient);
  }
}
