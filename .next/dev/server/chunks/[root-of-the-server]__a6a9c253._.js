module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function POST(request) {
    try {
        const body = await request.json();
        const { formType, data, timestamp } = body;
        let subject = "";
        let htmlContent = "";
        switch(formType){
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Invalid form type"
                }, {
                    status: 400
                });
        }
        const { data: emailData, error } = await resend.emails.send({
            from: "Rural Community Partners <onboarding@resend.dev>",
            to: [
                "jody@hbcat.org"
            ],
            replyTo: data.email,
            subject: subject,
            html: htmlContent
        });
        if (error) {
            console.error("Error sending email:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Error sending email"
            }, {
                status: 500
            });
        }
        console.log("Form submission:", {
            formType,
            data,
            timestamp
        });
        console.log("Email sent successfully:", emailData);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Form submitted successfully"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error processing form:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Error processing form"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a6a9c253._.js.map