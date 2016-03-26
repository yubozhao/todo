import { Meteor } from 'meteor/meteor';
import publications from './publications.js';

Meteor.startup(() => {
  // code to run on server at startup
});
publications();
