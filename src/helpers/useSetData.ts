import { State } from "../types/ReducerState";

export const DbFake = {
  postDBFake: async (user: State) => {
    try {
      const userDb = await localStorage.getItem("@user_db");
      console.log(userDb);
      if (userDb) {
        const data = [...JSON.parse(userDb), user];
        localStorage.setItem("@user_db", JSON.stringify(data));
        alert("Dados salvo con susseso");
        return { status: 200 };
      } else {
        const data: State[] = [];
        data.push(user);
        localStorage.setItem("@user_db", JSON.stringify(data));
        alert("Dados salvo con susseso");
        return { status: 200 };
      }
    } catch (error) {
      console.log(error);
      return { status: 501, error, message: "Erro no Banco de Dados" };
    }
  },
  getDBFake: async (email: string, pass: string) => {
    try {
      const userDb = await localStorage.getItem("@user_db");
      console.log(userDb);
      if (userDb) {
        const db = await JSON.parse(userDb);
        console.log(db);
        const user = db.filter((user: State) => user.email === email);

        if (user.length) {
          if (user[0].email === email && user[0].password === pass) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("@token", JSON.stringify({ email, token }));
            return { status: 200, user };
          }

          return { status: 200, message: "email ou senha invalida" };
        }
      }

      return { status: 200, message: "Nao a registro con state email" };
    } catch (error) {
      return { status: 501, error, message: "Erro no Banco de Dados" };
    }
  },
};
