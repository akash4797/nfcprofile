"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/landingpage/Header";
import { signUp } from "next-auth-sanity/client";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading/Loading";

export default function Auth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const signUpFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
        username: uuidv4(),
      };
      try {
        const user = await signUp(data);
        if (user) {
          toast("User Created!");
          signUpFormik.resetForm();
        }
      } catch (error) {
        toast("Something went wrong!");
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
        <h1 className="text-xl font-bold">SIGN UP</h1>
      </div>
      <form
        onSubmit={signUpFormik.handleSubmit}
        className="flex flex-col gap-3 mt-3 bg-slate-100 rounded-lg p-5"
      >
        <Input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          value={signUpFormik.values.name}
          onChange={signUpFormik.handleChange}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={signUpFormik.values.email}
          onChange={signUpFormik.handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={signUpFormik.values.password}
          onChange={signUpFormik.handleChange}
        />
        <Button type="submit" className="w-fit">
          Create Account
        </Button>
      </form>
    </div>
  );
}
