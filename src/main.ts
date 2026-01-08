let data: unknown;

if (typeof data === "string") {
  console.log(data.toUpperCase());
} else if (typeof data === "number") {
  console.log(data * 2);
} else if (typeof data === "boolean") {
  console.log(data ? "si" : "no");
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
