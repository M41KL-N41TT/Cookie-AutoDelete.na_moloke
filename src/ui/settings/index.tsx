/**
 * Copyright (c) 2017-2022 Kenny Do and CAD Team (https://github.com/Cookie-AutoDelete/Cookie-AutoDelete/graphs/contributors)
 * Licensed under MIT (https://github.com/Cookie-AutoDelete/Cookie-AutoDelete/blob/3.X.X-Branch/LICENSE)
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/* istanbul ignore file: React-redux init */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createUIStore } from 'redux-webext';
import { sleep } from '../../services/Libs';
import fontAwesomeImports from '../font-awesome-imports';
import App from './App';

fontAwesomeImports();

async function initApp() {
  let store = await createUIStore();
  while (!store.getState()) {
    await sleep(250);
    store = await createUIStore();
  }
  const mountNode = document.createElement('div');
  document.body.appendChild(mountNode);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    mountNode,
  );
}

initApp();
