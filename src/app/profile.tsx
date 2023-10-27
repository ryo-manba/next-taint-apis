import {
  getUserWithTaintObjectReference,
  getUserWithTaintUniqueValue,
} from "./get-user";
import { InfoCard } from "./info-card";
import type { User } from "./types";

type Props = {
  userId: number;
};

export const Profile = async ({ userId }: Props) => {
  const user = await getUserWithTaintObjectReference(userId);
  // const user = await getUserWithTaintUniqueValue(userId);
  if (!user) {
    return <div>User not found.</div>;
  }

  return <InfoCard user={user} />;
};
