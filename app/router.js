import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("dashboard");
  this.route("login", { path: "/" });
  this.route("patient", { path: "/patient/:patient_id" });
  this.route("addPatient");
  this.route("pageNotfound", { path: "/*path" });
  this.route("editPatient", { path: "/editPatient/:patient_id" });
  this.route("viewPatient", { path: "/viewPatient/:patient_id" });
});
