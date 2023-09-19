import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlaceServiceBase } from "./base/place.service.base";

@Injectable()
export class PlaceService extends PlaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
