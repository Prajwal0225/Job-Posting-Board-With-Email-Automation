//NodeMailer
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'glen.schroeder33@ethereal.email',
        pass: 'drz8e2bzGR9AWrGvnw'
    }
});

async function posting(req, res) {
    try {
        const jobTitle = req.body.jobTitle;
        const jobDescription = req.body.jobDescription;
        const experienceLevel = req.body.experienceLevel;
        const candidatesEmail = req.body.candidatesEmail;
        const endDate = req.body.endDate;

        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <glen.schroeder33@ethereal.email>', // sender address
            to: candidatesEmail, // list of receivers
            subject: "Job Posting", // Subject line
            text:
                `Job Title:  ${jobTitle}
        Job Description: ${jobDescription}
        Experience Level: ${experienceLevel}
        End Date to Apply: ${endDate}`, // plain text body
            html: `<p>Job Title: ${jobTitle}</p>
            <p>Job Description: ${jobDescription}</p>
            <p>Experience Level: ${experienceLevel}</p>
            <p>End Date to Apply: ${endDate}</p>`, // html body
        });
        let r = info.rejected;
        if (r.length == 0) {
            res.json({
                message: "Email send successfully",
                info
            })

        } else {
            res.send("Email Not getting send properly");
        }
    } catch (error) {
        res.send("Error while sending the email: " + error);
    }
}

module.exports = { posting }