import Activity from "../../models/rewards-management/activity.model.js"; // Import Activity model

const createActivity = async (activityData) => {
  return await Activity.create(activityData);
};

const listActivitiesByUser = async (userId) => {
  return await Activity.find({ user: userId });
};

export default {
  createActivity,
  listActivitiesByUser,
};
