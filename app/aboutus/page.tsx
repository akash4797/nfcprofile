"use client";
import Header from "@/components/landingpage/Header";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading/Loading";

export default function About() {
  const { status } = useSession();
  if (status === "loading") return <Loading />;
  return (
    <div className="container py-5">
      <div className="">
        <h1 className="text-2xl font-bold text-center uppercase">About us</h1>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">
          Welcome to Smart Profile, The Future of Personal Connectivity
        </h2>
        <p>{`At Smart Profile, we're revolutionizing the way you connect and interact with the digital world. Our state-of-the-art NFC smart cards are not just cards; they're your personal gateway to a digital profile that represents you.`}</p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Our Journey</h2>
        <p>{`Founded in [Year], our team observed a gap in the personalization and accessibility of digital profiles. We aimed to create a seamless bridge between the physical and digital realms, making interactions more intuitive and personalized. Thus, the idea of NFC smart cards linked to personal profiles was born.`}</p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Our Product</h2>
        <p>{`Our NFC smart cards are meticulously designed to merge style with functionality. By simply placing the card near your smartphone, you're instantly taken to your personalized profile on our website. This profile is not just a digital space; it's a canvas for your personality and a tool for your convenience.`}</p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">
          Personalization at Your Fingertips
        </h2>
        <p>{`Your uniqueness should reflect in everything you own, which is why our user panel allows complete customization of your profile and card design. Your digital presence can now match your style!`}</p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Exclusive Membership</h2>
        <p>{`Our commitment to exclusivity and privacy is unwavering. Create your account with us by choosing your NFC card design. Once ordered, either through our website or social media, our team sets up your profile. Upon receiving your card, complete with beautiful packaging and a user manual, you're all set to personalize your digital space.`}</p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Our Promise</h2>
        <p>{`We promise a seamless, secure, and stylish experience with every NFC smart card. Your digital identity is our priority, and we ensure it's represented with elegance and efficiency.`}</p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Join Us</h2>
        <p>{`Be a part of this digital revolution. Order your NFC smart card today and step into the future of personal digital interaction.`}</p>
      </div>
    </div>
  );
}
