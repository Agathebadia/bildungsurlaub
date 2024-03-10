import Controller from '@ember/controller';

export default class HomeController extends Controller {
  // REMINDER: copy to clipboard only works on HTTPS
  async copyContent(targetText) {
    let text = document.getElementById(targetText).innerHTML;
    try {
      await
      navigator.clipboard.writeText(text);
      alert('Content copied to clipboard');
    } catch (err) {
      alert('Failed to copy: ', err);
    }
  // }
  }
}
