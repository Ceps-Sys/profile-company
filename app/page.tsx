"use client";

import Image from "next/image";
import { useState } from "react";
import { MenuLandingPage } from "./components/landing-page-menu/page";
import { Button } from "@/components/ui/button";
import { LandingPageHero } from "./components/landing-page-hero/page";

import { X, Mail, Lock } from "lucide-react";
import {
  Field,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <main className="relative w-full bg-white dark:bg-black">
      <div className="relative z-0 -mt-[96px]"> 
        <LandingPageHero /> 
      </div>

      {/* Header/Navbar */}
      <div className="absolute top-0 left-0 z-10 w-full flex justify-center">
        <div className="w-[95%] h-[80px] bg-blue-800 dark:bg-blue-800 rounded-[70px] flex items-center justify-between mt-4 mx-8 p-4">
          {/* Bagian logo */}
          <div className="relative w-[200px] h-[50px] rounded-[70px]">
            <Image className="p-[7px] object-contain" src="/img/smk_mvp_ars_logo_white.png" alt="logo" fill />
          </div>

          {/* Menunya */}
          <div className="flex flex-1 items-center justify-center">
            <MenuLandingPage />
          </div>

          {/* BAGian Login */}
          <div className="flex items-center justify-end p-4">
            <Button
              onClick={() => setIsLoginOpen(true)}
              className="
                bg-white 
                border border-gray-300 
                text-orange-500 
                hover:bg-gray-100 
                dark:bg-gray-800 
                dark:border-gray-700 
                dark:text-orange-400
                text-[16px]
                font-semibold
                rounded-full
                px-6 py-2"
              size="lg"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Loginn */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-[500px] rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Tutup form login"
              onClick={() => setIsLoginOpen(false)}
              className="absolute right-3 top-3"
            >
              <X className="h-5 w-5" />
            </Button>

            <Field className="w-full space-y-4 pt-2">
              <FieldLabel htmlFor="email-input">Email</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupInput id="email-input" placeholder="Email" type="email" />
              </InputGroup>

              <FieldLabel htmlFor="password-input">Password</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupInput id="password-input" type="password" placeholder="Password" />
              </InputGroup>

              <Button type="submit" className="w-full mt-2">Submit</Button>
            </Field>
          </div>
        </div>
      )}
    </main>
  );
}