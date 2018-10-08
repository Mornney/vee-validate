import install from './install';
import directive from './directive';
import mixin from './mixin';
import use from './use';
import Validator from './core/validator';
import mapFields from './core/mapFields';
import ErrorBag from './core/errorBag';
import { ValidationProvider } from './components';

export default {
  install,
  use,
  directive,
  mixin,
  mapFields,
  Validator,
  ErrorBag,
  ValidationProvider,
  version: '__VERSION__'
};
