import markVincentKaplan from "../assets/attorneys/mark-vincent-kaplan.jpeg";
import garryGekht from "../assets/attorneys/garry-gekht.jpeg";
import melineKyurkchyan from "../assets/attorneys/meline-kyurkchyan.jpeg";
import michelleTaran from "../assets/attorneys/michelle-taran.jpeg";
import droritRaitor from "../assets/attorneys/drorit-raitor.jpg";
import deborahTilton from "../assets/attorneys/deborah-tilton.jpg";
import saraTavakoli from "../assets/attorneys/sara-tavakoli.png";

export type Attorney = {
  slug: string;
  name: string;
  title: string;
  group: "Partners" | "Associates" | "Of Counsel";
  summary: string;
  photo?: string;
  sections: { heading: string; body: string }[];
};

export const attorneys: Attorney[] = [
  {
    slug: "mark-vincent-kaplan",
    name: "Mark Vincent Kaplan, Esq.",
    title: "Founding Partner",
    group: "Partners",
    photo: markVincentKaplan,
    summary:
      "44 years practicing family law in California, with an AV Preeminent rating from Martindale-Hubbell and repeated recognition as a Southern California Super Lawyer.",
    sections: [
      {
        heading: "Education",
        body: "Dual Bachelor of Arts in History and Political Science from the University of Illinois, where he received the George Huff Award, was a Dean's List honoree, and competed as an NCAA-ranked athlete. Juris Doctor from Southwestern School of Law in Los Angeles, where he was a Moot Court nominee, West Publishing Award recipient, and State Farm Scholar.",
      },
      {
        heading: "Professional Experience",
        body: "Mentored by renowned litigator Marvin Mitchelson and later by Sorrel Trope at Trope & Trope, where he became partner. He has maintained a private family law practice for 24 years and is admitted to practice before the 9th Circuit Court of Appeals and the Central District of California.",
      },
      {
        heading: "Notable Work",
        body: "Represented high-profile clients including Paula Abdul, Charlie Sheen, and Kevin Federline, among others. Served institutional clients including Bank of New York Mellon and Major League Baseball during the McCourt/Dodgers case.",
      },
      {
        heading: "Media & Charitable Involvement",
        body: "Featured on Good Morning America, the Today Show, and other major networks. Sits on the planning commission for the Samburu Project, which supports water infrastructure in Kenya.",
      },
    ],
  },
  {
    slug: "garry-gekht",
    name: "Garry M. Gekht, Esq.",
    title: "Partner",
    group: "Partners",
    photo: garryGekht,
    summary:
      "A former forensic accountant and Certified Divorce Financial Analyst who has practiced family law since 1998, handling hundreds of cases involving complex financial analysis and asset valuation.",
    sections: [
      {
        heading: "Education",
        body: "Juris Doctorate from Loyola Law School, Los Angeles, where he received the Fritz Burns Scholar award for top-ranked first-year law student, along with Loyola Scholar status and Dean's Honor List recognition. Undergraduate degree from Chapman University College / Brandman University with a BBA in Accounting, graduating Magna Cum Laude.",
      },
      {
        heading: "Professional Background",
        body: "Before entering law practice, Gekht worked as a forensic accountant and Certified Divorce Financial Analyst (licensed 2009). He has practiced family law since 1998, handling hundreds of cases involving complex financial analysis, asset valuation, business distribution, spousal and child support calculations, and custody matters.",
      },
      {
        heading: "Recognition & Media",
        body: "Guest, commentator, or author in various media outlets, including NPR's Take Two and the Los Angeles Business Journal. Received the City of Beverly Hills Mayor's Award for Excellence in Communication for his newspaper column work.",
      },
      {
        heading: "Legal Experience",
        body: "Interned under the Honorable Judith Stein (Ret.) and former Mayor Richard Stone at Stone & Hiles law offices in Beverly Hills.",
      },
      {
        heading: "Community Involvement",
        body: "Served as two-term President of the LAGLCC Board of Directors, founded the Community Service Program for Beverly Hills Unified School District, and volunteered with the Harriet Buhai Center for Family Law.",
      },
      {
        heading: "Languages",
        body: "Fluent in Russian; conversational Spanish.",
      },
    ],
  },
  {
    slug: "michael-trope",
    name: "Michael L. Trope, Esq.",
    title: "Partner",
    group: "Partners",
    summary: "Partner at Kaplan Trope Gekht & DeCarolis.",
    sections: [
      {
        heading: "Full biography coming soon",
        body: "A detailed profile for this attorney is being prepared and will be added shortly.",
      },
    ],
  },
  {
    slug: "patrick-decarolis",
    name: "Patrick DeCarolis, Esq.",
    title: "Partner",
    group: "Partners",
    summary: "Partner at Kaplan Trope Gekht & DeCarolis.",
    sections: [
      {
        heading: "Full biography coming soon",
        body: "A detailed profile for this attorney is being prepared and will be added shortly.",
      },
    ],
  },
  {
    slug: "drorit-raitor",
    name: "Drorit Bick Raiter, Esq.",
    title: "Partner",
    group: "Partners",
    photo: droritRaitor,
    summary:
      "Nearly two decades of complex family law litigation experience and a pragmatic, client-focused approach to her practice.",
    sections: [
      {
        heading: "Education",
        body: "Bachelor of Arts in English from the University of California, Berkeley, prior to matriculating from Loyola Law School, Los Angeles in 2007.",
      },
      {
        heading: "Professional Experience",
        body: "Has participated in litigation of hundreds of family law cases, including a successful defense of an appeal of a family law decision in Division Two of the Second Appellate District of the Court of Appeal of the State of California.",
      },
      {
        heading: "Recognition",
        body: "Included in Thomson Reuters' Super Lawyers Rising Stars list for 2017 - 2020.",
      },
      {
        heading: "Community Service",
        body: "Pro bono work at the Domestic Violence Clinic of the Los Angeles Superior Court, and a recent commitment to the Harriett Buhai Center for Family Law.",
      },
      {
        heading: "Professional Memberships",
        body: "Beverly Hills Bar Association; Israeli American Legal Network.",
      },
      {
        heading: "Additional Details",
        body: "Raised in Los Angeles, where she resides with her husband and their three sons. Speaks Hebrew.",
      },
    ],
  },
  {
    slug: "meline-kyurkchyan",
    name: "Meline Kyurkchyan, Esq.",
    title: "Associate Attorney",
    group: "Associates",
    photo: melineKyurkchyan,
    summary:
      "Focused exclusively on family law practice since being admitted to the California Bar in 2015.",
    sections: [
      {
        heading: "Education",
        body: "Bachelor of Arts in English from UCLA, where she served on the Board of the UCLA ASA. Juris Doctorate from Whittier Law School, where she made the Dean's List.",
      },
      {
        heading: "Professional Affiliations & Community Involvement",
        body: "Member of the Beverly Hills Bar Association's Family Law Section. Throughout her legal career, Meline has volunteered with charitable organizations supporting underprivileged Armenian communities in Los Angeles and Armenia. She also participates in the annual Distinguished Gentleman's Ride, which supports the Movember Foundation.",
      },
      {
        heading: "Languages",
        body: "Fluent in written and spoken Armenian.",
      },
    ],
  },
  {
    slug: "michelle-taran",
    name: "Michelle Taran, Esq.",
    title: "Associate Attorney",
    group: "Associates",
    photo: michelleTaran,
    summary:
      "Brings three years of complex civil litigation experience to her family law practice.",
    sections: [
      {
        heading: "Education",
        body: "Undergraduate studies in Psychology at California State University, Northridge. Juris Doctorate from the University of West Los Angeles School of Law.",
      },
      {
        heading: "Professional Background",
        body: "Prior to joining the firm, Taran brought three years of complex civil litigation experience to her role. She maintains active membership in both the Beverly Hills and San Fernando Valley Bar Associations.",
      },
      {
        heading: "Community Involvement",
        body: "An active donor to the National Council of Jewish Women.",
      },
    ],
  },
  {
    slug: "deborah-tilton",
    name: "Deborah Tilton, Esq.",
    title: "Associate Attorney",
    group: "Associates",
    photo: deborahTilton,
    summary:
      "Specializes in family and matrimonial law settlements and litigation, particularly serving affluent clients in the entertainment and business sectors.",
    sections: [
      {
        heading: "Professional Focus",
        body: "Specializes in family and matrimonial law settlements and litigation, particularly serving affluent clients in entertainment and business sectors. Collaborates with financial experts on asset valuation during divorces and handles custody disputes, support matters, and domestic violence cases.",
      },
      {
        heading: "Legal Experience",
        body: "Began her legal career in 2001, spending six years at a Beverly Hills civil litigation firm addressing breach of contract, fraud, business disputes, and entertainment matters before transitioning to family law in 2007.",
      },
      {
        heading: "Entertainment Background",
        body: "Prior to law school, she maintained an active career as a performer and writer, including roles with Portland Stage Company and the Sundance Institute's playwriting festival, plus television and commercial work.",
      },
      {
        heading: "Education",
        body: "B.A. cum laude in English Literature, University of New Hampshire. J.D., Loyola Law School (2000). Internship with HBO Legal Affairs. Volunteer at the Low Income Tax Payer Clinic.",
      },
      {
        heading: "Bar Admission",
        body: "California State Bar, January 18, 2001.",
      },
      {
        heading: "Professional Memberships",
        body: "California Lawyers Association (Family Law); Los Angeles County Bar Association (Family Law and Entertainment sections); Beverly Hills Bar Association (Family Law and Entertainment sections); SAG/AFTRA and Actors' Equity Association.",
      },
      {
        heading: "Other Affiliations",
        body: "LACMA, MoCA; supporter of KCRW, KPCC, and KCET.",
      },
    ],
  },
  {
    slug: "sara-tavakoli",
    name: "Sara Tavakoli, Esq.",
    title: "Associate Attorney",
    group: "Associates",
    photo: saraTavakoli,
    summary:
      "Represents clients in sophisticated and high-conflict family law matters, bringing daily trial experience and a meticulous, strategic approach to every case.",
    sections: [
      {
        heading: "Practice Focus",
        body: "Sara Tavakoli represents clients in sophisticated and high-conflict family law matters, including the determination of child and spousal support, complex property division, and strategic motion practice. Bringing years of daily trial experience representing families in dependency court, Sara joined the firm in 2024, working closely with the firm's partners on high stakes litigation and trials, while independently handling contested motion practice. Sara brings a meticulous, strategic, and highly responsive approach to her practice, providing clients with thoughtful guidance, clear explanations, and individualized attention throughout each stage of their case.",
      },
      {
        heading: "Professional Experience",
        body: "Sara graduated from Southwestern Law School in 2020 and was admitted to the California Bar in January 2021. She began her legal career in public service as court-appointed counsel for parents in Los Angeles County dependency proceedings, where she handled hundreds of contested hearings and trials and developed valuable courtroom experience representing clients in high-stakes matters involving the Department of Children and Family Services.",
      },
      {
        heading: "Public Service & Community Involvement",
        body: "During law school, Sara worked with Levitt & Quinn Family Law Center, Inner City Law Center, the Legal Aid Foundation of Los Angeles, Children's Law Center of California, and the Lanterman Regional Center legal clinic serving children with developmental disabilities and specialized educational needs. These experiences reflect a longstanding commitment to advocacy and client service that continues to inform her family law practice today.",
      },
      {
        heading: "Education",
        body: "Bachelor of Arts from the University of California, Berkeley, where she majored in Peace and Conflict Studies and minored in Spanish Literature. Juris Doctor from Southwestern Law School (2020).",
      },
      {
        heading: "Languages",
        body: "Fluent in Farsi.",
      },
    ],
  },
  {
    slug: "carly-timm-bijold",
    name: "Carly Timm-Bijold, Esq.",
    title: "Associate Attorney",
    group: "Associates",
    summary: "Associate Attorney at Kaplan Trope Gekht & DeCarolis.",
    sections: [
      {
        heading: "Full biography coming soon",
        body: "A detailed profile for this attorney is being prepared and will be added shortly.",
      },
    ],
  },
  {
    slug: "clarissa-lopez",
    name: "Clarissa Lopez, Esq.",
    title: "Associate Attorney",
    group: "Associates",
    summary: "Associate Attorney at Kaplan Trope Gekht & DeCarolis.",
    sections: [
      {
        heading: "Full biography coming soon",
        body: "A detailed profile for this attorney is being prepared and will be added shortly.",
      },
    ],
  },
  {
    slug: "howard-posner",
    name: "Howard Posner, Esq.",
    title: "Associate Attorney",
    group: "Associates",
    summary: "Associate Attorney at Kaplan Trope Gekht & DeCarolis.",
    sections: [
      {
        heading: "Full biography coming soon",
        body: "A detailed profile for this attorney is being prepared and will be added shortly.",
      },
    ],
  },
  {
    slug: "katherine-c-aldin",
    name: "Katherine C. Aldin, Esq.",
    title: "Of Counsel",
    group: "Of Counsel",
    summary: "Of Counsel at Kaplan Trope Gekht & DeCarolis.",
    sections: [
      {
        heading: "Full biography coming soon",
        body: "A detailed profile for this attorney is being prepared and will be added shortly.",
      },
    ],
  },
];

export const getAttorney = (slug: string) =>
  attorneys.find((a) => a.slug === slug);
