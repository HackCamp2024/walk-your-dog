import axios from "axios";
export const fetchStepsData = async (token) => {
  const startTimeMillis = new Date().setDate(new Date().getDate() - 1); // 1 day ago
  const endTimeMillis = Date.now(); // Now

  try {
    const response = await axios.post(
      "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
      {
        aggregateBy: [
          {
            dataTypeName: "com.google.step_count.delta",
          },
        ],
        bucketByTime: { durationMillis: 86400000 }, // Daily data
        startTimeMillis,
        endTimeMillis,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return response.data.bucket[0].dataset[0].point[0].value[0].intVal;
    }
    return false;
  } catch (error) {
    console.error("Error fetching steps data:", error);
  }
};
