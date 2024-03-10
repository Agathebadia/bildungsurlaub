import Controller from '@ember/controller';

export default class HomeController extends Controller {
  get onSuccess() {
    return 'Copied to clipboard';
  }

    get onError() {
    return 'An error occurred, please try again';
  }

  get copyContent() {
    let text = document.getElementById('copyTextToClipboard').innerHTML;
    const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Content copied to clipboard');
    } catch (err) {
      alert.error('Failed to copy: ', err);
    }
  }
  }
}
