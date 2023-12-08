import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AccordionComponent extends Component {

    get states() {
      //arguments passed from index.hbs @model.data
      console.log(this.args.states, 'states');
      return this.args.states;
    }


}
