export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = (formData: IContactForm): Promise<string> => {
  return new Promise((resolve) => {
    console.log('Form Data:', formData);

    setTimeout(() => {
      resolve(`Thank you for your interest, ${formData.name}.`);
    }, 3000);
  });
};
