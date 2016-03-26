import {Meteor} from 'meteor/meteor';
import Tasks from '/lib/collections/tasks';

export default function () {
  Meteor.publish('tasks', ()=> {
    return Tasks.find({});
  });
}
