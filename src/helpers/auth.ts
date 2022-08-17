import { State } from "../types/ReducerState";

export const Auth = () => {
  const userToken = localStorage.getItem("@token");
  const userDb = localStorage.getItem("@user_db");

  if (userToken && userDb) {
    const hasUser: State[] = JSON.parse(userDb)?.filter(
      (user: any) => user.email === JSON.parse(userToken).email
    );

    if (hasUser) {
      return { status: 200, hasUser };
    }
  }
  return null;
};
