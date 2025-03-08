const Activity = require("../../models/rewards-management/activity.model.cjs"); // Import Activity model

const createActivity = async (activityData) => {
  return await Activity.create(activityData);
};

const listActivitiesByUser = async (userId) => {
  return await Activity.find({ user: userId });
};

module.exports = {
  createActivity,
  listActivitiesByUser,
};
