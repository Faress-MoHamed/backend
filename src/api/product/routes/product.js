'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreRouter("api::product.product", ({ strapi }) => ({
  async findOne(ctx) {
    // thanks to the custom route we have now a slug variable
    // instead of the default id
    const { slug } = ctx.params;
    const entity = await strapi.db.query("api::product.product").findOne({
      where: { id: slug },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
