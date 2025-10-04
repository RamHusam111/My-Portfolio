import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_3pqht9i";
const EMAILJS_TEMPLATE_ID = "template_ez2jwdi";
const EMAILJS_PUBLIC_KEY = "_BxWE4td0ZyGN3ZOy";

export async function sendContactViaEmailJS({ name, email, subject, message }) {
  const params = {
    from_name: name,
    reply_to: email,
    subject,
    message,
  };
  const res = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    params,
    { publicKey: EMAILJS_PUBLIC_KEY }
  );
  if (res.status !== 200) throw new Error("EmailJS failed");
}