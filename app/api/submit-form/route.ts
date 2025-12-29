import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, data, timestamp } = body;

    // Format email content based on form type
    let subject = "";
    let htmlContent = "";

    switch (formType) {
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

      default:
        return NextResponse.json(
          { success: false, message: "Invalid form type" },
          { status: 400 }
        );
    }

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Rural Community Partners <onboarding@resend.dev>",
      to: ["jody@hbcat.org"],
      replyTo: data.email,
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error("[v0] Error sending email:", error);
      return NextResponse.json(
        { success: false, message: "Error sending email" },
        { status: 500 }
      );
    }

    // Log for debugging
    console.log("[v0] Form submission:", { formType, data, timestamp });
    console.log("[v0] Email sent successfully:", emailData);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[v0] Error processing form:", error);
    return NextResponse.json(
      { success: false, message: "Error processing form" },
      { status: 500 }
    );
  }
}