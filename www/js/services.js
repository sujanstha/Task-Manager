angular.module('starter.services', [])

.factory('Groups', function(){
  var Group = Parse.Object.extend("Group");
  var query = new Parse.Query(Group);

  return {
    all: function() {
      var groups = query.find();
      return groups;
    }
    };
})

.factory('Tasks', function() {
  // Might use a resource here that returns a JSON array  

  return {
    all: function() {
      var Task = Parse.Object.extend("Task");
      var query = new Parse.Query(Task);
      var tasks = query.find();
      return tasks;
    },
    getByGroupId: function(groupId){
      var Task = Parse.Object.extend("Task");
      var query = new Parse.Query(Task);
      query.equalTo('groupId', groupId);
      var tasks = query.find();
      return tasks; 
    },
    getTaskById: function(taskId){
      var Task = Parse.Object.extend("Task");
      var query = new Parse.Query(Task);
      query.equalTo('objectId', taskId);
      var tasks = query.find();
      return tasks; 
    },
    add: function(groupId, name, description){
      var Task = Parse.Object.extend("Task");
      var task = new Task();
      task.set("groupId", groupId);
      task.set("name", name);
      task.set("description", description);
      task.save();
      return task; 
    }
  };
});
