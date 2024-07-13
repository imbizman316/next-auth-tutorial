import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Image from "next/image";

const Member = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div>
      <h1>Member Server Section</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
      {/* <Image
        width={200}
        height={200}
        src={`URL(${session?.user?.picture})`}
        alt={session?.user?.email}
      /> */}
    </div>
  );
};

export default Member;
