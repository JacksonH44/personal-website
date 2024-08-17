export const getFullUrl = (route) => {
  const isLocal = process.env.NEXT_PUBLIC_VERCEL_ENV === 'local'
  const domain = isLocal ? 'localhost:3000' : 'personal-website-74ns.vercel.app';
  const protocol = isLocal ? 'http://' : 'https://';
  return `${protocol}${domain}${route}`
}

export const sendContactForm = async (data) => fetch(getFullUrl('/api/contact'), {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}).then((res) => {
  if (!res.ok) 
    {
      throw new Error("Oops! It looks like something went wrong sending our email! Feel free to still reach out at jacksonhowe3@gmail.com!");
    }
  return res.json();
});
