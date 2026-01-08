let hello = "hello world";

if (typeof hello === "string") {
  console.log(hello.toUpperCase());
} else if (typeof hello === "number") {
  let result = hello * 2;
  console.log(result);
} else if (typeof hello === "boolean") {
  console.log(hello ? "si" : "no");
} else {
  console.log("tipo non supportato");
}

type dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sex: "m" | "f";
  servizio: number[];
};

type developer = dipendente & {
  esperienze: "junior" | "mid" | "senior";
  linguaggi?: string[];
  certificazioni: string[];
};

type projectmanager = dipendente & {
  teamSize: number | null;
  budget?: number;
  stakeHolder: string[];
};
