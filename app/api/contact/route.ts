import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, data, timestamp } = body;

    let subject = "";
    let htmlContent = "";

    switch (formType) {
      case "support":
        // For the get-support page (unified form)
        subject = `New Support Request from ${data.name} - ${data.serviceType}`;
        htmlContent = `
          <h2>New Support Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Organization:</strong> ${data.organization || "Not provided"}</p>
          <p><strong>County:</strong> ${data.county}</p>
          <p><strong>Type of Support:</strong> ${data.serviceType}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <hr>
          <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
        `;
        break;

      case "general-support":
        subject = `New General Support Request from ${data.fullName}`;
        htmlContent = `
          <h2>New General Support Request</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Organization:</strong> ${data.organization || "Not provided"}</p>
          <p><strong>Type of Assistance:</strong> ${data.assistanceType}</p>
          <p><strong>Description:</strong></p>
          <p>${data.description}</p>
          <hr>
          <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
        `;
        break;

      case "mentorship":
        subject = `New Mentorship Application from ${data.fullName}`;
        htmlContent = `
          <h2>New Mentorship Program Application</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Business Name:</strong> ${data.businessName}</p>
          <p><strong>Business Stage:</strong> ${data.businessStage}</p>
          <p><strong>Industry:</strong> ${data.industry}</p>
          <p><strong>Business Idea/Venture:</strong></p>
          <p>${data.businessIdea}</p>
          <p><strong>Areas Needing Mentorship:</strong></p>
          <p>${data.mentorshipAreas}</p>
          <hr>
          <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
        `;
        break;

      case "community-investment":
        subject = `New Community Investment Request from ${data.fullName}`;
        htmlContent = `
          <h2>New Community Investment Request</h2>
          
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          
          <h3>Organization Details</h3>
          <p><strong>Organization:</strong> ${data.organization}</p>
          <p><strong>Organization Type:</strong> ${data.organizationType}</p>
          
          <h3>Initiative Information</h3>
          <p><strong>Initiative Title:</strong> ${data.initiativeTitle}</p>
          <p><strong>Type of Investment Needed:</strong> ${data.investmentType}</p>
          <p><strong>Timeline:</strong> ${data.timeline}</p>
          
          <h3>Initiative Description</h3>
          <p>${data.initiativeDescription}</p>
          
          <h3>Partnership Goals</h3>
          <p>${data.partnershipGoals}</p>
          
          <h3>Key Challenges or Questions</h3>
          <p>${data.challenges}</p>
          
          <hr>
          <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
        `;
        break;

      case "technical":
        subject = `New Technical Assistance Request from ${data.fullName}`;
        htmlContent = `
          <h2>New Technical Assistance Request</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Organization:</strong> ${data.organization}</p>
          <p><strong>Project Title:</strong> ${data.projectTitle}</p>
          <p><strong>Type of Assistance:</strong> ${data.assistanceType}</p>
          <p><strong>Timeline:</strong> ${data.timeline}</p>
          <p><strong>Project Description:</strong></p>
          <p>${data.projectDescription}</p>
          <p><strong>Key Challenges/Questions:</strong></p>
          <p>${data.challenges}</p>
          <hr>
          <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
        `;
        break;

      case "event-registration":
        subject = `New Event Registration: ${data.eventTitle} - ${data.fullName}`;
        htmlContent = `
          <h2>New Event Registration</h2>
          <h3>Event Details</h3>
          <p><strong>Event:</strong> ${data.eventTitle}</p>
          <p><strong>Event Date:</strong> ${data.eventDate}</p>
          <p><strong>Event ID:</strong> ${data.eventId}</p>
          
          <h3>Registrant Information</h3>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Organization:</strong> ${data.organization || "Not provided"}</p>
          
          <h3>Additional Information</h3>
          <p><strong>Dietary Restrictions:</strong> ${data.dietaryRestrictions || "None"}</p>
          <p><strong>Accessibility Needs:</strong> ${data.accessibilityNeeds || "None"}</p>
          
          <hr>
          <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
        `;
        break;

      case "contact":
        subject = `New Contact Form Message from ${data.name}`;
        htmlContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <hr>
          <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
        `;
        break;

      default:
        return NextResponse.json(
          { success: false, message: "Invalid form type" },
          { status: 400 }
        );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Rural Community Partners <onboarding@resend.dev>",
      to: ["jody@hbcat.org"],
      replyTo: data.email,
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { success: false, message: "Error sending email" },
        { status: 500 }
      );
    }

    console.log("Form submission:", { formType, data, timestamp });
    console.log("Email sent successfully:", emailData);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { success: false, message: "Error processing form" },
      { status: 500 }
    );
  }
}