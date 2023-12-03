"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Form, Formik } from "formik";
import CustomInput from "@/components/CustomInput";
import SignUpvalidationSchema from "@/lib/yupSchema/SignUpValidation";
import { SIGNUP_INIT_VALUE } from "@/app/constants";
const Page = () => {
  return (
    <div className="container relative flex pt-10 flex-col items-center justify-center md:px-0">
      <div className="mx-auto flex flex-col justify-center sm:w-[350px] w-full ">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Image
            src="/signup-logo.png"
            width={200}
            height={200}
            alt={"sign up logo"}
          />
        </div>
        <div className="grid gap-6">
          <Formik
            validationSchema={SignUpvalidationSchema}
            initialValues={SIGNUP_INIT_VALUE}
            onSubmit={(e) => console.log(e)}
          >
            <Form>
              <div className="grid gap-2">
                <div className="grid gap-2 py-3">
                  <Label htmlFor="email">Email</Label>
                  <CustomInput name="email" placeholder="hello@gmail.com" />
                </div>
                <div className="grid gap-2 py-3">
                  <Label htmlFor="password">Password</Label>
                  <CustomInput name="password" placeholder="Enter Secure Password" />
                </div>
                <Button type="submit">Sign Up</Button>
              </div>
            </Form>
          </Formik>
        </div>
        <Link
          href="/sign-in"
          className={buttonVariants({
            variant: "link",
            className: "text-blue-500 font-bold gap-2",
          })}
        >
          Already have an account ? Sign In <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default Page;
