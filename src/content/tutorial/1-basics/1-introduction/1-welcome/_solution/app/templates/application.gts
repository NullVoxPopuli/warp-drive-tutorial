import Route from 'ember-route-template';
import { pageTitle } from 'ember-page-title';
import { WelcomePage } from 'ember-welcome-page';

export default Route(
  <template>
    {{pageTitle "Let's Learn Warp Drive"}}

    <h1>Let's Learn WarpDrive</h1>

    {{outlet}}
  </template>
);
