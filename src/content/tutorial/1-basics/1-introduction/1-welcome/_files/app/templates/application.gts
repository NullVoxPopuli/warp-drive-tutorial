import Route from "ember-route-template";
import { pageTitle } from "ember-page-title";

export default Route(
  <template>
    {{pageTitle "DemoApp"}}

    {{outlet}}

    Hello There!
  </template>,
);
