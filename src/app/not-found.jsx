"use client";
import { FileSearch } from "@phosphor-icons/react";

export default function NotFoundPage() {
   return (
      <div className="min-h-screen max-w-full flex justify-center items-center gap-x-3">
         <FileSearch size={32} className="text-color-accent" />
         <h3 className="text-color-accent text-2xl font-bold">NOT FOUND</h3>
      </div>
   )
}