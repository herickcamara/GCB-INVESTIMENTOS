import { useForm } from "../hooks/ContextHook";

export const Auth = () => {
  const { state, dispatch } = useForm();

  const userToken = localStorage.getItem("@token");
  const userDb = localStorage.getItem("@user_db");

  if (userToken && userDb) {
    const hasUser = JSON.parse(userDb)?.filter(
      (user: any) => user.email === JSON.parse(userToken).email
    );

    if (hasUser) {
      return true;
    }

    return false;
  }
  return false;
};
const hasndleAuth = (db: string, token: string) => {};
