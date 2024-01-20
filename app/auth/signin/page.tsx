"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loading from "@/components/Loading/Loading";

export default function Signin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const signinFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const result = await signIn("sanity-login", {
        redirect: true,
        email: values.email as string,
        password: values.password as string,
        callbackUrl: "/userpanel",
      });
      console.log(result);
      if (result?.error) {
        toast(result?.error);
      } else {
        router.push("/userpanel");
      }
    },
  });

  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [status, router]);

  if (status === "loading") return <Loading />;

  return (
    <div className="container">
      <div className="">
        <h1 className="text-xl font-bold">SIGN IN</h1>
      </div>
      <form
        onSubmit={signinFormik.handleSubmit}
        className="flex flex-col gap-3 mt-3 bg-slate-100 rounded-lg p-5 shadow-md"
      >
        <Input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={signinFormik.values.email}
          onChange={signinFormik.handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={signinFormik.values.password}
          onChange={signinFormik.handleChange}
        />
        <Button type="submit" className="w-fit">
          LOG IN
        </Button>
      </form>
    </div>
  );
}
