import { Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";
import { Growdever } from "../models/growdever.model";

export class CreateGrowdeverController {
  create(request: Request, response: Response) {
    const { name, age, skills } = request.body;

    const growdever = new Growdever(name, age, skills);

    growdeversDB.push(growdever);

    return response.status(200).json({
      uid: growdever.uid,
      name: growdever.name,
      age: growdever.age,
      skills: growdever.skills,
      status: growdever.status,
    });
  }
}
