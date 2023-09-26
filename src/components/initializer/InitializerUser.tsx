"use client";

import useUserStore from "@/store/userStore";
import { User } from "@prisma/client";
import React from "react";

interface InitializerUserProps {
  user: User | null | undefined;
}

export default function InitializerUser({ user }: InitializerUserProps) {
  const isInitialized = React.useRef(false);
  const userStore = useUserStore();

  if (!isInitialized.current) {
    userStore.setUser(user);

    isInitialized.current = true;
  }

  return null;
}
