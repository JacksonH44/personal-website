export const sendContactForm = async (data) => fetch('/api/contact', {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
    Accept: "applicant/json",
  },
}).then((res) => {
  if (!res.ok) 
    {
      throw new Error("Oops! It looks like something went wrong sending our email! Feel free to still reach out at jacksonhowe3@gmail.com!");
    }
  return res.json();
});
