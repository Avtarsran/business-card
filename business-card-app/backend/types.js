const zod = require("zod")

const cardSchema = zod.object({
    name: zod.string(),
    description: zod.string(),
    interests: zod.array(zod.string()),
    links: zod.array(zod.object({}))
})


module.exports = {cardSchema}