import crypto from "crypto";

export class Growdever {
  private _uid: string;

  get uid(): string {
    return this._uid;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _birth: Date;

  get birth(): Date {
    return this._birth;
  }

  private _skills: string[];

  get skills(): string[] {
    return [...this._skills];
  }

  // 'STUDYING', 'GRADUATED', 'CANCELED'
  private _status: string;

  get status(): string {
    return this._status;
  }

  private _cpf: string;

  get cpf(): string {
    return this._cpf;
  }

  constructor(name: string, birth: Date, cpf: string, skills?: string[]) {
    this._uid = crypto.randomUUID();
    this._name = name;
    this._birth = birth;
    this._cpf = cpf;
    this._skills = skills ?? [];
    this._status = "STUDYING";
  }

  addSkills(skills: string[]) {
    if (!skills || skills.length === 0) {
      throw new Error("Não é possível adicionar uma lista vazia em skills");
    }

    this._skills.push(...skills);
  }

  removeSkill(skill: string) {
    if (!skill) throw new Error("Skill inválida");

    const indexSkill = this._skills.findIndex((s) => s === skill);

    if (indexSkill < 0) return;

    this._skills.splice(indexSkill, 1);
  }

  updateInformation(name: string, birth: Date, status: string) {
    if (!name) throw new Error("Nome inválido");

    if (!birth || isNaN(birth.getDate()))
      throw new Error("Data de nascimento inválido");

    if (!["STUDYING", "GRADUATED", "CANCELED"].some((s) => s === status)) {
      throw new Error(
        "Status nao suportado, tente: 'STUDYING', 'GRADUATED' ou 'CANCELED'"
      );
    }

    this._name = name;
    this._birth = birth;
    this._status = status;
  }
}
