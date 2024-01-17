import knexConfig from "./src/config/database";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: knexConfig,
};
