const kue = require('kue');
const queue = kue.createQueue();

const JOB_DATA = {
  phoneNumber: "",
  message: "",
};

const push_notification_code = queue.create('job', JOB_DATA).save( function(err) {
  if (!err) {
    console.log("Notification job created: " + push_notification_code.id);
  } else {
    console.log("Notification job failed");
  }
  push_notification_code.on('complete', () => console.log("Notification job completed"));
});
