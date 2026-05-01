import type {
  LucideIcon,
} from "lucide-react";
import {
  Landmark,
  ShoppingBag,
  Factory,
  Building2,
  UserCheck,
  Store,
  Banknote,
  QrCode,
  Shuffle,
  CreditCard,
  Smartphone,
  Terminal,
  Globe,
  Database,
  FileText,
  Workflow,
  Sparkles,
  Wrench,
  Boxes,
  Rocket,
  Server,
  Code2,
  TrendingUp,
} from "lucide-react";

export type Item = {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  illustrationKey: string;
};

export const industries: Item[] = [
  {
    id: "bfsi",
    title: "BFSI",
    blurb:
      "Revolutionizing banking, financial and insurance services with secure, scalable fintech and digital solutions that meet the highest standards of excellence. Our technology sets new benchmarks, driving efficiency and elevating customer experiences in the financial sector.",
    icon: Landmark,
    illustrationKey: "financial-dashboard",
  },
  {
    id: "retail",
    title: "Retail & eCommerce",
    blurb:
      "Transforming retail and digital commerce with innovative platforms and automation technologies that drive growth and streamline operations. Experience the power of cutting-edge solutions designed to maximize your digital footprint and engage customers like never before.",
    icon: ShoppingBag,
    illustrationKey: "retail-commerce",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Production",
    blurb:
      "Enhancing operational efficiency with AI-driven ERP and digital solutions and technology-enabled platforms that optimize processes and boost productivity. Embrace the future of manufacturing with our intelligent solutions that lead to operational excellence and increased profitability.",
    icon: Factory,
    illustrationKey: "industrial-flow",
  },
];

export const solutions: Item[] = [
  {
    id: "core-banking",
    title: "Core Banking",
    blurb:
      "Step into the future of financial management with our cutting-edge core banking platforms. Crafted in collaboration with leading technology providers, our solutions deliver exceptional performance and adaptability, setting new standards in the industry.",
    icon: Building2,
    illustrationKey: "data-network",
  },
  {
    id: "digital-onboarding",
    title: "Digital Onboarding",
    blurb:
      "Transform stakeholder interactions with our advanced digital onboarding solutions. Catering to customers, merchants, aggregators, and partners, our tools ensure secure and efficient identity verification and compliance.",
    icon: UserCheck,
    illustrationKey: "user-verification",
  },
  {
    id: "merchant-management",
    title: "Merchant Management",
    blurb:
      "Elevate your merchant management capabilities with our comprehensive system. Designed for seamless interoperability, our solutions offer unmatched flexibility and efficiency, optimizing operations across diverse platforms.",
    icon: Store,
    illustrationKey: "payment-flow",
  },
  {
    id: "digital-lending",
    title: "Digital Lending & Collection",
    blurb:
      "Enhance your financial operations with our state-of-the-art digital lending and collection solutions. Streamline every phase of the loan lifecycle with technology that integrates effortlessly and scales with your needs.",
    icon: Banknote,
    illustrationKey: "growth-chart",
  },
  {
    id: "payment-acquiring",
    title: "Payment Acquiring",
    blurb:
      "Revamp your payment infrastructure with our versatile end-to-end acquiring solutions. Whether QR payments, POS systems, SoftPOS, or Payment Gateways, our cloud-based, device-agnostic solutions offer flexible options and seamless integration.",
    icon: QrCode,
    illustrationKey: "payment-flow",
  },
  {
    id: "payment-processing",
    title: "Payment Processing & Switching",
    blurb:
      "Achieve exceptional speed and reliability in transaction processing with our high-performance systems. Our solutions are built for scalability and interoperability, ensuring smooth integration and operational excellence.",
    icon: Shuffle,
    illustrationKey: "payment-flow",
  },
  {
    id: "cms-issuance",
    title: "CMS & Issuance",
    blurb:
      "Transform your card management with our advanced CMS and issuance solutions. In partnership with top industry players, we offer customizable and cost-effective technology that integrates effortlessly.",
    icon: CreditCard,
    illustrationKey: "digital-card",
  },
  {
    id: "digital-banking",
    title: "Digital Banking",
    blurb:
      "Revolutionize customer experiences and operational efficiency with our integrated digital banking solutions. Our cloud-based, device-agnostic platforms offer scalable options to manage all aspects of digital banking with ease.",
    icon: Smartphone,
    illustrationKey: "digital-card",
  },
  {
    id: "pos-devices",
    title: "POS & Devices",
    blurb:
      "Address diverse business needs with our sophisticated POS solutions and devices. Our offerings ensure compatibility with various payment methods, delivering a seamless, integrated experience for merchants and customers.",
    icon: Terminal,
    illustrationKey: "digital-card",
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    blurb:
      "Optimize your online retail strategy with our scalable eCommerce platforms. Designed for flexibility and efficiency, our solutions support comprehensive payment processing, inventory management, and customer engagement.",
    icon: Globe,
    illustrationKey: "retail-commerce",
  },
  {
    id: "erp",
    title: "ERP Solutions",
    blurb:
      "Transform enterprise operations with our integrated ERP systems. Developed in partnership with leading technology providers, our solutions offer robust features for finance, supply chain, and HR management.",
    icon: Database,
    illustrationKey: "data-network",
  },
  {
    id: "document-management",
    title: "Document Management",
    blurb:
      "Enhance organizational efficiency with our secure, cloud-based document management solutions. Designed for seamless integration and flexibility, optimizing digital documentation and streamlining workflows.",
    icon: FileText,
    illustrationKey: "document-stack",
  },
  {
    id: "automation",
    title: "Automation",
    blurb:
      "Increase productivity with our advanced automation tools. Streamline repetitive tasks and processes with scalable solutions that drive innovation and enhance operational efficiency.",
    icon: Workflow,
    illustrationKey: "data-network",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    blurb:
      "Harness the power of AI to revolutionize your business operations. Automated communication, predictive analytics, data analysis, and automation capabilities integrate seamlessly to drive growth and maximize impact.",
    icon: Sparkles,
    illustrationKey: "data-network",
  },
];

