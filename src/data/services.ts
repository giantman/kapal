export type Service = {
  slug: string;
  title: string;
  description: string;
  body: string[];
};

export const services: Service[] = [
  {
    slug: "divorce",
    title: "Divorce",
    description:
      "Simplify your divorce process with our expert support and clear guidance every step of the way.",
    body: [
      "Ending a marriage is rarely simple, especially when significant assets, children, or complex finances are involved. Our attorneys guide you through every stage of the divorce process, from initial filing through settlement or trial, with the discretion and strategic judgment that high-asset cases require.",
      "We work to resolve matters efficiently wherever possible, while preparing thoroughly to litigate when a fair outcome demands it. You'll have a clear understanding of your options and a dedicated advocate protecting your interests at every turn.",
    ],
  },
  {
    slug: "child-support",
    title: "Child Support",
    description:
      "Accurate calculations and steady advocacy to secure support that reflects your children's needs.",
    body: [
      "Child support in California follows a statutory guideline formula, but the inputs — income, custodial timeshare, and add-on expenses — are often disputed, particularly in cases involving business owners or variable income. We ensure the numbers used to calculate support are accurate and complete.",
      "Whether you're establishing a new order or seeking a modification after a change in circumstances, we advocate for outcomes that reflect your children's actual needs and your true financial picture.",
    ],
  },
  {
    slug: "custody",
    title: "Custody",
    description:
      "Practical, steady advocacy for parenting plans that put your children first.",
    body: [
      "Custody disputes are among the most emotionally difficult matters our clients face. We approach every case with a clear focus on your children's best interests, working toward parenting plans that provide stability and structure.",
      "When disputes can't be resolved through negotiation or mediation, we're prepared to advocate for you in court, presenting the evidence needed to protect your relationship with your children.",
    ],
  },
  {
    slug: "spousal-support",
    title: "Spousal Support",
    description:
      "Clear-eyed analysis and strong representation to reach a fair, sustainable support outcome.",
    body: [
      "Spousal support determinations hinge on a careful reading of income, earning capacity, marital standard of living, and California's statutory factors. We build the financial record needed to support a fair result, whether you are seeking support or responding to a request.",
      "Our attorneys regularly work alongside forensic accountants and financial experts to ensure support calculations reflect the true economic picture, not just the numbers on a pay stub.",
    ],
  },
  {
    slug: "complex-asset-division",
    title: "Complex Asset Division",
    description:
      "Precise valuation and negotiation for high-value estates, businesses, and investment portfolios.",
    body: [
      "Dividing significant marital assets — closely held businesses, real estate portfolios, executive compensation, and investment accounts — requires more than a basic accounting. We work with forensic accountants, business valuators, and other experts to identify, trace, and value every asset in the marital estate.",
      "Our goal is a division that accurately reflects what was earned during the marriage and protects the assets you brought into it or built independently.",
    ],
  },
  {
    slug: "prenuptial-agreements",
    title: "Prenuptial Agreements",
    description:
      "Thoughtful agreements drafted to protect your interests before they're ever needed.",
    body: [
      "A well-drafted prenuptial agreement gives both parties clarity and protection going into a marriage. We draft agreements that address property division, spousal support, and business interests in a way that will hold up if it's ever needed, while keeping the process respectful and collaborative.",
      "Whether you're entering the marriage with significant separate property, a business, or family wealth, we tailor the agreement to your specific circumstances and California's enforceability requirements.",
    ],
  },
  {
    slug: "visitation",
    title: "Visitation",
    description:
      "Workable visitation arrangements that protect your time with your children.",
    body: [
      "A well-structured visitation schedule gives both parents and children the predictability they need. We help clients negotiate, modify, and, when necessary, enforce visitation orders that reflect real-life schedules and circumstances.",
      "If a former partner is interfering with your visitation rights, or if your circumstances have changed and your current schedule no longer works, we can help you pursue a modification or enforcement action.",
    ],
  },
  {
    slug: "business-valuations",
    title: "Business Valuations",
    description:
      "Rigorous valuation support for business owners navigating divorce or separation.",
    body: [
      "When a closely held business is part of the marital estate, its value — and how much of that value is community property — can define the entire case. We coordinate with experienced forensic accountants and valuation experts to build a defensible position, whether you're protecting a business you built or seeking your fair share of one.",
      "We understand the operational and tax consequences of different valuation and buyout structures, and we negotiate toward outcomes that keep the business viable.",
    ],
  },
  {
    slug: "postnuptial-agreements",
    title: "Postnuptial Agreements",
    description:
      "Clear financial agreements for couples who want certainty after the wedding.",
    body: [
      "Circumstances change after marriage — a business is started, an inheritance is received, or a couple simply wants to formalize how they'll handle their finances going forward. A postnuptial agreement lets you establish those terms with the same clarity a prenup would have provided.",
      "We draft and review postnuptial agreements that meet California's legal requirements for enforceability, so the agreement will hold up if it's ever tested.",
    ],
  },
  {
    slug: "alimony",
    title: "Alimony",
    description:
      "Strategic representation for spousal support requests, modifications, and terminations.",
    body: [
      "Alimony, referred to as spousal support in California, is calculated using both formulaic guidance and a set of statutory factors that leave significant room for advocacy. We build the financial and factual record needed to support a fair outcome, whether you are seeking, contesting, or modifying an order.",
      "Life circumstances change, and support orders can too. We help clients pursue modifications when income, health, or other circumstances shift materially.",
    ],
  },
  {
    slug: "domestic-partnerships",
    title: "Domestic Partnerships",
    description:
      "Guidance on the formation, rights, and dissolution of registered domestic partnerships.",
    body: [
      "Registered domestic partnerships carry many of the same rights and obligations as marriage under California law, but the details matter, particularly around property division, support, and dissolution procedures. We advise clients on establishing, protecting, and, when necessary, dissolving domestic partnerships.",
      "Our attorneys ensure your rights are fully recognized and protected, whatever stage of the partnership you're navigating.",
    ],
  },
  {
    slug: "restraining-orders",
    title: "Restraining Orders",
    description:
      "Responsive, protective counsel when your safety and your family's safety come first.",
    body: [
      "If you or your children are in danger, obtaining a restraining order quickly is critical. We help clients pursue emergency and long-term domestic violence restraining orders, moving efficiently through the court process while prioritizing your safety.",
      "We also represent clients who have been served with a restraining order, ensuring their rights are protected and the record accurately reflects the circumstances.",
    ],
  },
  {
    slug: "grandparent-visitation",
    title: "Grandparent Visitation",
    description:
      "Protecting the bond between grandparents and grandchildren under California law.",
    body: [
      "California law allows grandparents to petition for visitation rights under specific circumstances, particularly when the parents are separated, divorced, or when a parent is deceased. We help grandparents understand their rights and pursue visitation that preserves an important family relationship.",
      "We also represent parents responding to grandparent visitation petitions, ensuring any order respects the family's circumstances and the children's best interests.",
    ],
  },
  {
    slug: "same-sex-divorce",
    title: "Same-Sex Divorce",
    description: "Knowledgeable representation for same-sex couples navigating divorce.",
    body: [
      "Same-sex divorces can raise unique issues, particularly around the length of the relationship prior to legal marriage recognition, which can affect support and property division. We bring the same rigor and discretion to every case, informed by an understanding of these nuances.",
      "Our firm has a long history of representing LGBT clients and advocating for equal treatment under California family law.",
    ],
  },
  {
    slug: "lgbt-family-law",
    title: "LGBT Family Law",
    description: "Comprehensive family law counsel for LGBT individuals and families.",
    body: [
      "From parentage and adoption to custody, support, and separation, LGBT families sometimes face legal questions that don't fit neatly into standard family law frameworks. We provide informed, respectful counsel across the full range of family law matters.",
      "Our attorneys have longstanding involvement in the LGBT legal community and bring that perspective to every case we handle.",
    ],
  },
  {
    slug: "special-needs-child-custody",
    title: "Special Needs Child Custody",
    description:
      "Custody arrangements that account for a child's specific medical, therapeutic, and educational needs.",
    body: [
      "Custody and support arrangements for children with special needs require careful attention to medical care, therapy schedules, educational plans, and long-term financial support. We work to craft parenting plans and support orders that reflect your child's actual needs, now and in the future.",
      "We also address the unique question of support obligations that may need to extend beyond the standard age of majority for children who require ongoing care.",
    ],
  },
  {
    slug: "international-child-abduction",
    title: "International Child Abduction",
    description: "Urgent, experienced representation in cross-border child abduction matters.",
    body: [
      "When a child has been wrongfully removed to or retained in another country, time is critical. We represent parents in Hague Convention proceedings and related international custody matters, working to secure a child's prompt return and protect ongoing custody rights.",
      "These cases require both legal precision and the ability to move quickly across jurisdictions. We coordinate with international counsel and authorities as needed to protect your family.",
    ],
  },
  {
    slug: "interstate-child-abduction",
    title: "Interstate Child Abduction",
    description: "Swift action to enforce custody rights when a child is taken across state lines.",
    body: [
      "When a parent removes a child to another state in violation of a custody order, the Uniform Child Custody Jurisdiction and Enforcement Act governs how and where the matter is resolved. We act quickly to enforce existing orders and establish the proper jurisdiction for your case.",
      "Our attorneys have experience coordinating with courts and counsel in other states to protect your custodial rights without unnecessary delay.",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const firmInfo = {
  name: "Kaplan Trope Gekht & DeCarolis",
  legalName: "Kaplan, Trope, Gekht & DeCarolis, LLP",
  address: "10866 Wilshire Boulevard, Suite 1250, Los Angeles, CA 90024",
  phone: "310-473-0798",
  fax: "310-473-0625",
  mapUrl: "https://goo.gl/maps/MPWjufNGoqQ1bh9fA",
};
