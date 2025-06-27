// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
      const { firstName, whatsapp, email, message, images } = req.body;


        // Basic validation
        if (!firstName || !whatsapp || !email || !message) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        try {
            // Create a nodemailer transporter using your SMTP settings
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST, // e.g. "smtp.gmail.com"
                port: Number(process.env.EMAIL_PORT) || 587,
                secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_USER, // your email address
                    pass: process.env.EMAIL_PASS, // your email password or app-specific password
                },
            });

            let attachments:any = [];
            if (Array.isArray(images)) {
              attachments = images.map((img: string, index: number) => {
                // Expecting img to be a base64 data URL, e.g., "data:image/png;base64,..."
                const matches = img.match(/^data:(.+);base64,(.+)$/);
                if (matches) {
                  const mime = matches[1];
                  const base64data = matches[2];
                  return {
                    filename: `image_${index}.${mime.split("/")[1]}`,
                    content: Buffer.from(base64data, "base64"),
                    contentType: mime,
                  };
                }
                return null;
              }).filter(Boolean);
            }

            // Setup email options
            const mailOptions = {
                from: `"Contact Form" <${process.env.EMAIL_USER}>`, // sender address
                to: process.env.OWNER_EMAIL, // your email address where you want to receive submissions
                subject: "New Contact Form Submission",
                text: `You have a new contact form submission:
        
                Name: ${firstName}
                WhatsApp: +971 ${whatsapp}
                Email: ${email}
                Message: ${message}`,
                html: `<p>You have a new contact form submission:</p>
               <p><strong>Name:</strong> ${firstName}</p>
               <p><strong>WhatsApp:</strong> +971 ${whatsapp}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
               attachments,
            };

            // Send the email
            await transporter.sendMail(mailOptions);

            return res.status(200).json({ message: "Email sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: "Error sending email" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}



// import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { firstName, whatsapp, email, message } = req.body;

//   // Set up Nodemailer transporter (replace with real credentials)
//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "anahitafarrokhi11@gmail.com", // Replace with your email
//       pass: "siahPOOsh..12", // Use an app password instead of real password
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: "anahitafarrokhi11@gmail.com", // The email address to receive the messages
//       subject: "New Contact Form Submission",
//       text: `Name: ${firstName}\nWhatsApp: ${whatsapp}\nEmail: ${email}\nMessage: ${message}`,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, error: "Failed to send email" });
//   }
// }
