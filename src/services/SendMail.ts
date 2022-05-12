import axios from 'axios';

export const sendMail = async (
  name: string,
  senderMail: string,
  content: string
): Promise<any> => {
  const data = {
    name,
    senderMail,
    content,
  };

  try {
    return axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
};
