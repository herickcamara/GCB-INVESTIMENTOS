import { State } from "../types/ReducerState";

export const DbFake = {
  postDBFake: async (user: State) => {
    console.log(user);
    try {
      const userDb = await localStorage.getItem("@user_db");
      if (userDb) {
        const data = JSON.parse(userDb);
        const userExists = await data.filter(
          (users: State) => users.email === user.email || users.CPF === user.CPF
        );
        if (userExists.length === 0) {
          const newData = [...data, user];
          localStorage.setItem("@user_db", JSON.stringify(newData));
          alert("Data saved successfully");
          return { status: 200, message: "Data saved successfully" };
        }

        return { status: 400, message: "User already exists" };
      } else {
        const data: State[] = [];
        data.push(user);
        localStorage.setItem("@user_db", JSON.stringify(data));
        alert("Data saved successfully");
        return { status: 200, message: "Data saved successfully" };
      }
    } catch (error) {
      return { status: 501, error, message: "Erro no Banco de Dados" };
    }
  },
  getDBFake: async (email: string, pass: string) => {
    try {
      const userDb = await localStorage.getItem("@user_db");

      if (userDb) {
        const db = await JSON.parse(userDb);
        const user = db.filter((user: State) => user.email === email);

        if (user.length) {
          if (user[0].email === email && user[0].password === pass) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("@token", JSON.stringify({ email, token }));
            return { status: 200, user };
          }

          return { status: 400, message: "Invalid email or password" };
        }
      }

      return { status: 400, message: "No registration with state email" };
    } catch (error) {
      return { status: 501, error, message: "Erro no Banco de Dados" };
    }
  },
};
