import axios from "axios";

class QuestionsAPI {
  getCategories = async (): Promise<any> => {
    const res = await axios.get(`/v1/auth/login`);
    return res;
  };
}

const questionsAPI = new QuestionsAPI();
export default questionsAPI;
