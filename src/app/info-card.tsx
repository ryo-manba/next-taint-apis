"use client";

import type { User } from "./types";

type Props = {
  user: User;
};

export const InfoCard = ({ user }: Props) => {
  return (
    <div>
      <h2 className="text-lg">User info</h2>
      <ul className="text-base list-disc list-inside">
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Password: {user.password}</li>
      </ul>
    </div>
  );
};
