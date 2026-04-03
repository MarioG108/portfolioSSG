"use client";

import { useGSAP as useGsapReact } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export const useGSAP: typeof useGsapReact = (
  callback,
  config
) => {
  return useGsapReact(callback, config);
};
