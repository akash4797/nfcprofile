"use client";
import React from "react";

export default function UserPanel({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div className="container py-5">{id}</div>;
}
