import Tasks from '/lib/collections/tasks.js';

export default {
  toggleComplete(taskId) {
    let task = Tasks.findOne({_id: taskId});
    if (task) {
      let status = task.is_completed ? false : true;
      Tasks.update({_id: taskId}, {$set: {is_completed: status}});
    }
  },
  toggleDelete(taskId) {
    let task = Tasks.findOne({_id: taskId});
    if (task) {
      let status = task.is_deleted ? false : true;
      Tasks.update({_id: taskId}, {$set: {is_deleted: status}});
    }
  },
  createNewTask(text) {
    Tasks.insert({text: text, is_completed: false, is_deleted: false});
  },
};
