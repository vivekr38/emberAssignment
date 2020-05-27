import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class EditPatientRoute extends Route {
  @service("patient") patient;
  @tracked patients;
  constructor() {
    super(...arguments);
  }
  model({ patient_id }) {
    console.log("This is the dynamic segment data: ", patient_id);
    return this.patient.getOne(patient_id);
    // make an API request that uses the id
  }
}
