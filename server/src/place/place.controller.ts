import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlaceService } from "./place.service";
import { PlaceControllerBase } from "./base/place.controller.base";

@swagger.ApiTags("places")
@common.Controller("places")
export class PlaceController extends PlaceControllerBase {
  constructor(
    protected readonly service: PlaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
