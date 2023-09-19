import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlaceModuleBase } from "./base/place.module.base";
import { PlaceService } from "./place.service";
import { PlaceController } from "./place.controller";
import { PlaceResolver } from "./place.resolver";

@Module({
  imports: [PlaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlaceController],
  providers: [PlaceService, PlaceResolver],
  exports: [PlaceService],
})
export class PlaceModule {}
