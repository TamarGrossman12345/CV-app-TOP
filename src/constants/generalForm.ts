import { UserRound, GraduationCap, BriefcaseBusiness, Phone } from "lucide-react";
import type { FormSection } from "../types";

export const FORM_SECTIONS: FormSection[] = [
    {
        id: "profile",
        title: "Profile",
        icon: UserRound,
        inputCustomFields: [
            { name: "name", title: "Full Name", placeholder: "Enter Full Name" },
            { name: "position", title: "Position", placeholder: "Enter Position" },
            { name: "careerObjective", title: "Objective", placeholder: "Enter a short career objective", type: "textarea" },
        ],

    },
    {
        id: "education",
        title: "Education",
        icon: GraduationCap,
        inputCustomFields: [
            { name: "school", title: "School", placeholder: "Enter School" },
            { name: "degree", title: "Degree", placeholder: "Enter Degree" },
            {
                name: "eduLocation", title: "Location", placeholder: "Enter Location"
            }
        ],
        inputDatesFields: [
            { startName: "eduStartDate", endName: "eduEndDate" }
        ]

    },
    {
        id: "experience",
        title: "Experience",
        icon: BriefcaseBusiness,
        inputCustomFields: [
            { name: "jobTitle", title: "Job Title", placeholder: "Enter Job Title" },
            { name: "company", title: "Company", placeholder: "Enter Company" },
            { name: "expDescription", type: "textarea", title: "Description", placeholder: "Enter Job Description" }
        ],
        inputDatesFields: [
            { startName: "expStartDate", endName: "expEndDate" }
        ]

    },
    {
        id: "contact",
        title: "Contact",
        icon: Phone,
        inputCustomFields: [
            { name: "contactLocation", title: "Location", placeholder: "Enter Your Location" },
            { name: "email", fieldType:"email",title: "Email", placeholder: "Enter Your Email" },
            { name: "phone", fieldType:"tel", title: "Phone Number", placeholder: "Enter Your Phone Number" },
            { name: "linkedin", fieldType:"url", title: "Linkedin URL", placeholder: "Enter Your Linkedin Profile URL" }
        ],
    }

];