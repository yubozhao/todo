import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('tasks', ()=> {
    return Tasks.find();
  });
}
