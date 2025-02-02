import { PrismaClient } from "@prisma/client";

export class PrismaClientInit{
  //#region member variables

   private _prisma: PrismaClient=null;

   private static _instance: PrismaClientInit=null;

   //#endregion

   private constructor()
   {
    this._prisma=new PrismaClient();
   }

   public static instance(): PrismaClientInit {
      return this._instance;
   }

   public getPrismaInstance(): PrismaClient{
    return this._prisma;
   }
}