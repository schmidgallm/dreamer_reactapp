import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import prompts from './prompts';
import stories from './stories';

export default combineReducers({
    alert,
    auth,
    profile,
    prompts,
    stories,
});
