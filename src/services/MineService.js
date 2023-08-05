import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Mine } from "../models/Mine.js";
import { AutoUpgrade } from "../models/AutoUpgrade.js";
import { ClickUpgrade } from "../models/ClickUpgrade.js";
import { logger } from "../utils/Logger.js";

class MineService {
async mine() {
  try {
    logger.log("and you have myyyyyy axe!")
  } catch (error) {
    logger.error("Your pickaxe is dull. Try again")
  }
}

}
export const mineService = new MineService()