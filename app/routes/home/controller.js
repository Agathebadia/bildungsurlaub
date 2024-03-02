import Controller from '@ember/controller';

export default class HomeController extends Controller {
  get onSuccess() {
    return 'Copied to clipboard';
  }

    get onError() {
    return 'An error occurred, please try again';
  }
}
