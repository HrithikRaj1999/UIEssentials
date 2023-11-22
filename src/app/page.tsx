import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowDownToLine,
  CheckCircle,
  Clock8,
  Waves,
  PencilRuler,
  Cpu,
  LockKeyhole,
} from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your account in milli seconds, and download them right away and use it freely",
  },
  {
    name: "Guranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset is verified by  our products and it is very regorious testing",
  },
  {
    name: "24/7 Support",
    Icon: Clock8,
    description:
      "Access round-the-clock customer support to assist you with any queries or issues.",
  },
  {
    name: "Seamless Integration",
    Icon: Waves,
    description:
      "Easily integrate our product with your existing systems for a seamless user experience.",
  },
  {
    name: "Customization Options",
    Icon: PencilRuler,
    description:
      "Tailor the product to your needs with a wide range of customization options.",
  },
  {
    name: "Advanced Analytics",
    Icon: Cpu,
    description:
      "Gain valuable insights with our advanced analytics tools that help you make data-driven decisions.",
  },
  {
    name: "Secure Transactions",
    Icon: LockKeyhole, // Replace with your chosen icon
    description:
      "Enjoy peace of mind with secure and reliable transaction processes.",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="font-bold tracking-tight text-gray-900 text-4xl sm:text-6xl">
            Best market place for high-quality
            <span className="text-blue-600"> digital Products</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose ">
            Hi, Welcome to Easy Hippo. Every digital products on our platform is
            verified by our team to ensure high quality and best standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending Products
            </Link>
            <Button variant={"ghost"}>Quality Assurance &rarr;</Button>
          </div>
        </div>
        {/* TODO: List Products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 lg:gap-y-5 sm:gap-x-6 lg:gap-x-8 ">
            {perks.map((perk, index) => (
              <div
                className="text-center md:flex  md:text-center md:flex-col md:items-center lg:text-center lg:block "
                key={index}
              >
                <div className="md:flex-shrink-0 flex justify-center mt-5">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg-mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