export const services: Item[] = [
  {
    id: "engineering",
    title: "Engineering Services",
    blurb:
      "Unlock the potential of fintech and enterprise technologies with our expert development and deployment. From custom software to system integration and technical support, we ensure seamless performance and transformative outcomes.",
    icon: Wrench,
    illustrationKey: "document-stack",
  },
  {
    id: "bespoke",
    title: "Bespoke Product Development",
    blurb:
      "Turn your unique challenges into streamlined opportunities with our bespoke technology solutions. Tailored applications and software designed for flexibility and cost-effectiveness, crafted to meet your specific industry needs.",
    icon: Boxes,
    illustrationKey: "cloud-infra",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    blurb:
      "Drive your digital evolution with our strategic consultancy and implementation support. We guide you through technology adoption, process optimization, and change management.",
    icon: Rocket,
    illustrationKey: "growth-chart",
  },
  {
    id: "managed",
    title: "Managed Services",
    blurb:
      "Optimize your IT infrastructure with our comprehensive managed services. From monitoring and maintenance to support, we ensure optimal performance and reliability.",
    icon: Server,
    illustrationKey: "cloud-infra",
  },
  {
    id: "low-code",
    title: "Low Code Solutions",
    blurb:
      "Accelerate your digital initiatives with our low-code development platforms. Rapidly deploy and customize applications with minimal coding, driving efficiency and innovation for faster project delivery.",
    icon: Code2,
    illustrationKey: "data-network",
  },
  {
    id: "business-transformation",
    title: "Business Transformation",
    blurb:
      "Achieve strategic goals with our consultancy-driven business transformation strategies. We leverage technology and best practices to drive organizational change, enhance processes, and achieve sustainable growth.",
    icon: TrendingUp,
    illustrationKey: "growth-chart",
  },
];

export const capabilities = [
  "Payments",
  "Fintech",
  "Core Banking",
  "ERP",
  "AI",
  "Digital Onboarding",
  "POS",
  "Acquiring",
  "Switching",
  "Card Issuance",
  "Automation",
  "Cloud",
  "eCommerce",
  "Low Code",
  "Managed Services",
];

export const stats = [
  { value: 14, suffix: "+", label: "Solutions" },
  { value: 6, suffix: "", label: "Services" },
  { value: 3, suffix: "", label: "Industry Verticals" },
  { value: 100, suffix: "%", label: "Cloud-Ready" },
];

export const contact = {
  website: "wenthura.lk",
  email: "info@wenthura.lk",
  phone: "+94 11 260 9571",
  sales: "sales@wenthura.lk",
  partner: "partner@wenthura.lk",
};
